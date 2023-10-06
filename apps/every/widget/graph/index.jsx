const [accountIds, setAccountIds] = useState(
  props.accountIds || [`${context.accountId || "every.near"}`]
);

const graphId = props.graphId ?? "follow";

const generatePaths = () => {
  return (
    props.paths ??
    accountIds.map((accountId) => {
      return `${accountId}/graph/${graphId}`;
    })
  );
};

const paths = generatePaths();

const data = Social.getr(paths, "final");

const [nodesState, setNodesState] = useState(null);
const [selectedAccountId, setSelectedAccountId] = useState(null);
const debug = false;

useEffect(() => {
  setNodesState(data);
}, [data]);

if (!nodesState) {
  return "Loading...";
}

const [message, setMessage] = useState(null);

useEffect(() => {
  if (!nodesState) {
    return;
  }

  const nodes = {};
  const edges = [];

  const createNodesAndEdges = (accountId, graphData) => {
    if (!(accountId in nodes)) {
      nodes[accountId] = {
        id: accountId,
        size: 10,
      };
    }
    Object.values(graphData).forEach((links) => {
      console.log(graphData);
      Object.keys(links).forEach((memberId) => {
        if (!(memberId in nodes)) {
          nodes[memberId] = {
            id: memberId,
            size: 10,
          };
        }
        edges.push({
          source: accountId,
          target: memberId,
          value: 1,
        });
      });
    });
  };

  if (accountIds.length === 1) {
    const accountId = accountIds[0];
    createNodesAndEdges(accountId, { [graphId]: nodesState });
  } else if (accountIds.length > 1) {
    Object.entries(nodesState).forEach(([accountId, graphData]) => {
      createNodesAndEdges(accountId, graphData.graph);
    });
  }
  console.log("nodes", nodes);
  console.log("edges", edges);

  setMessage({
    nodes: Object.values(nodes),
    edges,
  });
}, [nodesState, accountIds]);

useEffect(() => {
  if (selectedAccountId) {
    if (accountIds.includes(selectedAccountId)) {
      setAccountIds(accountIds.filter((it) => it !== selectedAccountId));
    } else {
      setAccountIds([...accountIds, selectedAccountId]);
    }
  }
  setSelectedAccountId(null);
}, [selectedAccountId]);

const code = `
<!DOCTYPE html>
<meta charset="utf-8">

<!-- Load d3.js -->
<script src="https://d3js.org/d3.v6.js"></script>

<svg id="graph"></svg>

<script>

const run = (data) => {
  const width = 1080;
  const height = 768;
  let dragIsOn = false;

  // The force simulation mutates links and nodes, so create a copy
  // so that re-evaluating this cell produces the same result.
  const links = data.edges.map(d => ({...d}));
  const nodes = data.nodes.map(d => ({...d}));

  // Create a simulation with several forces.
  const simulation = d3.forceSimulation(nodes)
      .force("link", d3.forceLink(links).id(d => d.id))
      .force("charge", d3.forceManyBody())
      .force("collide", d3.forceCollide())
      .force("center", d3.forceCenter(width / 2, height / 2))
      .on("tick", ticked);

  simulation.force("collide")
        .strength(.7)
        .radius(d => Math.sqrt(d.size) + 5)
        .iterations(1);

  // Create the SVG container.
  const svg = d3.select("#graph")
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [0, 0, width, height])
      .attr("style", "max-width: 100%; height: auto;");

  // Add a line for each link, and a circle for each node.
  const link = svg.append("g")
      .attr("stroke", "#999")
      .attr("stroke-opacity", 0.6)
    .selectAll()
    .data(links)
    .join("line")
      .attr("stroke-width", 1);

  const node = svg.append("g")
      .attr("stroke", "#fff")
      .attr("stroke-width", 1.5)
    .selectAll()
    .data(nodes)
    .join("g");

  node
    .append("image")
    .attr("xlink:href", (d) => \`https://i.near.social/magic/thumbnail/https://near.social/magic/img/account/\${d.id}\`) // Set the image URL based on your data
    .attr("x", (d) => -Math.sqrt(d.size) - 5)
    .attr("y", (d) => -Math.sqrt(d.size) - 5)
    .attr("clip-path", d => \`circle(\${Math.sqrt(d.size) + 5}px at \${Math.sqrt(d.size) + 5} \${Math.sqrt(d.size) + 5})\`)
    .attr("width", (d) => 2 * Math.sqrt(d.size) + 10);

  node
    .append("circle")
    .attr("r", d => Math.sqrt(d.size) + 5)
    .attr("fill", "none");

  node.append("title")
      .text(d => d.id);

  // Add a drag behavior.
  node.call(d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended));

  node.on("mouseover", handleMouseOver)
     .on("mouseout", handleMouseOut)
     .on("click", handleMouseClick);

  function handleMouseClick(e) {
    const d = e.target.__data__;
    window.top.postMessage(d.id, "*");
  }

  function handleMouseOver(d) {
    d = d.target.__data__;
    // Highlight connected edges
    link.attr("stroke-opacity", e => (e.source === d || e.target === d) ? 1 : 0.1);

    // Highlight connected nodes
    node.attr("opacity", function (n) {
        return n === d || isConnected(d, n) ? 1: 0.3;
    });
}

function handleMouseOut() {
  if (dragIsOn) {
    return;
  }
    // Reset edge and node styles
    link
      .attr("stroke-opacity", 0.6);
    node.attr("opacity", 1);
}

function isConnected(a, b) {
    // Check if two nodes are connected
    return links.some(function (link) {
        return (link.source === a && link.target === b) || (link.source === b && link.target === a);
    });
}

  // Set the position attributes of links and nodes each time the simulation ticks.
  function ticked() {
    link
        .attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);

    node.attr("transform", d => \`translate(\${d.x}, \${d.y})\`)
  }

  // Reheat the simulation when drag starts, and fix the subject position.
  function dragstarted(event) {
    dragIsOn = true;
    if (!event.active) simulation.alphaTarget(0.3).restart();
    event.subject.fx = event.subject.x;
    event.subject.fy = event.subject.y;

  }

  // Update the subject (dragged node) position during drag.
  function dragged(event) {
    event.subject.fx = event.x;
    event.subject.fy = event.y;
  }

  // Restore the target alpha so the simulation cools after dragging ends.
  // Unfix the subject position now that it’s no longer being dragged.
  function dragended(event) {
    if (!event.active) simulation.alphaTarget(0);
    event.subject.fx = null;
    event.subject.fy = null;
    dragIsOn = false;
    handleMouseOut();
  }

  // When this cell is re-run, stop the previous simulation. (This doesn’t
  // really matter since the target alpha is zero and the simulation will
  // stop naturally, but it’s a good practice.)
  // invalidation.then(() => simulation.stop());

  return simulation;
};

let simulation = null;

window.addEventListener("message", (event) => {
  if (simulation) {
    simulation.stop();
    d3.select("#graph").selectAll("*").remove();
  }
  if (event.data) {
    simulation = run(event.data);
  }
});

</script>
`;

const [onMessage] = useState(() => {
  return (data) => {
    if (data) {
      setSelectedAccountId(data);
    }
  };
});

return (
  <div>
    <div>
      <iframe
        className="w-100 h-100"
        style={{ minHeight: "888px" }}
        srcDoc={code}
        message={message}
        onMessage={onMessage}
      />
    </div>
  </div>
);
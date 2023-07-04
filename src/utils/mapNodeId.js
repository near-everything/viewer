let id = 0;

export const mapNodeId = (nodes) =>
  nodes?.map((node) => {
    id++;
    return { ...node, id: id.toString() };
  });

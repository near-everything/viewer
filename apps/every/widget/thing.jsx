/**
 * Takes the path and renders it
 */
const path = props.path || context.accountId || "every.near/thing/.";
const blockHeight = props.blockHeight || "final";
// Or should this be combined into a single "src"?

// const everythingSDK = VM.require("efiz.near/widget/Module.Everything");

// module could come from gateway... it holds the configuration for where you want to save. It could come from settings, the app itself
// it could possibly handle any props that come to it, it'll figure out how to resolve
// certain gateways could even act as the keys

// could everyone create their own app? Entirely?
// each account acts independently.
// It's the contract you call... It can recursively get on a speicfic contract

// Defaults to social contract or every.near

const parts = path.split("/");

let fn = () => console.log("hello world");

// This is essentially the everything SDK
// It either comes from settings or the app itself
// or the thing, or the type

const get = (path, blockHeight) => {
  if (parts.length === 0) {
    console.log(
      `Needs implementation: path: ${path}    blockHeight: ${blockHeight}`
    );
    return () => () => {};
  } else {
    const standard = parts[1];
    if (standard === "thing") {
      return () => Social.getr(path, blockHeight);
    } else {
      console.log(
        `Needs implementation: path: ${path}    blockHeight: ${blockHeight}`
      );
      return () => () => {};
    }
  }
};

fn = get(path, blockHeight);
const thing = fn();

if (!thing) {
  // if nothing
  return <p>404 not found</p>;
}

const data = JSON.parse(thing[""]);

// const View = VM.require(`props.view.src@props.view.blockHeight`);

// // Dependency loader, goes through loads all of them and exposes them

// return <Everything />;  // which has access to all of it.

// We use the metadata here
// Then we pass the rest to some plugins if we want

// And the rest goes to a Template

// const Container = styled.div`
//   height: 100%;
//   width: 100%;

//   display: flex;
//   flex-direction: column;
//   align-items: stretch;
//   position: relative;
// `;

const plugins = {
  EDIT: {
    state: {
      active: {
        icon: "bi bi-arrow-counterclockwise",
        label: "Cancel Edit",
      },
      inactive: {
        icon: "bi bi-pencil",
        label: "Edit",
      },
    },
    src: "efiz.near/widget/every.thing.edit",
    module: () => {
      const { Editor } = VM.require("devs.near/widget/editor.index");
      return <Editor /> || <></>;
    }, // () => <Widget src="every.near/widget/view.editor" props={{ path, blockHeight }} />, // I may want to pass a get and set instead
  },
};

console.log("outside", plugins);

const Container = (p) => (
  <Widget src={"every.near/widget/thing.container"} props={{ ...p, plugins }} />
);

return (
  <Container>
    <Widget src="every.near/widget/thing.page" props={{ ...data }} />
  </Container>
);

// const path = props.path; // every piece of data on social contract has a path
// const blockHeight = props.blockHeight || "final"; // and a blockHeight (~version)
// const options = props.options;

// // split the path
// const parts = path.split("/");
// const creatorId = parts[0];

// let type;
// if (parts.length === 1) {
//   // every root of a path is an account
//   type = "account";
// } else {
//   // otherwise the "standard" is the type (widget, post, type, thing...)
//   // for thing, we'll extract the actual "Type" later
//   type = parts[1];
// }

// State.init({
//   view: "THING",
// });

// const Container = styled.div`
//   border: 1px solid #ccc;
//   height: fit-content;
// `;

// const Header = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: flex-end;
//   border-bottom: 1px solid #ccc;
// `;

// const IconBox = styled.div`
//   font-family: "Times New Roman";
//   font-size: 2em;
//   line-height: 1.25;
//   font-weight: 400;
//   cursor: pointer;
// `;

// const Content = styled.div`
//   padding: 1px;
//   min-height: 300px;
// `;

// const Button = styled.button`
//   text-transform: lowercase !important;
// `;

// const ButtonRow = styled.div`
//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap;
//   justify-content: flex-end;
//   gap: 4px;
// `;

// // PLUGINS
// // This should move to settings

// function Thing() {
//   // Renders the path according to type
//   switch (type) {
//     case "thing": {
//       // get the thing data
//       const thing = JSON.parse(Social.get(path, blockHeight) || "null");
//       type = thing.type || null;
//       // get the type data
//       const typeObj = JSON.parse(Social.get(type, blockHeight) || "null");
//       if (typeObj === null) {
//         console.log(
//           `edge case: thing ${path} had an invalid type: ${thingType}`
//         );
//       }
//       // determine the widget to render this thing (is there a default view?)
//       const widgetSrc =
//         options?.templateOverride ||
//         thing.template?.src ||
//         typeObj?.widgets?.view;
//       // Template
//       if (!widgetSrc) {
//         return (
//           <Widget
//             src="efiz.near/widget/MonacoEditor"
//             props={{
//               code: JSON.stringify(thing),
//               path,
//               language: "javascript",
//             }}
//           />
//         );
//       }
//       return (
//         <Widget
//           src={widgetSrc}
//           props={{ data: thing.data, path, blockHeight }}
//         />
//       );
//     }
//     case "post": {
//       return (
//         <Widget
//           src="every.near/widget/every.post.view"
//           props={{
//             path,
//             blockHeight: a.blockHeight,
//           }}
//         />
//       );
//     }
//     case "widget": {
//       return <Widget src={path} props={props} />;
//     }
//     case "account": {
//       return <Widget src="efiz.near/widget/Tree" props={{ rootPath: path }} />;
//     }
//     case "settings": {
//       // Standardize path to {accountId}/settings/**
//       parts.splice(2);
//       parts.push("**");
//       path = parts.join("/");
//       return (
//         <Widget
//           src="efiz.near/widget/Every.Setting"
//           props={{ path, blockHeight }}
//         />
//       );
//     }
//     case "type": {
//       return (
//         <Widget
//           src="every.near/widget/every.type.create"
//           props={{ typeSrc: path }}
//         />
//       );
//     }
//   }
//   // DEFAULT:
//   return <p>The type: {type} is not yet supported.</p>;
// }

// function Plugin() {
//   const plugin = plugins[state.view];
//   return (
//     <Container>
//       <Header style={{ justifyContent: "flex-start" }}>
//         <Button
//           onClick={() => {
//             State.update({ view: "THING" });
//           }}
//         >
//           back
//         </Button>
//       </Header>
//       <Widget src={plugin.src} props={{ path, blockHeight }} />
//     </Container>
//   );
// }

// return (
//   <Container id={path}>
//     <Header>
//       <ButtonRow>
//         <Modifier />
//       </ButtonRow>
//     </Header>
//     <Content>{state.view === "THING" ? <Thing /> : <Plugin />}</Content>
//   </Container>
// );

// function

// const Container = () => <Widget src={container} props={{ plugins }}/>

// Container must be a module

// const { Container } = VM.require(`${container.src}@${container.blockHeight}`) || ((children) => <>{children}</>);

// return <Widget

// const resolveComponents = VM.require(componentResolver);

// const { Container, Plugin } = resolveComponents(dependencies);

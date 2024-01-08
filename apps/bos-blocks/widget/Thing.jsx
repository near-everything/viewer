// also known as an item
const Thing = (props) => {
  const { path, blockHeight, type, adapter, template } = props;

  const { get } = adapter
    ? VM.require(adapter)
    : {
        get: (ref) => {
          const { path, blockHeight } = ref;
          if (!path) console.log("path is required");
          if (!blockHeight) blockHeight = "final";
          return Social.get(path, blockHeight);
        },
      };


  switch (type) {
    case "widget": {
      return <Widget src={path} props={props} />;
    }
    case "social": {
      break;
    }
    case "thing": {
      if (get) {
        const thing = JSON.parse(get({ path, blockHeight }) || "null");
        if (thing.adapter) {
          return (
            <Widget
              src="hyperfiles.near/widget/hyperfile.view"
              props={thing}
            />
          );
        }
        return <textarea value={JSON.stringify(thing, null, 2)} />;
      } else {
        return <p>{path}</p>
        console.log("nothing");
      }
      break;
    }
    default: {
      return <p>The type: {type} is not yet supported.</p>;
    }
  }
};
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
//         typeObj = {
//           widgets: {
//             view: "every.near/widget/app", // this is temp cuz I know it's the app type
//           },
//         };
//       }
//       const { get } = VM.require(thing.adapter || (() => {}));

//       if (get) {
//         const passProps = get(thing.reference);
//         console.log("passProps", passProps);
//         return <Widget src={widgetSrc} props={passProps} />;
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
// };

return { Thing };

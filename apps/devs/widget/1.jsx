// const { Thing } = VM.require("efiz.near/widget/Thing") || (() => {});

/*__@import:everything/sdk__*/


// it could also be a wrapper module
// const [name, setName] = useState("");
// const [age, setAge] = useState("");

// const Human = () => Thing({ // This is more like a Template
//   type: JSON.stringify({ name: "string", age: "number" }),
//   Template: (p) => <div>{JSON.stringify(p)}</div>,
// });

// A plugin has methods you can call

// return <Human name="Bob" age={30} />;

// useEffect(() => {
//   // Create an instance of the Thing class

//   thing.set("age", 30); // Set a key-value pair (same as create)

//   // Get values and update component state
//   setName(thing.get("name"));
//   setAge(thing.get("age"));
// }, []); // Empty dependency array means this effect runs once, like componentDidMount

// return (
//   <div>
//     <h1>Name: {name}</h1>
//     <h1>Age: {age}</h1>
//     {/* Your component's content goes here */}
//   </div>
// );

// function Thing({ type }) {
//   function create(key, value) {
//     // or it could be front loaded
//   }

//   function set(key, value) {
//     // Validate the type
//     const typeObj = JSON.parse(type);
//     const typeOfValue = typeof value;
//     if (typeObj[key] !== typeOfValue) {
//       console.log(`Expected ${typeObj[key]} but got ${typeOfValue}`);
//       // can't throw error, but could return or display something on screen
//       // handle error?
//     }

//     Social.set({
//       thing: {
//         [key]: {
//           "": JSON.stringify(value),
//         },
//       },
//       // and index?
//     });
//   }

//   function get(key) {
//     return JSON.parse(Social.get(key, "final") || "null");
//   }

//   function view() {
//     // check Type for default view, or use a Template
//   }
// }

// return { Thing };

// const Event = Thing({
//   type: JSON.stringify({ name: "string", age: "number" }),
// });


function Thing(props) {
  const [data, setData] = useState({});

  function create(key, value) {
    setData({ ...data, [key]: value });
  }

  function get(key) {
    return data[key];
  }

  function set(key, value) {
    setData({ ...data, [key]: value });
  }

  return {
    create,
    get,
    set,
  };
}

return { Thing };



// Or I want the Thing to take in a Type, which can be a JSON or a module. It's an object.
// And from that module, I understand how to use it.

// You can get


// I want to create a Thing
// And just start commenting on it.


// Hey everyone, I've created something. Idk what it is yet, but I'm going to start commenting on it. Posting to it.
// And together, we can define it.

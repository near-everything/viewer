# everything browser

## Setup & Development

Initialize repo:
```
yarn
```

Start development version:
```
yarn dev
```

## Using Bos-Loader

Set up a workspace like here: [bos-workspace](https://github.com/sekaiking/bos-workspace)

Set the flag at localhost:3000/flags


## Breakdown

### App.js

- Configure custom elements in the VM
- Add a route to the gateway

### ViewPage.js

- Access query params and render widget


## Contributing

### Extending the gateway with a custom component:

- [ ] Install library
- [ ] Create component in /components/common
- [ ] Add component as custom element in App.js

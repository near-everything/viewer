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




## Custom Elements

### Camera : react-webcam

[react-webcam](https://github.com/mozmorris/react-webcam)
components/custom/Camera
[https://everything.dev/efiz.near/widget/Camera](efiz.near/widget/Camera)


### MonacoEditor : monaco-editor/react

[monaco-editor/react]()
components/custom/MonacoEditor
[https://everything.dev/efiz.near/widget/MonacoEditor](efiz.near/widget/MonacoEditor)

TODO: Can switch to https://github.com/react-monaco-editor/react-monaco-editor


### KeypomScanner : keypom

[keypom]()
components/custom/KeypomScanner
[https://everything.dev/scanner](efiz.near/widget/KeypomScanner)



## Contributing

### Extending the gateway with a custom component:

- [ ] Install library
- [ ] Create component in /components/common
- [ ] Add component as custom element in App.js




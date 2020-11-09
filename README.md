# game-demo-ws-echo

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Help

```shell script
npx pbjs -t json-module -w commonjs -o src/proto/proto.js src/proto/*.proto
```

```javascript
// https://github.com/fengxianqi/front_end-demos
codec.create = function (protoName, obj) {
  const pbConstruct = protoRoot.lookup(protoName)
  return pbConstruct.encode(obj).finish()
}
```

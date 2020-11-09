// import protobuf from 'protobufjs'
//
// const loadProtobuf = (path) => {
//   let c = {}
//   protobuf.load(path).then(root => {
//     c.C0101EchoReqMessage = root.lookupType("messages.C0101_EchoReqMessage");
//     let msg = c.C0101EchoReqMessage.create({ content: 'aaaa' })
//     let buf = c.C0101EchoReqMessage.encode(msg).finish()
//     console.log(msg, buf)
//     c.C0101EchoRespMessage = root.lookupType("messages.C0101_EchoRespMessage");
//   })
//   return c
// }
//
// const codec = loadProtobuf('../proto/echo.proto')
//
// export default codec
import protoRoot from './proto'
import protobuf from 'protobufjs'
let ByteBuffer = require("bytebuffer")

const Header = protoRoot.lookup('messages.Header')
let C0101EchoReqMessage = protoRoot.lookup("messages.C0101_EchoReqMessage")
let C0101EchoRespMessage = protoRoot.lookup("messages.C0101_EchoRespMessage")

const encode = obj => {
  let req = C0101EchoReqMessage.encode(obj).finish()
  let data = Header.encode({ id: 101, data: req, seq: 1, msgType: 1 }).finish()
  let buf = new ByteBuffer().writeInt(data.length + 4).append(data).flip()
  return buf.toArrayBuffer()
}

const decode = data => {
  let buf = protobuf.util.newBuffer(data)
  let header = Header.decode(buf)
  return C0101EchoRespMessage.decode(header.data)
}

export default {
  encode,
  decode
}

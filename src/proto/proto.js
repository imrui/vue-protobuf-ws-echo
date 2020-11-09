/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/light");

var $root = ($protobuf.roots["default"] || ($protobuf.roots["default"] = new $protobuf.Root()))
.addJSON({
  messages: {
    options: {
      java_package: "com.xxicon.game.message"
    },
    nested: {
      Header: {
        fields: {
          id: {
            type: "sint32",
            id: 1
          },
          data: {
            type: "bytes",
            id: 2
          },
          seq: {
            type: "int32",
            id: 3
          },
          msgType: {
            type: "int32",
            id: 4
          }
        }
      },
      C0101_EchoReqMessage: {
        fields: {
          content: {
            type: "string",
            id: 1
          }
        }
      },
      C0101_EchoRespMessage: {
        fields: {
          session: {
            type: "string",
            id: 1
          },
          content: {
            type: "string",
            id: 2
          }
        }
      }
    }
  }
});

module.exports = $root;

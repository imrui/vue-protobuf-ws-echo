<template>
  <section>
    <h3>{{ msg }}</h3>
    <el-button type="success" :disabled="wsConnected" @click="handleConnect">Connect</el-button>
    <el-button type="danger" :disabled="!wsConnected" @click="handleDisconnect">Disconnect</el-button>
    <div class="content-box">
      <el-input style="width: 450px" type="textarea" :autosize="{ minRows: 2, maxRows: 6}" placeholder="Please input the content" v-model="textarea"></el-input>
    </div>
    <el-button type="primary" :disabled="!wsConnected" @click="handleEcho">Echo Message</el-button>
    <div class="log-box">
      <el-alert v-if="alertTitle" :title="alertTitle" type="error" show-icon close-text="知道了" @close="handleAlertClose"></el-alert>
      <div class="log-title">
        <h3>Logging</h3>
        <el-button v-if="logClearShow" type="primary" plain size="small" @click="handleClearLogging">Clear</el-button>
      </div>
      <div class="logging">
        <p v-for="(msg, i) in logMessages" :key="i">{{ msg }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import codec from '../proto/codec'
export default {
  name: 'WsEcho',
  props: {
    msg: {
      type: String,
      default: 'Welcome To WebSocket Echo Message'
    }
  },
  data() {
    return {
      textarea: '',
      wsUrl: 'ws://localhost:8088/ws',
      ws: null,
      wsConnected: false,
      alertTitle: '',
      logMessages: []
    }
  },
  mounted() {
    // this.createWebSocket()
  },
  computed: {
    logClearShow () {
      return this.logMessages && this.logMessages.length > 0
    }
  },
  methods: {
    createWebSocket () {
      let that = this
      let ws = new WebSocket(this.wsUrl)
      ws.onopen = function () {
        that.wsConnected = true
        that.handleClearLogging()
        that.printLog('Info: Connection Established.')
      }
      ws.onmessage = function (event) {
        event.data.arrayBuffer().then(buf => {
          that.handleRecv(buf)
        })
      }
      ws.onclose = function () {
        that.wsConnected = false
        that.printLog('Info: Closing Connection.')
      }
      this.ws = ws
    },
    handleRecv (buf) {
      let msg = codec.decode(buf)
      this.printLog('[recv]: ' + JSON.stringify(msg))
    },
    wsSend () {
      let obj = { content: this.textarea };
      let buffer = codec.encode(obj)
      this.ws.send(buffer)
      this.printLog('[send]: ' + JSON.stringify(obj))
    },
    handleConnect() {
      this.createWebSocket()
    },
    handleDisconnect() {
      if (this.ws != null) {
        this.ws.close()
      }
      this.ws = null
      this.wsConnected = false
    },
    handleEcho() {
      if (!this.ws) {
        this.wsConnected = false
        this.alertTitle = 'connection not established, please connect.'
        return
      }
      this.wsSend()
    },
    handleAlertClose() {
      this.alertTitle = ''
    },
    handleClearLogging() {
      this.logMessages = []
    },
    printLog(msg) {
      let ts = this.$moment().format('YYYY-MM-DD HH:mm:ss.SSS')
      this.logMessages.push(`[${ts}] ${msg}`)
    }
  }
}
</script>

<style scoped>
  .content-box {
    margin: 20px 0;
  }
  .log-box {
    margin-top: 10px;
    text-align: left;
  }
  .log-title {
    display: flex;
    align-items: center;
  }
  .log-title h3 {
    margin-right: 10px;
  }
</style>

<template>
  <div class="user-profile">
    <el-tabs tab-position="left">
      <el-tab-pane label="钱包">
        <el-row style="padding-left: 50px;" :gutter="2">
          <el-col :span="12">
            <el-card :body-style="{padding: '20px'}">
              <h3 class="balance-header">钱包</h3>
              <div class="balance-content">
                <img src="https://maggie-public.oss-cn-beijing.aliyuncs.com/web/bann.png" class="balance-content-logo" alt="">
                <div class="balance-content-text">
                  <div class="balance-number num">{{user.money}}</div>
                  <div class="balance-freeze num">(冻结)0</div>
                </div>
              </div>
              <div class="balance-options">
                <el-button type="primary" round @click="showAddress()">充值</el-button>
                <el-button type="primary" round @click="showWithdraw()">提币</el-button>
              </div>
            </el-card>
          </el-col>
          <el-col :span="11" style="margin-left: 20px">
            <el-card :body-style="{padding: '20px'}">
              <h3>历史记录</h3>
              <div class="history-content">
                <el-table :data="history">
                  <el-table-column label="日期" prop="date"></el-table-column>
                  <el-table-column label="数量" prop="amount"></el-table-column>
                  <el-table-column label="状态" prop="status"></el-table-column>
                </el-table>
              </div>
              <div class="history-options">
                <el-button type="primary" @click="getMoreHistory()">加载更多</el-button>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="设置">设置</el-tab-pane>
      <el-tab-pane label="个人中心">个人中心</el-tab-pane>
    </el-tabs>
    <div class="shade" v-show="isShowAddress">
      <div class="address-panel">
        <el-button type="danger" class="close-address" circle @click="closeAddress()" icon="el-icon-circle-close"></el-button>
        <h3>ips充值地址</h3>
        <div id="user-address"></div>
        <span>{{user.money_address}}</span>
        <el-button type="primary" round class="copy-address" @click="copyAddress()">复制</el-button>
      </div>
    </div>
    <div class="shade" v-show="isShowWithdraw">
      <div class="withdraw-panel">
        <el-button type="danger" class="close-address" circle @click="closeWithdraw()" icon="el-icon-circle-close"></el-button>
        <h3>ips提币</h3>
        <el-form ref="form" :model="form" label-width="80px" class="withdraw-form">
          <el-form-item label="充值地址">
            <el-input v-model="form.address"></el-input>
          </el-form-item>
          <el-form-item label="充值金额">
            <el-input v-model="form.number"></el-input>
          </el-form-item>
        </el-form>
        <el-button type="primary" @click="withdraw">提币</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import QRCode from 'qrcodejs2'
import axios from 'axios'

export default {
  data () {
    return {
      history: [],
      user: {},
      isShowAddress: false,
      isShowWithdraw: false,
      form: {
        address: '',
        number: 0
      }
    }
  },

  methods: {
    drawQRCode (content) {
      /* eslint-disable */
      const qrcode = new QRCode('user-address', {
        text: content,
        width: 256,
        height: 256,
        colorDark: '#000000',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.H
      })
    },

    getData (username) {
      axios.get('/api/user/profile', {
        params: {
          username
        }
      }).then(resp => {
          this.user = resp.data.data
          this.drawQRCode(this.user.money_address)
        })
    },

    getHistory (username) {
      axios.post('/api/user/little', {
        username
      }).then(resp => {
        if (resp.data.success) {
          this.history = this.formatHistory(resp.data.data)
        } else {
          console.log('数据出错')
        }
      })
    },

    getMoreHistory () {
      let username = this.user.username
      axios.post('/api/user/more', {
        username
      }).then(resp => {
        if (resp.data.success) {
          this.history = this.formatHistory(resp.data.data)
        } else {
          console.log('数据出错')
        }
      })
    },

    formatHistory (data) {
      const arr = []
      data.forEach((value, index) => {
        let item = {}
        let { date, type, num } = value
        date = new Date(date)
        console.log(date)
        let f_date = `${date.getYear()}-${date.getMonth()+1}-${date.getDate()}`
        num = type === 1 ? `+${num}` : `-${num}`
        item = {
          date: f_date,
          amount: num,
          status: 'success'
        }
        arr.push(item)
      })
      return arr;
    },

    withdraw () {
      const form = this.form
      if (!form.address || form.address.length !== 32) {
        this.$notify.error({
          title: '错误',
          message: '提币地址错误'
        })
      } else if (!form.number) {
        this.$notify.error({
          title: '错误',
          message: '提币数量填写错误'
        })
      } else {
        axios.post('/api/user/withdraw', {
          username: this.user.username,
          money_address: form.address,
          money: form.number
        }).then(resp => {
          const data = resp.data;
          if (data.success) {
            this.$notify({
              type: 'success',
              message: '提币成功，请到提币账户查收',
              title: '成功'
            })
          } else {
            this.$notify.error({
              title: '错误',
              message: data.message
            })
          }
          this.form.address = ''
          this.form.number = 0
          this.isShowWithdraw = false
        })
      }
    },

    showAddress () {
      this.isShowAddress = true
    },

    showWithdraw () {
      this.isShowWithdraw = true
    },

    copyAddress () {
      console.log(this.user.money_address)
    },

    closeAddress () {
      this.isShowAddress = false
    },

    closeWithdraw () {
      this.isShowWithdraw = false
    }
  },

  mounted () {
    const username = localStorage.getItem('username')
    this.getData(username)
    this.getHistory(username)
  }
}
</script>

<style scoped>
.user-profile {
  padding: 50px;
}

.balance-content {
  height: 98px;
  background: url("https://ofe0v4nhm.qnssl.com/candy/images/candy-box-bg.png") no-repeat;
  background-size: cover;
  margin: 20px auto;
}

.el-tabs {
  background: #efefef;
}

.el-tabs .el-tabs__header {
  background: #fff;
}

.el-tabs .el-tabs__content {
  padding-left: 50px;
}

.balance-content-text {
  float: right;
  width: 100px;
  text-align: center;
  margin-top: 20px;
}

.num {
  font-size: 20px;
  color: #fff;
}

.balance-options {
  text-align: center;
}

.history-options {
  text-align: center;
  margin-top: 20px;
}

.balance-content-logo {
  width: 80px;
  margin-top: 10px;
  margin-left: 50px;
}

.shade {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 2;
  background: rgba(0, 0, 0, 0.2);
  top: 0;
  left: 0;
}

.address-panel {
  width: 500px;
  height: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  text-align: center;
}

#user-address {
  width: 256px;
  margin: 10px auto;
}

.copy-address {
  display: block;
  margin: 10px auto;
}

.close-address {
  position: absolute;
  top: -20px;
  right: -20px;
}

.withdraw-panel {
  width: 500px;
  height: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  text-align: center;
}

.withdraw-form {
  width: 350px;
  margin: 20px auto;
}
</style>

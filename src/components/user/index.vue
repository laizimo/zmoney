<template>
  <div class="index">
    <h1>版权推荐</h1>
    <el-row :gutter="20" class="ip-content">
      <el-col :span="4" v-for="ip in ips" :key="ip">
        <el-card :body-style="{padding: '0px', width: '200px'}">
          <img :src="ip.image" class="ip-image">
          <div style="padding: 14px">
            <span>{{ip.name}}</span>
            <div class="ip-content clearfix">
              <span class="ip-price">价格：{{ip.price}}</span>
              <el-button class="ip-options" type="primary">交易</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ips: [
        {
          image: 'http://element.eleme.io/static/hamburger.50e4091.png',
          price: 100,
          name: 'ip名'
        },
        {
          image: 'http://element.eleme.io/static/hamburger.50e4091.png',
          price: 100,
          name: 'ip名'
        },
        {
          image: 'http://element.eleme.io/static/hamburger.50e4091.png',
          price: 100,
          name: 'ip名'
        },
        {
          image: 'http://element.eleme.io/static/hamburger.50e4091.png',
          price: 100,
          name: 'ip名'
        },
        {
          image: 'http://element.eleme.io/static/hamburger.50e4091.png',
          price: 100,
          name: 'ip名'
        },
        {
          image: 'http://element.eleme.io/static/hamburger.50e4091.png',
          price: 100,
          name: 'ip名'
        },
        {
          image: 'http://element.eleme.io/static/hamburger.50e4091.png',
          price: 100,
          name: 'ip名'
        },
        {
          image: 'http://element.eleme.io/static/hamburger.50e4091.png',
          price: 100,
          name: 'ip名'
        },
        {
          image: 'http://element.eleme.io/static/hamburger.50e4091.png',
          price: 100,
          name: 'ip名'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>

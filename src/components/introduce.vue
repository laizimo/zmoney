<template>
  <div class="introduce">
    <div class="introduce-banner1">
      <div class="introduce-banner1-head">
        <img src="../../static/image/logo.png" alt="logo" class="introduce-banner1-img">
        <span class="introduce-banner1-title">ZMOENY</span>
      </div>
      <div class="introduce-banner1-desc">
        一个知识产权自由化交易平台
      </div>
      <div class="introduce-banner1-desc long">
        保护知识创造者的利益，利于知识的互联互通
      </div>
    </div>
    <div class="introduce-banner4"></div>
    <div class="introduce-banner2">
      <div class="introduce-banner2-title">产品特点</div>
      <div class="introduce-banner2-desc">自带百万用户和多维度数据的商用公有链</div>
      <ul class="introduce-banner2-content">
        <li class="introduce-banner2-item">
          <img src="../../static/image/pic1.png" alt="" class="introduce-banner2-item-img">
          <p class="introduce-banner2-item-title">通用数字身份Z-ID</p>
          <p class="introduce-banner2-item-desc">
            在用户注册平台时，会生成唯一通用的数字身份Z-ID，Z-ID与自然人个体一一对应，是本生态中的身份标识
          </p>
        </li>
        <li class="introduce-banner2-item">
          <img src="../../static/image/pic2.png" alt="" class="introduce-banner2-item-img">
          <p class="introduce-banner2-item-title">丰富的流量资源</p>
          <p class="introduce-banner2-item-desc">
            目前已通过实名注册的用户数已突破百万，在GXChain上开发应用，可以让用户使用G-ID一键注册应用，免去复杂的注册流程，降低获客成本
          </p>
        </li>
        <li class="introduce-banner2-item">
          <img src="../../static/image/pic3.png" alt="" class="introduce-banner2-item-img">
          <p class="introduce-banner2-item-title">海量用户数据</p>
          <p class="introduce-banner2-item-desc">
            在公信宝生态中有大量的用户个人数据，经用户授权同意后，这些数据可以进入生态流通，使数据的潜在价值全面释放。
          </p>
        </li>
      </ul>
    </div>
    <div class="introduce-banner3">
      <h1 class="introduce-banner3-title">点对点的知识版权交易平台</h1>
      <div class="introduce-banner3-hurt">
        <el-row>
          <el-col :span="4">
            <div class="banner3-hurt-title">行业<br>痛点</div>
          </el-col>
          <el-col :span="10" class="banner3-hurt-row">
            <div class="banner3-hurt-one">
              <div class="banner3-hurt-c-title" style="padding: 20px 0 0 0;">我是IP的买方</div>
              <p class="banner3-hurt-c-desc">
                我如何保证买来的IP不是盗版的？<br>我如何知道IP的火热程度？
              </p>
            </div>
          </el-col>
          <el-col :span="10" class="banner3-hurt-row">
            <div class="banner3-hurt-two">
              <div class="banner3-hurt-c-title">我是IP的卖方</div>
              <p class="banner3-hurt-c-desc">
                我售出的IP会涉及到个人隐私吗？<br>我如何保证IP不被黑产盗用
              </p>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="introduce-banner3-feature">
        <div class="introduce-banner3-feature-title">产品特点</div>
        <ul class="introduce-banner3-feature-content">
          <li class="introduce-banner3-feature-item">
            <img src="../../static/image/tedian1.png" alt="" class="introduce-banner3-feature-img">
            <p class="introduce-banner3-feature-item-title">不缓存IP</p>
          </li>
          <li class="introduce-banner3-feature-item">
            <img src="../../static/image/tedian2.png" alt="" class="introduce-banner3-feature-img">
            <p class="introduce-banner3-feature-item-title">保护个人隐私</p>
          </li>
          <li class="introduce-banner3-feature-item">
            <img src="../../static/image/tedian3.png" alt="" class="introduce-banner3-feature-img">
            <p class="introduce-banner3-feature-item-title">知识产权保护</p>
          </li>
          <li class="introduce-banner3-feature-item">
            <img src="../../static/image/tedian4.png" alt="" class="introduce-banner3-feature-img">
            <p class="introduce-banner3-feature-item-title">权威数据接入</p>
          </li>
          <li class="introduce-banner3-feature-item">
            <img src="../../static/image/tedian5.png" alt="" class="introduce-banner3-feature-img">
            <p class="introduce-banner3-feature-item-title">遏制IP盗版</p>
          </li>
        </ul>
        <el-button type="primary" class="introduce-banner3-more">了解更多</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style scoped>
.introduce {
  width: 100%;
  position: relative;
  margin-top: 60px;
  background: #0f1836;
  overflow: hidden;
}

.introduce-banner1 {
  width: 100%;
  height: 619px;
  background: url('../../static/image/introduce_bg.png') no-repeat center top;
  padding-top: 1px;
}

.introduce-banner1-head {
  position: relative;
  margin: 150px auto;
  width: 300px;
}

.introduce-banner1-img {
  width: 100px;
  height: 100px;
}

.introduce-banner1-title {
  font-size: 35px;
  color: #6699ff;
  display: inline-block;
  height: 100px;
  line-height: 100px;
  vertical-align: top;
  margin-left: 20px;
}

.introduce-banner1-desc {
  width: 500px;
  margin: 50px auto;
  font-size: 30px;
  color: #6699ff;
  text-align: center;
}

.long {
  width: 700px;
}

.introduce-banner2 {
  width: 100%;
  height: 700px;
  background: url('../../static/image/introduce_banner2_bg.png') no-repeat center top;
}

.introduce-banner2-title {
  padding-top: 90px;
  margin: 0;
  color: #fff;
  font-size: 48px;
  text-align: center;
}

.introduce-banner2-desc {
  padding-top: 30px;
  font-size: 36px;
  color: #fff;
  text-align: center;
}

.introduce-banner2-content {
  padding: 50px 15px;
  box-sizing: border-box;
  display: flex;
}

.introduce-banner2-item {
  width: 430px;
  text-align: center;
  color: #fff;
}

.introduce-banner2-item-title {
  font-size: 24px;
  margin: 30px 0;
}

.introduce-banner2-item-desc {
  width: 300px;
  margin: 0 auto;
  font-size: 18px;
}

.introduce-banner3 {
  width: 100%;
  min-height: 1350px;
  padding-top: 100px;
  background: url('../../static/image/enterprise_bg.png') no-repeat center top;
  box-sizing: border-box;
}

.introduce-banner3-title {
  color: #fff;
  margin: 0 auto;
  display: block;
  width: 600px;
  text-align: center;
  font-size: 50px;
}

.introduce-banner3-hurt {
  width: 100%;
  height: 384px;
  margin-top: 145px;
}

.banner3-hurt-title {
  color: #fff;
  font-size: 48px;
  text-align: right;
  padding-top: 20px;
}

.banner3-hurt-row {
  padding: 0 20px;
}

.banner3-hurt-one {
  padding: 100px 0 0 72px;
  background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAEYCAIAAAArpAXWAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Njg5QzdBNjgzMzY2MTFFOEJGQjU4Qjk4QjkzNDg4OEUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Njg5QzdBNjkzMzY2MTFFOEJGQjU4Qjk4QjkzNDg4OEUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2ODlDN0E2NjMzNjYxMUU4QkZCNThCOThCOTM0ODg4RSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2ODlDN0E2NzMzNjYxMUU4QkZCNThCOThCOTM0ODg4RSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PlrqB6kAAARYSURBVHja7NgxDYAwFEXRQnCCASYUoQEzRQ4TClhImGFDASoa0s85CtrX5abNMOcU0dhP1Z35evYE/M95r0aAYFoTAAAILAAAgQUAILAAABBYAAACCwBAYAEAILAAAAQWAED9uqgX247F6wIAn/CDBQAgsAAABBYAgMACAEBgAQAILAAAgQUAgMACABBYAAACCwAAgQUAILAAAAQWAIDAAgBAYAEACCwAAIEFAIDAAgAQWAAAAgsAAIEFACCwAAAEFgAAAgsAQGABAAgsAACBBQCAwAIAEFgAAAILAACBBQAgsAAABBYAAAILAEBgAQAILAAABBYAgMACABBYAAACCwAAgQUAILAAAAQWAAACCwBAYAEACCwAAAQWAIDAAgAQWAAACCwAAIEFACCwAAAEFgAAAgsAQGABAAgsAAAEFgCAwAIAEFgAAAgsAACBBQAgsAAABBYAAAILAEBgAQAILAAABBYAgMACABBYAAAILAAAgQUAILAAABBYAAACCwBAYAEACCwAAAQWAIDAAgAQWAAACCwAAIEFACCwAAAQWAAAAgsAQGABACCwAAAEFgCAwAIAEFgAAAgsAACBBQAgsAAAEFgAAAILAEBgAQAgsAAABBYAgMACAEBgAQAILAAAgQUAILAAABBYAAACCwBAYAEAILAAAAQWAIDAAgBAYAEACCwAAIEFACCwAAAQWAAAAgsAQGABACCwAAAEFgCAwAIAQGABAAgsAACBBQCAwAIAEFgAAAILAEBgAQAgsAAABBYAgMACAEBgAQAILAAAgQUAgMACABBYAAACCwAAgQUAILAAAAQWAIDAAgBAYAEACCwAAIEFAIDAAgAQWAAAAgsAAIEFACCwAAAEFgAAAgsAQGABAAgsAACBBQCAwAIAEFgAAAILAACBBQAgsAAABBYAAAILAEBgAQAILAAAgQUAgMACABBYAAACCwAAgQUAILAAAAQWAAACCwBAYAEACCwAAAQWAIDAAgAQWAAAAgsAAIEFACCwAAAEFgAAAgsAQGABAAgsAAAEFgCAwAIAEFgAAAgsAACBBQAgsAAABBYAAAILAEBgAQAILAAABBYAgMACABBYAAAILAAAgQUAILAAABBYAAACCwBAYAEACCwAAAQWAIDAAgAQWAAACCwAAIEFACCwAAAQWAAAAgsAQGABAAgsEwAACCwAAIEFACCwAAAQWAAAAgsAQGABACCwAAAEFgCAwAIAQGABAAgsAACBBQAgsAAAEFgAAAILAEBgAQAgsAAABBYAgMACAEBgAQAILAAAgQUAgMACABBYAAACCwBAYAEAILAAAAQWAIDAAgBAYAEACCwAAIEFAIDAAgAQWAAAAgsAAIEFACCwAAAEFgCAwAIAQGABAAgsAACBBQCAwAIAEFgAAAILAACBBQAgsAAABBYAAAILAEBgAQAILAAAgQUAgMACABBYAAACCwAAgQUAILAAAAQWAAACCwCgsFeAAQCFuQu23ly7egAAAABJRU5ErkJggg==') no-repeat left bottom;
  min-height: 374px;
  margin-right: -15px;
  box-sizing: border-box;
}

.banner3-hurt-two {
  padding: 124px 0 0 62px;
  background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAEYCAIAAAArpAXWAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Njg5QzdBNkMzMzY2MTFFOEJGQjU4Qjk4QjkzNDg4OEUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Njg5QzdBNkQzMzY2MTFFOEJGQjU4Qjk4QjkzNDg4OEUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2ODlDN0E2QTMzNjYxMUU4QkZCNThCOThCOTM0ODg4RSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2ODlDN0E2QjMzNjYxMUU4QkZCNThCOThCOTM0ODg4RSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PtPEEs4AAARVSURBVHja7NhBDYAwEEXBDakNNKCDC0JwB04qgcCV9IIAVJCw6YyC5u/lpWVet0hlnJbI5rmPALrUrmoE6NBgAgAAgQUAILAAAAQWAAACCwBAYAEACCwAAAQWAIDAAgDIr6R78Vl3ZwMA/swPFgCAwAIAEFgAAAILAACBBQAgsAAABBYAAAILAEBgAQAILAAABBYAgMACABBYAAACCwAAgQUAILAAAAQWAAACCwBAYAEACCwAAAQWAIDAAgAQWAAACCwAAIEFACCwAAAEFgAAAgsAQGABAAgsAAAEFgCAwAIAEFgAAAgsAACBBQAgsAAAEFgAAAILAEBgAQAILAAABBYAgMACABBYAAAILAAAgQUAILAAABBYAAACCwBAYAEAILAAAAQWAIDAAgAQWAAACCwAAIEFACCwAAAQWAAAAgsAQGABACCwAAAEFgCAwAIAEFgAAAgsAACBBQAgsAAAEFgAAAILAEBgAQAgsAAABBYAgMACAEBgAQAILAAAgQUAILAAABBYAAACCwBAYAEAILAAAAQWAIDAAgBAYAEACCwAAIEFAIDAAgAQWAAAAgsAQGABACCwAAAEFgCAwAIAQGABAAgsAACBBQCAwAIAEFgAAAILAACBBQAgsAAABBYAgMACAEBgAQAILAAAgQUAgMACABBYAAACCwAAgQUAILAAAAQWAIDAAgBAYAEACCwAAIEFAIDAAgAQWAAAAgsAAIEFACCwAAAEFgAAAgsAQGABAAgsAACBBQCAwAIAEFgAAAILAACBBQAgsAAABBYAAAILAEBgAQAILAAABBYAgMACABBYAAACCwAAgQUAILAAAAQWAAACCwBAYAEACCwAAAQWAIDAAgAQWAAACCwAAIEFACCwAAAEFgAAAgsAQGABAAgsAAAEFgCAwAIAEFgAAAgsAACBBQAgsAAABBYAAAILAEBgAQAILAAABBYAgMACABBYAAAILAAAgQUAILAAABBYAAACCwBAYAEACCwAAAQWAIDAAgAQWAAACCwAAIEFACCwAAAQWAAAAgsAQGABACCwAAAEFgCAwAIAEFgAAAgsAACBBQAgsAAAEFgAAAILAEBgAQAgsAAABBYAgMACAEBgAQAILAAAgQUAILAAABBYAAACCwBAYAEAILAAAAQWAIDAAgBAYAEACCwAAIEFACCwTAAAILAAAAQWAIDAAgBAYAEACCwAAIEFAIDAAgAQWAAAAgsAAIEFACCwAAAEFgCAwAIAQGABAAgsAACBBQCAwAIAEFgAAAILAACBBQAgsAAABBYAAAILAEBgAQAILAAAgQUAgMACABBYAAACCwAAgQUAILAAAAQWAAACCwBAYAEACCwAAAQWAIDAAgAQWAAAAgsAAIEFACCwAAAEFgAAAgsAQGABAAgsAAAEFgCAwAIAEFgAAAgsAACBBQAgsAAABBYAAAILAEBgAQAILAAABBYAgMACABBYAAAILACAj70CDABsagv/P/bocgAAAABJRU5ErkJggg==') no-repeat left bottom;
  min-height: 374px;
  margin-right: -15px;
  box-sizing: border-box;
}

.banner3-hurt-c-title {
  color: #fff;
  font-size: 48px;
  line-height: 180%;
}

.banner3-hurt-c-desc {
  color: #fff;
  font-size: 24px;
  line-height: 170%;
}

.introduce-banner4 {
  width: 100%;
  height: 10px;
}

.introduce-banner3-feature-title {
  font-size: 48px;
  text-align: center;
  color: #fff;
  padding: 90px 0 60px;
}

.introduce-banner3-feature-content {
  display: flex;
}

.introduce-banner3-feature-item {
  color: #fff;
  text-align: center;
  width: 300px;
  font-size: 24px;
}

.introduce-banner3-feature-img {
  width: 92px;
  height: 88px;
  display: block;
  margin: 0 auto;
}

.introduce-banner3-feature-item-title {
  padding-top: 50px;
}

.introduce-banner3-more {
  width: 300px;
  height: 59px;
  border-radius: 40px;
  margin: 0 auto;
  display: block;
  margin-top: 80px;
}
</style>

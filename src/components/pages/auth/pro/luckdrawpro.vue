
<style lang="less" scoped>
body {
  width: 100%;
  .container {
    position: relative;
    .bg {
      width: 100%;
      float: left;
    }
    .info {
      float: left;
      font-size: 0.15rem;
      color: #0275b8;
      margin-top: -35%;
      width: 100%;
      text-align: center;
      span {
        color: #ff4462;
      }
    }
    .wheelImg {
      float: left;
      transform: rotate(0);
      transform-origin: center center;
      width: 3.25rem;
      margin-left: 0.25rem;
      margin-top: 0.25rem;
    }
  }
  .resultModel {
    width: 100%;
    height: 100%;
    .resultbg {
      width: 100%;
      height: 100%;
      position: fixed;
      max-width: 750px;
      z-index: 9;
      background: rgba(0, 0, 0, 0.5);
    }
    .lucky {
      width: 2.7rem;
      height: 3rem;
      position: fixed;
      left: 50%;
      top: 50%;
      margin-left: -1.35rem;
      margin-top: -1.5rem;
      z-index: 999;
      background: url("../../../assets/img/bg.png") center center no-repeat;
      background-size: 100% 100%;
      .luckyImg {
        width: 70%;
        float: left;
        margin-left: 17%;
        margin-top: 10%;
      }
      .btn {
        width: 50%;
        height: 0.5rem;
        float: left;
        margin-left: 24%;
        margin-top: -19%;
      }
      .text {
        color: #314372;
        float: left;
        margin-top: -32%;
        width: 100%;
        text-align: center;
        font-size: 0.2rem;
        span {
          color: #ff4a26;
        }
      }
    }
  }
}
.turntable-rotate {
  position: absolute;
  transition: all 1s ease-out;
  height: 1.2rem;
  float: left;
  margin-left: 50%;
  top: 18%;
  left: 0;
  .awards-1 {
    transform: translate(-50%, 0) rotate(22.5deg);
  }
  .awards-2 {
    transform: translate(-50%, 0) rotate(68.5deg);
  }
  .awards-3 {
    transform: translate(-50%, 0) rotate(112.5deg);
  }
  .awards-4 {
    transform: translate(-50%, 0) rotate(157.5deg);
  }
  .awards-5 {
    transform: translate(-50%, 0) rotate(202.5deg);
  }
  .awards-6 {
    transform: translate(-50%, 0) rotate(247.5deg);
  }
  .awards-7 {
    transform: translate(-50%, 0) rotate(292.5deg);
  }
  .awards-8 {
    transform: translate(-50%, 0) rotate(338.5deg);
  }
}
.turntable-rotate [class^="awards-"] {
  position: absolute;
  width: 0.7rem;
  height: 100%;
  color: #444;
  text-align: center;
  transform-origin: center bottom;
  font-size: 0.12rem;
  .prizeName {
    width: 100%;
    color: red;
    margin-top: 0.1rem;
  }
  .prizeImage {
    width: 100%;
    img {
      width: 0.15rem;
      margin-top: 0.15rem;
      &.big {
        width: 0.22rem;
        transform: rotate(-120deg);
      }
    }
  }
}
.luckyWheel {
  width: 100%;
  position: relative;
  overflow: hidden;
  margin-top: -115%;
  float: left;
}
.wheelBack {
  width: 3.75rem;
  position: relative;
  overflow: hidden;
  height: 3.75rem;
  margin: 0 auto;
}
.guide {
  position: absolute;
  width: 0.65rem;
  height: 0.75rem;
  left: 50%;
  top: 50%;
  margin-top: -0.375rem;
  margin-left: -0.325rem;
}
</style>

<template>
<div>
  <div class="container">
    <img class="bg" src="../../../assets/img/wheelBg01.png" alt="">
    <div class="info">抽奖次数：<span>{{remainDayCount}}</span></div>
    <img class="bg" src="../../../assets/img/wheelBg02.png" alt="">
    <div class="luckyWheel">
      <div class="wheelBack" :style="{transform:rotateDeg, transition: transitionStyle}">
        <img class="wheelImg" src="../../../assets/img/luckywheel.png" alt="">
        <ul class="turntable-rotate">
          <li v-for="(item, index) in prizes" :key="index" :class="'awards-'+ (index + 1)">
            <div class="prizeName">{{item.prizeName}}</div>
            <div class="prizeImage"><img :src="item.prizeImage" :class="item.isActive ? 'big' : ''"></div>
          </li>
        </ul>
      </div>
      <img class="guide" @click="handleClick" src="../../../assets/img/guide.png" alt="">
    </div>
  </div>
  <div class="resultModel" v-if="isModel">
    <div class="resultbg"></div>
    <div class="lucky">
      <img class="luckyImg" src="../../../assets/img/luckyResult.png" alt="">
      <div class="text" v-if="prizeType === 1">抽中<span>{{money}}</span>元现金奖励</div>
      <div class="text" v-if="prizeType === 2">抽中<span>{{score}}</span>个青豆奖励</div>
      <div class="btn" @click="closeModel"></div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      isModel: false, //中奖弹窗
      remainDayCount: 8, //剩余抽奖次数

      token: "",
      isClick: false, //是否可点
      rotateDeg: 0,
      transitionStyle: "transform 3s ease-out",
      prizeTag: 1, // 1:现金 2:青豆
      extraDeg: [22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5], //旋转角度
      degIndex: 0, //奖品的下标
      index: "", //做奖励ID映射
      interPackage: {},
      prizes: [
        {
          prizeName: "奖品1",
          prizeImage: ""
        },
        {
          prizeName: "奖品2",
          prizeImage: ""
        },
        {
          prizeName: "奖品3",
          prizeImage: ""
        },
        {
          prizeName: "奖品4",
          prizeImage: ""
        },
        {
          prizeName: "奖品5",
          prizeImage: ""
        },
        {
          prizeName: "奖品6",
          prizeImage: ""
        },
        {
          prizeName: "奖品7",
          prizeImage: ""
        },
        {
          prizeName: "奖品8",
          prizeImage: ""
        }
      ], //奖品数组
      prizeType: "", //中奖类型 1:现金 2:青豆
      money: "0.00", //中奖金额
      score: 0 //中奖青豆
    };
  },
  methods: {
    initData() {
      this.rotateDeg = "rotate(0deg)";
      this.transitionStyle = "transform 0s ease-out";
      this.isClick = false;
      let prizes = this.prizes;
      for (var i = 0; i < prizes.length; i++) {
        if (prizes[i].prizeName.length > 5) {
          prizes[i].prizeName = prizes[i].prizeName.substring(0, 6);
        }
        if (prizes[i].prizeType === 2) {
          prizes[i].isActive = false;
        } else {
          prizes[i].isActive = true;
        }
      }
      if (prizes.length > 8) {
        this.prizes = prizes.slice(0, 8);
      } else {
        this.prizes = prizes;
      }
    },
    handleClick() {
      this.transitionStyle = "transform 3s ease-out";
      let mathrandom = this.extraDeg[1];
      this.rotateDeg = "rotate(" + (360 * 8 + parseInt(mathrandom)) + "deg)";
      setTimeout(() => {
        this.isModel = true;
      }, 3500);
    },
    // 关闭弹窗
    closeModel() {
      this.isModel = false;
      this.initData();
    }
  },
  mounted() {
    this.initData();
  },
  created() {}
};
</script>

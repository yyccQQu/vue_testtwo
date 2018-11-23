<style lang="less" scoped>
body {
  width: 100%;
  font-size: 28px;
  .container {
    position: relative;
    .bg {
      width: 100%;
      float: left;
    }
    .info,
    .infos {
      float: left;
      font-size: 0.15rem;
      color: #0275b8;
      margin-top: -42%;
      width: 100%;
      text-align: center;
      span {
        color: #ff4462;
      }
    }
    .infos {
      margin-top: -38%;
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
  height: 7rem;
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
  top: 26%;
  margin-top: -0.375rem;
  margin-left: -0.325rem;
}
.persons {
  font-size: 22px;
  height: 50px;
  z-index: 1;
  // border: 1px solid red;
  background: red;
  width: 50px;
  border-radius: 50%;
  line-height: 50px;
  position: absolute;
  .inner {
    position: absolute;
    top: 0;
    width: 16px;
    height: 16px;
    top: 34%;
    left: 29%;
    border-radius: 50%;
    background-color: rgb(0, 160, 220);
  }
}
.per-1,
.neidiv-1 {
  top: 198px;
  left: 56px;
}
.per-2,
.neidiv-2 {
  top: 252px;
  left: 126px;
}
.per-3,
.neidiv-3 {
  top: 257px;
  left: 231px;
}
.per-4,
.neidiv-4 {
  top: 199px;
  left: 306px;
}
.Boz {
  top: 60%;
  left: 44%;
}
.neidiv-1,
.neidiv-2,
.neidiv-3,
.neidiv-4 {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #faf;
  z-index: 0;
  position: absolute;
  transition: top 0.5s ease-in 0.1s, left 0.5s linear 0.1s;
  -webkit-transition: top 0.5s ease-in 0.1s, left 0.5s linear 0.1s;
  -moz-transition: top 0.5s ease-in 0.1s, left 0.5s linear 0.1s;
}
.alldiv {
  // border: 1px solid red;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
}
.box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  .pox {
    display: flex;
    height: 50%;
    width: 100%;
    justify-content: center;
    align-items: center;
    z-index: 201;
    .nac {
      flex: 1;
      height: 100%;
      // border: 1px solid red;
      font-size: 28px;
      text-align: center;
      &:first-child {
        p {
          overflow: hidden;
          display: none;
          height: 0;
          width: 50px;
          margin: 50px 16px;
          padding: 10px 10px;
          background: #d54c33;
          transition: all 0.3s;
        }
      }
      &:nth-child(2) {
        flex: 2;
        transition: width 0.3s;
        p {
          display: none;
          //   width: 100%;
          position: absolute;
          left: 0;
          right: 0;
          height: auto;
          padding: 10px 0;
          //   font-size: 28px;
          background: #d54c33;
          width: 0;
          color: transparent;
          margin: 20px auto 0;
          transition: width 0.3s;
          -webkit-transition: width 0.3s;
        }
      }
      &:nth-child(3) {
        p {
          overflow: hidden;
          display: none;
          height: 0;
          width: 50px;
          margin: 50px 16px;
          padding: 10px 10px;
          background: #d54c33;
          transition: all 0.3s;
        }
      }
    }
  }
  .show {
    opacity: 0;
  }
}
</style>

<template>
<div>
  <div class="container">
    <img class="bg" src="../../../assets/img/wheelBg01.png" alt="">
    <div class="info">抽奖次数：<span>{{remainDayCount}}</span></div>
    <div class="infos">距离开奖还有：<span>{{countSecound}}</span>秒</div>
    <img class="bg" src="../../../assets/img/wheelBg02.png" alt="">
    <div class="luckyWheel">
      <div class="wheelBack" :style="{transform:rotateDeg, transition: transitionStyle}">
        <img class="wheelImg" src="../../../assets/img/luckywheel.png" alt="">
        <ul class="turntable-rotate">
            <!-- 2，再次点击这里获取要投掷方位 -->
          <li :ref="'awards'+ (index + 1)" v-for="(item, index) in prizes" :key="index" :class="'awards-'+ (index + 1)" @click="addthe(index)">
            <div class="prizeName">{{item.prizeName}}++{{item.hasOwner}}</div>
            <div class="prizeImage"><img :src="item.prizeImage" :class="item.isActive ? 'big' : ''"></div>
          </li>
        </ul>
      </div>
      <img ref="guide" class="guide" @click="handleClick" src="../../../assets/img/guide.png" alt="">
      <!--1， 点击div 获取index -->
      <div class="persons" v-for="(item,index) in names" :key="item" :class="'per-'+ (index + 1)" @click="hasInner(index)">
          <p>{{item}}</p>
      </div>
      <div class="persons Boz" @click="addBond">
          <p>Boz</p>
          <div v-for="(ball,index) in balls" :class="{show: !ball.run}" class="inner" ref="ball"      :key="index">
          </div>
      </div>
      <div v-for="(item,index) in names" :class="'per-'+(index+1)" :key="index" class="neidiv-1"></div>
      
    </div>
  </div>
  <div class="resultModel" v-if="isModel">
    <div class="resultbg"></div>
    <div class="lucky" v-show="thindex==1">
      <img class="luckyImg" src="../../../assets/img/luckyResult.png" alt="">
      <div class="text" v-if="prizeType === 1">抽中<span>{{money}}</span>元现金奖励</div>
      <div class="text" v-if="prizeType === 2">抽中<span>{{score}}</span>个奖励</div>
      <div class="btn" @click="closeModel"></div>
    </div>
    <div class="lucky" v-show="thindex==2">
        <img class="luckyImg" src="../../../assets/img/luckyResult.png" alt="" style="visibility:hidden;">
        <div class="text" @click="closeModel">请充值再投</div>
    </div>
  </div>
  <div class="alldiv" @click="closeModel();thindex=0;isModel=false;" v-show="thindex==3">
    <div class="box">
        <div class="pox">
            <div class="nac">
                <p>寿星临门寿安康</p>
            </div>
            <div class="nac">
                <p>
                  <span>金童贺岁</span>
                </p>
            </div>
            <div class="nac">
                <p>快马加鞭奔富图</p>
            </div>
        </div>
    </div>
  </div>
  <div class="alldiv" @click="thindex=4;" v-show="thindex==4">
    <div class="box">
        <div class="pox">
            <prize-box></prize-box>
        </div>
    </div>
  </div>
</div>
</template>

<script>
import prizeBox from "./prizeBox.vue";

export default {
  components: {
    prizeBox
  },
  data() {
    return {
      countball: 0,
      balls: [
        { run: false },
        { run: false },
        { run: false },
        { run: false },
        { run: false },
        { run: false },
        { run: false },
        { run: false }
      ],
      ballIndex: 0,
      names: ["赵钱", "孙李", "周吴", "郑王"],
      isModel: false, //中奖弹窗
      remainDayCount: 8, //剩余抽奖次数

      token: "",
      isClick: false, //是否可点
      rotateDeg: 0,
      transitionStyle: "transform 3s ease-out",
      prizeTag: 1,
      extraDeg: [22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5], //旋转角度
      degIndex: 0, //奖品的下标
      index: "", //做奖励ID映射
      interPackage: {},
      thindex: 0,
      prizes: [
        {
          prizeName: "奖品1",
          prizeImage: "",
          hasOwner: 0
        },
        {
          prizeName: "奖品2",
          prizeImage: "",
          hasOwner: 0
        },
        {
          prizeName: "奖品3",
          prizeImage: "",
          hasOwner: 0
        },
        {
          prizeName: "奖品4",
          prizeImage: "",
          hasOwner: 0
        },
        {
          prizeName: "奖品5",
          prizeImage: "",
          hasOwner: 0
        },
        {
          prizeName: "奖品6",
          prizeImage: "",
          hasOwner: 0
        },
        {
          prizeName: "奖品7",
          prizeImage: "",
          hasOwner: 0
        },
        {
          prizeName: "奖品8",
          prizeImage: "",
          hasOwner: 0
        }
      ], //奖品数组
      //坐标数组
      positions: [
        {
          top: "74px",
          left: "172px"
        },
        {
          top: "74px",
          left: "216px"
        },
        {
          top: "111px",
          left: "246px"
        },
        {
          top: "148px",
          left: "247px"
        },
        {
          top: "184px",
          left: "215px"
        },
        {
          top: "184px",
          left: "172px"
        },
        {
          top: "151px",
          left: "143px"
        },
        {
          top: "106px",
          left: "143px"
        }
      ],
      initPos: [
        {
          top: "198px",
          left: "56px"
        },
        {
          top: "252px",
          left: "126px"
        },
        {
          top: "257px",
          left: "231px"
        },
        {
          top: "199px",
          left: "306px"
        }
      ],
      prizeType: "", //中奖类型
      money: "0.00", //中奖金额
      score: 0, //中奖
      divIndex: 0,
      forDivIndex: 0,
      countSecound: 300
    };
  },
  computed: {
    notRun() {
      return this.balls.filter(v => !v.run); //选择为true的ball
    }
  },
  watch: {
    ballIndex(nv) {
      this.ballIndex = nv == this.balls.length ? 0 : nv;
    }
  },
  methods: {
    showAnimate() {
      // $("p:nth-child(2)");

      $(".pox .nac")
        .children("p")
        .eq(0)
        .fadeIn(200)
        .css({ height: "70%" });
      $(".pox .nac")
        .eq(1)
        .css({ width: "100%" });
      $(".pox .nac")
        .eq(1)
        .children("p")
        .fadeIn(300)
        .css({ width: "50%", color: "#000" });
      $(".pox .nac")
        .children("p")
        .eq(2)
        .fadeIn(200)
        .css({ height: "70%" });
    },
    reTime() {
      let _this = this;
      let setInId = setInterval(() => {
        this.countSecound--;
        if (this.countSecound == 0) {
          this.doSomeThing();
        }
        if (this.countSecound < 0) {
          clearInterval(setInId);
          this.countSecound = 30;
          if (this.countSecound == 30) {
            this.reTime();
          }
        }
      }, 1000);
    },
    doSomeThing() {
      this.thindex = 4;
      this.isModel = true;
      setTimeout(() => {
        this.thindex = 3;
        this.showAnimate();
      }, 2000);
      setTimeout(() => {}, 1000);
    },
    hasPos() {
      let initP = this.initPos[this.divIndex];
      $(".neidiv-1")
        .eq(this.divIndex)
        .css({
          top: initP.top,
          left: initP.left
        });
      setTimeout(() => {
        $(".neidiv-1")
          .eq(this.divIndex)
          .css({ display: "block" });
      }, 1000);
    },
    addthe(index) {
      let vIndex = index + 1;
      if (vIndex == 8) {
        vIndex = 0;
      }
      //   console.log(vIndex, "vIndex");
      let position = this.positions[vIndex];
      if (this.remainDayCount <= 0) {
        this.remainDayCount = 0;
        this.thindex = 2;
        this.isModel = true;
        return;
      }
      $(".neidiv-1")
        .eq(this.divIndex)
        .css({
          top: position.top,
          left: position.left
        });
      this.prizes[index].hasOwner++;

      this.remainDayCount--;

      let _this = this;
      setTimeout(() => {
        $(".neidiv-1")
          .eq(this.divIndex)
          .css({ display: "none" });
        _this.hasPos();
      }, 600);
      //   console.log(index, "index");
    },
    hasInner(index) {
      this.divIndex = index;
      console.log(index, "index");
    },
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
      let mathrandom = this.extraDeg[5];
      this.rotateDeg = "rotate(" + (360 * 8 + mathrandom) + "deg)";
      setTimeout(() => {
        this.thindex = 1;
        this.isModel = true;
        this.remainDayCount += 8;
      }, 3500);
    },
    //小球运动-----------------------------------------------------------
    parabola(element, options, arc, duration) {
      duration = duration || 800;
      var start = this.offset(element);
      var x = options.left - start.left,
        y = options.top - start.top;

      var a = arc,
        c = 0,
        b = (y - a * x * x) / x;

      var date = +new Date();
      var timer = setInterval(() => {
        var elapsed = Math.min(+new Date() - date, duration); //取间隔最小的时间段

        var _x = (elapsed * x) / duration,
          _y = a * _x * _x + b * _x + c;

        this.offset(element, { left: _x + start.left, top: _y + start.top });

        if (elapsed === duration) clearInterval(timer);
      }, 1000 / 60);
    },
    offset(element, coord) {
      if (typeof coord === "undefined") {
        var _top = 0,
          _left = 0;
        while (element !== null) {
          _top += element.offsetTop;
          _left += element.offsetLeft;
          element = element.offsetParent;
        }
        return { top: _top, left: _left };
      }
      var _top = 0,
        _left = 0,
        parent = element.offsetParent;
      while (parent !== null) {
        _top += parent.offsetTop;
        _left += parent.offsetLeft;
        parent = parent.offsetParent;
      }
      _left =
        coord.left -
        _left; /*要设置的相对文档的定位距离相当于是用此距离减去其父元素在文档中的定位*/
      _top = coord.top - _top;
      // css(element,{left : _left+"px", top : _top+"px"});
      element.style.left = _left + "px";
      element.style.top = _top + "px";
    },
    addBond() {
      if (this.countball == 8) {
        this.countball = 0;
      }
      this.countball++;
      let dom = "awards" + this.countball;
      console.log(dom, "dom", this.$refs[dom]);
      let domtrue = $("." + dom);
      console.log(domtrue.offset.top, "domtrue");
      return;
      let idx = this.ballIndex;
      console.log(idx);
      this.balls[idx].run = true;
      this.parabola(this.$refs.ball[idx], this.offset(domtrue), 0.001, 800);
      setTimeout(() => {
        this.balls[idx].run = false;
        this.$refs.ball[idx].style.top = "";
        this.$refs.ball[idx].style.left = "";
      }, 850);
      this.ballIndex++;
    },
    // 关闭弹窗
    closeModel() {
      this.isModel = false;
      this.initData();
    }
  },
  mounted() {
    this.initData();
    this.reTime();
  },
  created() {}
};
</script>

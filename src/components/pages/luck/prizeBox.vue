<template>
    <div class="prizeBox" @click="turn()">
        <div class="hasShowPrize">
		<div class="kaleidoscope">
			<div class="divs div1">
				<div>1</div>
				<div>2</div>
				<div>3</div>
				<div>4</div>
				<div>5</div>
				<div>6</div>
			</div>
			<h2>横向滚动</h2>
		</div>
		<div class="kaleidoscope">
			<div class="divs div1">
				<div>1</div>
				<div>2</div>
				<div>3</div>
				<div>4</div>
				<div>5</div>
				<div>6</div>
			</div>
			<h2>横向滚动</h2>
		</div>
		<div class="kaleidoscope">
			<div class="divs div1">
				<div>1</div>
				<div>2</div>
				<div>3</div>
				<div>4</div>
				<div>5</div>
				<div>6</div>
			</div>
			<h2>横向滚动</h2>
		</div>
	</div>
    </div>
</template>

<script>
export default {
  name: "prizeBox",
  props: {},
  data() {
    return {
      count: 1
    };
  },

  mounted() {
    this.$nextTick(() => {
      this._makeStyle();
    });
  },

  methods: {
    _makeStyle() {},
    turn() {
      this.count++;
      $(".div1").css({
        "animation-iteration-count": `${this.count}`
      });
    }
  }
};
</script>

<style lang="less" scoped>
h2 {
  font-size: 28px;
  text-align: center;
}

.hasShowPrize {
  width: 100%;
  height: 200px;
  text-align: center;
}

.kaleidoscope {
  width: 136px;
  height: 200px;
  padding: 0;
  display: inline-block;
  border: 1px solid green;
  text-align: center;
  perspective: 200px;
  float: left;
  transform: scale(0.4);
}

.divs div {
  width: 200px;
  height: 200px;
  position: absolute;
  top: 0px;
  left: 0px;
  opacity: 0.6;
  border-radius: 50px;
  border: 1px solid white;
  transform-origin: 100px 100px -100px;
}

.div1 {
  font: 50px/200px "微软雅黑";
  color: white;
  position: relative;
  transform-style: preserve-3d;
  animation: mupiao 1s infinite ease-out running;
  transform-origin: 100px 100px -100px;
  animation-iteration-count: 1;
  &:first-child {
    margin-left: -22px;
  }
}

.divs div:nth-of-type(1) {
  background: red;
  transform: rotateY(0deg);
}

.divs div:nth-of-type(2) {
  background: green;
  transform: rotateY(90deg);
}

.divs div:nth-of-type(3) {
  background: blue;
  transform: rotateX(180deg);
}

.divs div:nth-of-type(4) {
  background: purple;
  transform: rotateY(270deg);
}

.divs div:nth-of-type(5) {
  background: yellow;
  transform: rotateX(90deg);
}

.divs div:nth-of-type(6) {
  background: cyan;
  transform: rotateX(270deg);
}

@keyframes mupiao {
  0% {
    transform: rotateY(0deg);
  }

  100% {
    transform: rotateY(360deg);
  }
}
@keyframes mupiao2 {
  0% {
    transform: rotateY(0deg);
  }

  100% {
    transform: rotateY(1080deg);
  }
}
</style>



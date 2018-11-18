<template>
    <div class="login">
        <div class="container pt-10 pb-10">
            <div class="play_select_insert">
                <ul class="play_select_tit">
                    <li class="curr" @click="cardId=1">两面盘</li>
                    <li @click="cardId=2">单号1~10</li>
                    <li @click="cardId=3">冠亚组合</li>
                </ul>
            </div>
            <div class="gameBet" v-show="cardId==1">
                <div class="gameBet_balls">
                    <div class="gameBet_left l">
                        <div class="bet-num-box pk10-num-box">
                            <div class="pk10lmp pk10">
                                <div class="lmp">
                                    <p class="text-c tie">冠、亚军和</p>
                                    <ul class="clearfix ful">
                                        <!-- :class="{curr:item.currs}" -->
                                        <li class="ball_number" 
                                            v-for="(item ,i) in dataTop" :key="i"
                                            
                                            @click="changeClass(item, i);addDatafun(item)"
                                            >
                                            <p class="spans dis-inb">{{item.name}}</p>
                                            <span class="dis-inb ball_aid">{{item.value}}</span>
                                        </li>
                                        <div class="clearboth"></div>
                                    </ul>
                                </div>
                                <div class="danhao clearfix">
                                   <ul v-for="(item,i) in dataBot" 
                                        @click="changeClasspro(item, i);addDatafun(item)"
                                        :key="i">
                                       <li class="t">{{item.t}}</li>
                                       <li class="ball_number">
                                            <p class="spans dis-inb">{{item.name}}</p>
                                            <span class="dis-inb ball_aid">{{item.value}}</span>
                                       </li>                                     
                                    </ul> 
                                    


                                </div>

                            </div>

                        </div>
                        <div class="addtobet">
                            <button class="addtobetbtn" type="button">添加到投注列表</button>
                        </div>
                        <div class="gameBet_right l">
                            <div class="xiad-left">
                                <dl>
                                    <dd v-for="(item ,i) in textArr" :key="i">
                                        <span class="xq">
                                         {{item.name}} <b>{{item.brige}}</b>
                                        </span>
                                        <ul>
                                            <li>
                                                每注 
                                                <input type="text" size="5" class="orderprice" v-model="item.value">元
                                            </li>
                                            <li class="max_wit">
                                                每注可赢金额：
                                                <b class="order_money mark">{{item.invalfee}}</b>元
                                            </li>
                                            <li class="sc">
                                                <a @click="delDatafun(i)">X</a>
                                            </li>
                                        </ul>
                                    </dd>
                                    
                                </dl>
                            </div>
                            <div class="myzhuihao">
                                <div class="numberchoose">
                                    选择购买方式：
                                    <el-radio v-model="radio" label="1">购买</el-radio>
                                    <el-radio v-model="radio" label="2">追号</el-radio>
                                </div>
                            </div>
                            <div class="xiad-righ">
                                <el-button class="redmore" type="danger" plain v-popover:popover4>确认投注</el-button>
                                <el-button class="redmore" type="danger" plain @click="delAll">清空单号</el-button>
                                <el-button class="redmore" type="danger" plain v-popover:popover5>下注并分享</el-button>
                            </div>

                            <el-popover
                                ref="popover4"
                                placement="top"
                                width="400"
                                trigger="click">
                                <el-table :data="textArr">
                                    <el-table-column width="150" property="brige" label="大小"></el-table-column>
                                    <el-table-column width="100" property="name" label="名次"></el-table-column>
                                    <el-table-column width="300" property="invalfee" label="每注可赢金额"></el-table-column>
                                </el-table>
                            </el-popover>
                            <el-popover
                                ref="popover5"
                                placement="top"
                                width="400"
                                trigger="click">
                                <el-table :data="textArr">
                                    <el-table-column width="150" property="brige" label="大小"></el-table-column>
                                    <el-table-column width="100" property="name" label="名次"></el-table-column>
                                    <el-table-column width="300" property="invalfee" label="每注可赢金额"></el-table-column>
                                </el-table>
                            </el-popover>

                            
                        </div>
                    </div>
                </div>
                    
            </div>
            <div class="gameBet" v-show="cardId==2">
                <div class="gameBet_balls">
                    <div class="gameBet_left l">
                        <div class="bet-num-box pk10-num-box">
                            <div class="pk10lmp pk10">
                                <div class="lmp">
                                    <p class="text-c tie">冠、亚军和第二页</p>
                                    <ul class="clearfix ful">
                                        <!-- :class="{curr:item.currs}" -->
                                        <li class="ball_number" 
                                            v-for="(item ,i) in dataTop" :key="i"
                                            
                                            @click="changeClass(item, i);addDatafun(item)"
                                            >
                                            <p class="spans dis-inb">{{item.name}}</p>
                                            <span class="dis-inb ball_aid">{{item.value}}</span>
                                        </li>
                                        <div class="clearboth"></div>
                                    </ul>
                                </div>
                                <div class="danhao clearfix">
                                   <ul v-for="(item,i) in dataBot" 
                                        @click="changeClasspro(item, i);addDatafun(item)"
                                        :key="i">
                                       <li class="t">{{item.t}}</li>
                                       <li class="ball_number">
                                            <p class="spans dis-inb">{{item.name}}</p>
                                            <span class="dis-inb ball_aid">{{item.value}}</span>
                                       </li>                                     
                                    </ul> 
                                    


                                </div>

                            </div>

                        </div>
                        <div class="addtobet">
                            <button class="addtobetbtn" type="button">添加到投注列表</button>
                        </div>
                        <div class="gameBet_right l">
                            <div class="xiad-left">
                                <dl>
                                    <dd v-for="(item ,i) in textArr" :key="i">
                                        <span class="xq">
                                         {{item.name}} <b>{{item.brige}}</b>
                                        </span>
                                        <ul>
                                            <li>
                                                每注 
                                                <input type="text" size="5" class="orderprice" v-model="item.value">元
                                            </li>
                                            <li class="max_wit">
                                                每注可赢金额：
                                                <b class="order_money mark">{{item.invalfee}}</b>元
                                            </li>
                                            <li class="sc">
                                                <a @click="delDatafun(i)">X</a>
                                            </li>
                                        </ul>
                                    </dd>
                                    
                                </dl>
                            </div>
                            <div class="myzhuihao">
                                <div class="numberchoose">
                                    选择购买方式：
                                    <el-radio v-model="radio" label="1">购买</el-radio>
                                    <el-radio v-model="radio" label="2">追号</el-radio>
                                </div>
                            </div>
                            <div class="xiad-righ">
                                <el-button class="redmore" type="danger" plain v-popover:popover4>确认投注</el-button>
                                <el-button class="redmore" type="danger" plain @click="delAll">清空单号</el-button>
                                <el-button class="redmore" type="danger" plain v-popover:popover5>下注并分享</el-button>
                            </div>

                            <el-popover
                                ref="popover4"
                                placement="top"
                                width="400"
                                trigger="click">
                                <el-table :data="textArr">
                                    <el-table-column width="150" property="brige" label="大小"></el-table-column>
                                    <el-table-column width="100" property="name" label="名次"></el-table-column>
                                    <el-table-column width="300" property="invalfee" label="每注可赢金额"></el-table-column>
                                </el-table>
                            </el-popover>
                            <el-popover
                                ref="popover5"
                                placement="top"
                                width="400"
                                trigger="click">
                                <el-table :data="textArr">
                                    <el-table-column width="150" property="brige" label="大小"></el-table-column>
                                    <el-table-column width="100" property="name" label="名次"></el-table-column>
                                    <el-table-column width="300" property="invalfee" label="每注可赢金额"></el-table-column>
                                </el-table>
                            </el-popover>

                            
                        </div>
                    </div>
                </div>
                    
            </div>
            <div class="gameBet" v-show="cardId==3">
                <div class="gameBet_balls">
                    <div class="gameBet_left l">
                        <div class="bet-num-box pk10-num-box">
                            <div class="pk10lmp pk10">
                                <div class="lmp">
                                    <p class="text-c tie">冠、亚军和第三页</p>
                                    <ul class="clearfix ful">
                                        <!-- :class="{curr:item.currs}" -->
                                        <li class="ball_number" 
                                            v-for="(item ,i) in dataTop" :key="i"
                                            
                                            @click="changeClass(item, i);addDatafun(item)"
                                            >
                                            <p class="spans dis-inb">{{item.name}}</p>
                                            <span class="dis-inb ball_aid">{{item.value}}</span>
                                        </li>
                                        <div class="clearboth"></div>
                                    </ul>
                                </div>
                                <div class="danhao clearfix">
                                   <ul v-for="(item,i) in dataBot" 
                                        @click="changeClasspro(item, i);addDatafun(item)"
                                        :key="i">
                                       <li class="t">{{item.t}}</li>
                                       <li class="ball_number">
                                            <p class="spans dis-inb">{{item.name}}</p>
                                            <span class="dis-inb ball_aid">{{item.value}}</span>
                                       </li>                                     
                                    </ul> 
                                    


                                </div>

                            </div>

                        </div>
                        <div class="addtobet">
                            <button class="addtobetbtn" type="button">添加到投注列表</button>
                        </div>
                        <div class="gameBet_right l">
                            <div class="xiad-left">
                                <dl>
                                    <dd v-for="(item ,i) in textArr" :key="i">
                                        <span class="xq">
                                         {{item.name}} <b>{{item.brige}}</b>
                                        </span>
                                        <ul>
                                            <li>
                                                每注 
                                                <input type="text" size="5" class="orderprice" v-model="item.value">元
                                            </li>
                                            <li class="max_wit">
                                                每注可赢金额：
                                                <b class="order_money mark">{{item.invalfee}}</b>元
                                            </li>
                                            <li class="sc">
                                                <a @click="delDatafun(i)">X</a>
                                            </li>
                                        </ul>
                                    </dd>
                                    
                                </dl>
                            </div>
                            <div class="myzhuihao">
                                <div class="numberchoose">
                                    选择购买方式：
                                    <el-radio v-model="radio" label="1">购买</el-radio>
                                    <el-radio v-model="radio" label="2">追号</el-radio>
                                </div>
                            </div>
                            <div class="xiad-righ">
                                <el-button class="redmore" type="danger" plain v-popover:popover4>确认投注</el-button>
                                <el-button class="redmore" type="danger" plain @click="delAll">清空单号</el-button>
                                <el-button class="redmore" type="danger" plain v-popover:popover5>下注并分享</el-button>
                            </div>

                            <el-popover
                                ref="popover4"
                                placement="top"
                                width="400"
                                trigger="click">
                                <el-table :data="textArr">
                                    <el-table-column width="150" property="brige" label="大小"></el-table-column>
                                    <el-table-column width="100" property="name" label="名次"></el-table-column>
                                    <el-table-column width="300" property="invalfee" label="每注可赢金额"></el-table-column>
                                </el-table>
                            </el-popover>
                            <el-popover
                                ref="popover5"
                                placement="top"
                                width="400"
                                trigger="click">
                                <el-table :data="textArr">
                                    <el-table-column width="150" property="brige" label="大小"></el-table-column>
                                    <el-table-column width="100" property="name" label="名次"></el-table-column>
                                    <el-table-column width="300" property="invalfee" label="每注可赢金额"></el-table-column>
                                </el-table>
                            </el-popover>

                            
                        </div>
                    </div>
                </div>
                    
            </div>

        </div>
        
        <!-- <div>
            <el-button>默认按钮</el-button>
            <el-button type="primary">主要按钮</el-button>
            <el-button type="success">成功按钮</el-button>
            <el-button type="info">信息按钮</el-button>
            <el-button type="warning">警告按钮</el-button>
            <el-button type="danger">危险按钮</el-button>
        </div> -->


    </div>
</template>
<script>
export default {
  data() {
    return {
      cardId: 1,
      radio: "1",
      gridData: [],
      dataTop: [
        {
          name: "冠亚大",
          value: "2.318"
        },
        {
          name: "冠亚小",
          value: "1.877"
        },
        {
          name: "冠亚单",
          value: "1.877"
        },
        {
          name: "冠亚双",
          value: "2.318"
        }
      ],
      dataBot: [
        {
          t: "冠军",
          name: "冠军",
          value: "2.318"
        },
        {
          t: "亚军",
          name: "亚军",
          value: "1.877"
        },
        {
          t: "第三名",
          name: "第三名",
          value: "1.877"
        },
        {
          t: "第四名",
          name: "第四名",
          value: "2.318"
        },
        {
          t: "第五名",
          name: "第五名",
          value: "2.318"
        },
        {
          t: "第六名",
          name: "第六名",
          value: "1.877"
        },
        {
          t: "第七名",
          name: "第七名",
          value: "2.318"
        },
        {
          t: "第八名",
          name: "第八名",
          value: "2.318"
        },
        {
          t: "第九名",
          name: "第九名",
          value: "1.877"
        },
        {
          t: "第十名",
          name: "第十名",
          value: "2.318"
        }
      ],
      textArr: [
        {
          name: "第八名",
          brige: "大",
          value: "1.023",
          invalfee: "20.79"
        }
      ]
    };
  },
  created() {},
  mounted() {
    this.changeCard();
    this.dataTop.map(v => {
      v.currs = false;
      return v;
    });
  },
  watch: {
    radio: {
      handler() {
        if (this.radio == 2) {
          this.open2();
        }
      }
    },
    cardId:{
        handler() {
        this.textArr=[]
      }
    }
  },
  methods: {
      delAll(){
          this.textArr=[]
      },
    addDatafun(item) {
      item.brige = item.value > 2 ? "大" : "小";
      this.textArr.push({
        name: item.name,
        brige: item.brige,
        value: item.value,
        invalfee: (item.value % 2) * 10
      });
    },
    delDatafun(index) {
      this.textArr.splice(index, 1);
    },
    changeCard() {
      $(".play_select_tit li").click(function() {
        $(this)
          .addClass("curr")
          .siblings("li")
          .removeClass("curr");
      });
     
      // $(".ful .ball_number").click(function(){
      //     $(this).addClass("curr")
      // })
    },
    changeClass(item, index) {
      item.currs = !item.currs;
      $(".ful .ball_number")
        .eq(index)
        .click(function() {
          if (item.currs) {
            $(this).addClass("curr");
          } else {
            $(this).removeClass("curr");
          }
        });

      console.log(item.currs);
      console.log(this.dataTop, "this.dataTop");
    },
    changeClasspro(item, index) {
      item.currs = !item.currs;
      $(".danhao .ball_number")
        .eq(index)
        .click(function() {
          if (item.currs) {
            $(this).addClass("curr");
          } else {
            $(this).removeClass("curr");
          }
        });
    },
    open() {
      console.log(this.radio, "radio");
    },
    open2() {
      this.$alert("请选择唯一,一注追号", "追号提示", {
        confirmButtonText: "确定",
        callback: action => {
          this.radio = "1";
          // this.$message({
          //   type: 'info',
          //   message: `action: ${ action }`
          // });
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
@import url("./login.less");
</style>
<style>
</style>


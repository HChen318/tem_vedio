<template>
  <div class="vedio-wrapper">
    <div id="mse" style="height: 540px"></div>
    <div class="vedio-control">
      <button @click="bulletFlag">弹幕开关</button>
      <input type="text" name="danmu" placeholder="发个弹幕见证当下" />
      <button  @click="sendBullet">发送</button>
    </div>
  </div>
</template>

<script>
import Player from "xgplayer";

export default {
  name: "xgplayer",
  data() {
    return {
      imgurl: ""
    };
  },
  mounted() {
    this.initPlayer("http://124.70.31.157:8090/video/play?videoId=4");
  },
  methods: {
    // 设置视频配置(注意：initPlayer应放在异步函数里或mounted之后，不可在created里直接加载，否则不生效)
    initPlayer(url) {
      this.$nextTick(res => {
        this.Player = new Player({
          // el、url为必选配置，其它为可选配置
          height: 540,
          id: "mse",
          url: url,
          width: "100%",
          volume: 0.6, // 初始音量
          autoplay: false, // 自动播放
          playbackRate: [0.5, 0.75, 1, 1.5, 2], // 当前播放速度
          poster: "", //你的封面地址
          defaultPlaybackRate: 1, // 播放速度设置为1
          playsinline: true,
          // rotate: {
          //   clockwise: true,
          //   innerRotate: true
          // },
          miniplayerConfig: {
            bottom: 200,
            right: 0,
            width: 320,
            height: 180
          },
          "x5-video-player-fullscreen": true,
          "x5-video-orientation": "landscape",
          danmu: {
            comments: [
              //弹幕数组
              {
                duration: 8000, //弹幕持续显示时间,毫秒(最低为5000毫秒)
                id: "1", //弹幕id，需唯一
                start: 3000, //弹幕出现时间，毫秒
                // prior: true, //该条弹幕优先显示，默认false
                // color: true, //该条弹幕为彩色弹幕，默认false
                txt: "弹幕1111111111", //弹幕文字内容
                style: {
                  //弹幕自定义样式
                  color: "#ff9500",
                  fontSize: "20px",
                  border: "solid 1px #ff9500",
                  borderRadius: "50px",
                  padding: "5px 11px",
                  backgroundColor: "rgba(255, 255, 255, 0.1)"
                }
                // mode: "top" //显示模式，top顶部居中，bottom底部居中，scroll滚动，默认为scroll
                // el: DOM //直接传入一个自定义的DOM元素作为弹幕，使用该项的话会忽略所提供的txt
                // eventListeners: [{ //支持自定义DOM设置DOM监听事件
                //   event: 'click',
                //   listener: function (e) {
                //     console.log('click')
                //   },
                //   useCapture: false,
                // }]
              },
              {
                duration: 8000, //弹幕持续显示时间,毫秒(最低为5000毫秒)
                id: "2", //弹幕id，需唯一
                start: 3000, //弹幕出现时间，毫秒
                // prior: true, //该条弹幕优先显示，默认false
                // color: true, //该条弹幕为彩色弹幕，默认false
                txt: "弹幕222222222222222", //弹幕文字内容
                style: {
                  //弹幕自定义样式
                  color: "#ff9500",
                  fontSize: "20px",
                  border: "solid 1px #ff9500",
                  borderRadius: "50px",
                  padding: "5px 11px",
                  backgroundColor: "rgba(255, 255, 255, 0.1)"
                }
                // mode: "top" //显示模式，top顶部居中，bottom底部居中，scroll滚动，默认为scroll
                // el: DOM //直接传入一个自定义的DOM元素作为弹幕，使用该项的话会忽略所提供的txt
                // eventListeners: [{ //支持自定义DOM设置DOM监听事件
                //   event: 'click',
                //   listener: function (e) {
                //     console.log('click')
                //   },
                //   useCapture: false,
                // }]
              }
            ],
            area: {
              //弹幕显示区域
              start: 0, //区域顶部到播放器顶部所占播放器高度的比例
              end: 1 //区域底部到播放器顶部所占播放器高度的比例
            },
            // closeDefaultBtn: true //开启此项后不使用默认提供的弹幕开关，默认使用西瓜播放器提供的开关
            // defaultOff: true //开启此项后弹幕不会初始化，默认初始化弹幕
          }
        });
      });
    },
    bulletFlag() {
      this.Player.danmu.start(); //弹幕初始化并播放(内部默认已调用)
    },
    sendBullet() {
      console.log(1111);
      this.Player.danmu.sendComment({
        duration: 8000, //弹幕持续显示时间,毫秒(最低为5000毫秒)
        id: "3", //弹幕id，需唯一
        start: 3000, //弹幕出现时间，毫秒
        // prior: true, //该条弹幕优先显示，默认false
        // color: true, //该条弹幕为彩色弹幕，默认false
        txt: "发送的弹幕测试33333333", //弹幕文字内容
        style: {
          //弹幕自定义样式
          color: "#ff9500",
          fontSize: "20px",
          border: "solid 1px #ff9500",
          borderRadius: "50px",
          padding: "5px 11px",
          backgroundColor: "rgba(255, 255, 255, 0.1)"
        }
        // mode: "top" //显示模式，top顶部居中，bottom底部居中，scroll滚动，默认为scroll
        // el: DOM //直接传入一个自定义的DOM元素作为弹幕，使用该项的话会忽略所提供的txt
        // eventListeners: [{ //支持自定义DOM设置DOM监听事件
        //   event: 'click',
        //   listener: function (e) {
        //     console.log('click')
        //   },
        //   useCapture: false,
        // }]
      });
    }
  }
};
</script>

<style scoped>
.vedio-wrapper {
  width: 1000px;
  height: 540px;
}
#mse {
  height: 100%;
}
.vedio-control {
  margin-top: 20px;
}
</style>


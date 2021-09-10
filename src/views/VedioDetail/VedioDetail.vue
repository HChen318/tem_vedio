<template>
  <div style="margin-right: 10px; margin-left: 10px">
    <el-row>
      <Top-nav></Top-nav>
    </el-row>

    <div class="neirong">
      <div class="neirong-1">
        <div height="500px"></div>
        <h1>视频标题</h1>

        <p class="p-xia">
          2021-8-31 00:00:00 &nbsp;&nbsp;54.0万播放 ·
          4.9万弹幕&nbsp;&nbsp;&nbsp;
          <img
            src="./img/jin.png"
          />&nbsp;&nbsp;未经作者授权，禁止转载
        </p>
        <!-- <video
          width="1000px"
          height="540px"
          autoplay="autoplay"
          controls="controls"
          src="http://124.70.31.157:8090/video/play?videoId=4"
        />-->
        <VedioPlay></VedioPlay>
        <div id="danmup" style="left: 50%;margin-left:-400px;top:100px">hhhhhh</div>
        <div class="danmup"></div>

        <!-- <div class="shipin-xia">
          <div class="sp-1"></div>
          <div class="sp-2"></div>
          <span class="sp-3">
            <input type="button" value="弹幕开关" />
            <input type="text" name="danmu" placeholder="发个弹幕见证当下" />
            <input type="button" name="fasong" value="发送" />
          </span>
        </div> -->
        <div class="neirong-1-1">
          <ul style="list-style: none; margin-top: 30px">
            <li>
              <a href="#">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;赞</a>
            </li>
            <li>
              <a href="#">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;分享</a>
            </li>
            <li>
              <a href="#">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;设置</a>
            </li>
          </ul>
        </div>
      </div>

      <!-- 为了看结果先随便写点什么 -->
      <div class="neirong-1-3">
        <ul class="nr-biaoqian" style="height:3000px">
          <li>
            <a href="#">id</a>
            <div class="nr-xinxi">
              <!-- <p>赛博朋克2077</p> -->
              <input type="button" value="+关注" />
              <div class="ding">
                <span>顶 224</span>
                <span>踩 22</span>
              </div>
              <div class="nr-xx-1">评论内容（先留大一点位置看滚动条效果</div>
            </div>
          </li>

          <!-- <li><a href="#">+</a></li> -->
        </ul>
      </div>

      <div class="rightxuanfu">
        <div class="nr-chong">
          <div class="pl-name">
            <h3 class="czztittle">创作者信息</h3>
            <br />
            <div class="xinxi">
              <img src="./img/tx.png" class="tx" style="float: left" />
              <div class="xinxi-nr">
                <h3>user id</h3>
                <span>关注: 16</span>
                <span>粉丝: 653.6万</span>
                <br />
                <input type="button" value="已关注" id="btn-gz4" class="btn-gz" />
                <input type="button" value="发消息" class="btn-xx" />
              </div>
            </div>
            <div class="tuijian">
              <!-- 推荐视频 -->
              <div class="tjtittle">
                <!-- <p class="shuaxina" style="margin-top: 9px;">进入</p> -->
                <br />
                <h2>相关推荐</h2>
                <br />
              </div>
              <div class="tjsp">
                <div class="tjsp-xg-1">
                  <img data-lazy-src="img/neirong/recommend2.webp" class="xg-da" />
                </div>
                <div class="tjsp-xg-2">
                  <a href="#">【更新】某幻《赛博朋克2077》等了50多年,终...</a>
                  <p>某幻君</p>
                  <p>435.2万播放 · 6.5万弹幕</p>
                </div>
                <div class="tjsp-xg-1">
                  <img data-lazy-src="img/neirong/recommend2.webp" class="xg-da" />
                </div>
                <div class="tjsp-xg-2">
                  <a href="#">【更新】某幻《赛博朋克2077》等了50多年,终...</a>
                  <p>某幻君</p>
                  <p>435.2万播放 · 6.5万弹幕</p>
                </div>
                <div class="tjsp-xg-1">
                  <img data-lazy-src="img/neirong/recommend2.webp" class="xg-da" />
                </div>
                <div class="tjsp-xg-2">
                  <a href="#">【更新】某幻《赛博朋克2077》等了50多年,终...</a>
                  <p>某幻君</p>
                  <p>435.2万播放 · 6.5万弹幕</p>
                </div>
                <div class="tjsp-xg-1">
                  <img data-lazy-src="img/neirong/recommend2.webp" class="xg-da" />
                </div>
                <div class="tjsp-xg-2">
                  <a href="#">【更新】某幻《赛博朋克2077》等了50多年,终...</a>
                  <p>某幻君</p>
                  <p>435.2万播放 · 6.5万弹幕</p>
                </div>
              </div>
            </div>
            <div class="goods">
              <!-- 带货商品 -->
              <br />
              <h2>推荐商品</h2>
              <br />
              <div class="tjsp-xg-1">
                <img data-lazy-src="img/neirong/recommend2.webp" class="xg-da" />
              </div>
              <div class="tjsp-xg-2">
                <a href="#">好物</a>
                <p>价格</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="../../assets/danmu/js/jquery-2.1.4.min.js"></script>
<script src="../../assets/danmu/js/jquery.shCircleLoader.js"></script>
<script src="../../assets/danmu/js/sco.tooltip.js"></script>
<script src="../../assets/danmu/js/colpick.js"></script>
<script src="../../assets/danmu/js/jquery.danmu.js"></script>
<script src="../../assets/danmu/js/main.js"></script>
<script>
import $ from "jquery";
window.jquery = $;
import TopNav from "../../components/nav/topNav.vue";
import VedioPlay from "../VedioDetail/components/vedioPlay.vue";
import "../../assets/danmu/css/bootstrap.css";
import "../../assets/danmu/css/colpick.css";
import "../../assets/danmu/css/main.css";
import "../../assets/danmu/css/scojs.css";
// import {foo} from '../../assets/danmu/js/fun'
// foo();
export default {
  name: "VedioDetail",
  mounted() {},
  components: {
    TopNav,
    VedioPlay
  }
};
</script>

<style scoped>
.czztittle {
  font-size: 20px;
  /* height: 60px; */
}
.tjsp-xg-1 {
  width: 141px;
  height: 80px;
  float: left;
  position: relative;
}
.tjsp-xg-1 .xg-da {
  width: 141px;
  height: 80px;
}

.tjsp-xg-1:hover .xg-da {
  filter: brightness(70%);
  -webkit-filter: brightness(70%);
}
.tjsp-xg-1 span {
  position: absolute;
  left: 8px;
  bottom: 2px;
  color: #ffffff;
  font-size: 12px;
  display: none;
}
.tjsp-xg-1:hover span {
  display: block;
}

.shuaxina {
  width: 74px;
  height: 26px;
  line-height: 26px;
  margin-left: 142px;
  margin-top: 15px;
  text-align: center;
  border: 1px solid #00a1d6;
  border-radius: 4px;
  color: #00a1d6;
  font-size: 12px;
}
.xinxi {
  /* float:left; */
  position: relative;
  left: 10px;
}

.rightxuanfu {
  width: 450px;
  height: 700px;
  background-color: white;
  position: absolute;
  top: 55px;
  right: 15px;
}

.neirong .neirong-1 .neirong-1-1 ul li:nth-child(1) {
  background: url(./img/s1.png) no-repeat 0px center;
  display: inline;
  line-height: 40px;
  /* background-size: 100% 100%; */
}

.neirong .neirong-1 .neirong-1-1 ul li:nth-child(2) {
  background: url(./img/s7.png) no-repeat 0px center;
  display: inline;
  line-height: 40px;
  position: relative;
}
.neirong .neirong-1 .neirong-1-1 ul li:nth-child(3) {
  background: url(./img/sp-1.png) no-repeat 0px center;
  display: inline;
  line-height: 40px;
  position: relative;
}
.neirong .neirong-1 .neirong-1-1 ul li:nth-child(1):hover {
  background: url(./img/s2.png) no-repeat 1px center;
  display: inline;
  line-height: 40px;
}

.neirong .neirong-1 .neirong-1-1 ul li:nth-child(2):hover {
  background: url(./img/s8.png) no-repeat 0px center;
  display: inline;
  line-height: 40px;
}
.neirong .neirong-1 .neirong-1-1 ul li:nth-child(3):hover {
  background: url(./img/sp-2.png) no-repeat 0px center;
  display: inline;
  line-height: 40px;
}
.neirong .neirong-1 .neirong-1-1 ul li a {
  color: #505050;
  font-size: 14px;
}
.neirong .neirong-1 .neirong-1-1 ul li:hover a {
  color: #00a1d6;
}
</style>

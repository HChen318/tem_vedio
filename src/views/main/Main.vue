<template>
  <!-- <el-container style="height: 500px; border: 1px solid #eee"> 这一句可以设置高度鼠标滚动-->
  <el-container>
    <el-aside width="200px">
      <div class="logo">
        <img src="../../assets/logo.png"
             style="align-items:center"></img>
      </div>
      <div style="text-align:center">加壹视频</div>
      <el-menu default-active="2"
               class="el-menu-vertical-demo"
               @open="handleOpen"
               @close="handleClose"
               style="border-right: 0">
        <!-- 事件展开\收起指定的submenu -->
        <el-menu-item index="/demo"
                      @click="jumpTo('/demo')">

          <span class="iconfont icon-home"
                slot="title">首页</span>
        </el-menu-item>
        <el-menu-item index="/demo"
                      @click="jumpTo('/demo')">
          <span class="iconfont icon-remen1"
                slot="title">热门UP主</span>
        </el-menu-item>
        <el-menu-item index="/index"
                      @click="jumpTo('/index')">
          <span class="iconfont icon-remen"
                slot="title">热门视频</span>
        </el-menu-item>
        <el-menu-item index="/index"
                      @click="jumpTo('/index')">
          <span class="iconfont icon-huaban"
                slot="title">娱乐</span>
        </el-menu-item>
        <el-menu-item index="/index"
                      @click="jumpTo('/index')">
          <span class="iconfont icon-zhishi"
                slot="title">知识</span>
        </el-menu-item>
        <el-menu-item index="/index"
                      @click="jumpTo('/index')">
          <span class="iconfont icon-dongman"
                slot="title">二次元</span>
        </el-menu-item>
        <el-menu-item index="/index"
                      @click="jumpTo('/index')">
          <span class="iconfont icon-shuben"
                slot="title">学习</span>
        </el-menu-item>
        <el-menu-item index="/index"
                      @click="jumpTo('/index')">
          <span class="iconfont icon-lanqiu"
                slot="title">体育</span>
        </el-menu-item>
        <el-menu-item index="/index"
                      @click="jumpTo('/index')">
          <span class="iconfont icon-yinyue"
                slot="title">音乐</span>
        </el-menu-item>
        <el-menu-item index="/index"
                      @click="jumpTo('/index')">
          <span class="iconfont icon-all"
                slot="title">其他</span>
        </el-menu-item>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header>
        <el-col :span="12">
          <el-input placeholder="请输入内容"
                    prefix-icon="el-icon-search"
                    v-model="input">
          </el-input>
        </el-col>
        <el-col :span="9">
          <el-menu :default-active="defaultActiveIndex"
                   class="el-menu-demo"
                   mode="horizontal"
                   @select="handleSelect"
                   :router="true">
            <el-menu-item index="/enterpriseManager">动态</el-menu-item>
            <el-menu-item index="/Forum">论坛</el-menu-item>
            <el-menu-item index="/systemManager">历史</el-menu-item>
            <el-menu-item index="/systemManager">消息</el-menu-item>
            <el-menu-item index="/systemManager">发布</el-menu-item>
          </el-menu>

        </el-col>
        <el-col :span="2"
                class="touxiang"
                @click="jumpTo('/user')">
          <el-avatar shape="circle">user</el-avatar>
          <!-- <span>用户名</span> -->
        </el-col>
        <el-col :span="1">
          <div class="topbar-account topbar-btn">
            <el-dropdown trigger="click">
              <i class="el-icon-setting"
                 style="margin-right: 15px"></i>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>
                  <div @click="jumpTo('/user')"><span style="color: #555;font-size: 14px;">个人中心</span></div>
                </el-dropdown-item>
                <!-- <el-dropdown-item>
                  <div @click="jumpTo('/user/changepwd')"><span style="color: #555;font-size: 14px;">修改密码</span></div>
                </el-dropdown-item> -->
                <el-dropdown-item divided
                                  @click.native="logout">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-col>
        <!-- <el-col :span="1">
          <el-dropdown>
            <i class="el-icon-setting"
               style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人中心</el-dropdown-item>
              <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col> -->
      </el-header>

      <el-main>
        <div>
          <video :preload="preload"
                 :poster="videoImg"
                 :height="height"
                 :width="width"
                 align="center"
                 :controls="controls"
                 :autoplay="autoplay">
            <source :src="videoSrc"
                    type="video/mp4">
          </video>
        </div>
        <span @click='jumpTo("/VedioDetail")'>视频详情</span>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { road } from '../../road.js'
export default {
  data () {
    return {
      input: '',
      videoSrc: 'http://124.70.31.157:8090/video/video_detail?videoId=4',
      videoImg: '../../../../static/full_res.jpg',
      playStatus: '',
      muteStatus: '',
      isMute: true,
      isPlay: false,
      width: '820', // 设置视频播放器的显示宽度（以像素为单位）
      height: '500', // 设置视频播放器的显示高度（以像素为单位）
      preload: 'auto', //  建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
      controls: true, // 确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
      autoplay: '',
    };
  },
  created () {
    road.$on('goto', (url) => {
      if (url === "/login") {
        localStorage.removeItem('access-user');
        this.$router.push(url);
      }
    });
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath);
    },
    handleSelect (index) {
      this.defaultActiveIndex = index;
    },
    goTo (path) {
      this.$router.replace(path);
    },
    jumpTo (url) {
      this.$router.push(url); //用go刷新
    },
    logout () {
      //logout
      this.$confirm('确认退出吗?', '提示', {
        confirmButtonClass: 'el-button--warning'
      }).then(() => {
        //确认
        localStorage.removeItem('access-user');
        road.$emit('goto', '/login');
      }).catch(() => { });
    }
  }
};
</script>

<style scoped>
.el-aside {
  /* background-color: rgb(238, 241, 246); */
  /* background-image: url(../../assets/img/菜单栏地图.png); */
  border-right: 1px solid #dfe0e0;
  color: #333;
  font-size: 20px;
}
.logo {
  /* width: 100px;
  height: 100px;
  vertical-align: middle;
  display: table-cell; */
  text-align: center;
}

.el-header {
  /* background-color: #dfe0e0; */
  text-align: right;
  font-size: 15px;
  border-bottom: 1px solid #dfe0e0;
  color: #333;
  line-height: 60px;
}

.el-menu-demo {
  transform: translateX(35%);
}

.touxiang {
  text-align: right;
  transform: translateX(10%) translateY(13%);
}
</style>
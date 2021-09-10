<template>
  <el-container>
    <!-- 侧栏:个人信息、关注列表、话题 -->
    <el-aside width="250px">
      <!-- logo -->
      <div class="logo">
        <img src="../../assets/logo.png"
             style="align-items:center"></img>
      </div>

      <!-- 用户信息card -->
      <el-card :body-style="{ padding: '20px' }">
        <el-row>
          <el-col :span="12">
            <div>
              <el-avatar icon="el-icon-user-solid"
                         :size="70"></el-avatar>
            </div>
          </el-col>
          <el-col :span="12">
            <div><span class="nicheng">昵称</span></div>
            <div><span class="geqian">分享我的生活</span></div>
          </el-col>
        </el-row>

        <el-row :body-style="{ padding: '10px' }">
          <el-col :span="8">
            <a href="#"
               class="friends_item"
               @click='goTo("/Order")'
               :class="{'on':'/Order'==this.$route.path}">
              <span>关注</span>
            </a>
            <div>100</div>
          </el-col>
          <el-col :span="8">
            <a href="#"
               class="friends_item"
               @click='goTo("/Order")'
               :class="{'on':'/Order'==this.$route.path}">
              <span>粉丝</span>
            </a>
            <div>100</div>
          </el-col>
          <el-col :span="8">
            <a href="#"
               class="friends_item"
               @click='goTo("/Order")'
               :class="{'on':'/Order'==this.$route.path}">
              <span>动态</span>
            </a>
            <div>100</div>
          </el-col>
        </el-row>

      </el-card>

      <!-- 这是一条分割线，css待调 -->
      <!-- <el-divider></el-divider> -->

      <!-- 话题 -->
      <el-card :body-style="{ padding: '10px' }">
        <div class="huati_title">热门话题</div>
        <div>
          <a href="#"
             class="guide_item"
             @click='goTo("/Order")'
             :class="{'on':'/Search'==this.$route.path}">
            <span>#知识分享官#</span>
          </a>
        </div>

        <div>
          <a href="#"
             class="guide_item"
             @click='goTo("/Order")'
             :class="{'on':'/Search'==this.$route.path}">
            <span>#我的夏日记录#</span>
          </a>
        </div>

        <div>
          <a href="#"
             class="guide_item"
             @click='goTo("/Order")'
             :class="{'on':'/Search'==this.$route.path}">
            <span>#记录片每日上新#</span>
          </a>
        </div>

        <div>
          <a href="#"
             class="guide_item"
             @click='goTo("/Order")'
             :class="{'on':'/Search'==this.$route.path}">
            <span>#皇权富贵#</span>
          </a>
        </div>
      </el-card>

      <!-- 这是一条分割线，css待调 -->
      <!-- <el-divider></el-divider> -->

      <!-- 列表 -->
      <el-card :body-style="{ padding: '20px' }">
        <div>
          <i class="el-icon-notebook-1"></i>
          <a href="#"
             class="guide_item"
             @click='goTo("/Order")'
             :class="{'on':'/Search'==this.$route.path}">
            <span>全部关注</span>
          </a>
        </div>

        <div>
          <i class="el-icon-circle-check"></i>
          <a href="#"
             class="guide_item"
             @click='goTo("/Order")'
             :class="{'on':'/Search'==this.$route.path}">
            <span>互相关注</span>
          </a>
        </div>

        <div>
          <i class="el-icon-star-off"></i>
          <a href="#"
             class="guide_item"
             @click='goTo("/Order")'
             :class="{'on':'/Search'==this.$route.path}">
            <span>特别关心</span>
          </a>
        </div>

        <!-- 这是一条分割线，css待调 -->
        <el-divider></el-divider>

        <!-- <div style="color: #FFFFFF">  konghang </div> -->

        <div>
          <i class="el-icon-star-off"></i>
          <a href="#"
             class="guide_item"
             @click='goTo("/Order")'
             :class="{'on':'/Search'==this.$route.path}">
            <span>全部社区</span>
          </a>
        </div>

        <div>
          <i class="el-icon-star-off"></i>
          <a href="#"
             class="guide_item"
             @click='goTo("/Order")'
             :class="{'on':'/Search'==this.$route.path}">
            <span>我加入的社区</span>
          </a>
        </div>

        <div>
          <i class="el-icon-star-off"></i>
          <a href="#"
             class="guide_item"
             @click='goTo("/Order")'
             :class="{'on':'/Search'==this.$route.path}">
            <span>我创建的社区</span>
          </a>
        </div>

      </el-card>
    </el-aside>

    <el-container>
      <!-- 顶栏NAVBAR -->
      <el-header style="text-align: right; font-size: 15px">
        <el-col :span="6">
          <el-input placeholder="请输入内容"
                    prefix-icon="el-icon-search"
                    v-model="input">
          </el-input>
        </el-col>
        <el-col :span="10">
          <footer class="footer_guide">
            <a href="#"
               class="guide_item"
               @click='goTo("/")'>
              <span>动态</span>
            </a>

            <a href="#"
               class="guide_item"
               @click='goTo("/Forum")'
               :class="{'on':'/Search'==this.$route.path}">
              <span>论坛</span>
            </a>

            <a href="#"
               class="guide_item"
               @click='goTo("/Order")'
               :class="{'on':'/Order'==this.$route.path}">
              <span>历史</span>
            </a>

            <a href="#"
               class="guide_item"
               @click='goTo("/Profile")'
               :class="{'on':'/Profile'==this.$route.path}">
              <!-- <span>
                <i class="iconfont icon-geren"></i>
              </span> -->
              <span>发布</span>
            </a>
          </footer>
        </el-col>
        <el-col :span="4"
                class="touxiang">
          <el-avatar shape="circle">user</el-avatar>
          <span>用户名</span>
        </el-col>
        <el-dropdown>
          <i class="el-icon-setting"
             style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>

      <!-- 帖子浏览区 -->
      <el-main width="500px">
        <!-- <card v-for="(post, index) in store.state.posts" :key="index">
              {{ post.title }} 
      </card> -->

        <!-- 静态展示一些帖子 -->
        <el-card :body-style="{ padding: '20px' }"
                 class="tiezi">
          <el-row width="100px">
            <el-col :span="3">
              <div>
                <el-avatar icon="el-icon-user-solid"
                           :size="50"></el-avatar>
              </div>
            </el-col>
            <el-col :span="8">
              <div><span class="nicheng">樱桃丸子</span></div>
              <div><span class="time">2021年9月6日 10：20分</span></div>
            </el-col>
          </el-row>
          <div class="wenan">上岸老学长怎么劝，都非要自己去踩雷。可不能再这么玩了！上期节目依然收藏>点赞。本期点赞1000+ 会分享《英一写作大作文，分类话题统计表》点赞吸引力法则，咱们一起，越来越好！</div>
          <img src="../../assets/img/forum/forum-test2.png"
               class="image-test"></img>

          <!-- 点赞评论转发 -->
          <el-row>
            <el-col :span="8">
              <div>
                <i class="el-icon-star-off"></i>
                <span>100</span>
              </div>
            </el-col>
            <el-col :span="8">
              <div>
                <i class="el-icon-chat-dot-square"></i>
                <span>100</span>
              </div>
            </el-col>
            <el-col :span="8">
              <div>
                <i class="el-icon-share"></i>
                <span>100</span>
              </div>
            </el-col>
          </el-row>
        </el-card>

        <el-card :body-style="{ padding: '20px' }"
                 class="tiezi">
          <el-row width="100px">
            <el-col :span="3">
              <div>
                <el-avatar icon="el-icon-user-solid"
                           :size="50"></el-avatar>
              </div>
            </el-col>
            <el-col :span="8">
              <div><span class="nicheng">樱桃丸子</span></div>
              <div><span class="time">2021年9月6日 9：18分</span></div>
            </el-col>
          </el-row>
          <div class="wenan">谜之声正在探访《山海旅人》的开发团队~快来看看吧~</div>
          <img src="../../assets/img/forum/forum-test3.png"
               class="image-test"></img>

          <!-- 点赞评论转发 -->
          <el-row>
            <el-col :span="8">
              <div>
                <i class="el-icon-star-off"></i>
                <span>100</span>
              </div>
            </el-col>
            <el-col :span="8">
              <div>
                <i class="el-icon-chat-dot-square"></i>
                <span>100</span>
              </div>
            </el-col>
            <el-col :span="8">
              <div>
                <i class="el-icon-share"></i>
                <span>100</span>
              </div>
            </el-col>
          </el-row>
        </el-card>

      </el-main>
    </el-container>

  </el-container>
</template>


<script>
// import { store } from "../../store/store";
// import Card from '../../components/forum/Card.vue'


// export default {
//   // components: {
//   //   //   Card
//   //   // },

//   //   // setup() {
//   //   //     store
//   //   // }
//   // }
</script>

<style scoped>
.el-aside {
  /* background-color: rgb(238, 241, 246); */
  /* background-color: #b3c0d1; */
  /* font-size: 20px; */
}

.logo {
  /* color: yellow;
  font-size: 35px; */
  text-align: center;
}

.guide_item {
  margin: 10px;
  font-size: 20px;
  text-align: right;
}

.nicheng {
  /* margin: 5px; */
  line-height: 1.5;
  font-size: 20px;
}

.geqian {
  line-height: 1.5;
  font-size: 12px;
}

.friends_item {
  font-size: 15px;
  text-align: center;
}

.huati_title {
  font-size: 20px;
  padding: 20px;
}

.el-header {
  width: 100%;
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

/* 帖子card */
.cards {
  width: 600px;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
}

.tiezi {
  width: 600px;
}

.time {
  line-height: 1.5;
  font-size: 12px;
}

.wenan {
  line-height: 1.5;
  font-size: 16px;
}

.image-test {
  width: 100%;
  display: block;
  padding: 10px;
}

.touxiang {
  text-align: right;
  /* transform: translateX(0%) translateY(0%); 可以细调*/
}
</style>
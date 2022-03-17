<template>
  <div class="main-content">
    <div
      class="cover-img container-fluid"
      style="
        background-image: url(https://source.unsplash.com/hM_mLTS1OxI/1600x900);
      "
    >
      <!-- <span style="font-size: 8rem; line-height: 18rem">Ảnh bìa</span> -->
      <!-- <img src="@/assets/content/bg.png" alt="" /> -->
    </div>
    <div class="container-fluid">
      <div class="item left-side">
        <div class="fixed">
          <div class="user-infor">
            <div class="avatar">
              <img :src="require('@/assets/content/ava.jpg')" alt="" />
            </div>

            <h5 class="display-name">
              {{ user.name }}
            </h5>
            <!-- <p class="username">@username</p>
            <div class="bio">#Goodvibes_goodlife</div> -->
            <button class="btn btn-update" @click="showInfor">
              <i class="fas fa-edit"></i>
              &nbsp; &nbsp; Chỉnh sửa hồ sơ
            </button>
            <ul>
              <li>Đang theo dõi: {{ user.followed_count }}</li>
              <li>Người theo dõi: {{ user.follower_count }}</li>
            </ul>
            <p>Thành viên kể từ: {{ user.created_at }}</p>
            <!-- <div class="stats">
              <ul>
                <li>
                  <div>Followers</div>
                  <div>0</div>
                </li>
                <li>
                  <div>Following</div>
                  <div>0</div>
                </li>
                <li>
                  <div>Spiders</div>
                  <div>0</div>
                </li>
              </ul>
            </div> -->
          </div>
          <!-- <div class="donate">
            <h5>Donate</h5>
            <p>
              Nếu muốn ủng hộ tác giả, các bạn có thể làm theo hướng dẫn sau.
            </p>
            <button class="btn btn-donate">Donate</button>
          </div> -->
        </div>
      </div>
      <div class="item"></div>
      <div class="item right-side">
        <div class="content">
          <ul>
            <li>
              <button>Bài viết</button>
            </li>
            <li>
              <button>Bài viết đã lưu</button>
            </li>
            <li>
              <button>Nháp</button>
            </li>
            <li>
              <button>∙∙∙</button>
            </li>
          </ul>
          <!-- <div class="prominent">
            <ul>
              <li>
                <Post
                  :re_style_display="'display:inline-block;'"
                  :re_style_ul="'margin-left:-3vw;'"
                  :re_style_li="'margin-top:0.5rem;'"
                  :re_style_show="'display: none;'"
                  :src="'test-size.jpg'"
                />
              </li>
              <li>
                <Post
                  :re_style_display="'display:inline-block;'"
                  :re_style_ul="'margin-left:-3vw;'"
                  :re_style_li="'margin-top:0.5rem;'"
                  :re_style_show="'display: none;'"
                  :src="'test-size.jpg'"
                />
              </li>
            </ul>
          </div> -->
          <div class="all-post">
            <!-- https://vuejsexamples.com/a-simple-lazy-load-list-component-based-vue-2/ -->
            <!-- https://learnvue.co/2020/09/a-quick-vue3-infinite-scrolling-component-daily-vue-tips-4/ -->
            <div>
              <!-- <transition name="fade">
                  <div class="loading" v-show="loading">
                    <span class="fa fa-spinner fa-spin"></span> Loading
                  </div>
                </transition> -->
              <ul id="lazyLoad">
                <li
                  v-for="(post, index) of posts"
                  :key="index"
                  ref="scrollComponent"
                >
                  <!-- <Post
                    :re_style_img="'height: 18rem'"
                    :re_style_li="'margin-top:1.4rem;'"
                    :re_style_detail="'display: none;'"
                    :re_style_detail_p="'margin-left: -4rem;'"
                    :src="post.src"
                  /> -->
                  <Post
                    :src="post.poster"
                    :title="post.title"
                    :url="'/read/' + post.slug"
                    :re_style_img="'width: 73rem; height: 46rem;'"
                    :re_style_show="'display: none;'"
                  />
                </li>
                <!-- <li>
                    <Post
                      :re_style_img="'height: 18rem'"
                      :re_style_li="'margin-top:1.4rem;'"
                      :re_style_detail="'display: none;'"
                      :re_style_detail_p="'margin-left: -4rem;'"
                      :src="'test-size.jpg'"
                    />
                  </li>
                  <li>
                    <Post
                      :re_style_img="'height: 18rem'"
                      :re_style_li="'margin-top:1.4rem;'"
                      :re_style_detail="'display: none;'"
                      :re_style_detail_p="'margin-left: -4rem;'"
                      :src="'test-size.jpg'"
                    />
                  </li>
                  <li>
                    <Post
                      :re_style_img="'height: 18rem'"
                      :re_style_li="'margin-top:1.4rem;'"
                      :re_style_detail="'display: none;'"
                      :re_style_detail_p="'margin-left: -4rem;'"
                      :src="'test-size.jpg'"
                    />
                  </li>
                  <li>
                    <Post
                      :re_style_img="'height: 18rem'"
                      :re_style_li="'margin-top:1.4rem;'"
                      :re_style_detail="'display: none;'"
                      :re_style_detail_p="'margin-left: -4rem;'"
                      :src="'test-size.jpg'"
                    />
                  </li> -->
                <!-- <li class="loader"></li> -->
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Post from "@/components/body/post/post.vue";
import getPosts from "@/api/getPosts";
// import { Hooper, Slide } from 'hooper';
// import 'hooper/dist/hooper.css';
export default {
  name: "MainContent",
  components: {
    Post,
    // Hooper,
    // Slide
  },
  data() {
    // return { posts: [] };
  },
  created() {
    this.$store.dispatch("getPost");
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    posts() {
      return this.$store.state.posts;
    },
  },
  mounted() {
    this.posts = getPosts(0, 5);
    console.log(this.posts);
    window.addEventListener("scroll", this.handleScroll);
    // const handleScroll = () => {
    //   console.log(this.$refs.scrollComponent);
    //   let element = this.$refs.scrollComponent;
    //   console.log(element);
    //   // if (element.getBoundingClientRect().bottom < window.innerHeight) {
    //   //   console.log("loadmore");
    //   // }
    // };
  },
  methods: {
    handleScroll() {
      //let ele = document.getElementById("lazyLoad");
      // if (ele.getBoundingClientRect().bottom < window.innerHeight) {
      //   console.log(getPosts(this.posts.length, this.posts.length + 5));
      //   this.posts.push(...getPosts(this.posts.length, this.posts.length + 5));
      // }
    },
  },
};
</script>

<style scoped>
.main-content {
  font-size: 1.5rem;
  margin-top: 5rem;
}
.main-content .container-fluid:nth-child(2) {
  max-width: 100%;
  /* padding: 0;
  margin: 0; */
  display: grid;
  grid-template-columns: 50rem 15rem 50rem;
  justify-content: center;
  margin-left: -15rem;
}
.body {
  height: 100%;
}
.body > ul {
  display: flex;
  padding-left: 0;
}
.body > ul li {
  margin-right: 2rem;
}
.cover-img {
  border: 1px solid #f0eded;
  height: 47rem;
  background: #bdbdbd;
  overflow: hidden;
  padding: 0;
  background-repeat: no-repeat;
  background-size: cover;
}
.cover-img img {
  object-fit: cover;
  /* transform: translateY(-30%); */
}
.fixed {
  /* float: left; */
  position: -webkit-sticky;
  position: sticky;
  left: 1rem;
  top: 35rem;
  transform: translate(1rem, -20rem);
  /* position: fixed; */
  /* left: 16rem;
        top: 15rem; */
}
.user-infor {
  border: 1px solid #f0eded;
  /* box-shadow: 0.5rem 0.5rem 0.5rem #b7b5b5; */
  display: inline-block;
  width: 40rem;
  overflow: hidden;
  background: white;
}
.avatar {
  width: 20rem;
  height: 20rem;
  border-radius: 10rem;
  border: 1px solid;
  display: inline-block;
  margin-top: 3rem;
  overflow: hidden;
}
.avatar img {
  object-fit: cover;
  height: 100%;
  width: 100%;
}
.display-name {
  font-size: 2rem;
  font-weight: 600;
  margin: 1rem 0;
}
.btn-update {
  margin: 2rem 0;
  font-size: 1.7rem;
  background: #c4c4c4;
  padding: 1rem 6rem;
  border-radius: 2rem;
  font-weight: 600;
}
.user-infor ul {
  font-size: 1.7rem;
  font-weight: 600;
  text-align: left;
  margin-bottom: 5rem;
}
.user-infor ul li {
  margin: 1rem 0 1rem 5rem;
}
.stats ul {
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 3rem;
}
.stats ul li {
  flex-shrink: 1;
  flex-basis: calc(100% / 3);
  margin: 0;
}
.donate {
  border: 1px solid #f0eded;
  margin-top: 1rem;
  box-shadow: 0.5rem 0.5rem 0.5rem #b7b5b5;
  width: 30rem;
}
.content {
  /* float: right; */
  width: 75rem;
}
.content ul {
  display: flex;
  margin: 1rem 0;
  /* flex-wrap: wrap; */
  /* box-shadow: 0.2rem 0.5rem 0.5rem #b7b5b5; */
}
.content ul li {
  flex-grow: 1;
  margin: 1rem 0;
}
.content ul li button {
  border-bottom: 2px solid transparent;
  font-size: 1.8rem;
  font-weight: 600;
}
.content ul li:hover button {
  border-bottom: 2px solid black;
}
.content .banner {
  margin: 2rem 0;
  height: 3rem;
}
.content .banner h5 {
  float: left;
  font-size: 1.6rem;
}
.content .banner button {
  float: right;
}
.content .prominent {
  text-align: start;
}
.donate h5 {
  text-align: left;
  font-size: 1.7rem;
  margin: 1rem 0 0 2rem;
  font-weight: 600;
}
.donate p {
  font-size: 1.3rem;
  margin-top: 1.5rem;
}
.btn-donate {
  margin: 1rem 0;
  font-size: 1.3rem;
  border-radius: 1rem;
  background: #7cac86;
}
.prominent ul {
  margin-left: -8rem;
  box-shadow: none;
}
.prominent ul li {
  width: 35rem;
}
.all-post ul {
  display: inline-block;
  text-align: start;
  margin-left: -8rem;
  box-shadow: none;
}
/* .username{

    }
    .bio{

    } */
.loader {
  display: inline-block;
  margin-left: 50%;
  border: 3px solid #f3f3f3;
  border-top: 3px solid #000000;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

<template>
  <div id="mainContent" class="container-fluid">
    <div class="item"></div>
    <div class="item">
      <h2>Bài viết mới</h2>

      <div class="scroll" @scroll="handleScroll('newPost')">
        <ul class="main-left" id="newPost">
          <li v-for="(post, index) of posts" :key="index">
            <Post
              :src="post.src"
              :title="post.title"
              :re_style_img="'width:35rem; height: 22rem'"
              :re_style_post="'max-width:35rem;'"
            />
          </li>
        </ul>
      </div>
    </div>
    <div class="item main-right">
      <h2>Tin tức</h2>
      <div class="scroll" @scroll="handleScroll('news')">
        <ul id="news">
          <li v-for="(postNew, index) of postNews" :key="index">
            <Post
              :src="postNew.src"
              :title="postNew.title"
              :re_style_title="'font-size:1.8rem; font-weight:600'"
              :re_style_detail="'display:none;'"
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Post from "@/components/body/post/post.vue";

import getPosts from "@/api/getPosts.js";
export default {
  name: "MainContent",
  data() {
    return { posts: [], postNews: [] };
  },
  components: {
    Post,
    // Pagination,
  },
  created() {
    this.posts = getPosts(4, 12);
    this.postNews = getPosts(12, 20);
    console.log(this.posts);
    console.log(this.news);
  },
  mounted() {
    console.log("Main content");
  },
  methods: {
    showScrollBar() {
      window.onmouseover = (e) => {
        console.log(e.target);
      };
    },
    handleScroll(element) {
      // let ele = this.$refs.scrollComponent;
      let ele = document.getElementById(element);
      if (ele.getBoundingClientRect().bottom < window.innerHeight) {
        // this.loading = true;
        setTimeout(() => {
          if (element == "newPost") {
            console.log(getPosts(this.posts.length, this.posts.length + 5));
            this.posts.push(
              ...getPosts(this.posts.length, this.posts.length + 5)
            );
          } else if (element == "news") {
            console.log(getPosts(this.posts.length, this.posts.length + 5));
            this.postNews.push(
              ...getPosts(this.postNews.length, this.postNews.length + 5)
            );
          }
          // this.loading = false;
        }, 200);
      }
    },
  },
};
</script>

<style  scoped>
#mainContent {
  text-align: left;
  font-size: 2rem;
  margin-top: 10rem;
}
.container-fluid {
  display: grid;
  grid-template-columns: 10rem 90rem 50rem;
  justify-content: center;
  /* margin-left: 5rem; */
}
.item {
  /* border: 1px solid black; */
  max-height: 50rem;
}
.item h2 {
  margin-bottom: 3rem;
}
.main-left {
  display: grid;
  grid-template-columns: 39.5rem 39.5rem;
}
.scroll {
  width: 90.5%;
  height: 100%;
  overflow: auto;
}
.scroll::-webkit-scrollbar-thumb {
  color: transparent !important;
}
/* .item.main-left .sub-item {
  border: 1px solid black;
} */
</style>
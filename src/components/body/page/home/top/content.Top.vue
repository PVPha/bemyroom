<template>
  <div id="topContent" class="container-fluid">
    <div class="item"></div>
    <div class="item">
      <h2>Bài viết nổi bật</h2>
      <Post
        :src="'unsplash1.jpg'"
        :title="'Truyện (có thể) là nhiều kỳ về đội ngũ Tiếp Thị Số của...'"
        :re_style_img="'width: 73rem; height: 46rem'"
      />
    </div>
    <div class="item top-left">
      <h2>Đừng bỏ lỡ</h2>
      <!-- <md-app md-waterfall md-mode="fixed">
        <md-app-content>
          <ul>
            <li v-for="(post, index) of posts" :key="index">
              <Post :src="post.src" :title="post.title" />
            </li>
          </ul>
        </md-app-content>
      </md-app> -->
      <div class="scroll">
        <ul>
          <li v-for="(post, index) of posts" :key="index">
            <Post :src="post.src" :title="post.title" />
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
  name: "topContent",
  components: {
    Post,
  },
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    this.posts = getPosts(0, 4);
    console.log(this.posts);
    console.log("top content");
  },
};
</script>

<style  scoped>
#topContent {
  text-align: left;
  font-size: 2rem;
}
.container-fluid {
  display: grid;
  grid-template-columns: 10rem 90rem 50rem;
  justify-content: center;
  margin-top: 4rem;
  /* margin-left: 5rem; */
}
.item {
  /* border: 1px solid black; */
  max-height: 60rem;
}
.item h2 {
  margin-bottom: 3rem;
}
.scroll {
  width: 90.5%;
  height: 100%;
  overflow: auto;
}
.scroll::-webkit-scrollbar-thumb {
  color: transparent !important;
}
/* .top-left .md-app {
  max-height: 100%;
}
.top-left .md-app .md-content {
  border-left-color: transparent;
  border-right-color: transparent;
}
.md-scrollbar::-webkit-scrollbar {
  display: none !important;
} */
</style>
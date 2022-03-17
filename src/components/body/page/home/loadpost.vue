<template>
  <div id="Loadpost" class="container-fluid">
    <div class="item"></div>
    <div class="item">
      <h2>Bài viết mới</h2>

      <div
        class="left-scroll"
        @scroll="handleScroll('.left-scroll', 'newPost')"
      >
        <ul class="main-left" id="newPost">
          <li v-for="(post, index) of posts" :key="index">
            <Post
              :src="post.poster"
              :title="''"
              :url="'/read/'"
              :re_style_img="'width:35rem; height: 22rem'"
              :re_style_post="'max-width:35rem;'"
            />
          </li>
        </ul>
      </div>
    </div>
    <div class="item main-right">
      <h2>Tin tức</h2>
      <!-- @scroll="handleScroll('.right-scroll', 'news')" -->
      <transition>
        <div class="right-scroll">
          <ul id="news">
            <li v-for="(postNew, index) of postNews" :key="index">
              <Post
                :src="postNew.poster"
                :title="''"
                :url="'/read/'"
                :re_style_title="'font-size:1.8rem; font-weight:600'"
                :re_style_detail="'display:none;'"
              />
            </li>
          </ul>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import Post from "@/components/body/post/post.vue";

//import getPosts from "@/api/getPosts.js";
export default {
  name: "Loadpost",
  data() {
    // return { posts: [], postNews: [] };
  },
  components: {
    Post,
  },
  computed: {
    posts() {
      return this.$store.state.listPost;
    },
    postNews() {
      return this.$store.state.listPost;
    },
    page() {
      return this.$store.state.page;
    },
  },
  created() {
    // this.posts = getPosts(4, 12);
    // this.postNews = getPosts(12, 20);
  },
  mounted() {
    console.log("Main");
    // document.onreadystatechange = () => {
    //   if (document.readyState == "complete") {
    //     console.log("main completed");
    //     // this.$emit("loaded", "True");
    //   }
    // };
  },
  methods: {
    showScrollBar() {
      window.onmouseover = (e) => {
        console.log(e.target);
      };
    },
    handleScroll(wrap_ele, element) {
      // let ele = this.$refs.scrollComponent;
      let ele = document.getElementById(element);
      let wrap = document.querySelector(wrap_ele);
      console.log(
        "ele" +
          ele.getBoundingClientRect().bottom +
          "  wrap" +
          wrap.getBoundingClientRect().bottom
      );
      if (
        ele.getBoundingClientRect().bottom <
        wrap.getBoundingClientRect().bottom + 0.5
      ) {
        if (this.page.next_page_url != null) {
          this.$store
            .dispatch("loadMorePost", this.page.next_page_url)
            .then(() => {
              console.log("load success");
              // this.posts.push(...this.$store.state.listPost.data);
            });
        }
        // this.loading = true;
        // setTimeout(() => {
        //   if (this.page.next_page_url != null) {
        //     this.$store
        //       .dispatch("loadMorePost", this.page.next_page_url)
        //       .then(() => {
        //         console.log("load success");
        //         // this.posts.push(...this.$store.state.listPost.data);
        //       });
        //   }
        //   // this.loading = false;
        // }, 1000);
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
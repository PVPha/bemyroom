<template>
  <div id="post" :style="re_style_post">
    <ul :style="re_style_display">
      <li id="post_img">
        <!-- :src="require('@/assets/content/' + src)" -->
        <!-- :style="{
            'background-image': 'url(' + src + ');' + re_style_img + '',
          }" -->
        <a
          :href="url"
          :style="'background-image: url(' + src + ');' + re_style_img"
        >
          <!-- <img
            alt="src"
            class="img-fluid"
            :style="re_style_img"
            loading="lazy"
          /> -->
        </a>
      </li>
      <li id="post_shortcut" :style="re_style_li + re_style_show">
        <p :style="re_style_title">
          <a :href="url">{{ title }}</a>
        </p>
      </li>
      <li id="post_detail" :style="re_style_detail + re_style_li">
        <a id="user_img" :style="re_style_show">
          <img :src="require('@/assets/content/logoUser.svg')" alt="user" />
        </a>
        <a id="user_name" :style="re_style_show">name</a>
        <br />
        <p :style="re_style_detail_p">
          <span :style="re_style_show">time</span>
          <!-- <a>
            <img
              :src="require('../../../assets/content/icon-upvote.svg')"
              alt="upvote"
            />
            10
          </a> -->
          <span id="interact">
            <a>
              <img
                :src="require('@/assets/content/icon-view.svg')"
                alt="view"
              />
              200
            </a>
            <a>
              <img
                :src="require('@/assets/content/icon-comment.svg')"
                alt="comment"
              />
              300
            </a>
          </span>
        </p>
      </li>
      <li>
        <ul id="post_card" :style="re_style_ul">
          <!-- <li id="post_topic" :style="re_style_li">
            <h5>Chủ đề</h5>
            <span>time</span>
          </li>
          <li id="post_title" :style="re_style_li">
            <h4>Title</h4>
          </li> -->
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Post",
  data() {
    return {};
  },
  props: {
    src: String,
    title: String,
    slug: String,
    url: String,
    re_style_post: String,
    re_style_title: String,
    re_style_display: String,
    re_style_img: String,
    re_style_ul: String,
    re_style_li: String,
    re_style_show: String,
    re_style_detail: String,
    re_style_detail_p: String,
  },
  methods: {},
  computed: {
    img_background() {
      return {
        "background-image": "url(" + this.src + ")",
      };
    },
  },
};
</script>

<style>
#post {
  font-size: 1.4rem;
}
#post ul {
  display: inline-block;
}
#post_img {
  display: inline-block;
  height: 100%;
  border-radius: 2rem;
  overflow: hidden;
}
#post_img a {
  display: inline-block;
  width: 35rem;
  height: 22rem;
  background-repeat: no-repeat;
  background-size: cover;
}
#post_img img {
  width: 40rem;
  height: 20rem;
}
#post_card > li {
  margin-top: 1rem;
  text-align: start;
}
#post #post_detail a {
  display: inline-block;
  height: 0;
}
#post #post_detail p {
  display: inline-block;
  width: 90%;
}
#post #post_shortcut {
  max-width: 40.5rem;
}
/* #post #post_detail span {
  margin-right: 20rem;
} */
#post #interact {
  float: right;
}
#post #post_detail #user_img {
  width: 4rem;
  height: 4rem;
  border-radius: 2rem;
}
#post #post_detail #user_name {
  font-size: 1.4rem;
  font-weight: 600;
  transform: translate(0.5rem, -0.5rem);
}

#post #post_detail p {
  display: inline-block;
  max-width: 100%;
  font-size: 1.3rem;
  transform: translate(4.6rem, -2rem);
}
#post #post_detail > p > span:nth-child(2) > a {
  margin-right: 1.2rem;
}
</style>
<template>
  <div class="footer container-fluid">
    <h2>BE MY ROOM</h2>
    <!-- <ul>
      <li>
        <h2 class="logo">
          <img :src="require('../../assets/header/logo.svg')" alt="" />
          <span>EMYROOM</span>
        </h2>
        <p>decor your room by your self</p>
      </li>
      <li>
        <ul>
          <li><a>VỀ BEMYROOM</a></li>
          <li><a>CHUYÊN MỤC</a></li>
          <li><a>ĐIỀU KHOẢN SỬ DỤNG</a></li>
        </ul>
      </li>
    </ul> -->
    <!-- <div class="line"></div> -->
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {};
  },
  mounted() {
    //console.log("footer");
  },
};
</script>

<style scoped>
.footer {
  text-align: start;
  margin: 10rem 0 0 0;
  background: #333133;
  color: #ffffff;
  padding: 2rem 0 1rem;
}
.footer h2 {
  margin-left: 3rem;
  font-weight: 600;
}
.footer .logo {
  margin: 1rem 0;
}
.footer .logo img {
  height: 5rem;
}
.footer .logo span {
  display: inline-block;
  transform: translate(0rem, 1rem);
}

/* .footer ul {
  display: flex;
  margin: 2rem 0;
}
.footer > ul {
  border: 0.5px solid;
  border-left-color: transparent;
  border-right-color: transparent;
}
.footer > ul > li p {
  transform: translate(3.5rem, -2rem);
  font-size: 1.5rem;
  margin-bottom: 0rem;
}
.footer ul li {
  flex-grow: 1;
}
.footer li > ul li {
  margin-top: 2rem;
}
.footer li > ul li a {
  font-size: 1.5rem;
  font-weight: 600;
  color: red;
} */
.line {
  height: 2rem;
}
</style>
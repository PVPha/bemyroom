<template>
  <div class="header container-fluid" :style="re_style_header">
    <div class="item"></div>
    <div class="item item1">
      <h1 class="logo" :style="re_style_logo">
        <a :href="url"
          ><img :src="logo" :style="re_style_img" alt="Bemyroom"
        /></a>
      </h1>
      <h2 :style="re_style_h2">
        <a> BE MY ROOM </a>
      </h2>
    </div>
    <div class="item"></div>
    <div class="item item2">
      <HeaderMenu :show_writeBtn="show_writeBtn" :show_btnUser="show_btnUser" />
      <DialogLogin />
    </div>
  </div>
</template>
<script>
import HeaderMenu from "../header/header.Menu";
import DialogLogin from "@/components/header/dialog/dialog.Login";
export default {
  name: "Header",
  data() {
    return {
      logo: require("../../assets/header/logo.svg"),
      url: "http://localhost:8080/",
    };
  },
  props: {
    re_style_header: String,
    re_style_logo: String,
    re_style_img: String,
    re_style_h2: String,
    show_writeBtn: Boolean,
    show_btnUser: Boolean,
  },
  components: {
    HeaderMenu,
    DialogLogin,
  },
  mounted() {
    //console.log("header");
    // window.addEventListener("scroll", () => {
    //   var header = document.querySelector(".header");
    //   if (header.getBoundingClientRect.bottom < window.innerHeight) {
    //     var headerMenu = document.getElementById("header-menu");
    //     document.querySelector(".header .item1 .logo img").style.display =
    //       "none";
    //     headerMenu.style.marginTop = "0.5rem";
    //     headerMenu.style.marginBottom = "1rem";
    //   }
    // });
  },
};
</script>
<style scoped>
.header {
  position: sticky;
  top: 0;
  background: white;
  z-index: 2;
}
.container-fluid {
  display: grid;
  /* grid-template-columns: 20rem 192rem; */
  grid-template-columns: 4rem 15rem 12rem 111rem;
  justify-content: center;
  /* margin-left: 7rem; */
  padding-top: 2rem;
  /* margin: 2rem 0 0 5rem !important;
  padding: 0 !important; */
}
.item {
  font-size: 1.7rem;
}
.item .item1 {
  font-family: "Montserrat", Helvetica, Arial, sans-serif !important;
}
.item1 .logo img {
  height: 6rem;
}
.item1 > h2 {
  transform: translateY(0.2rem);
}
/* .item2 {
  position: absolute;
  bottom: 0;
} */
.logo {
  color: black;
}
</style>
<template>
  <div>
    <Header />
    <Editor />
  </div>
</template>
<script>
import Header from "@/components/header/header";

import Editor from "@/components/body/post/post.Write";
export default {
  name: "Write",
  components: {
    Editor,
    Header,
  },
  mounted() {
    // window.addEventListener("scroll", () => {
    //   var header = document.querySelector(".header");
    //   // var editor = document.getElementById('editorjs');
    //   // editor.
    //   // console.log(window.innerHeight);
    //   if (
    //     document.querySelector("#editorjs").getBoundingClientRect().top <
    //     header.offsetHeight
    //   ) {
    //     header.style.display = "none";
    //   }
    // });
    // window.addEventListener("mouseover", (event) => {
    //   console.log(event.target);
    // });
  },
};
</script>
<style  scoped>
</style> >


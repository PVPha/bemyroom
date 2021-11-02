<template>
  <div>
    <Header />
    <Editor />
    <Footer />
  </div>
</template>
<script>
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer.vue";
import Editor from "@/components/body/post/post.Write";
export default {
  name: "Write",
  components: {
    Editor,
    Header,
    Footer,
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


<template>
  <div v-if="loading" id="wrap-load">
    <div v-if="loading" id="loading"></div>
  </div>
  <Header />
  <TopContent />
  <MainContent />
  <Footer />
  <!-- <Loadpost /> -->

  <!-- <a @click="test">test</a> -->
</template>

<script>
// @ is an alias to /src
import Header from "@/components/header/header";
import TopContent from "@/components/body/page/home/top/content.Top";
import MainContent from "@/components/body/page/home/main/content.Main";
import Footer from "@/components/footer/footer";
// import Loadpost from "@/components/body/page/home/loadpost";
export default {
  name: "Home",
  components: {
    Header,
    TopContent,
    MainContent,
    Footer,
    // Loadpost,
  },
  created() {
    this.$store.dispatch("loadPost");
    // console.log(this.$store.getters.getImageFB);
  },
  data() {
    return {
      loading: false,
    };
  },
  // mounted() {
  //   console.log(this.$store.getters.listPost);
  // },
  computed: {
    // posts() {
    //   return this.$store.getters.post;
    // },
    // loading() {
    //   return this.$store.state.loading;
    // },
    baseUrl() {
      return this.$store.state.baseUrl;
    },
  },
  mounted() {
    console.log("home");
    document.onreadystatechange = () => {
      if (document.readyState == "complete") {
        console.log("load completed");
        // this.$emit("loaded", "True");
      }
    };
  },
  methods: {
    test() {
      console.log("test");
      const data = {
        email: "schowalter.joelle@example.org",
        password: "123456789",
      };
      this.$store.dispatch("login", data);
      // console.log(this.$store.getters.post);
    },
  },
};
</script>
<style scoped>
#wrap-load {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 3;
  background: white;
}
#loading {
  display: inline-block;
  border: 3px solid #f3f3f3;
  border-top: 3px solid #000000;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  animation: spin 2s linear infinite;
  position: sticky;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
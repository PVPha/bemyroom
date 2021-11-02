<template>
  <Header />
  <TopContent />
  <MainContent />
  <Footer />
  <!-- <a @click="test">test</a> -->
</template>

<script>
// @ is an alias to /src
import Header from "@/components/header/header";
import TopContent from "@/components/body/page/home/top/content.Top";
import MainContent from "@/components/body/page/home/main/content.Main";
import Footer from "@/components/footer/footer";
export default {
  name: "Home",
  components: {
    Header,
    TopContent,
    MainContent,
    Footer,
  },
  created() {
    this.$store.dispatch("loadPost");
  },
  mounted() {
    console.log(this.$store.getters.post);
  },
  computed: {
    posts() {
      return this.$store.getters.post;
    },
    baseUrl() {
      return this.$store.state.baseUrl;
    },
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

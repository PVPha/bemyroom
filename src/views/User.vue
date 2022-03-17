<template>
  <div v-if="loading" id="wrap-load">
    <div v-if="loading" id="loading"></div>
  </div>
  <div class="user-infor">
    <Header :show_btnUser="true" />
    <MainContent />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer.vue";
import MainContent from "@/components/body/page/user/content.Main.vue";
export default {
  name: "UserInfor",
  components: {
    Header,
    MainContent,
    Footer,
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
<template>
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
</style>
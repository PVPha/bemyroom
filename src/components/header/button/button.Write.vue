<template>
  <button class="btn btn-write">
    Viết bài
    <!-- <router-link to="/write-post">Viết bài</router-link> -->
  </button>
</template>

<script>
export default {
  name: "BtnWrite",
};
</script>

<style scoped>
.btn-write {
  background-color: #333133;
  border-radius: 2rem;
  color: #ffffff;
  font-size: 1.5rem;
  transform: translateY(-0.5rem);
  padding: 0.5rem 1.5rem;
}
</style>
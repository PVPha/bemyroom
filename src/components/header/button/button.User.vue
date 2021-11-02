<template>
  <div class="btn-user">
    <button>
      <i class="far fa-envelope"></i>
    </button>
    <button>
      <i class="far fa-bell"></i>
    </button>
    <button class="avatar">
      <img src="@/assets/content/ava.jpg" alt="" />
    </button>
    <button class="btn-write">Viết bài</button>
  </div>
</template>

<script>
export default {
  name: "BtnUser",
  props: {
    src: String,
  },
};
</script>

<style scoped>
.btn-user {
  margin-top: -3rem;
}
.btn-user .avatar {
  max-width: 5rem;
  border: 1px solid;
  padding: 0;
  border-radius: 3rem;
  overflow: hidden;
  max-height: 5rem;
}
.btn-user .avatar {
  transform: translateY(1rem);
}
.btn-user .avatar > img {
  width: 100%;
  object-fit: cover;
}
.btn-user button {
  margin-left: 2rem;
}
.btn-user button i {
  font-size: 2.2rem;
}
.btn-write {
  background-color: #333133;
  border-radius: 2rem;
  color: #ffffff;
  font-size: 1.5rem;
  transform: translateY(-0.5rem);
  padding: 0.5rem 1.5rem;
}
</style>
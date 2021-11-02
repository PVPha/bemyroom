<template>
  <div>
    <DialogLogin :showDialog="showDialogForgot" />
    <button class="btn btn-login" @click="show">Đăng nhập</button>
  </div>
</template>

<script>
import DialogLogin from "@/components/header/dialog/dialog.Login";
// import DialogRegister from "@/components/body/dialog/dialog.Register.vue";
// import DialogForgot from "@/components/body/dialog/dialog.Forgot.vue";
export default {
  name: "BtnLogin",
  data() {
    return {
      showDialogRegister: false,
      showDialogForgot: false,
    };
  },
  props: {
    showDialog: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    DialogLogin,
    // DialogRegister,
    // DialogForgot,
  },
  methods: {
    show() {
      var dialog = document.getElementById("dialog-login");
      dialog.style.display = "block";
      // this.showDialog != this.showDialog;
      // console.log(this.showDialog);
    },
  },
};
</script>

<style scoped>
.btn-login {
  background-color: #333133;
  border-radius: 2rem;
  color: #ffffff;
  font-size: 1.5rem;
  transform: translateY(-0.5rem);
  padding: 0.5rem 1.5rem;
  margin-left: 12rem;
}
.md-dialog .md-dialog-container {
  max-width: 768px;
}
</style>
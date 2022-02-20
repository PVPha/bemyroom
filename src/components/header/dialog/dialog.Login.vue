<template>
  <div class="dialog" id="dialog-login">
    <form id="login">
      <input
        type="text"
        name="userName-login"
        placeholder="Tên đăng nhập hoặc email"
        value="phampha8a3@gmail.com"
      />
      <input
        type="password"
        name="password-login"
        placeholder="Mật khẩu đăng nhập"
        value="123456789"
      />
      <ul>
        <li>
          <button
            type="submit"
            @click.prevent="
              login();
              close();
            "
            class="btn"
          >
            <!-- <router-link to="/user-infor">Đăng nhập</router-link> -->
            Đăng nhập
          </button>
        </li>
        <li class="link">
          <a @click="forgot"> Quên mật khẩu? </a>
        </li>
        <li class="link">
          <p>
            Bạn không có tài khoản?
            <a @click="register"> Đăng ký ngay </a>
          </p>
        </li>
      </ul>
    </form>
  </div>
  <div class="dialog" id="dialog-forgot">
    <form>
      <input type="text" name="userName-forgot" placeholder="Tên đăng nhập" />
      <input type="email" name="email-forgot" placeholder="Email khôi phục" />
      <ul>
        <li>
          <button class="btn">Hoàn tất</button>
        </li>
      </ul>
    </form>
  </div>
  <div class="dialog" id="dialog-register">
    <form id="register">
      <input type="text" name="userName-register" placeholder="Tên đăng nhập" />
      <input type="email" name="email-register" placeholder="Email đăng ký" />
      <input
        type="new-password"
        name="password_new"
        placeholder="Mật khẩu đăng nhập"
      />
      <input
        type="new-password"
        name="password_re"
        placeholder="Nhập lại mật khẩu"
      />
      <ul>
        <li>
          <button class="btn">Đăng kí</button>
        </li>
      </ul>
    </form>
  </div>
</template>

<script>
export default {
  name: "DialogLogin",
  data() {
    return {};
  },
  props: {
    showDialog: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {},
  methods: {
    async login() {
      console.log("login");
      var userName = document.querySelector("#login input");
      var password = document.querySelector("#login input:nth-child(2)");
      // var userName = fLogin.getElementById("unLogin");
      const formData = {
        email: userName.value,
        password: password.value,
      };
      await this.$store.dispatch("login", formData);
      console.log("check token: " + window.sessionStorage.getItem("token"));
      if (window.sessionStorage.getItem("token") != null) {
        this.$store.dispatch("getInformation");
      } else console.log("token null");
    },
    forgot() {
      console.log("forgot");
      var dialogForgot = document.getElementById("dialog-forgot");
      dialogForgot.style.display = "block";
      var dialogLogin = document.getElementById("dialog-login");
      dialogLogin.style.display = "none";
    },
    register() {
      console.log("forgot");
      var dialogRegister = document.getElementById("dialog-register");
      dialogRegister.style.display = "block";
      var dialogLogin = document.getElementById("dialog-login");
      dialogLogin.style.display = "none";
    },
    close() {
      var dialog = document.querySelector(".dialog");
      dialog.style.display = "none";
    },
  },
};
</script>

<style scoped>
#dialog-login {
  display: none;
  font-size: 1.5rem;
}
#dialog-forgot {
  display: none;
  font-size: 1.5rem;
}
#dialog-register {
  display: none;
  font-size: 1.5rem;
}
/* .dialog-login {
  text-align: center;
}
.dialog-login form .logo {
  margin: 2rem 0;
}
.md-dialog .logo img {
  height: 5rem;
} */
form {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  background: white;
  border: 1px solid;
  padding: 5rem;
  border-radius: 1rem;
}
form input {
  display: block;
  height: 3rem;
  width: 40rem;
  border: none;
  border-radius: 3rem;
  margin: 1rem auto;
  box-shadow: 0rem 0.4rem 0.6rem #b7b5b5;
  padding: 2.5rem 1rem 2.5rem 3rem;
}
ul li b img {
  height: 3rem;
}

.btn {
  display: block;
  height: 3rem;
  font-size: 1.5rem;
  line-height: 100%;
  width: 40rem;
  border: none;
  border-radius: 3rem;
  margin: 1rem 7.5rem 2rem 7.5rem;
  box-shadow: 0rem 0.4rem 0.6rem #b7b5b5;
  text-align: center;
  height: 5rem;
  overflow: hidden;
  background: #000000;
  color: white;
}
.btn:hover {
  background: #363a35;
}
.btn a {
  display: inline-block;
  padding: 1rem 15rem;
}
.link {
  text-align: start;
  margin: 0 2rem;
}
.link a {
  color: rgb(52, 52, 243) !important;
}
/* .dialog-login .link:last-child {
  padding-bottom: 4rem;
} */
form input .login {
  display: block;
}
form input .register {
  display: none;
}
form input .forgot {
  display: none;
}
</style>
<template>
  <div id="header-menu">
    <ul class="menu-header">
      <li>
        <a :href="url">Trang chủ</a>
      </li>
      <li>
        <a>Chủ đề</a>
      </li>
      <li>
        <a>Đang theo dõi</a>
      </li>
      <!-- <li>
        <button>
          <img src="../../assets/header/icon-notify.svg" alt="icon-notify" />
        </button>
      </li> -->
      <li class="last">
        <!-- <FormSearch /> -->
        <form class="form-inline form-search">
          <button type="submit">
            <!-- <img src="../../assets/header/icon-search.svg" alt="icon-search" /> -->
            <i class="fas fa-search"></i>
            <!-- &#1449; -->
          </button>
          <input type="text" placeholder="Tìm kiếm theo tác giả hoặc tag" />
        </form>
      </li>
      <li class="last">
        <BtnLogin v-if="!show_btnUser" />
        <!-- <BtnWrite v-if="show_writeBtn" /> -->
        <!-- @click="showMenu((show = !show))" -->
        <BtnUser v-if="show_btnUser" />
        <div id="drop-menu">
          <div></div>
          <ul>
            <li>
              <a :href="'/user-infor'">
                <span
                  style="
                    background-image: url(https://source.unsplash.com/vAsnZcqAuA4/1600x900);
                  "
                >
                  <!-- <img src="@/assets/content/ava.jpg" alt="" /> -->
                </span>

                <!-- <i class="fas fa-user"></i> -->
                <!-- Trang cá nhân -->
                <!-- {{ user._data.name }} -->
                <span>{{ user.name }}</span>
              </a>
            </li>
            <li>
              <a>
                <i class="fas fa-cog"></i>
                Tùy chỉnh
              </a>
            </li>
            <li>
              <a @click="logout" :href="'/'">
                <i class="fas fa-sign-out-alt"></i> Đăng xuất</a
              >
            </li>
          </ul>
        </div>
      </li>
      <!-- <li v-if="!show_writeBtn">
          <BtnLogin />
        </li>
        <li v-if="show_writeBtn">
          <BtnWrite />
        </li> -->
    </ul>
  </div>
</template>

<script>
// import FormSearch from "../header/form_search.vue";
import BtnLogin from "./button/button.Login.vue";
// import BtnWrite from "./button/button.Write.vue";
import BtnUser from "./button/button.User.vue";
export default {
  name: "HeaderMenu",
  data() {
    return {
      // show_btnUser: this.$store.state.btnUser,
      url: "http://localhost:8080/",
    };
  },
  props: {
    show_writeBtn: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    BtnLogin,
    // BtnWrite,
    BtnUser,
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    show_btnUser() {
      if (window.sessionStorage.getItem("token") == null) {
        return this.$store.state.btnUser;
      } else return true;
    },
  },
  methods: {
    logout() {
      // this.show_btnUser;
      //console.log("logout");
      this.$store.dispatch("logout");
    },
  },
  mounted() {
    console.log("header_menu");
    var dropMenu = document.getElementById("drop-menu");
    window.addEventListener("click", (event) => {
      var isClickInsideElement = dropMenu.contains(event.target);
      //console.log(isClickInsideElement);
      if (!isClickInsideElement) {
        //console.log(event.target == document.querySelector(".avatar img"));
        if (event.target == document.querySelector(".avatar")) {
          if (dropMenu.style.display == "block") {
            dropMenu.style.display = "none";
          } else {
            dropMenu.style.display = "block";
          }
        } else if (dropMenu.style.display == "block") {
          dropMenu.style.display = "none";
          //this.showMenu(false);
        }
        //console.log(dropMenu.style.display == "block");
      }
    });
  },
};
</script>
<style scoped>
#header-menu {
  margin-top: 6.5rem;
}
.menu-header {
  /* width: 100%; */
  display: flex;
  flex-wrap: wrap;
  font-size: 2rem;
  font-weight: 600;
}
.menu-header li {
  flex-shrink: 1;
  margin-right: 5rem;
  height: 100%;
}
.menu-header li:last-child {
  margin-left: -2.5rem;
  margin-right: 0;
}
.menu-header .last {
  margin-left: 2.5rem;
}
.menu-header li a::after {
  display: block;
  content: "";
  border: 3px solid transparent;
  border-top-color: #333133;
  transform: scale(0, 0);
  transition: transform 300ms ease-in-out;
}
.menu-header li a:hover::after {
  transform: scaleY(1);
  transform-origin: 0% 50%;
}
.menu-header li a {
  display: block;
  height: 100%;
}

.menu-header img {
  width: 2rem;
  height: 2rem;
}

.form-search {
  font-size: 1.4rem;
  height: 100%;
  box-shadow: 0rem 0.3rem 0.5rem gray;
  border-radius: 2rem;
  transform: translateY(-0.6rem);
}
.form-search input {
  border: none;
  width: 27rem;
  background: transparent;
  padding: 0.7rem 1rem;
}
.form-search img {
  width: 2rem;
  height: 2rem;
}
.last:last-child {
  position: relative;
}
.last:last-child #drop-menu {
  display: none;
  border: 1px solid #c6c2c2;
  position: absolute;
  left: 7.5rem;
  top: 4rem;
  padding: 1rem;
  font-size: 1.3rem;
  text-align: end;
  font-weight: 400;
  border-radius: 1rem;
  background: white;
  width: 25rem;
}
.last:last-child #drop-menu ul li {
  margin: 0;
  text-align: start;
  font-size: 1.5rem;
  margin-top: 1rem;
}
.last:last-child #drop-menu ul li:hover {
  background: #c6c2c2;
}
.last:last-child #drop-menu ul li > a span:first-child {
  display: inline-block;
  width: 5rem;
  height: 6rem;
  margin-right: 1rem;
}
.last:last-child #drop-menu ul li > a span:last-child {
  display: inline-block;
  transform: translateY(-2.5rem);
}
/* .last:last-child #drop-menu ul li > a span:first-child img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
} */
.last:last-child #drop-menu ul li > a span:first-child {
  /* object-fit: cover; */

  background-repeat: no-repeat;
  background-size: cover;
  /* width: 100%; */
  /* height: 100%; */
  border-radius: 0.5rem;
  display: inline-block;
  width: 5rem;
  background-position-x: -2rem;
}
.last:last-child #drop-menu > div {
  border: 1px solid #c6c2c2;
  height: 1rem;
  width: 1rem;
  transform: rotate(45deg);
  position: absolute;
  top: -0.6rem;
  z-index: 1;
  background: white;
  border-bottom-color: transparent;
  border-right-color: transparent;
  left: 7rem;
}
.last:last-child #drop-menu a::after {
  display: none;
}
</style>
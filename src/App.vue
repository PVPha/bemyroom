<template>
  <router-view />
</template>
<script>
export default {
  components: {},
  created() {
    this.$store.dispatch("checkCookie");

    this.$store.dispatch("getInformation");
    // if (this.$store.state.user == null) {
    //   console.log("empty");
    // } else {
    //   console.log("not null");
    // }
  },
  mounted() {},
};
</script>
<style>
html {
  font-size: 62.5%;
}
/* https://codepen.io/waterplea/pen/dVMopv */
*::-webkit-scrollbar,
*::-webkit-scrollbar-thumb {
  width: 2.5rem;
  border-radius: 1.3rem;
  background-clip: padding-box;
  border: 1rem solid transparent;
}

*::-webkit-scrollbar-thumb {
  box-shadow: inset 0 0 0 1rem;
}
.md-scrollbar::-webkit-scrollbar {
  display: none !important;
}
* {
  scrollbar-width: 0;
  scroll-behavior: none;
}
#app {
  font-family: "Roboto", "Montserrat", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 3rem;
}

#nav a {
  font-weight: bold;
  /* color: #2c3e50; */
}

#nav a.router-link-exact-active {
  color: #42b983;
}

textarea:focus,
input:focus {
  outline: none;
}
button {
  border: none;
  background-color: transparent;
}
/* h1,
h2 {
  display: inline-block;
} */
ul {
  padding: 0;
  margin: 0;
}
ul li {
  list-style: none;
}
p {
  display: inline-block;
}
a {
  text-decoration: none;
  font-weight: 500;
  color: black !important;
}
a:hover {
  cursor: pointer;
  text-decoration: none;
}

.ce-paragraph[data-placeholder]:first-child:empty::before {
  opacity: 1 !important;
}
.cdx-quote__text {
  min-height: 70px !important;
  margin-bottom: 10px;
  font-size: 2rem !important;
}
.cdx-quote::before {
  content: "❝";
  font-size: 5rem;
  position: absolute;
  top: 0;
  left: 0;
}
.cdx-quote::after {
  content: "❞";
  font-size: 5rem;
  position: absolute;
  bottom: 2.5rem;
  right: 0;
}
.cdx-input {
  border: none !important;
  box-shadow: none !important;
  -webkit-box-shadow: none !important;
  margin-left: 1.5rem;
}
@media only screen and (min-width: 1366px) {
  html {
    font-size: 57.5% !important;
  }
  .header .container {
    margin-left: 17rem;
  }
}
</style>

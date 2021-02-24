<template>
  <v-app>
    <div class="inner">
      <Header></Header>
      <v-main>
        <transition name="slide-fade">
          <router-view></router-view>
        </transition>
      </v-main>
    </div>
    <Footer />
  </v-app>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  name: "App",

  components: {
    Header,
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap");

* {
  font-family: "Source Sans Pro", sans-serif;
  color: #141C3A;
}
.v-application {
  background: #7510f7 !important;
  overflow: hidden;
}
.inner {
  padding: 0.625em 6.25em 0px;
}
// slide animation===================================================================================================================================================
.slide-fade-enter-active {
  transition: all 1s ease;
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(-10px);
  opacity: 0;
}
// header===================================================================================================================================================
.header-container {
  padding-bottom: 2em !important;
}
// fontsize color===================================================================================================================================================
h1 {
  color: #fff;
  text-align: center;
}
h2 {
  font-size: 24px;
  font-weight: normal;
}
li {
  color: #fff;
}
span{
  font-weight: bold;
}
h5{
  font-size: 18px;
}
</style>

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
import Footer from "@/components/footer";
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
  color: #7510f7;
}

.inner {
  padding: 1.25em 6.25em 0px;
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>

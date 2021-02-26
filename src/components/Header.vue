<template>
  <div class="header-container">
    <!-- <img src="@/assets/logo_200x200.png" alt="" /> -->

    <ul>
      <router-link
        v-for="(route, index) in routeList"
        :key="index"
        :to="route.to"
        tag="li"
      >
        {{ route.title }}
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      routeList: [
        {
          title: "Top",
          to: { name: "Top" },
        },
        {
          title: "Profile",
          to: { name: "Profile" },
        },
        {
          title: "Skills",
          to: { name: "Skills" },
        },
        {
          title: "Portfolio",
          to: { name: "Portfolio" },
        },

        {
          title: "Contact",
          to: { name: "Contact" },
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
@import "@/scss/_variable.scss";
img {
  width: 3.75em;
}
.header-container {
  display: flex;
  padding-bottom: 5em;
  align-items: center;
  @include mq(sm) {
    width: 100%;
    text-align: center;
    padding-top: 10px;
  }
}
ul {
  list-style: none;
  display: flex;
  @include mq(md) {
    margin-left: auto;
  }
  @include mq(sm) {
    text-align: center;
    margin: 0 auto;
  }
}
.v-application {
  ul {
    @include mq(sm) {
      padding-left: 0;
    }
  }
}
li {
  cursor: pointer;
  margin-right: 20px;
  font-size: 1.5em;
  line-height: 60px;
  @include mq (sm){
    font-size: 1.0em;
  }
}
li:last-child {
  margin-right: 0;
}
li:hover {
  opacity: 0.7;
}
</style>

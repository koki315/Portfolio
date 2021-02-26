<template>
  <v-container>
    <h1>Contact</h1>
    <v-card class="card-container"> 
      <a href="https://twitter.com/Koki94113391"
        ><i class="fab fa-twitter icon"></i
      ></a>

      <a href="mailto:kodkod315@outlook.jp"
        ><i class="fas fa-envelope-open icon"></i
      ></a>
      <a href="https://github.com/koki315?tab=repositories"
        ><i class="fab fa-github icon"></i
      ></a>
    </v-card>
  </v-container>
</template>

<script>
export default {
  components: {},
  methods: {},
};
</script>

<style scoped lang="scss">
@import url("https://use.fontawesome.com/releases/v5.6.1/css/all.css");
@import "@/scss/_variable.scss";
.icon {
  font-size: 5em;
  cursor: pointer;
  @include mq (sm){
    font-size: 2.5em;
  }
}
.card-container {
  margin-top: 2em;
  text-align: center;
  padding: 4em;
  @include mq (sm){
    margin: 0.5em;
    padding: 3em;
    display: flex;
  }
}
a:nth-child(2){
  margin: 0 10em 0;
  @include mq (sm){
    margin: 0 30px;
  }
}
</style>

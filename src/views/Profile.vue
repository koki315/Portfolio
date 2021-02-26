<template>
  <v-container>
    <h1>Profile</h1>
    <v-row>
      <v-col lg="6" xs="12"><p class="image"></p> </v-col>
      <v-col lg="6" xs="12">
        <v-card elevation="12" tile>
          <h2><span>Name:</span> Kodaira Koki</h2>
          <br />
          <h2><span>School:</span> Shiga University</h2>
          <br />
          <h2><span>Location:</span> Osaka</h2>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style  lang="scss" scpoed>
@import "@/scss/_variable.scss";
.row {
  margin-top: 2em;
  align-items: center;
  @include mq(sm) {
    margin-top: 0.5em;
    padding-bottom: 200px;
  }
}
.image {
  background: url(../assets/photo.jpeg) no-repeat;
  width: 20em;
  height: 20em;
  background-size: cover;
  border-radius: 50%;
  margin: 0 auto;
  @include mq(sm) {
    width: 10em;
    height: 10em;
  }
}
.v-card {
  color: #141c3a;
  padding: 1.5em;
  font-size: 1.5em;
  @include mq(sm) {
    padding: 1em;
  }
}
.cotaniner {
  @include mq(sm) {
    padding-top: 0;
  }
}
</style>

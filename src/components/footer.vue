<template>
    <v-footer padless class="footer">
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-col>
    </v-footer>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
@import "@/scss/_variable.scss";
.text-center,
strong {
  color: #fff;
}

footer {
  background: #7510f7 !important;
  position: fixed;
  bottom: 0;
  text-align: center;
  width: 100%;
  padding: 0.9375em 0;
  align-items: center;
  font-size: 1.5em;
  @include mq (sm){
    padding-top: 0;
    padding-bottom: 0;
  }
}
</style>

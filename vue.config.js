module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/scss/_variable.scss";
        `
      }
    }
  }

}

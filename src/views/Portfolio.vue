<template>
  <v-container>
    <h1>Portfolio</h1>

    <v-card elevation="12" tile class="card-container">
      <v-row>
        <v-col lg="6">
          <div class="sub-container">
            <img
              src="../assets/portfolio.png"
              alt=""
              v-on:click="showPortfolio"
              id="site1"
              @click="$emit('open')"
            />
          </div>
        </v-col>
        <v-col lg="6">
          <div class="sub-container">
            <img
              src="../assets/portfolio.png"
              alt=""
              v-on:click="showPortfolio"
              id="site2"
              @click="$emit('open')"
            />
          </div>
        </v-col>
      </v-row>
    </v-card>
    <div
      class="modal"
      v-bind:class="{ modalActive: showDetail }"
      v-on:click="closeDetail"
      @click="$emit('close')"
    >
      <v-card elevation="12" tile class="card-inner modal-card">
        <h2>{{ this.title }}</h2>
        <p>{{ this.description }}</p>
        <a v-bind:href="url">url</a>
      </v-card>
    </div>
  </v-container>
</template>

<script>
import PortfolioModel from "@/models/portfolio";
export default {
  data() {
    return {
      showDetail: false,
      title: "",
      description: "",
      url:""
    };
  },
  methods: {
    showPortfolio(e) {
      const id = e.currentTarget.getAttribute("id");
      console.log(id);
      this.showDetail = true;
      const detail = PortfolioModel.returnPortfolio(id);
      console.log(detail);
      this.title = detail.title;
      this.description = detail.description;
      this.url = detail.url
    },
    closeDetail() {
      this.showDetail = false;
    },
  },
};
</script>

<style scoped>
img {
  max-width: 100%;
  cursor: pointer;
}
.row {
  margin-top: 0;
}
.card-container {
  margin-top: 2em;
}
.sub-container {
  overflow: hidden;
}
img:hover {
  transform: scale(1.5, 1.5);
  transition: 1s all;
}
/* modal============================================================================================================================== */
.modal {
  display: none;
}
.modalActive {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  z-index: 3;
  text-align: center;
  cursor: pointer;
}
.modal-card {
  width: 40%;
  height: 40%;
  margin: 0 auto;
  margin-top: 4em;
  border-radius: 5px !important;
}
</style>

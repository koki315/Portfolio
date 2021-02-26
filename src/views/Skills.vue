<template>
  <v-container>
    <h1>Skills</h1>

    <v-card elevation="12" tile class="card-container">
      <v-row>
        <v-col lg="6"
          ><v-card elevation="12" tile class="card-inner">
            <h2>Programing</h2>
            <div class="sub-container">
              <h5
                v-for="(skill, index) in skills"
                :key="index"
                :id="skill.name"
                v-on:click="showSkill"
                @click="$emit('open')"
              >
                {{ skill.name }}
              </h5>
            </div>
          </v-card>
        </v-col>
        <v-col lg="6">
          <v-card elevation="12" tile class="card-inner">
            <h2>Others</h2>
            <div class="sub-container">
              <h5
                v-for="(skill, index) in others"
                :key="index"
                v-on:click="showSkillOfOthers"
                :id="skill.name"
                @click="$emit('open')"
              >
                {{ skill.name }}
              </h5>
            </div>
          </v-card>
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
      </v-card>
    </div>
  </v-container>
</template>

<script>
// @ is an alias to /src
import SkillModel from "@/models/skill";

export default {
  components: {},
  data() {
    return {
      skills: [],
      others: [],
      showDetail: false,
      title: "",
      description: "",
    };
  },

  methods: {
    showSkill(e) {
      const id = e.currentTarget.getAttribute("id");
      this.showDetail = true;
      const detail = SkillModel.returnDetail(id);
      this.title = detail.title;
      this.description = detail.description;
    },
    showSkillOfOthers(e) {
      const id = e.currentTarget.getAttribute("id");
      this.showDetail = true;
      const detail = SkillModel.returnDetailOfOthers(id);
      this.title = detail.title;
      this.description = detail.description;
    },
    closeDetail() {
      this.showDetail = false;
    },
  },
  created() {
    const skills = SkillModel.fetchSkill();
    const others = SkillModel.fetchOther();
    this.skills = skills;
    this.others = others;
  },
};
</script>
<style scoped lang="scss">
@import "@/scss/_variable.scss";
.card-container {
  width: 70%;
  margin-top: 2em;
  margin: 2em auto 0;
  max-height: 100%;
  @include mq(sm) {
    width: auto;
    margin-top: 0.5em;
  }
}

h2 {
  font-weight: bold;
  text-align: center;
  border-bottom: 3px solid #141c3a;
  margin-bottom: 1em;
  @include mq(sm) {
    font-size: 20px;
  }
}
.sub-container {
  display: flex;
  flex-wrap: wrap;
}
.row {
  margin-top: 0;
  @include mq (sm){
    padding-bottom: 50px ;
  }
}
h5 {
  cursor: pointer;
  transition: 5ms;
}
h5:hover {
  opacity: 0.8;
  color: #7510f7;
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
  @include mq (sm){
    width: 80%;
    height: 30%;
  }
}
</style>

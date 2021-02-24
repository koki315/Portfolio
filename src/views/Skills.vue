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
                :key="index" :id="skill.name"
                v-on:click="showSkill"
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
                v-on:click="showSkill" :id="skill.name"
              >
                {{ skill.name }}
              </h5>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
// @ is an alias to /src
import SkillModel from "@/models/skill";
export default {
  components: {},
  data() {
    return {
      skills: [
        { name: "HTML" },
        { name: "CSS" },
        { name: "Javascript" },
        { name: "Vue.js" },
        { name: "Ruby on Rails" },
      ],
      others: [{ name: "translation" }],
      showDetail: false,
      detail:''
    };
  },
  methods: {
    showSkill(e) {
      const id = e.currentTarget.getAttribute('id');
      this.showDetail = true;
      const detail = SkillModel.returnDetail(id);
      alert(detail)
    },
  },
};
</script>
<style scoped>
.card-container {
  width: 70%;
  margin-top: 2em;
  margin: 2em auto 0;
}
h2 {
  font-weight: bold;
  text-align: center;
  border-bottom: 3px solid #141c3a;
  margin-bottom: 1em;
}
.sub-container {
  display: flex;
  flex-wrap: wrap;
}
.row {
  margin-top: 0;
}
h5 {
  cursor: pointer;
}
</style>

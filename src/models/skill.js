const skills = [
  { text: "HTMLの詳細", name: "HTML" },
  { text: "CSSの詳細", name: "CSS" },
  { text: "Javascriptの詳細", name: "Javascript" },
  { text: "Vue.jsの詳細", name: "Vue.js" },
  { text: "Ruby on Railsの詳細", name: "Ruby on Rails" },
  { text: "translationの詳細", name: "translation" },
];

const skill = class Skill {
  static returnDetail(name) {
    const returnedSkill = skills.find((skill) => skill.name === name);
    console.log(returnedSkill);
    return returnedSkill.text;
  }
};

export default skill;

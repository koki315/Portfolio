const skills = [
  { title: "HTMLの詳細", name: "HTML", description:'hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh'},
  { title: "CSSの詳細", name: "CSS" , description:'ccccccccccccccccccccccccccccccc'},
  { title: "Javascriptの詳細", name: "Javascript" , description:'jjjjjjjjjjjjjjjjjjjjjj'},
  { title: "Vue.jsの詳細", name: "Vue.js" , description:'vvvvvvvvvvvvvvvvvvvvv'},
  { title: "Ruby on Railsの詳細", name: "Ruby on Rails" ,description:'rrrrrrrrrrrrrrrrrrrrrrrrrr'},
];
const others = [
  { title: "translationの詳細", name: "translation" ,description:'ttttttttttttttttttttttttt'},
]

const skill = class Skill {
  static returnDetail(name) {
    const returnedSkill = skills.find((skill) => skill.name === name);
    const details = {
      title:returnedSkill.title,
      description:returnedSkill.description
    }
    return details;
  }
  static returnDetailOfOthers(name){
    const returnedSkill = others.find((skill) => skill.name === name);
    const details = {
      title:returnedSkill.title,
      description:returnedSkill.description
    }
    return details;
  }

  static fetchSkill(){
    return skills
  }
  static fetchOther(){
    return others
  }
};

export default skill;

function createPerson({ name = 'new User', skills = [] }) {
  const user = {
    name,
    skills,
    addSkill(skill) {
      if (!this.skills.includes(skill)) {
        this.skills.push(skill);
      }
      return this;
    },
    removeSkill(skill) {
      this.skills = this.skills.filter((val) => val !== skill);
      return this;
    },
    addName(newName) {
      this.name = newName;
      return this;
    },
  };
  Object.seal(user);
  return user;
};



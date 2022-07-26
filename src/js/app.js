export default class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUsername() {
    return /[\w+\-?]+/.test(this.name) && !/(^[\d_-].*|.*[\d_-]$)/.test(this.name) && !/.+\d{1,3}/.test(this.name);
  }
}

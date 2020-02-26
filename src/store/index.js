import {
  observable,
  action
} from "C:/Users/Hamid Hesami/Desktop/resume/node_modules/mobx";

class Store {
  @observable color;
  constructor() {
    this.color = 1;
  }
  Change() {
    if (this.color < 3) {
      this.color += 1;
    } else {
      this.color = 1;
    }
  }
}

const store = new Store();

export default store;

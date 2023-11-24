import { navLeiro } from "./navleiro.js";
class NavModel {
  #leiro = {};
  constructor() {
    this.#leiro = navLeiro;
  }

  getleiro() {
    return { ...this.#leiro };
  }

}
export default NavModel;

import { listaLeiro } from "./lista.js";
import { urlapLeiro } from "../Urlap/urlapleiro.js";
class ListaModel {
  #leiro = {};
  #minta = [];
  #urlapleiro = [];
  constructor() {
    this.#leiro = listaLeiro;
    this.#urlapleiro = urlapLeiro;
  }

  getleiro() {
    return this.#leiro;
  }

  getSzulo() {
    return {...this.#minta};
  }

  geturlapLeiro(){
    return this.#urlapleiro
  }

}
export default ListaModel;

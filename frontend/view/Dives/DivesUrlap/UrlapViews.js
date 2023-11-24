import TextUrlap from "./TextUrlap.js";
import NumberUrlap from "./NumberUrlap.js";

class UrlapView {
  #leiro = {};
  #elemLista = [];
  #osszesElemValidE = true;
  #urlapAdat = {};
  constructor(szuloElem, leiro) {
    this.szuloElem = szuloElem;
    this.#leiro = leiro;

    this.szuloElem.append("<form>");
    this.formElem = this.szuloElem.children("form");

    this.#urlapOsszerak();
    this.submitElem = $("#submit");

    this.submitElem.on("click", (event) => {
      event.preventDefault(); 
      this.#elemLista.forEach(elem => {
        this.#osszesElemValidE = this.#osszesElemValidE && elem.valid;
      });

      if (this.#osszesElemValidE) {
        this.#elemLista.forEach((elem) => {
          this.#urlapAdat[elem.key] = elem.value;
        });

        this.#megjelenitAdatok();

        console.log("Valid az űrlap");
        this.#esemenyTrigger("submit"); 
      } else {
        console.log("Nem valid az űrlap");
      }
      console.log(this.#urlapAdat);
    });

  }


  #urlapOsszerak() {
    for (const key in this.#leiro) {
      switch (this.#leiro[key].tipus) {
        case "text":
          this.#elemLista.push(new TextUrlap(key, this.#leiro[key], this.formElem))
          break;
        case "number":
          this.#elemLista.push(new NumberUrlap(key, this.#leiro[key], this.formElem))
          break;
      }
    }
    let txt = "<input type='submit' id='submit' value='Rendben'>";
    this.formElem.append(txt);
  }

  #esemenyTrigger(esemenyNev) {
    const esemeny = new CustomEvent(esemenyNev);
    window.dispatchEvent(esemeny);
  }

  #megjelenitAdatok() {
    let txt = "<ul>";
    for (const key in this.#urlapAdat) {
      txt += `<li class="egySor"> ${this.#urlapAdat[key]}</li>`;
    }
    txt += "</ul>";

    this.szuloElem.append(txt);
  }

}
export default UrlapView;
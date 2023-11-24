import UrlapView from "../Dives/Urlap/UrlapView.js";

class MegjelenitSor {
  #adat = {};
  #urlapview;
  #index;
  constructor(adat, szuloElem, index) {
    this.#adat = adat;
    this.#index = index;
    this.tablaElem = szuloElem;

    this.#sor();
    this.sorElem = this.tablaElem.children("tr:last-child");
    this.keszElem = this.sorElem.children("td").children(".kesz");
    this.torolElem = this.sorElem.children("td").children(".torol");
    this.szerkesztElem = this.sorElem.children("td").children(".szerkeszt");

    this.#urlapview = new UrlapView(this.tablaElem, adat);

    if (this.#adat.kesz) {
      this.sorElem.css("background-color", "lightgreen");
      this.megseElem.css("display", "inline");
      this.keszElem.css("display", "none");
    } else {
      this.sorElem.css("background-color", "white");
      this.megseElem.css("display", "none");
      this.keszElem.css("display", "inline");
    }
    this.keszElem.on("click", () => {
      this.#esemenyTrigger("kesz");
    });
    this.szerkeztElem.on("click", () => {
      console.log("a");
      this.sorElem.empty();
      this.#esemenyTrigger("szerkeszt");
    });

    this.torolElem.on("click", () => {
      this.sorElem.remove();
      this.#esemenyTrigger("torol");
    });
  }

  #sor() {
    let txt = "";

    txt += "<tr>";
    for (const key in this.#adat) {
      if (Object.hasOwnProperty.call(this.#adat, key)) {
        const element = this.#adat[key];
        txt += `<td>${element}</td>`;
      }
    }
    txt += `<td><span class="kesz">✔️</span> <span class="szerkeszt">📄</span> <span class="torol">🗑</span></td>`;
    txt += "</tr>";

    this.tablaElem.append(txt);
  }
  #esemenyTrigger(esemenyNev) {
    const esemenyem = new CustomEvent(esemenyNev, { detail: this.#adat.id });
    window.dispatchEvent(esemenyem);
  }
}
export default MegjelenitSor;
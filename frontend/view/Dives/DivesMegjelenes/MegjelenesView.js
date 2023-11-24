
class MegjelenesView {
    #adat = [];
    #leiro = [];
    constructor(szuloElem, adat, leiro) {
        this.#adat = adat;
        this.#leiro = leiro;
        this.divElem = szuloElem;

        this.#megjelenitMinta();
        this.#megjelenitAdat();
        this.#gombok();

    }

    #megjelenitMinta() {
        let txt = "<div>";

        for (const key in this.#leiro) {
            const element = this.#leiro[key].megjelenes;
            txt += `<p class ="egySor">${element} </p>`;
        }
        txt += "</div>";
        this.divElem.append(txt);
    }

    #megjelenitAdat() {
        let txt = `<div>`;

        for (const key in this.#adat) {
            txt += `<div class="divStilus"> <p>${this.#adat[key].nev} ${this.#adat[key].szul}</p></div> `;
        }

        txt += `</div>`;
        console.log(this.divElem)
        this.divElem.append(txt);
    }

    #gombok() {
        this.divElem.on("click", (event) => {
            const sorElem = $(event.currentTarget);
            const keszElem = sorElem.find(".kesz");
            const torolElem = sorElem.find(".torol");
            const megseElem = sorElem.find(".megse");

            if (keszElem.is(event.target)) {
                sorElem.css("background-color", "lightgreen");
                megseElem.css("display", "inline");
                keszElem.css("display", "none");
                this.#esemenyTrigger("kesz");
            } else if (megseElem.is(event.target)) {
                sorElem.css("background-color", "white");
                megseElem.css("display", "none");
                keszElem.css("display", "inline");
                this.#esemenyTrigger("megse");
            } else if (torolElem.is(event.target)) {
                sorElem.remove();
                this.#esemenyTrigger("torol");
            }
        });
    }

    #esemenyTrigger(esemenyNev) {
        const esemeny = new CustomEvent(esemenyNev);
        window.dispatchEvent(esemeny);
    }
}





export default MegjelenesView;
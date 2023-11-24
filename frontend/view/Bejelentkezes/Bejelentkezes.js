class Bejelentkezes {
    #formElem;
    #adatok = [];

    constructor(szuloElem, adatok) {
        this.#adatok = adatok;
        this.#formElem = szuloElem;
        this.felhasznalonev = $(".felhasznalonev");
        this.jelszo = $(".jelszo");
        this.belepGomb = $("#belep");
        this.bejelentkez();
        this.belepGomb.on('click', () => {
            this.#belepClick();
        });
    }

    #belepClick() {
        this.#belepesEllenorzes();
    }

    bejelentkez() {
        let txt = `<form>
            <input type="text" placeholder="Felhasználónév" class="felhasznalonev">
            <input type="password" placeholder="Jelszó" class="jelszo">
            <br>
            <button type="button" id="belep">Belepes</button>
            <span>Forgot <a href="#">password?</a></span>
        </form>`;

        this.#formElem.append(txt);
    }

    #belepesEllenorzes() {
        let txt = '';
        const felhasznalonevInput = this.felhasznalonev.val();
        const jelszoInput = this.jelszo.val();
        let login = false; // Define 'login' based on your logic.

        if (felhasznalonevInput !== '' && jelszoInput !== '') {
            if (login) {
                this.#formElem.find('form').next('p').remove();
                txt += '<p>Sikeres belépés!</p>';
            } else {
                this.#formElem.find('form').next('p').remove();
                txt += '<p>Hibás felhasználónév vagy jelszó!</p>';
            }
        }
        this.#formElem.find('form').after(txt);
    }

    #esemenyTrigger(esemenyNev) {
        const E = new CustomEvent(esemenyNev);
        window.dispatchEvent(E);
    }
}

export default Bejelentkezes;

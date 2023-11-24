import Bejelentkezes from "../../view/Bejelentkezes/Bejelentkezes.js";
import Bmodell from "../../model/Bejelentkezes/Bmodell.js";
class Bcontroller{
    #bejelentkezes
    #bmodell

    constructor(){
        this.#bmodell = new Bmodell();
        this.#bejelentkezes = new Bejelentkezes($(".bejelentkezes"), this.#bmodell.getFelhasznalok());
        
    }
    
}

export default Bcontroller;
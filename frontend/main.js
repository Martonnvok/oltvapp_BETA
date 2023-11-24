import Controller from "./controller/Table/TableController.js";
import MasikController from "./controller/Felhasznaloi/FelhasznaloiController.js";
import Ncontroller from "./controller/Felhasznaloi/Navcontroller.js";
import Bcontroller from "./controller/Bejelentkezes/Bcontroller.js";
$(function () {
  new Controller();
  new Ncontroller();
  new MasikController();
  new Bcontroller();
});

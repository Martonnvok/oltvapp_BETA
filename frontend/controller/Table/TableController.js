import DataService from "../../model/DataService.js";
import Megjelenit from "../../view/Table/Megjelenit.js";
import UrlapView from "../../view/Dives/Urlap/UrlapView.js";
import UrlapModel from "../../model/Urlap/UrlapModel.js";

class Controller {
  constructor() {
    this.dataService = new DataService();
    this.urlapModel = new UrlapModel();

    this.dataService.getAxiosData(
      "http://localhost:8000/api/writers",
      this.megjelenit, this.urlapModel.getLeiro()
    );

    $(window).on("submit", (event) => {
      this.dataService.postAxiosData("http://localhost:8000/api/writers", event.detail);
      console.log("Felvitt Adatok: ", event.detail);

    })

    $(window).on("szerkeszt", (event) => {
      this.dataService.pupAxiosData("http://localhost:8000/api/writers", event.detail);
      console.log("szerkesztett Adatok: ", event.detail);

    })

    $(window).on("torol", (event) => {
      console.log("Töröltem: ", event.detail);
      this.dataService.deleteAxiosData("http://localhost:8000/api/writers", event.detail);
    })


  }

  megjelenit(list, leiro) {
    new UrlapView($(".urlap"), leiro);
    new Megjelenit(list, $(".lista"), leiro);

  }
}
export default Controller;
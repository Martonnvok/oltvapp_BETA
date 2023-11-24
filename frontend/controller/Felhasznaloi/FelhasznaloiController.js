import UrlapModel from "../../model/Urlap/UrlapModel.js";
import MegjelenesView from "../../view/Dives/DivesMegjelenes/MegjelenesView.js";
import DataService from "../../model/DataService.js";
class MasikController {
  constructor() {
    this.urlapModel = new UrlapModel();
    this.dataService = new DataService();

    this.dataService.getAxiosData(
      "http://localhost:8000/api/writers",
      this.megjelenit, this.urlapModel.getLeiro()
    );
    /*$(window).on("submit", (event) => {
      this.dataService.postAxiosData("http://localhost:8000/api/writers", event.detail)
    })*/

    /*this.dataService.deleteAxiosData(
      "http://localhost:8000/api/writers", this.urlapModel.getLeiro()
    );
*/


  }
  megjelenit(list, leiro) {
    new MegjelenesView($(".divesLista"), list, leiro);

  }
}
export default MasikController;
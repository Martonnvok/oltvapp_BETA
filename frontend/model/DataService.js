class DataService {
  constructor() {
    axios.defaults.baseURL = "http://localhost:8000/";
  }
  getAxiosData(url, callback, leiro) {
    axios
      .get(url)
      .then(function (response) {
        //handle success
        callback(response.data, leiro);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
        console.log("Finally");
      });
  }

  postAxiosData(url, data) {
    axios
      .post(url, data)
      .then((response) => {
        console.log("RESP", response);
      })
      .catch((error) => {
        console.log("hiba", error);
      });

  }

  putAxiosData(url, data) {
    console.log(data);
    axios
      .put(`${url}/${data.id}`, data)
      .then((response) => {
        console.log("RESP", response);
      })
      .catch((error) => {
        console.log("hiba", error);
      });

  }

  deleteAxiosData(url, id) {
    console.log(id);
    axios
      .delete(`${url}/${id}`)
      .then((response) => {
        console.log("RESP", response);
      })
      .catch((error) => {
        console.log("hiba", error);
      });

  }
}

export default DataService;
export const urlapLeiro = {
  id: {
    megjelenes: "Azonosító",
  },
  
  nev: {
    megjelenes: "Név",
    tipus: "text",
    value: "",
    placeholder: "Név",
    regex: "[A-Z][a-z]{2,15}",
    validalas: "Név nagybetűvel kezdődik, legalább 3 karakter!"
  },

  szul: {
    megjelenes: "Születési év",
    tipus: "number",
    value: "2002",
    regex: {
      min: 1900,
      max: 2023,
    },
    validalas: "1000 és 2023 között kell legyen a szám!"
  },
};



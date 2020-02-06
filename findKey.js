const findKey = function(obj, funct){
    for(const keys in obj){
        if(funct(obj[keys])){
            return keys;
        }
    }
}

const planets = {
    "Blue Hill": { stars: 1, galaxy: "andromeda"},
    "Akaleri":   { stars: 3, galaxy: "b1200"},
    "noma":      { stars: 2, galaxy: "caf12"},
    "elBulli":   { stars: 3, galaxy: "rando"},
    "Ora":       { stars: 2, galaxy: "centauri"},
    "Akelarre":  { stars: 3, galaxy: "scorpio"}
  },

  results = findKey(planets, x => x.galaxy === 'scorpio');
  console.log(results);


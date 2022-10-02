function solve() {
  let text = document.getElementById('text').value;
  let typeCase = document.getElementById('naming-convention').value;
  let result = document.getElementById('result');
  let words = text.split(/(\s+)/).filter(x => x != ' ');


  if (typeCase == 'Camel Case') {
    for (let i = 0; i < words.length; i++) {


      words[i] = words[i].toLowerCase();

      if (i != 0) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1);

      }
    }
    result.textContent = words.join("");


  }
  else if (typeCase == 'Pascal Case') {
    for (let i = 0; i < words.length; i++) {


      words[i] = words[i].toLowerCase();

      words[i] = words[i][0].toUpperCase() + words[i].substring(1);

    }
    result.textContent = words.join("");

  }
  else {
    result.textContent = "Error!";
  }


}

function searchMots() {
  //alert('test')
  const input = document.getElementById("searchInput").value.trim();
  phrase = phraserandom + phraserandom[phraserandom];
  const error = document.getElementById("div__error");
  const results = phraserandom.filter((elem) =>
    elem.toLowerCase().includes(input.toLowerCase())
  );
  console.log(results);
  // const list = document.getElementById("countryList");
  // const message = document.getElementById("message");
  input.textContent = "";
  if (input === "") {
    return;
  }
  if (results.length === 0) {
    error.textContent = "Aucun pays trouvé.";
    return;
  }
  // Afficher les résultats
  results.forEach((phraserandom) => {
    // 3. Afficher le pays sélectionné dans le champ de saisie
    // listItem.onclick = () => {
    //   document.getElementById("searchInput").value = phraserandom;
    //   // Vider la liste après sélection
    // };
  });
}
let phraserandom = [
  // "chamboulassiez",
  // "récapitulaient",
  // "radiothérapies",
  // "claustrophobie",
  // "dégasolinèrent",
  // "débecquetteras",
  // "implémenterons",
  // "sous-alimenter",
  // "décréditassiez",
  // "géomagnétismes",
  "ensemençassent",
  // "émoustillerais",
  // "désenivrassent",
  // "réapparaîtriez",
  // "infantilisâmes",
  // "encaisseraient",
  // "impérieusement",
  // "entretiendriez",
  // "adjectivisions",
  // "décourageantes",
  // "désodorisasses",
  // "parangonnerais",
  // "bihebdomadaire",
  // "excommunieront",
  // "désamidonnerai",
  // "oeilletonneras",
  // "illumineraient",
  // "réveillonnerai",
  // "scissionnistes",
  // "débarrassasses",
  // "dynamométrique",
  // "entrebâilleras",
  // "thésauriseriez",
  // "dépouillements",
  // "déharnachasses",
  // "poults-de-soie",
  // "impartialement",
  // "demi-bouteille",
  // "tintinnabulait",
  // "décarburassent",
  // "parcheminerons",
  // "replongeraient",
  // "bringueballons",
  // "parcelliserait",
  // "continuassions",
  // "désaffecterait",
  // "concoctassions",
  // "désexualisions",
  // "kabbalistiques",
  // "pointillassiez",
  // "escarrifierait",
  // "chanstiquerait",
  // "électrocautère",
  // "bolchévisèrent",
  // "antipaludéenne",
  // "contrebouterai",
  // "désenverguerez",
  // "euphorisassent",
  // "mansardassions",
  // "déscolariserez",
  // "mensualiserais",
  // "étronçonneriez",
  // "déchiffonneras",
  // "toilettassions",
  // "divisionnismes",
  // "contemplerions",
  // "symptomatiques",
  // "contristerions",
  // "entrecouperont",
  // "emmortaiseriez",
  // "sous-traitante",
  // "transpositrice",
  // "plaisantassent",
  // "racornissement",
  // "anthropologies",
  // "équilibrations",
  // "acclimatassiez",
  // "pantagruélique",
  // "renfaîtassions",
  // "fraterniserais",
  // "falsifications",
  // "pétrifiassions",
  // "dansotteraient",
  // "renverseraient",
  // "translucidités",
  // "quintessencier",
  // "décentreraient",
  // "féminisassions",
  // "contrebuterons",
  // "entre-tuassent",
  // "décortiquèrent",
  // "aiguillonnions",
  // "billebauderiez",
  // "hérédosyphilis",
  // "rémunératrices",
  // "ravitaillasses",
  // "passepoileriez",
  // "raffermiraient",
  // "cadanchassions",
  // "enseignassions",
  // "écouvillonnais",
  // "déchagrineront",
  // "panoramiquasse",
  // "bouchonnassiez",
  // "accoutrassions",
  // "microfilmeront",
  // "dédaigneraient",
  // "concaténassent",
  // "concélébrerais",
  // "carillonneront",
  // "logisticiennes",
  // "allégoriseriez",
  // "chaptalisaient",
  // "transborderait",
  // "caraméliserais",
  // "extraordinaire",
  // "intemporalités",
   "désynchronisai",
  // "rassortissions",
  // "assermenteront",
  // "terrassassions",
  // "baragouineront",
  // "godronnassions",
  // "dénombrassions",
  // "ébourgeonnasse",
  // "mithridaterais",
  // "transvasements",
  // "recommanderais",
  // "dénucléarisiez",
  // "étoupillassiez",
  // "tripatouilleur",
  // "recondamnerait",
  // "javellisations",
  // "entrecoupaient",
  // "réarrangerions",
  // "recommencèrent",
  // "complaisamment",
  // "rustiqueraient",
  // "décomprimerons",
  // "pasteuriserait",
  // "déshabilleriez",
  // "matérialisasse",
  // "lithographiait",
  // "pouponnassions",
  // "chambardassiez",
  // "tronçonnassiez",
  // "débosselassent",
  // "émerveillement",
  // "bourrelassions",
  // "embranchassiez"
];

let index = Math.floor(Math.random() * phraserandom.length);
let word = phraserandom[index];
let arrayWord = word.split("");
tentative = false;
let faute = 8;
compteur = 0;
console.log(word);
// console.log(arrayWord);
//const alpha = document.getElementsByClassName("keyboard__row");
//const alpha = document.getElementsByClassName("keyboard__row");

// let lettre = Math.floor(Math.floor() *  phraserandom.length[phrase])
// console.log(phrase, phraserandom[phrase]);

//const display = document.getElementsByClassName("display");
//const dataShar = element.getAttribute("data-char");

//console.log(dataShar)
function pressKey(button) {
  // console.log(button.getAttribute("data-char"));
  const error = document.getElementById("div__error");
  const letter = button.getAttribute("data-char").toLowerCase();
  const manche = document.getElementById("manche");
  const haute = document.getElementById("haute");
  const triangle = document.getElementById("triangle");
  const lecorp = document.getElementById("bondu");
  const mec = document.getElementById("mec");
  const pied = document.getElementById("pied");
  const surlePondu = document.getElementById("surlePondu");
  const mort = document.getElementById("mort");
  const bondu = document.getElementById("bondu");
  const haute2 = document.getElementsByClassName("haute2");
  const lecercle = document.getElementById("lecercle");
  const lecercle2 = document.getElementsByClassName("lecercle2");
  const validation = document.getElementById("div__validation");

  //  const normalize = (str) => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  //let test = arrayWord.filter((element) => element === letter);
//  console.log(test);

  if (word.includes(letter)) {
    console.log(letter);

    arrayWord.forEach((element, index) => {
      // console.log(element);
      //console.log(element.normalize("NFD").replace(/[\u0300-\u036f]/g, ""))
      //console.log(element.normalize("NFD").replace(/[^a-z0-9]/gi, ""));
      if (element.normalize("NFD").replace(/[^a-z0-9]/gi, "") == letter) {
        console.log("lettre présente dans le mot");
        let item = document.querySelector('[data-position="' + index + '"]');
        item.innerHTML = element;
        console.log(item);
        //console.log(element);

        // button.setAttribute('onclick', false);
        // button.style.background='red';
        console.log(button);
        compteur++;
        if (compteur == 14) {
          validation.innerHTML = "YUPI!!!!";
        }
      }
    });

    // }else{

    //   switch ""
  } else if (!word.includes(letter) && faute >= 8) {
    bondu.style.display = "block";
    console.log("error");

    faute--;
    console.log(faute);
  } else if (!word.includes(letter) && faute >= 7) {
    pied.style.display = "block";
    console.log("error");
    faute--;
    console.log(faute);
  } else if (!word.includes(letter) && faute >= 6) {
    manche.style.display = "block";
    console.log("error");
    faute--;
    console.log(faute);
  } else if (!word.includes(letter) && faute >= 5) {
    triangle.style.display = "block";
    console.log("error");

    faute--;
    console.log(faute);
  } else if (!word.includes(letter) && faute >= 4) {
    haute.style.display = "block";
    console.log("error");

    faute--;
    console.log(faute);
  } else if (!word.includes(letter) && faute >= 3) {
    lecercle.style.display = "block";
    console.log("error");
    faute--;
    console.log(faute);
  } else if (!word.includes(letter) && faute >= 2) {
    mec.style.display = "block";
    console.log("error");
    faute--;
    console.log(faute);
  } else if (!word.includes(letter) && faute >= 1) {
    haute.classList.add("haute2");
    lecercle.classList.add("lecercle2");
    console.log("error");
    faute--;
    console.log(faute);
  } else if (!word.includes(letter) && faute == 0) {
    haute.style.display = "block";
    lecercle.style.display = "block";
    haute.classList.remove("haute2");
    lecercle.classList.remove("lecercle2");
    mec.classList.add("mec");
    haute.classList.add("haute3");
    lecercle.classList.add("lecercle3");
    console.log("error");
    faute--;
    error.innerHTML =
      "vous avez perdu la partie et le mots est :" +
      " " +
      '<div class="color">' +
      word +
      "</div>";

    console.log(faute);
  }
  button.setAttribute("onclick", false);
  button.style.background = "red";
}

// console.log(button.getAttribute("data-char"));

// Fonction pour normaliser les chaînes (supprimer les accents)
//-----------type string--
// -----NFD : argument prédéfini : Normalization Form Décomposed : exemple décompose l'accent du é = (e + ')
// ---autres type de normalisation : NFC : Normalization Form composed / NFKC : Normalization Form Compatibility Composed/ NFKD : Normalization Form Compatibility Decomposed
//-----\u0300-\u036f : plage de caractère UNICOD corréspond aux accents
//  \u0300 : accents grave
// ---\u0301 : accents aigus etc....
// ---"g" : (global) : la recherche s'applique à toute la chaine de caractère pas seulement au premier match
// -----"" : les accents touvés sont remplacé par une chaine de caractere vide donc supprimés

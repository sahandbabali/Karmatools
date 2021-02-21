var karmadata = [
  { name: "E1A", small: 1, larg: 0 },
  { name: "E1B", small: 0, larg: 1 },
  { name: "E2A", small: 2, larg: 0 },
  { name: "E3A", small: 3, larg: 0 },
  { name: "E2C", small: 1, larg: 1 },
  { name: "E3L", small: 3, larg: 0 },
  { name: "E2L", small: 1, larg: 1 },
  { name: "E3B", small: 2, larg: 1 },
  { name: "E4A", small: 4, larg: 0 },
  { name: "E2B", small: 0, larg: 2 },
  { name: "E5A", small: 4, larg: 1 },
  { name: "E6A", small: 6, larg: 0 },
  { name: "E4C", small: 2, larg: 2 },
  { name: "E4B", small: 2, larg: 2 },
  { name: "E5B", small: 4, larg: 1 },
  { name: "E9A", small: 9, larg: 0 },
  { name: "E6B", small: 3, larg: 3 },
  { name: "E7A", small: 5, larg: 2 },
];

var totalorders = 0;
var smalls = 0;
var largs = 0;

document.getElementById("reset").addEventListener("click", function(){
      location.reload();

})


karmadata.forEach(function (arrayItem) {
  document.getElementById(
    "cardbox"
  ).innerHTML += `<div class="productcard">
      
      <div class="row">
            <div class="col s4">
                  <img class="responsive-img productpic" src="https://raw.githubusercontent.com/sahandbabali/Karmatools/main/img/${arrayItem.name}.png">
            </div>
            <div class="col s4">
                  <h5>${arrayItem.name}</h5>
                  <p>Small: <span>${arrayItem.small}</span></p>
                  <p>Larg: <span>${arrayItem.larg}</span></p>
            </div>
            <div class="col s4">
                  <label for="quant">Quantity:</label>
                  <input id="${arrayItem.name}"  type="number" name="quant" value=0>
            </div>
      </div>
      
      </div>`;
});



var inputArray = Array.from(document.getElementsByTagName("input"));

document.getElementById("cal").addEventListener("click", function () {



  inputArray.forEach(function (inp , i) {
    totalorders += parseInt(inp.value);
      smalls += karmadata[i].small * parseInt(inp.value);
      largs += karmadata[i].larg * parseInt(inp.value);

  });

  document.getElementById("totalorders").innerHTML = totalorders;
  document.getElementById("smalls").innerHTML = smalls;
  document.getElementById("largs").innerHTML = largs;
});


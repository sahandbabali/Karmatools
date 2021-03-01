var karmadata = [
  { name: "E1A", small: 1, large: 0, I: 0, II: 0, III: 0, A: 4, B: 0, C: 0 },
  { name: "E1B", small: 0, large: 1, I: 0, II: 0, III: 0, A: 2, B: 2, C: 0 },
  { name: "E2A", small: 2, large: 0, I: 1, II: 0, III: 0, A: 2, B: 2, C: 0 },
  { name: "E3A", small: 3, large: 0, I: 2, II: 0, III: 0, A: 2, B: 0, C: 2 },
  { name: "E2C", small: 1, large: 1, I: 1, II: 0, III: 0, A: 2, B: 0, C: 2 },
  { name: "E3L", small: 3, large: 0, I: 1, II: 0, III: 0, A: 3, B: 3, C: 0 },
  { name: "E2L", small: 1, large: 1, I: 0, II: 0, III: 0, A: 3, B: 3, C: 0 },
  { name: "E3B", small: 2, large: 1, I: 1, II: 1, III: 0, A: 0, B: 4, C: 0 },
  { name: "E4A", small: 4, large: 0, I: 2, II: 1, III: 0, A: 0, B: 4, C: 0 },
  { name: "E2B", small: 0, large: 2, I: 0, II: 1, III: 0, A: 0, B: 4, C: 0 },
  { name: "E5A", small: 4, large: 1, I: 3, II: 0, III: 1, A: 0, B: 2, C: 2 },
  { name: "E6A", small: 6, large: 0, I: 4, II: 0, III: 1, A: 0, B: 2, C: 2 },
  { name: "E4C", small: 2, large: 2, I: 2, II: 0, III: 1, A: 0, B: 2, C: 2 },
  { name: "E4B", small: 2, large: 2, I: 1, II: 2, III: 0, A: 0, B: 2, C: 2 },
  { name: "E5B", small: 4, large: 1, I: 2, II: 2, III: 0, A: 0, B: 2, C: 2 },
  { name: "E9A", small: 9, large: 0, I: 0, II: 0, III: 2, A: 0, B: 0, C: 4 },
  { name: "E6B", small: 3, large: 3, I: 0, II: 0, III: 0, A: 0, B: 0, C: 4 },
  { name: "E7A", small: 5, large: 2, I: 0, II: 0, III: 0, A: 0, B: 0, C: 4 },
];

var inputArray = [];
var totalorders = 0;
var smalls = 0;
var largs = 0;
var A = 0;
var B = 0;
var C = 0;
var I = 0;
var II = 0;
var III = 0;




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
                  
                  <div class="row borderdark">
<div class="col s6">
<p>Small: <span>${arrayItem.small}</span></p>
</div>

<div class="col s6">
<p>Large: <span>${arrayItem.large}</span></p>
</div>

                  </div>
                  
                  
                 

                  <div class=" borderdark row">

                  <div class=" col s6">
                  Frame:
                  <p>A: <span>${arrayItem.A}</span></p>
                  <p>B: <span>${arrayItem.B}</span></p>
                  <p>C: <span>${arrayItem.C}</span></p>
                  </div>

                  <div class=" col s6">
                  Shelf:
                  <p>I: <span>${arrayItem.I}</span></p>
                  <p>II: <span>${arrayItem.II}</span></p>
                  <p>III: <span>${arrayItem.III}</span></p>
                  </div>
                  
                  </div>



                  
                 
                  

            </div>
            <div class="col s4">
                  <label for="quant">Quantity:</label>
                  <input id="${arrayItem.name}"  type="number" name="quant" value=0>
            </div>
      </div>
      
      </div>`;
});





document.getElementById("cal").addEventListener("click", function () {

  inputArray = Array.from(document.getElementsByTagName("input"));

  inputArray.forEach(function (inp , i) {
    totalorders += parseInt(inp.value);
      smalls += karmadata[i].small * parseInt(inp.value);
      largs += karmadata[i].large * parseInt(inp.value);
      A += karmadata[i].A * parseInt(inp.value);
      B += karmadata[i].B * parseInt(inp.value);
      C += karmadata[i].C * parseInt(inp.value);

      I += karmadata[i].I * parseInt(inp.value);
      II += karmadata[i].II * parseInt(inp.value);
      III += karmadata[i].III * parseInt(inp.value);


  });

  document.getElementById("totalorders").innerHTML = totalorders;
  document.getElementById("smalls").innerHTML = smalls;
  document.getElementById("largs").innerHTML = largs;


document.getElementById("A").innerHTML = A;
document.getElementById("B").innerHTML = B;
document.getElementById("C").innerHTML = C;

document.getElementById("I").innerHTML = I;
document.getElementById("II").innerHTML = II;
document.getElementById("III").innerHTML = III;
});


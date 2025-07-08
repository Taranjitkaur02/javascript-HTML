function perform() {
    let value = parseInt(document.getElementById("num").value);
    let operator = document.getElementById("select").value;
    let output = document.getElementById("output");
    let result ;
    for (let i = 0; i < value; i++) {
   let plus = document.createElement("span");
   plus.innerHTML = operator;

   plus.addEventListener("click", () => {
   let input = document.querySelector("#num");
   input.value = value + (i + 1);
  
});
output.append(plus);
}

  }
  
function add(n1, n2){
  return n1 + n2;
}
function substract(n1, n2){
  return n1 - n2;
}
function multiply(n1, n2){
  return n1 * n2;
}
function divide(n1, n2){
  n1 / n2;
}

function make_calc(n1, n2, operation){
  if(operation == "sumar"){
    return add(n1, n2);
  }
  if(operation == "restar"){
    substract(n1, n2);
  }
  if(operation == "multiplicar"){
    return multiply(n1, n2);
  }
  if(operation == "dividir"){
    return divide(n1, n2);
  }
}

function init(){
  var result = 0;

  var sum = make_calc(2, 3, "sumar")
  var subs = make_calc(2, 3, "restar")
  var mult = make_calc(2, 3, "multplicar")
  var div = make_calc(2, 3, "dividir")

  result = sum + subs + mult + div;

  console.lg(result);
}

init();

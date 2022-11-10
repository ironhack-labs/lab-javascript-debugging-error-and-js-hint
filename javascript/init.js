function add(n1, n2){
  return n1 + n2;
}
function subtract(n1, n2){
  return n1 - n2;
}
function multiply(n1, n2){
  return n1 * n2;
}
function divide(n1, n2){
  return n1 / n2;
}

function make_calc(n1, n2, operation){
  if(operation == "add"){
    return add(n1, n2);
  }
  if(operation == "subtract"){
    return subtract(n1, n2);
  }
  if(operation == "multiply"){
    return multiply(n1, n2);
  }
  if(operation == "divide"){
    return divide(n1, n2);
  }
}

function init(){
  let result = 0;

  const sum = make_calc(2, 3, "add")
  const subs = make_calc(2, 3, "subtract")
  const mult = make_calc(2, 3, "multiply")
  const div = make_calc(2, 3, "divide")

  result = sum + subs + mult + div;

  console.log(result);
}

init();

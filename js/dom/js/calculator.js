function cal() {
  let v1 = document.getElementById("v1");
  let v2 = document.getElementById("v2");
  let op = document.getElementById("op");
  let res = document.getElementById("res");
  
  let v1Val = parseFloat(v1.value);
  let v2Val = parseFloat(v2.value);
  let opVal = op.value;
  
  let result = 0;

  switch (opVal) {
    case '+':
      result = v1Val + v2Val;
      break;
    case '-':
      result = v1Val - v2Val;
      break;
    case '*':
      result = v1Val * v2Val;
      break;
    case '/':
      result = v1Val / v2Val;
      break;
  }
  
  res.value = result;

}

function reset() {
  document.getElementById('v1').value = '';
  document.getElementById('v2').value = '';
  document.getElementById('op').value = '';
  document.getElementById('res').value = '';
}
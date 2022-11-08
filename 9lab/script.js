 // Function that display value
 function clearTv() {
  document.getElementById("result").value = '';
  
}
 function inp(val) {
  document.getElementById("result").value += val;
}
function back(){
  let val = document.getElementById("result").value;
  val = val.slice(0, -1);
  document.getElementById("result").value = val;
}
function solve() {
  let str = document.getElementById("result").value;
  let res = ""

  try {
    res = eval(str);
    document.getElementById("result").value = y;
  } catch (error) {
   
    alert("Неправильный ввод")
  }
}

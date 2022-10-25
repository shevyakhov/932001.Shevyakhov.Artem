function higher(elem){
  prev = elem.parentElement.previousElementSibling;
  if (prev != null)
    elem.parentElement.after(prev);
};

function lower (elem){
  next = elem.parentElement.nextElementSibling;
  if(next != null)
    elem.parentElement.before(next);
};

function deleteItem(elem){
  elem.parentElement.remove()
};

function addItem() {
  item = document.querySelector(".item").cloneNode(true);
  list = document.querySelector(".list");
  list.appendChild(item);
};

function saveResult(){

  resultNode = document.querySelector(".result");
  mInputs = document.querySelectorAll(".mainText");
  sInputs = document.querySelectorAll(".subText");
 
  JsonArray = [];
  kov = "&quot";
  for (var i = 1; i < mInputs.length; i++) {
      JsonArray.push(mInputs[i].value+kov + ":" + kov+sInputs[i].value);
  }
  result ='{'+  JSON.stringify(JsonArray).slice(1,-1)+ '}';
  resultNode.innerHTML = result;
};

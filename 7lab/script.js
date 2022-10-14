const buttons = document.querySelectorAll("button");
const input = document.querySelector('.quantity');
buttons.forEach(button => {
    button.onclick = () => {
        switch (button.className) {
            case 'rectBtn':
               addRect(input.value);
                break;
            case 'triangleBtn':
                addTriangle(input.value);
                break;
            case 'circleBtn':
                addCircle(input.value );
                break;
        }
    }
})
function addRect(num) {
  for (let i = 0; i < num; i++) {
   

  var s = document.createElement("div");
  s.classList.add("rect");
  let size = randomSize();
  s.style.height = size+"px";
  s.style.width = size+"px";
  s.style.position = "absolute";
  let x = randomX();
  let y = randomY();
  s.style.top = y;
  s.style.left = x;
  s.addEventListener('click', (event) =>{
    event.target.style.backgroundColor = 'rgba(255, 255, 0, 0.5)'
  })  
  s.addEventListener('dblclick', (event) => {
    event.target.remove();
  });
  document.body.appendChild(s);
}
}
function addCircle(num) {
  for (let i = 0; i < num; i++) {
    var s = document.createElement("div");
    s.classList.add("circle");
    let size = randomSize();
    s.style.height = size+"px";
    s.style.width = size+"px";  
    s.style.position = "absolute";
  
    let x = randomX();
    let y = randomY();
    s.style.top = y;
    s.style.left = x;

  s.addEventListener('click', (event) =>{
    event.target.style.backgroundColor = 'rgba(255, 255, 0, 0.5)'
  })  
  s.addEventListener('dblclick', (event) => {
    event.target.remove();
  });
  document.body.appendChild(s);

}
}

function addTriangle(num) {
  for (let i = 0; i < num; i++) {
  var s = document.createElement("div");
  s.classList.add("triangle");
  let size = randomSize();
  s.style.borderLeft = size/2+ "px solid transparent";
  s.style.borderRight = size/2+ "px solid transparent";
  s.style.borderBottom =  size+ "px solid rgba(0, 0, 255, 0.5)";
  s.style.position = "absolute";
  let x = randomX();
  let y = randomY();
  s.style.top = y;
  s.style.left = x;

  s.addEventListener('click', (event) =>{
    event.target.style.borderBottom =  size+ "px solid rgba(255, 255, 0, 0.5)";
  })  
  s.addEventListener('dblclick', (event) => {
    event.target.remove();
  });
  document.body.appendChild(s);
  }
}
//fix
function randomSize(){
  return (10 + Math.floor(Math.random() * 300));
}
function randomX(){
  
  return (10 + Math.floor(Math.random() * window.screen.width * 0.8))+"px";
}

function randomY(){
  return (10 + Math.floor(Math.random() * window.screen.height*0.5))+"px";
}
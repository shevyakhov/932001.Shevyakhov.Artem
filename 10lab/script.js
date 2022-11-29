const scene = document.querySelector(".scene");
const animal = document.querySelector("#animal");
const container = document.querySelector(".container");
const lamp = document.querySelector(".lamp");
const part2 =  document.querySelector(".part2");
const light = document.querySelector(".light");

scene.addEventListener("click", () => { 
    scene.classList.remove("scene_h");
    scene.classList.add("gotopart2");
    setTimeout(1000);
    scene.style.visibility = "gone";

})

container.addEventListener("click", () =>{
    animal.style.top = "200px";
    if (animal.classList.contains("rabbit")){
        setTimeout(() => {
            animal.classList.remove("rabbit")
            animal.classList.add("bird")
        
        }, 500);
        
    } else{
        setTimeout(() => {
            animal.classList.remove("bird")
            animal.classList.add("rabbit")
        }, 500);
    }
    setTimeout(() => {animal.style.top = "0px";}, 500);
})

lamp.addEventListener("click", () =>{
    if (part2.style.visibility == "hidden" || part2.style.visibility == ""){
        part2.style.visibility = "visible";
        light.style.visibility = "visible";
    } else {
        part2.style.visibility = "hidden";
        light.style.visibility = "hidden";
    }
})
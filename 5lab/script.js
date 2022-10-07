let lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam hic, ipsa, ullam, cupiditate eveniet at voluptate corrupti commodi nobis ratione voluptatem! Vel animi totam cupiditate doloribus ad ab exercitationem officia eveniet impedit? Deleniti quasi nisi consectetur perspiciatis quibusdam nostrum, enim perferendis nam, magni molestias recusandae id libero vitae, repudiandae praesentium.";
function clickMe(number){
    let modalH = document.getElementById("modalH");
    let modalP = document.getElementById("modalP");
    var modalMain = document.getElementById("modalContainer");
    let newH = "Новость " + number;
    modalH.innerText = newH;
    modalP.innerText =  newH+ ": " + lorem;
    modalMain.style.display = "block";
   
}
window.onclick = function(event) {
    var modalMain = document.getElementById("modalContainer"); 
    if (event.target == modalMain) {
        modalMain.style.display = "none";

    }
  }
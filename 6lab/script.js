const buttons = document.querySelectorAll("button");
const left_img = document.querySelector(".pictureCat");
const right_img = document.querySelector(".pictureDog");

buttons.forEach(button => {
    button.onclick = () => {
        switch (button.className) {
            case 'leftBtn':
                left_img.style.width = '95%';
                right_img.style.width = '5%';
                left_img.querySelector("img").style.width = '70%';
                left_img.querySelector("img").style.visibility = 'visible';  
                right_img.querySelector("img").style.visibility = 'collapse';
                break;
            case 'midBtn':
                left_img.style.width = '50%';
                right_img.style.width = '50%';
                right_img.querySelector("img").style.visibility = 'visible';  
                left_img.querySelector("img").style.visibility = 'visible';
                right_img.querySelector("img").style.width = '90%';  
                left_img.querySelector("img").style.width = '90%';
                break;
            case 'rightBtn':
                left_img.style.width = '5%';
                right_img.style.width = '95%'; 
                right_img.querySelector("img").style.width = '70%';  
                right_img.querySelector("img").style.visibility = 'visible';  
                left_img.querySelector("img").style.visibility = 'collapse';
                break;
        }
    }
})
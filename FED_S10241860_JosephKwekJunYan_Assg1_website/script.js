let imageArray = []
imageArray[0] = "Image/oxfords.jpg";
imageArray[1] = "Image/black-monk-strap.jpg";
imageArray[2] = "Image/Penny-Loafer.jpg";
imageArray[3] = "Image/brogue.jpeg";

//Getting current image on home/index page
let myImg = document.getElementById("change");

//Getting the current shoe name text on home/index page
let name1 = document.getElementById("name1");
let name2 = document.getElementById("name2");

let i = 0;

//This function will change image every 2.5 seconds and will display the correct shoe name
setInterval(autoImg,2500);

function autoImg(){
    if (i === (imageArray.length-1)){
        i=0
    }
    else{
        i++
    }
    myImg.src = imageArray[i]
    //Code below is to change the names to be same as shoe
    if (i === 1){
        name1.textContent = "Monk Strap"
        name2.textContent = "Monk Strap"
    }
    else if(i===2){
        name1.textContent = "Loafer"
        name2.textContent = "Loafer"
    }
    else if (i===3){
        name1.textContent = "Brogue"
        name2.textContent = "Brogue"
    }
    else if (i===0){
        name1.textContent = "Oxfords"
        name2.textContent = "Oxfords"
    }
}

//This function is to allow users to press buttons to go to previous or next image
function changeImg(change){
    if (change === "next"){
        if (i === (imageArray.length-1)){
            i = 0
        }
        else{
            i++
        }
    }
    else if (change ==="prev"){
        if (i===0){
            i = (imageArray.length-1)
        }
        else{
            i--
        }
    }
    myImg.src = imageArray[i]
    //Code below is to change the names to be same as shoe
    if (i === 1){
        name1.textContent = "Monk Strap"
        name2.textContent = "Monk Strap"
    }
    else if(i===2){
        name1.textContent = "Loafer"
        name2.textContent = "Loafer"
    }
    else if (i===3){
        name1.textContent = "Brogue"
        name2.textContent = "Brogue"
    }
    else if (i===0){
        name1.textContent = "Oxfords"
        name2.textContent = "Oxfords"
    }
}
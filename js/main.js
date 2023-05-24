const image = document.getElementsByClassName("img");


const val = document.getElementsByClassName("card-value");


for (let i = 0; i < 6; i++) {
    image[i].addEventListener("click", flip);
    // image[i].addEventListener("click", reflip);
    
}

function flip(img) {
  let image = img.target;
  image.style.visibility = "hidden";
//   val[image.target]= 1;
  compare(image);
}

function reflip(img) {
    let image = img.target;
    image.style.visibility = "visible"; 
}

// function compare(img) {
//   let count;
  
//   for (let i = 0; i < 5; i++) {
    
//     if (val[i] == 1 & img.style.visibility == "hidden") {
//         count += count;
//         if (count == 2){
//         }else{
//             img.style.visibility = "visible";
//         }
//     }
//   }
// }

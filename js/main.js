const image = document.getElementsByClassName("img");


const val = document.getElementsByClassName("card-value");


image[0].addEventListener("click", flip);
image[1].addEventListener("click", flip);
image[2].addEventListener("click", flip);
image[3].addEventListener("click", flip);
image[4].addEventListener("click", flip);
image[5].addEventListener("click", flip);

for (let i = 0; i < 5; i++) {
    val[i] = 1 ;    
    console.log("🚀 ~ file: main.js:16 ~ val[i]:", val[i])
    
}

function flip(img) {
  let image = img.target;
  image.style.visibility = "hidden";
  val[image.target]= 1;
  compare(image);
}

function compare(img) {
  let count;
  
  for (let i = 0; i < 5; i++) {
    
    if (val[i] == 1 & img.style.visibility == "hidden") {
        count += count;
        console.log("🚀 ~ file: main.js:28 ~ compare ~ count:", count)
        if (count == 2){
        }else{
            img.style.visibility = "visible";
        }
    }
    
  }
}

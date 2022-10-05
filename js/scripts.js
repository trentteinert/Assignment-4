/*
1. select first paragraph change style of it.
2.add new paragraph at the bottom of the section node
3. create a button with an event listen, randomly select update
src.
*/
const section = document.querySelector("section");
const paraHolder = document.querySelector(".para-holder");
const para = document.querySelector("p");
const para2 = document.querySelectorAll("p")[1];
const new_para = document.createElement("p");
//update styles
para.classList.toggle("p_update");
//inserts after the first <p>
new_para.innerHTML = "In between 1st and 2nd Paragraphs";
paraHolder.insertBefore(new_para, para2);

//const btn and the img
const btn = document.querySelector(".btn");
const img = document.createElement("img");
//set the urls
section.style.backgroundImage = "url('https://source.unsplash.com/random')";
img.src = "https://source.unsplash.com/random";
//append img to section
section.appendChild(img);
//chnge img btn listener
btn.addEventListener("click", changeImg);

//couldnt figure how to do refresh img without reloading
//page I was thinking maybe it would be something in local
//storage that wouldnt be allowing me to do this, some sort of cashe?
function changeImg() {
  history.go(0);
}

const table = document.querySelectorAll("td");

for (let i = 0; i < 6; i++) {
  if (i % 2 == 0) {
    table[i].classList.toggle("td-two");
  } else {
    table[i].classList.toggle("td");
  }
}

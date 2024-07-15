const copy = document.querySelector(".Autoslider__track").cloneNode(true);
//   .querySelector(".Autoslider")
//   .insertBefore(copy, document.querySelector(".Autoslider").firstChild);
document.querySelector(".Autoslider").appendChild(copy);

let slides = document.querySelectorAll(".Autoslider__slide");
for (let i = 0; i < slides.length; i++) {
  if (i % 2 == 0) {
    slides[i].style.marginTop = "2rem";
  } else {
    slides[i].style.marginBottom = "2rem";
  }
}

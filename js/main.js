const bar = document.querySelector(".fa-bars");
const nav = document.querySelector(".main-wrapper");

bar.addEventListener("click", function () {
  nav.classList.toggle("toggle");
});

let galleryImages = document.querySelectorAll(".gallery-img");
let getLatestOpenedImg;
let windowWidth = window.innerWidth;

if (galleryImages) {
  galleryImages.forEach(function (image, index) {
    image.onclick = function () {
      let getElementCss = window.getComputedStyle(image);
      let getFullImageUrl = getElementCss.getPropertyValue("background-image");
      let getImgUrlPos = getFullImageUrl.split("/img/thumbnails/");
      let setNewImgUrl = getImgUrlPos[1].replace('")', '');
      // alert(setNewImgUrl)
      getLatestOpenedImg = index + 1;

      let contanier = document.body;
      let newImgWindow = document.createElement("div");
      contanier.appendChild(newImgWindow);
      newImgWindow.setAttribute("class", "img-window");
      newImgWindow.setAttribute("onclick", "closeImg()");

      let newIMg = document.createElement("img");
      newImgWindow.appendChild(newIMg);
      newIMg.setAttribute("src", "img/" + setNewImgUrl);
   

      newIMg.onload=function(){
      let imgWidth=this.width;
      let calcImgToEdge=((windowWidth-imgWidth)/2) - 80;


       
      let newNextBtn = document.createElement("a");
      let btnNextText = document.createTextNode("next");
      newNextBtn.appendChild(btnNextText);
      contanier.appendChild(newNextBtn);
      newNextBtn.setAttribute("class", "img-btn-next");
      newNextBtn.setAttribute('onclick','changImg()');
      newNextBtn.style.cssText="right: " +calcImgToEdge +"px; "
      
      let newPrevBtn = document.createElement("a");
      let btnPrevText = document.createTextNode("next");
      newPrevBtn.appendChild(btnNextText);
      contanier.appendChild(newPrevBtn);
      newPrevBtn.setAttribute("class", "img-btn-Prev");
      newPrevBtn.setAttribute('onclick','changImg()');
      newPrevBtn.style.cssText="left: " +calcImgToEdge +"px; "

      }
    };
  });
}

function closeImg() {
  document.querySelector(".img-window").remove();
}

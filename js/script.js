let progress = document.getElementById("progressbar");
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function () {
  let progressHeigth = (window.scrollY / totalHeight) * 100;
  progress.style.height = progressHeigth + "%";
};

function darkModeToggle(){
    
}
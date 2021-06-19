// ###################################################################### Deuxième menu qui apparaît ##################################################
// ###################################################################### Deuxième menu qui apparaît ##################################################

window.addEventListener("scroll", () => {
  if (window.innerWidth >= 800){
    let menuDeux = document.querySelectorAll(".menuDeux")[0];
    let scroll = window.scrollY;
    let hauteur = 500;
    if (scroll >= 500) {
      menuDeux.style.visibility = "visible";
      menuDeux.style.opacity = "100%";
    } else {
      menuDeux.style.visibility = "hidden";
      menuDeux.style.opacity = "0%";
    }
  }
});
    
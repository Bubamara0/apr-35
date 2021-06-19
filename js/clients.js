$(window).scroll(function(){
    const apparitionRemerciements = document.querySelector("#texte_presentation");
    let scroll = window.scrollY;
    let hauteur = 200;
    if (scroll >= 200) {
        apparitionRemerciements.style.opacity = "100%";
      }
    }
  );

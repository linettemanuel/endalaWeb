window.onload = () => {
    var preloader = document.querySelector(".preloader");
    setTimeout(()=> {
        preloader.style.animation = "fadeOut 1s ease forwards"
        preloader.style.zIndex = -20;
    },10);
}
  
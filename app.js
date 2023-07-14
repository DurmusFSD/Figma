const menuCollapseEl = document.querySelector(".menu__collapse");
const linksContainerEl= document.querySelector(".app__links-container");
if(menuCollapseEl && linksContainerEl){
    menuCollapseEl.addEventListener('click', ()=> {
        linksContainerEl.classList.toggle("active");

        const purpleLegoEl = document.querySelector(".purple__logo");

        if(linksContainerEl.classList.contains("active")){
            menuCollapseEl.src = "./Assets/image/menu_close.svg";
            purpleLegoEl.src = "./Assets/image/close_door_logo.svg";
        }else{
            menuCollapseEl.src = "./Assets/image/menu_open_icon.svg";
            purpleLegoEl.src = "./Assets/image/hire_me.svg";
        }
    });
}

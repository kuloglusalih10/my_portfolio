
function toggleDrawer() {
console.log('click');
    const drawer = document.getElementById("drawer");
    const drawerButton = document.getElementById("header-drawer-button");
    drawer?.classList.toggle("open");
    drawerButton?.classList.toggle("open");
}

export const initializeDrawerButton =   () => {
    const drawerButton = document.getElementById("header-drawer-button");
    drawerButton?.addEventListener("click", toggleDrawer);
}



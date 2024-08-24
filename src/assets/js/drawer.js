
function toggleDrawer() {
console.log('click');
    const drawer = document.getElementById("drawer");
    const drawerButton = document.getElementById("header-drawer-button");
    const drawerOpen = document.getElementById('drawer-open');
    const drawerClose = document.getElementById('drawer-close');
    drawerOpen?.classList.toggle("hidden");
    drawerOpen?.classList.toggle("flex");
    drawerClose?.classList.toggle("hidden");
    drawer?.classList.toggle("open");
    drawerButton?.classList.toggle("open");
}

export const initializeDrawerButton =   () => {
    const drawerButton = document.getElementById("header-drawer-button");
    drawerButton?.addEventListener("click", toggleDrawer);
}



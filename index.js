const mobileNavbar = document.getElementById("mobile-navbar-container");
const mobileMenu = document.getElementById("mobile-menu");
const closeIcon = document.getElementById("close-icon");

mobileMenu.addEventListener("click", openMenu);

function openMenu() {
	mobileNavbar.classList.add("open-mobile-navbar");
}

closeIcon.addEventListener("click", closeMenu);

function closeMenu() {
	mobileNavbar.classList.remove("open-mobile-navbar");
}

var hamburgerBtn = document.querySelector("button.hamburger-btn");
var hamburgerMenu = document.querySelector(".hamburger-menu");


function openMenu(e) {

	e.stopPropagation();

	hamburgerMenu.classList.toggle("show-menu");
	hamburgerBtn.setAttribute("aria-expanded", true);
	if (hamburgerMenu.classList.contains("show-menu")) {
		hamburgerBtn.setAttribute("aria-expanded", true);
	} else {
		hamburgerBtn.setAttribute("aria-expanded", false);
	}
	hamburgerBtn.focus();
}
hamburgerBtn.onclick = openMenu;

function closeMenu(e) {
	e.stopPropagation();
	hamburgerMenu.classList.remove("show-menu");
	hamburgerBtn.focus();
}

document.onkeyup = function (e) {
	if (e.key === "Escape") {
		closeMenu(e);
	}
};

document.body.onclick = function (e) {
	if (!hamburgerMenu.contains(e.target)) {
		closeMenu(e);
	}

};


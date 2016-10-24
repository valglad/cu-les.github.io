// Navigation active state
document.addEventListener("DOMContentLoaded", function() {
	var anchor;
	var navArray = document.querySelectorAll('nav li a');

	for (i = 0; i < navArray.length; i++) {
		anchor = navArray[i];
		if (anchor.pathname === window.location.pathname) {
			anchor.classList.add('active');
		}
	}
});
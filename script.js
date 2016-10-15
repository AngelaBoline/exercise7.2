function preparePage() {
	document.getElementById("main").onclick = function () {
		if (document.getElementById("main").className == "transition") {
			document.getElementById("main").className = "";
		} else {
			document.getElementById("main").className = "transition";
		}
	};
}

window.onload = function(){
	preparePage();
}


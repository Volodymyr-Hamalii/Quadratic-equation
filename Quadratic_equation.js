function solvingQE() {
	this.textContent = "Calculated!";
	let a = Number(document.getElementById("a").value);
	let b = Number(document.getElementById("b").value);
	let c = Number(document.getElementById("c").value);

	if (a == "") {
		const massage =
			'You must fill in the field for the parameter <span>"a"</span>.';
		document.getElementById("answer").className = "text";
		document.getElementById("answer").innerHTML = massage;
		return;
	}

	let x1 = (-b + Math.pow(Math.pow(b, 2) - 4 * a * c, 0.5)) / (2 * a);
	let x2 = (-b - Math.pow(Math.pow(b, 2) - 4 * a * c, 0.5)) / (2 * a);

	if (isNaN(x1) || isNaN(x2)) {
		const massage = "Equation doesn't have real roots.";
		document.getElementById("answer").innerHTML = massage;
		return;
	}

	let answer = `Roots of the equation are <span>x<sub>1</sub> = ${x1}</span> and <span>x<sub>2</sub> = ${x2}</span>.`;
	document.getElementById("answer").innerHTML = answer;
	document.getElementById("answer").className = "text";
}

document.querySelector("button").addEventListener("click", solvingQE);
document.addEventListener("keypress", (key) => {
	if (key.key === "Enter") {
		solvingQE();
	}
});

var button = document.getElementById('demo');

button.addEventListener('click', function () {

	xhttp = new XMLHttpRequest();

	xhttp.onreadystatechange = function () {

		if (xhttp.readyState == 4 && xhttp.status == 200) {
			// eval() permet de renvoyer de créer un
			// objet à partir du document JSON
			eval('var a='+ this.responseText);
			console.log(a);
			document.getElementById('demo').innerHTML = a.nom + "<br>" + a.chenapan +
			"<br>" + a.roi + "<br>" + a.gonzague;
			// Pour le fichier texte
			// document.getElementById('demo').innerHTML = this.responseTe
		}

	};

	xhttp.open("GET", "test.json", true);
	// Pour un fichier texte basique
	//xhttp.open("GET", "ajax_info.txt", true);

	xhttp.send();
});
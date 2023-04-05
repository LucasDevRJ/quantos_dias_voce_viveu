function calculaDiasVividos() {
	var campoIdade = document.querySelector("input");
	var resposta = document.getElementById("resposta-dias");

	console.log(resposta);

	var idade = campoIdade.value;

	if (isNaN(idade)) {
		alert("Digite somente números!!!");
	} else if (idade <= 0 || idade > 100) {
		alert("Digite uma idade válida!!!");
	} else {
		var diasVividos = idade * 365;

		resposta.textContent = "Você já viveu " + diasVividos + " dias!!!";

		calculaBatimentosCardiacos(diasVividos);
	}
}

function calculaBatimentosCardiacos(diasVividos) {
	var resposta = document.getElementById("resposta-batimentos");

	//Para sabermos a quantidade de batimentos cardiacos, 
	//basta multiplicar a duração do dia em horas pela duração em minutos de cada hora
	// e por final multiplicar pelos batimentos em cada minuto
	var batimentos = diasVividos * 24 * 60 * 80;

	resposta.textContent = "E seu coração já bateu " + batimentos + " vezes! Haja coração!!";
}
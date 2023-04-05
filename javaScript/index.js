function calculaDiasVividos() {
	var campoIdade = document.querySelector("input");
	var resposta = document.querySelector("h2");

	var idade = campoIdade.value;

	var diasVividos = idade * 365;

	resposta.textContent = "Você já viveu " + diasVividos + " dias!!!";

	calculaBatimentosCardiacos(diasVividos);
}

function calculaBatimentosCardiacos(diasVividos) {
	//Para sabermos a quantidade de batimentos cardiacos, 
	//basta multiplicar a duração do dia em horas pela duração em minutos de cada hora
	// e por final multiplicar pelos batimentos em cada minuto
	var batimentos = dias * 24 * 60 * 80;
}
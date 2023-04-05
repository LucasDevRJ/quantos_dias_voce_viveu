function calculaDiasVividos() {
	var campoIdade = document.querySelector("input");
	var resposta = document.querySelector("h2");

	var idade = campoIdade.value;

	var diasVividos = idade * 365;

	resposta.textContent = "Você já viveu " + diasVividos + " dias!!!";

	calculaBatimentosCardiacos(diasVividos);
}

function calculaBatimentosCardiacos(diasVividos) {

}
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputWeight = e.target.querySelector(".weight");
  const inputHeight = e.target.querySelector(".height");

  const weight = Number(inputWeight.value);
  const height = Number(inputHeight.value);

  if (!weight) {
    setResult("Peso inválido", false);
    return;
  }

  if (!height) {
    setResult("Altura inválida", false);
    return;
  }

  const getImc = calculateImc(weight, height);
  const getStatus = getLevelImc(getImc);

  const msg = `Seu IMC é ${getImc}  (${getStatus})`;

  setResult(msg, true);
});

function getLevelImc(result) {
  const level = [
    "Abaixo do peso",
    "Peso normal",
    "Sobrepeso",
    "Obesidade grau 1",
    "Obesidade grau 2",
    "Obesidade grau 3",
  ];

  if (result >= 40) return level[5];
  if (result >= 35) return level[4];
  if (result >= 30) return level[3];
  if (result >= 25) return level[2];
  if (result >= 18.5) return level[1];
  if (result <= 18.4) return level[0];
}

function calculateImc(weight, height) {
  const imc = weight / height ** 2;

  return imc.toFixed(2);
}

function setResult(msg, isValid) {
  const result = document.querySelector(".result");

  if (isValid) {
    result.classList.add("valid");
    result.classList.remove("invalid");
  }

  if (!isValid) {
    result.classList.add("invalid");
  }

  result.innerHTML = msg;
}

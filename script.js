const botao = document.querySelector("#botao");

botao.addEventListener('click', calcularMedia);

function calcularMedia() {
  let valor = document.getElementById("valor").value;
  let peso = document.getElementById("peso").value;
  valor = valor.split(",");
  peso = peso.split(",");
    part1 = [0];
    for(let i = 0; i < valor.length; i++){
    part1[i] = valor[i] * peso[i]
    
}
    let part2 = 0;
    for(let i = 0; i < part1.length; i++){
    part2 = part2 + part1[i]
    console.log(part2)
}
    let part3 = 0;
    for(let i = 0; i < peso.length; i++){
    part3 = parseFloat(peso[i]) + part3
    }
  final = part2 / part3;
  finish = document.getElementById("result")
  if (isNaN(final))
    {
      finish.innerHTML = ("Insira apenas números separados por vírgulas")
      return;
    }
  finish.innerHTML = "A média ponderada dos valores: <br>" + valor + "<br> combinados com os pesos: <br>" + peso +
    "<br> é igual a: <br>" + final
}
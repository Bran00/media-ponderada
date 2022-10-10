const botao = document.querySelector("#botao");
const resultado = document.getElementById("result")

botao.addEventListener('click', calcularMedia);

function calcularMedia() 
{
  let valor = document.getElementById("valor").value;
  let peso = document.getElementById("peso").value;
  valor = valor.split(",");
  peso = peso.split(",");
  
  if (valor.length !== peso.length ) 
  {
    resultado.innerHTML = ("Insira a mesma quantidade de argumentos nos 2 campos")
    return;
  }

  let valoresPonderados = 0;

  for(let i = 0; i < valor.length; i++)
  {
    parseFloat(valoresPonderados += valor[i] * peso[i]).toFixed('2')
    console.log(valoresPonderados)
  }

  let somaPesos = 0;
  
  for(let i = 0; i < peso.length; i++)
  {
    somaPesos += parseFloat(peso[i])
  }

  mediaPonderada=valoresPonderados/somaPesos

  if (isNaN(mediaPonderada))
  {
    resultado.innerHTML = ("Insira apenas números separados por vírgulas")
    return;
  }
  
  resultado.innerHTML = "A média ponderada dos valores: <br>"
                        + valor + "<br> combinados com os pesos: <br>"
                        + peso + "<br> é igual a: <br>" 
                        + parseFloat(mediaPonderada).toFixed('2')
}
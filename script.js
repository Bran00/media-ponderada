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

  let valor_ponderado = new Array;

  for(let i = 0; i < valor.length; i++)
  {
    valor_ponderado[i] = parseFloat(valor[i] * peso[i]).toFixed('2')
    console.log(valor_ponderado[i],valor[i], peso[i])
  }

  let media_ponderada = 0;
  
  for(let i = 0; i < valor_ponderado.length; i++)
  {
    media_ponderada += parseFloat(valor_ponderado[i])
  }

  if (isNaN(media_ponderada))
  {
    resultado.innerHTML = ("Insira apenas números separados por vírgulas")
    return;
  }
  
  resultado.innerHTML = "A média ponderada dos valores: <br>"
                        + valor + "<br> combinados com os pesos: <br>"
                        + peso + "<br> é igual a: <br>" 
                        + parseFloat(media_ponderada).toFixed('2')
}

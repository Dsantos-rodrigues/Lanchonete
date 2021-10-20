bebidas = [["suco", "refrigerante", "agua"], [5, 4.5, 1.5]]
comidas = [["bolo", "pastel", "torta"], [4.5, 5, 6]]

let NOMES = 0
let PRECOS = 1

document.getElementById("calcular").onclick = function() {
  let total = 0
  let radios = document.getElementsByName("radiogroup")
  let nomeCliente = document.getElementById("nomeCliente").value
  let nomeB, nomesComidas 
  for(let i = 0; i < radios.length; i++) {
    if(radios[i].checked) {
      nomeB = bebidas[NOMES][i]
      total += bebidas[PRECOS][i]
    }
  }
  
  nomesComidas = ""
  for(let i = 0; i < comidas[NOMES].length; i++) {
    if(document.getElementById(comidas[0][i]).checked) {
      total += parseFloat(comidas[PRECOS][i])
      nomesComidas += (i>0) ? ", " + comidas[NOMES][i] : comidas[NOMES][i]
    }
  }

  let msg = "Cliente: " +  nomeCliente + "\nBebida: " + nomeB + "\nSalgado(s) e/ou Doce(s): " + nomesComidas + "\nTotal do pedido: " + total.toLocaleString("pt-br", {minimumFractionDigits: 2, maximumFractionDigits: 2})
  alert(msg);
}


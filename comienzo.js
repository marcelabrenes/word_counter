const texto_entrada = document.getElementById('texto-entrada');

const texto = texto_entrada.innerText;

const palabras = texto.split(' '); 

const resultados = {}; 

palabras.forEach(palabra => {
    
    if (palabra in resultados) {
      resultados[palabra] = resultados[palabra] + 1;
    } else {
      resultados[palabra] = 1;
    }
  });
  
  const div_resultados = document.querySelector('#resultados');

Object.keys(resultados).forEach(resultado => {
    const resultadito = document.createElement('p');
    resultadito.innerText = resultado + ' ' + resultados[resultado];
    div_resultados.appendChild(resultadito);
})

  console.log(resultados);
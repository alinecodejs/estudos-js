const ligada = document.getElementById('ligada');
const desligada = document.getElementById('desligada');
const lamp = document.getElementById('lamp');

function quebrou () {
 return lamp.src.indexOf('quebrada') > -1
};

function lampLigada () {
  if (!quebrou ()) {
    lamp.src = './img/ligada.jpg'
  }
};

function lampDesligada () {
  if (!quebrou ()) {
    lamp.src = './img/desligada.jpg'
  }   
};

function lampQuebrada () {
  if (!quebrou()) {
    lamp.src = './img/quebrada.jpg'
  }  
};

ligada.addEventListener('click', lampLigada);
desligada.addEventListener('click', lampDesligada)
lamp.addEventListener('click', lampQuebrada)
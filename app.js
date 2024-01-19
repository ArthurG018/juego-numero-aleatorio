var mensaje = "";
var intento = 1;
var listaNum = [];
var numeroAleatorio = generarNumeroAleatorio();

//estado de los botones
estadoBoton(false);
mensajeJuego(".texto__parrafo", "Bienvenido al juego");

function validarIntento() {
  let txt_intento = parseInt(document.getElementById("txt_intento").value);
  console.log(numeroAleatorio);
  //Validar que exista
  if (!txt_intento) return;

  if (txt_intento == numeroAleatorio) {
    mensajeJuego(
      ".texto__parrafo",
      `Acertaste!! en ${intento} ${intento == 1 ? "intento" : "intentos"}`
    );
    estadoBoton(true);
  } else {
    mensajeJuego(
      ".texto__parrafo",
      txt_intento > numeroAleatorio
        ? "El número es menor"
        : "El número es mayor"
    );
    limpiar();
    intento++;
  }
}

function estadoBoton(estado) {
  document.getElementById("txt_intento").disabled = estado;
  document.getElementById("intento").disabled = estado;
  document.getElementById("reiniciar").disabled = !estado;
}

function mensajeJuego(input, text) {
  document.querySelector(input).innerHTML = text;
}

function generarNumeroAleatorio() {
  let num = Math.floor(Math.random() * 10) + 1;

  if (listaNum.includes(num)) {
    generarNumeroAleatorio();
  } else {
    listaNum.push(num);
  }
  return listaNum[listaNum.length - 1];
}

//Reinicia el juego en cuando se tenga los 10 números en la lista y/o se acierte
function reiniciar() {
  if (listaNum.length >= 10) {
    alert("Completaste el nivel, se reiniciará el juego");
    listaNum = [];
  }
  numeroAleatorio = generarNumeroAleatorio();
  estadoBoton(false);
  intento = 1;
  mensajeJuego(".texto__parrafo", "Bienvenido al juego");
  limpiar();
}

//Valida que el número se encuentre entre el 1 y el 10
function validNum() {
  let validNum = parseInt(document.getElementById("txt_intento").value);

  if (validNum <= 0 || validNum > 10) {
    mensajeJuego(".info_text", "El número tiene que estar entre 1 a 10");
    limpiar();
  } else {
    mensajeJuego(".info_text", "");
  }
}

//Limpia los input necesarios
function limpiar() {
  document.getElementById("txt_intento").value = "";
}

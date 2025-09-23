//  INPUTS variables predertiminadas del usuario
let edad = 15;              // Número
let tipoTransaccion = "prestamo"; // "prestamo" o "compra"
let cantidadLibros = 3;     // Número
let precioLibro = 20000;       // Solo aplica en compra
let plan = "VIP";           // "BASICO", "PREMIUM", "VIP"

//  FUNCIONES 

// inicio del sistema 
function mostrarSaludo() {
  return "Bienvenido al sistema de registro de libreria cervantes.";
}

// Verificar edad
function verificarEdad(edad) {
  if (edad < 12) {
    return "Solo puedes elegir libros infantiles"; // menoresde 12 años
  } else {
    return "Puedes elegir cualquier tipo de libro"; // mayores de 12 años
  }
}

// Calcular total de días de PRESTAMO
// exite el SCOPE  de funcion donde solo es accesible dentro de esta funcion
function calcularDiasPrestamo(cantidadLibros, plan) {
  let totalDias = cantidadLibros * 5; // calcula la cantidad de dias por los 5 dias que tiene de prestamo cada libro
  let extension = 0; // validadcion donde se va aguardar los dias de mas agregados al plan

  switch (plan) {
    case "BASICO":
      extension = 0;
      break;
    case "PREMIUM":
      extension = 1;
      break;
    case "VIP":
      extension = 2;
      break;
    default:
      extension = 0;
  }

  return totalDias + extension;  // devuelve el total de dias de préstamo con sus respectivo plan de extencion de dias 
}

// Calcular costo de COMPRA
function calcularCompra(cantidadLibros, precioLibro, plan) {
  let subtotal = cantidadLibros * precioLibro; // variable donde nos va a guardar el subtotal por cantidad de libro y el precio
  let descuento = 0;

  switch (plan) {
    case "BASICO":
      descuento = 0;
      break;
    case "PREMIUM":
      descuento = subtotal * 0.1; // 10%
      break;
    case "VIP":
      descuento = subtotal * 0.2; // 20%
      break;
    default:
      descuento = 0;
  }

  return subtotal - descuento;
}

// Beneficios por plan
function beneficiosPlan(plan, tipoTransaccion) {
  let texto = "";

  if (tipoTransaccion === "prestamo") {
    switch (plan) {
      case "BASICO":
        texto = "Préstamo normal, sin dias adicionales";
        break;
      case "PREMIUM":
        texto = "1 día adicional en préstamo";
        break;
      case "VIP":
        texto = "2 días adicionales + acceso al club de lectura";
        break;
      default:
        texto = "Plan no válido";
    }
  } else if (tipoTransaccion === "compra") {
    switch (plan) {
      case "BASICO":
        texto = "Sin descuento adicional";
        break;
      case "PREMIUM":
        texto = "10% de descuento en tu compra";
        break;
      case "VIP":
        texto = "20% de descuento + acceso al club de lectura";
        break;
      default:
        texto = "Plan no válido";
    }
  }

  return texto;
}

// Función para mostrar el menú principal
// y el HOISTING se ve en la funcion main en el menu principal se puede llamar
// antes de que se defina en el código

function main() {
    // se visualiza el SCOPEya que las variables `edad`,
  // `tipoTransaccion`, `cantidadLibros`, `precioLibro` y `plan`
  // son accesibles desde cualquier lugar del código
  console.log(mostrarSaludo());

  const restriccionEdad = verificarEdad(edad);
  console.log("Edad del cliente:", edad, "-", restriccionEdad);

  if (tipoTransaccion === "prestamo") {
    let totalDias = calcularDiasPrestamo(cantidadLibros, plan);
    let beneficios = beneficiosPlan(plan, tipoTransaccion);

    console.log("Tipo de transacción: PRÉSTAMO");
    console.log("Cantidad de libros:", cantidadLibros);
    console.log("Total de días de préstamo:", totalDias);
    console.log("Beneficios:", beneficios);

  } else if (tipoTransaccion === "compra") {
    let totalPagar = calcularCompra(cantidadLibros, precioLibro, plan);
    let beneficios = beneficiosPlan(plan, tipoTransaccion);

    console.log("Tipo de transacción: COMPRA");
    console.log("Cantidad de libros:", cantidadLibros);
    console.log("Precio por libro:", precioLibro);
    console.log("Total a pagar:", totalPagar);
    console.log("Beneficios:", beneficios);

  } else {
    console.log("Tipo de transacción no válido.");
  }
}

// Ejecutar el programa
main();

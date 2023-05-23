/*La idea es un programa que permita crear una biblioteca de libros ingresados mediante prompt y tener la opcion de ver la lista por consola, agregar libros indefinidamente y borrar un libro de la lista*/

//en esta seccion declaro el array vacio,la funcion constructora y el prompt que va a llevar a los distintos procesos
const biblioteca = [];
class Libros {
  constructor(nombre, precio, id) {
    this.nombre = nombre;
    this.precio = precio;
    this.id = id;
  }
}
let valor = prompt("ingrese ESC para salir o presione enter para continuar");
//en esta seccion segun el valor ingresado por prompt se da paso a otro prompt que indica las opciones a realizar y el ciclo con los condicionales
while (valor !== "ESC") {
  let accion = prompt(`
  Ingrese "I" para sumar un libro a la lista.
  Ingrese "V" para ver la lista de libros.
  Ingrese "B" para borrar un libro de la lista.
  `);

  //seccion para ingresar un libro

  if (accion === "I" || accion === "i") {
    let nombre = prompt("ingrese el nombre del libro");
    let precio = prompt("ingrese el precio del libro");
    let id = biblioteca.length + 1;
    const libro = new Libros(nombre, precio, id);
    biblioteca.push(libro);
    alert(
      `el libro ${nombre} fue añadido con exito, ahora la lista posee ${biblioteca.length} libros`
    );
    valor = prompt("ingrese ESC para salir o presione enter para continuar");
  }
  //seccion para ver la lista de libros por consola
  else if (accion === "V" || accion === "v") {
    if (biblioteca.length === 0) {
      alert("Todavia no ha ingresado libros a la lista");
    } else {
      for (const item of biblioteca) {
        console.log(item);
      }
    }

    valor = prompt("ingrese ESC para salir o presione enter para continuar");
  }
  //seccion para borrar un libro
  else if (accion === "B" || accion === "b") {
    if (biblioteca.length === 0) {
      alert("no hay libros en la lista para borrar");
    } else {
      let borrar = prompt("ingrese el nombre del libro que quiere borrar");
      const eliminar = (nombre) => {
        let index = -1;
        for (let i = 0; i < biblioteca.length; i++) {
          if (biblioteca[i].nombre === nombre) {
            index = i;
            break;
          }
        }
        if (index != -1) {
          biblioteca.splice(index, 1);

          console.log(`El libro "${nombre}" ha sido eliminado de la lista.`);
        } else {
          alert(`El libro "${nombre}" no se encuentra en la lista.`);
        }
      };
      eliminar(borrar);
    }
    valor = prompt("ingrese ESC para salir o presione enter para continuar");
  } else {
    alert(`${valor} no es una opcion correcta `);
    valor = prompt("ingrese ESC para salir o presione enter para continuar");
  }
}

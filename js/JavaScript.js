class Pelicula {

    constructor(titulo, autor, anio, genero, valoracion, id) {
        this.titulo = titulo;
        this.autor = autor;
        this.anio = parseInt(anio);
        this.genero = genero;
        this.valoracion = parseInt(valoracion);
        this.id = id;
    }
    asignarId(array) {
        this.id = array.length;

    }
    valorar(valoracion) {
        this.valoracíon = parseInt(valoracion);
    }

}

const peliculas = [
    new Pelicula('Guerra de los mundos', 'Steven Spielberg', 2005, 'ciencia ficcion', 8, 1),
    new Pelicula('TED', 'Seth MacFarlane', 2012, 'fantasia', 6, 2),
    new Pelicula('Bad boys', 'Jerry Bruckheimer', 1998, 'comedia', 9, 3),
    new Pelicula('Contratiempo', 'Oriol Paulo', 2016, 'ciencia ficcion', 8, 4),
    new Pelicula('Dia de la independencia', 'Roland Emmerich', 1996, 'ciencia ficcion', 10, 5),
    new Pelicula('Rescatando al solado ryan', 'Steven Spielberg', 1998, 'ciencia ficcion', 9, 6),
    new Pelicula('Parque Jurasico', 'Steven Spielberg', 1993, 'ciencia ficcion', 7, 7),
]


//------Pedir que ingresen peliculas y sumarlos al array------//

let continuar = true;

while (continuar) {
    let ingreso = prompt('Ingresa los datos de la pelicula: titulo, autor, año , genero, puntaje de 1 a 10. Ingresa X para finalizar');

    if (ingreso.toUpperCase() ==='X' ) {
        continuar = false;
        break;
    }else {
    let datos = ingreso.split('/');

    const pelicula = new Pelicula(datos[0], datos[1], [2], datos[3], datos[4]);

    peliculas.push(Pelicula);
    pelicula.asignarId(peliculas);

}

}


//------Fin, no se ingresan mas peliculas y sumarlos en el array------//
//------ Ordenar el array de acuerdo a lo que se elija------//


let criterio = prompt('elegi tu orden deseado:\n1- Titulo (A a Z) \n2 - Titulo (Z a A) \n3 - Mayor a menor puntuado \n4 - Fecha de publicación (Más viejo a más nuevo)');

function ordenar(criterio, array) {
    let arrayOrdenado = array.slice(0);

    switch (criterio) {
        case '1':
            let nombreAscendente = arrayOrdenado.sort((a, b) => a.titulo.localeCompare(b.titulo));
            return nombreAscendente;

        case '2':
            let nombreDescendente = arrayOrdenado.sort((a, b) => b.titulo.localeCompare(a.titulo));
            return nombreDescendente;

        case '3':
            return arrayOrdenado.sort((a, b) => b.valoracion - a.valoracion);
            break;

        case '4':
            return arrayOrdenado.sort((a, b) => a.anio - b.anio);

        default:
            alert('no es un criterio válido');
            break;
    }
}

//------ fin de ordenar el array------//

function crearStringresultado(array) {
    let info = '';

    array.forEach(element => {
        info += 'Titulo: ' + element.titulo + '\nAutor:' + element.autor + '\nAño de publicacíon:' + element.anio + '\nValoración: ' + element.valoracion + ' puntos.\n\n'

    });
    return info;
}

alert(crearStringresultado(ordenar(criterio, peliculas)))

//---- filtrar peliculas de acuerdo al autor ----//

let autorElegido = prompt ('Escribi el nombre del autor para que te mostremos sus libros');

const filtrado = peliculas.filter((pelicula)=>Pelicula.autor.toLowerCase().includes(autorElegido.toLowerCase()))

if(filtrado.length==0){
    alert('Lo sentimos, no encontramos coincidencias en nuestro catálogo');

}else{
    const imprimible = filtrado.map((Pelicula)=>Pelicula.titulo);
    alert ('Las peliculas del catalogo, que encontramos son : \n- '+ imprimible.join)
}
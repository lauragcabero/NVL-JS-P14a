var pelis = [
    {
        'Nombre': 'El señor de los anillos',
        'Género': 'Acción'
    },
    {
        'Nombre': 'Regreso al Futuro',
        'Género': 'Acción'
    },
    {
        'Nombre': 'Los increibles 2',
        'Género': 'Animación'
    },
    {
        'Nombre': 'Matrix',
        'Género': 'Ciencia Ficción'
    },
    {
        'Nombre': 'Frozen',
        'Género': 'Animación'
    },
    {
        'Nombre': 'Interestellar',
        'Género': 'Ciencia Ficción'
    },
    {
        'Nombre': 'John Wick',
        'Género': 'Ciencia Ficción'
    },
    {
        'Nombre': 'Joker',
        'Género': 'Suspense'
    },
    {
        'Nombre': 'Infinity War',
        'Género': 'Ciencia Ficción'
    },
    {
        'Nombre': 'Logan',
        'Género': 'Acción'
    },
    {
        'Nombre': 'El hoyo',
        'Género': 'Suspense'
    },
    {
        'Nombre': 'El Diario de Noa',
        'Género': 'Comedia'
    },
    {
        'Nombre': 'Hogar',
        'Género': 'Suspense'
    },
    {
        'Nombre': 'Ocho Apellidos Vascos',
        'Género': 'Comedia'
    },
    {
        'Nombre': 'Vaiana',
        'Género': 'Animación'
    },
    {
        'Nombre': 'Brave',
        'Género': 'Animación'
    },
    {
        'Nombre': 'Parásitos',
        'Género': 'Suspense'
    }
];

// Selecciono la etiqueta body indicando su posición

var $body = document.getElementsByTagName('body')[0];

// Creo la etiqueta ul que es la primera que se colocará en body

var creandoUl = document.createElement('ul');

// Bucle for para iterar por todo el array de objetos de pelis

for(i=0; i<pelis.length; i++) {
    var listaPeliculas = pelis[i];
    console.log(listaPeliculas);

    // Creo etiqueta Li dentro del bucle para que la vaya creando en cada iteración junto con cada título
    var creandoLi = document.createElement('li'); 
    // Creo etiqueta img para ir añadiendo la imagentambién junto a la película
    var creandoImg = document.createElement('img');
    // Creo los atributos que van dentro de la etiqueta img
    creandoImg.setAttribute('alt', 'imagen-generos-cinematograficos');
    creandoImg.setAttribute('src', 'https://cafespendientes.es/wp-content/uploads/2017/12/generos-cine.jpg');
    creandoImg.setAttribute('width', '200px');
    creandoImg.setAttribute('height', '100px');
    // Escribo lo que va a ir apareciendo en el DOM
    creandoLi.innerHTML = listaPeliculas.Nombre + '. Género: ' + listaPeliculas.Género;
    // Le añado img con sus atributos a li
    creandoLi.appendChild(creandoImg);
    // Le añado a ul el siguiente li con su img y sus atributos
    creandoUl.appendChild(creandoLi);
}

// fuera del bucle ya, teniendo creado el ul, se lo añado al body
$body.appendChild(creandoUl);
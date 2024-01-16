//1 Añadimos el elemento padre
const elementoPadre = document.querySelector('div')

//2 Creamos el elemnto que queremos
const parrafo4 = document.createElement('p');
const parrafo5 = document.createElement('p');
const parrafo0 = document.createElement('p');
//3 añadimos el texto
const txtParrafo4 = document.createTextNode('<h3>párrafo 5</h3>');//aqui el las etiqeyas no funcionan
parrafo5.innerHTML = '<h3>párrafo 5</h3>' //aqui gracias al inner html podemos escribir el codigo html que queramos
parrafo0.innerHTML = 'Soy el primer párrafo, gracias al método prepend'
//
elementoPadre.appendChild(parrafo4); //añadimos el párrafo como último hijo
parrafo4.appendChild(txtParrafo4); //añadimos el nodo de texto
elementoPadre.appendChild(parrafo5); //añadimos el párrafo como último hijo hijo y no añadimos nodo de texto xq ya lo habiamos hecho con el html
elementoPadre.prepend(parrafo0);
// tambien se podría usar .text content

elementoPadre.append(parrafo4, parrafo5, 'párrafo aádido con append') // con append añadimos ambos hijos de manera más rápida y ademas podemos aádir texto extra  

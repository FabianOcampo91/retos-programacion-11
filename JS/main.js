const productList = [
    {
        img: '/IMAGES/34421a.jpg',
        name: 'Lavarropa Drean Next 6.06',
        price: 34356,
        state: 'Nuevo',
        ventas: 34
    },
    {
        img: '/IMAGES/34421a.jpg',
        name: 'Lavarropa Drean Next 7.10',
        price: 45622,
        state: 'Nuevo',
        ventas: 29
    },
    {
        img: '/IMAGES/34421a.jpg',
        name: 'Lavarropa Drean Next 8G',
        price: 57990,
        state: 'Nuevo',
        ventas: 13
    },
    {
        img: '/IMAGES/34421a.jpg',
        name: 'Lavarropa Drean Next 9.10',
        price: 62390,
        state: 'Nuevo',
        ventas: 9
    },
    
]


function main () {
    //paso 1: referencia al template
    const template = document.getElementById('list-products');
    //clonar al template
    productList.forEach(product => {
        const clone = template.content.cloneNode(true);
        //paso 3: asignar contenido al clon
        const imagen = clone.querySelector('img');
        imagen = product.img;
        const name = clone.querySelector('h2');
        name.innerText = product.name;
        const price = clone.querySelector('p');
        price.innerText = product.price
        const state = clone.querySelector('h3');
        state.innerText = product.state;
        const ventas = clone.querySelector('p');
        ventas.innerText = product.ventas;
        //paso 4: agregar al  padre
        const container = document.querySelector('div.container')
        container.appendChild(clone)
    })

}

main()
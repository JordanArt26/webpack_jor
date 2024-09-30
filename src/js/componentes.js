import '../css/componentes.css';
//import tsuru from '../assets/img/tsuru.png';

export const saludar = (nombre) =>{
    console.log('Creando etiqueta H1');

    const h1= document.createElement('h1');
    h1.innerText = `Hola ${nombre}!!!`;

    document.body.append(h1);

    //creando imagen
    //const img = document.createElement('img');
    //img.src = tsuru;
    //document.body.append(img);
}
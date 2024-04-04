import { Component } from '@angular/core';


@Component({
  selector: 'app-precios',
  standalone: true,
  imports: [],
  templateUrl: './precios.component.html',
  styleUrl: './precios.component.css'
})
export class PreciosComponent {
  productos = [
    { nombre: 'Papas', precio: '$1.500', descripcion: 'Las papas son un tubérculo muy utilizado en la cocina mundial. Son ricas en carbohidratos y se pueden preparar de diversas maneras.', image: 'https://i.pinimg.com/736x/8b/44/69/8b44695850b252da90d4cefd41ddfd5c.jpg' },
    { nombre: 'Tomates', precio: '$2.000', descripcion: 'Los tomates son frutas rojas muy utilizadas en ensaladas y salsas. Son ricos en vitamina C y antioxidantes.', image: 'https://i.pinimg.com/564x/0c/b9/41/0cb94134073a809a457b8421bec38c2b.jpg' },
    { nombre: 'Zanahorias', precio: '$1.200', descripcion: 'Las zanahorias son hortalizas naranjas y crujientes, ricas en betacarotenos. Se pueden consumir crudas, cocidas o en jugos.', image: 'https://i.pinimg.com/564x/1f/9d/94/1f9d949a5c38fffe3e7e2f58c7ca5a3d.jpg' },
    { nombre: 'Manzanas', precio: '$2.500', descripcion: 'Las manzanas son frutas jugosas y dulces, ricas en fibra y antioxidantes. Se pueden comer crudas o cocidas.', image: 'https://i.pinimg.com/564x/ab/7b/23/ab7b23fff69f4c74e2406f6841d58e57.jpg' },
    { nombre: 'Plátanos', precio: '$1.800', descripcion: 'Los plátanos son frutas amarillas y dulces, ricas en potasio y fibra. Son ideales como snack o para hacer batidos.', image: 'https://i.pinimg.com/564x/c3/21/43/c32143148efc0811535badd418920e35.jpg' },
    { nombre: 'Lechuga', precio: '$900', descripcion: 'La lechuga es una hortaliza verde y crujiente, rica en agua y fibra. Se utiliza comúnmente en ensaladas y sándwiches.', image: 'https://i.pinimg.com/564x/34/08/fc/3408fc491a47f0abad69556d56bea478.jpg' }
  ];
  productos2 = [
  { nombre: "Cebollas", precio: "$1.200", descripcion: "Las cebollas son vegetales aromáticos y picantes, utilizados en muchas recetas culinarias. Son ricas en antioxidantes y compuestos antiinflamatorios.", image: "https://i.pinimg.com/564x/79/1e/f5/791ef50e6d6e46214e25a6c9b5bffb96.jpg" },
  { nombre: "Pimientos", precio: "$2.300", descripcion: "Los pimientos son vegetales de colores vivos y sabor dulce o picante. Son ricos en vitamina C y antioxidantes.", image: "https://i.pinimg.com/564x/2a/a4/24/2aa42490102a2927a341b35c09db6494.jpg" },
  { nombre: "Brócoli", precio: "$1.700", descripcion: "El brócoli es una verdura verde y crujiente, rica en fibra y vitaminas. Es conocido por sus propiedades anticancerígenas.", image: "https://i.pinimg.com/564x/09/eb/66/09eb666ef0cc183bd454847651048ab5.jpg" },
  { nombre: "Fresas", precio: "$3.000", descripcion: "Las fresas son frutas rojas y jugosas, ricas en vitamina C y antioxidantes. Son populares en postres y ensaladas.", image: "https://i.pinimg.com/564x/f3/43/78/f34378274a7ad2c48f81dfe909c58426.jpg" },
  { nombre: "Uvas", precio: "$2.200", descripcion: "Las uvas son frutas pequeñas y redondas, ricas en antioxidantes y vitaminas. Son ideales para comer frescas o en jugos.", image: "https://i.pinimg.com/564x/b1/a4/c4/b1a4c4f2b92cd7558daa1233d64c22cf.jpg" },
  { nombre: "Sandías", precio: "$4.500", descripcion: "Las sandías son frutas grandes y jugosas, perfectas para hidratarse en verano. Son ricas en agua y antioxidantes.", image: "https://i.pinimg.com/564x/e4/a5/7e/e4a57eb16e32d3d6d39eeb34828bd210.jpg" }
  ];  
}

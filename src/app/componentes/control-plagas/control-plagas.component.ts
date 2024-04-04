import { Component } from '@angular/core';

@Component({
  selector: 'app-control-plagas',
  standalone: true,
  imports: [],
  templateUrl: './control-plagas.component.html',
  styleUrl: './control-plagas.component.css'
})
export class ControlPlagasComponent {
  getText() {
  
    // Obtener el elemento textarea
    const textArea: HTMLTextAreaElement = document.getElementById('textArea') as HTMLTextAreaElement;
  
    // Definir el valor del texto
    const textValue: string = `
      Nombre común: Mariquita
  
      Nombre científico: Coccinellidae
  
      Características distintivas: Las mariquitas son insectos pequeños, de cuerpo ovalado y alas duras. Suelen ser de color rojo, naranja o amarillo, con manchas negras. Las mariquitas son depredadoras de pulgones, cochinillas y otros insectos pequeños.
  
      Daños que causa a los cultivos: Las mariquitas no causan daños a los cultivos. De hecho, son beneficiosas para los cultivos, ya que ayudan a controlar las poblaciones de insectos dañinos.
  
      Métodos efectivos para eliminarla: No es necesario eliminar las mariquitas. Son insectos beneficiosos que ayudan a controlar las poblaciones de insectos dañinos.
  
      Medidas preventivas que los agricultores pueden implementar para evitar la infestación: Los agricultores pueden implementar las siguientes medidas preventivas para evitar la infestación de mariquitas:
  
      - Plantar cultivos resistentes a los insectos dañinos.
      - Utilizar métodos de control biológico, como la liberación de insectos depredadores.
      - Evitar el uso de pesticidas, ya que pueden matar a las mariquitas y otros insectos beneficiosos.
  
      Señales de alerta temprana para detectar su presencia: Las siguientes son algunas señales de alerta temprana que pueden indicar la presencia de mariquitas:
  
      - Presencia de pulgones, cochinillas u otros insectos dañinos en los cultivos.
      - Presencia de mariquitas en los cultivos.
      - Daños en las hojas de los cultivos, como agujeros o manchas.
  
      Cualquier otro detalle relevante para combatir esta plaga de manera eficaz en el sector agropecuario: Las mariquitas son insectos beneficiosos que ayudan a controlar las poblaciones de insectos dañinos. No es necesario eliminarlas. De hecho, los agricultores pueden implementar medidas preventivas para evitar la infestación de mariquitas y proteger sus cultivos.
    `;
  
    // Asignar el valor al textarea
    textArea.value = textValue;
  }

}




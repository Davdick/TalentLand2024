import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-agua',
  standalone: true,
  imports: [],
  templateUrl: './agua.component.html',
  styleUrl: './agua.component.css'
})
// @NgModule({
//   declarations: [
//     // Declaraciones de componentes, directivas, etc.
//     templateUrl: './agua.component.html',
//      styleUrl: './agua.component.css'
//   ],
//   imports: [
//     CommonModule,
//     FormsModule // Agrega FormsModule aquí
//   ]
// })
export class AguaComponent {

  eto: number;
  etapa: number;
  cultivo: number;
  producto: number = 0;
  
  constructor() { 
    this.etapa= 0; // O asigna un valor inicial aquí
    this.cultivo= 0;
    this.eto = 0;
  }
 

  multiplicar() {
    const valor1 = parseFloat((document.getElementById('eto') as HTMLInputElement).value);
    const valor2 = parseFloat((document.getElementById('cultivo') as HTMLInputElement).value);
   
    if (isNaN(valor1) || isNaN(valor2)) {
      // Manejar error: valores no numéricos
      this.producto = -1; // O mostrar un mensaje de error
    } else {
      
      this.eto = valor1 * valor2;
    }
  }

  // enviarDatos() {
  //   // Enviar los valores seleccionados a la función
  //   const etapanumber: number = parseFloat(this.etapa);
  //   const cultivoo: number = parseFloat(this.cultivo);
  //   this.eto = this.evapotranspiracionReal(etapanumber, cultivoo);
  // }

 

 // Función para calcular la evapotranspiración de referencia (ETr)
evapotranspiracionReferencia(eb: number, kp: number): number {
  return eb * kp;
}

// Función para calcular la evapotranspiración real (ETreal)
evapotranspiracionReal(etr: number, kc: number): number {
  return etr * kc;
}

// Función para calcular la humedad aprovechable (HA)
humedadAprovechable(cc: number, pmp: number, da: number, p: number): number {
  return ((cc - pmp) * da * p) / 100;
}

// Función para calcular la lámina neta (LN)
laminaNeta(ha: number, f: number): number {
  return ha * f;
}

// Función para calcular la frecuencia de riego (FR)
frecuenciaRiego(ln: number, etReal: number): number {
  return ln / etReal;
}

// Función para calcular el tiempo de riego en riego por aspersión (TR)
tiempoRiegoAspersion(ln: number, ta: number, ef: number): number {
  return (ln * 100) / (ta * ef);
}

// Función para calcular la demanda de agua (DA)
demandaAgua(etReal: number, fc: number, a: number, fr: number): number {
  return (etReal * fc * a * fr) / 100;
}

// Función para calcular el tiempo de riego en sistemas localizados (TR)
tiempoRiegoLocalizado(da: number, qe: number, n: number, ef: number): number {
  return (da * 100) / (qe * n * ef);
}

// Ejemplo de uso de las funciones
// const eb = 5; // Evaporación de bandeja (mm/día)
// const kp = 0.7; // Coeficiente de cultivo
// const kc = 0.8; // Coeficiente del cultivo
// const cc = 40; // Capacidad de campo (%)
// const pmp = 15; // Punto de marchitez permanente (%)
// const da = 1.3; // Densidad aparente (g/cm3)
// const p = 30; // Profundidad de raíces del cultivo a regar (cm)
// const f = 0.5; // Fracción de la humedad aprovechable o umbral de riego
// const ta = 10; // Tasa de ampliación del equipo (mm/h)
// const ef = 0.7; // Eficiencia de aplicación del sistema
// const fc = 0.9; // Factor de cobertura
// const a = 1000; // Área del cultivo (m2)
// const qe = 2; // Caudal de emisores (lt/h)
// const n = 100; // Número de emisores

// const etr = evapotranspiracionReferencia(eb, kp);
// const etReal = evapotranspiracionReal(etr, kc);
// const ha = humedadAprovechable(cc, pmp, da, p);
// const ln = laminaNeta(ha, f);
// const fr = frecuenciaRiego(ln, etReal);
// const trAspersion = tiempoRiegoAspersion(ln, ta, ef);
// const da = demandaAgua(etReal, fc, a, fr);
// const trLocalizado = tiempoRiegoLocalizado(da, qe, n, ef);

// console.log(Evapotranspiración de referencia: ${etr} mm/día);
// console.log(Evapotranspiración real: ${etReal} mm/día);
// console.log(Humedad aprovechable: ${ha} cm);
// console.log(Lámina neta: ${ln} cm);
// console.log(Frecuencia de riego: ${fr} días);
// console.log(Tiempo de riego por aspersión: ${trAspersion} horas);
// console.log(Demanda de agua: ${da} litros);
// console.log(Tiempo de riego en sistemas localizados: ${trLocalizado} horas);

  
}
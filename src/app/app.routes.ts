import { RouterModule, Routes } from '@angular/router';


import { AguaComponent } from './componentes/agua/agua.component';
import { ControlPlagasComponent } from './componentes/control-plagas/control-plagas.component';
import { ForoComponent } from './componentes/foro/foro.component';
import { PreciosComponent } from './componentes/precios/precios.component';
import { TipsComponent } from './componentes/tips/tips.component';

export const routes: Routes = [
  { path: 'agua', component: AguaComponent },
  { path: 'controlplagas', component: ControlPlagasComponent },
  { path: 'foro', component: ForoComponent },
  { path: 'precios', component: PreciosComponent },
  { path: 'tips', component: TipsComponent }
];
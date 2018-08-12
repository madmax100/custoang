import {Routes} from '@angular/router';
import {EstimativaComponent} from './estimativa/estimativa.component';
import { HomeComponent } from './home/home.component';


export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'estimativa', component: EstimativaComponent}
    ];

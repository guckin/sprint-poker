import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SessionComponent} from './session/session.component';
import {MainMenuComponent} from './main-menu/main-menu.component';

const routes: Routes = [
    { path: '', redirectTo: '/main', pathMatch: 'full' },
    {path: 'session/:id', component: SessionComponent},
    {path: 'main', component: MainMenuComponent}
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(routes),
        CommonModule
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }

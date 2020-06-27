import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { SessionComponent } from './session/session.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { CreateSessionFormComponent } from './create-session/create-session-form.component';
import {OverlayModule} from '@angular/cdk/overlay';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

@NgModule({
    declarations: [
        AppComponent,
        SessionComponent,
        MainMenuComponent,
        CreateSessionFormComponent
    ],
    imports: [
        BrowserModule,
        MatButtonModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        OverlayModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatButtonToggleModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

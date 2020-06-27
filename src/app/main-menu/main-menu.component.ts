import { Component, OnInit } from '@angular/core';
import {CreateFormResult, CreateSessionFormComponent} from '../create-session/create-session-form.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
    selector: 'app-main-menu',
    templateUrl: './main-menu.component.html',
    styleUrls: ['./main-menu.component.sass']
})
export class MainMenuComponent implements OnInit {


    constructor(public dialog: MatDialog) { }

    ngOnInit(): void {
    }

    openCreateSessionForm(): void {
        const dialogRef = this.dialog.open<CreateSessionFormComponent, CreateFormResult>(CreateSessionFormComponent, {
            width: '500px',
        });

        dialogRef.afterClosed().subscribe((result: CreateFormResult) => {
            console.log(result);
        });
    }
}

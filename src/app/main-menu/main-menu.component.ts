import { Component, OnInit } from '@angular/core';
import {CreateFormResult, CreateSessionFormComponent} from '../create-session/create-session-form.component';
import {MatDialog} from '@angular/material/dialog';
import {SessionService} from '../session/session.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-main-menu',
    templateUrl: './main-menu.component.html',
    styleUrls: ['./main-menu.component.sass']
})
export class MainMenuComponent implements OnInit {


    constructor(public dialog: MatDialog,
                private sessionService: SessionService,
                private router: Router) { }

    ngOnInit(): void {
    }

    openCreateSessionForm(): void {
        const dialogRef = this.dialog.open<CreateSessionFormComponent, CreateFormResult>(CreateSessionFormComponent, {
            width: '500px',
        });

        dialogRef.afterClosed().subscribe((result: CreateFormResult) => {
            this.sessionService.createSession(result).subscribe(({id}) => {
                this.router.navigateByUrl(`/session/${id}`);
            });
        });
    }
}

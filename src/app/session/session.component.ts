import { Component, OnInit } from '@angular/core';
import {SessionService} from './session.service';
import {ActivatedRoute} from '@angular/router';
import {Session} from './session';

@Component({
    selector: 'app-session',
    templateUrl: './session.component.html',
    styleUrls: ['./session.component.sass']
})
export class SessionComponent implements OnInit {
    currentSession: Session;

    constructor(private sessionService: SessionService,
                private route: ActivatedRoute) { }

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id');
        this.sessionService.getSession(id).subscribe(session => {
            this.currentSession = session;
        });
    }

}

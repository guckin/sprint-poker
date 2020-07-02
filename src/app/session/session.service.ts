import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Session, SessionInfo} from './session';
import {FibDefaultPointingScale, FibNumberStringMapping, mapScaleToStringValue} from '../create-session/session-creation-info';
import {CreateFormResult} from '../create-session/create-session-form.component';

@Injectable({
    providedIn: 'root'
})
export class SessionService {
    constructor() { }

    createSession(info: CreateFormResult): Observable<SessionInfo> {
        return of({id: '1234'});
    }

    getSession(id: string): Observable<Session> {
        return of({
            title: 'foo',
            scale: FibDefaultPointingScale.map(mapScaleToStringValue(FibNumberStringMapping))
        });
    }
}





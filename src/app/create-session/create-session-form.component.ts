import {Component} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {
    FibDefaultPointingScale,
    FibNumberStringMapping,
    mapScaleToStringValue, PointingScaleValue,
    TShirtDefaultPointingScale,
    TShirtStringMapping
} from './session-creation-info';

interface PointingScaleOption {
    value: ValidOptionValue;
    scale: PointingScaleValue[];
    stringMapping: Map<PointingScaleValue, string>;
}

export interface CreateFormResult {
    scale: string[];
    title: string;
}

type ValidOptionValue = 'fib' | 'tshirt';

@Component({
    selector: 'app-create-session-form',
    templateUrl: './create-session-form.component.html',
    styleUrls: ['./create-session-form.component.sass']
})
export class CreateSessionFormComponent {

    pointingScaleOptions: PointingScaleOption[] = [
        {
            value: 'fib',
            scale: FibDefaultPointingScale,
            stringMapping: FibNumberStringMapping,
        },
        {
            value: 'tshirt',
            scale: TShirtDefaultPointingScale,
            stringMapping: TShirtStringMapping
        }
    ];

    defaultValue: ValidOptionValue = 'fib';
    pointingScale: string[] = this.getPointingScale(this.pointingScaleOptions.find(({value}) => this.defaultValue === value));
    title: string;

    constructor(
        public dialogRef: MatDialogRef<CreateSessionFormComponent, CreateFormResult>) {}

    submit(): void {
        this.dialogRef.close({
            scale: this.pointingScale,
            title: this.title
        });
    }

    getPointingScale({scale, stringMapping}: PointingScaleOption): string[] {
        return scale.map(mapScaleToStringValue(stringMapping));
    }

}

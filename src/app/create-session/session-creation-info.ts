export type PointingScaleValue = FibNumber | TShirtSizes;

export type FibNumber = 1 | 2 | 3 | 5 | 8 | 13 | 20 | 40 | 100;

export const FibDefaultPointingScale = [1, 2, 3, 5, 8, 13, 20, 40, 100];

export const FibNumberStringMapping = new Map<FibNumber, string>([
    [1, '1'],
    [2, '2'],
    [3, '3'],
    [5, '5'],
    [8, '8'],
    [13, '13'],
    [20, '20'],
    [40, '40'],
    [100, '100']
]);


export enum TShirtSizes {
    S,
    M,
    L,
    XL,
    XXL,
    XXXL
}

export const TShirtDefaultPointingScale = [TShirtSizes.S, TShirtSizes.M, TShirtSizes.L, TShirtSizes.XL, TShirtSizes.XXL, TShirtSizes.XXXL];

export const TShirtStringMapping = new Map<TShirtSizes, string>([
    [ TShirtSizes.S, 'S' ],
    [ TShirtSizes.M, 'M' ],
    [ TShirtSizes.L, 'L' ],
    [ TShirtSizes.XL, 'XL' ],
    [ TShirtSizes.XXL, 'XXL' ],
    [ TShirtSizes.XXXL, 'XXXL' ]
]);

export function mapScaleToStringValue(map: Map<PointingScaleValue, string>): (value: PointingScaleValue) => string {
    return (val: PointingScaleValue) => map.get(val);
}

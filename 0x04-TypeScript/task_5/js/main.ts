// MajorCredits interface
export interface MajorCredits {
    _majorCreditBrand: void;
    credits: number;
}

// MinorCredits interface
export interface MinorCredits {
    _minorCreditBrand: void;
    credits: number;
}

// Sum MajorCredits
export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
        _majorCreditBrand: undefined,
        credits: subject1.credits + subject2.credits,
    } as MajorCredits;
}

// Sum MinorCredits
export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
        _minorCreditBrand: undefined,
        credits: subject1.credits + subject2.credits,
    } as MinorCredits;
}
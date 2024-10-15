import {
    calculateData,
    calculateDataRow,
} from '../../../src/services/calculate';
import { DataInputs, DataRowInputs } from '../../../src/services/types';
import { mockedData, mockedData2, mockedRowData } from '../mockedData';

describe('calculateData', () => {
    test('Correct result for case 1', () => {
        const result = calculateData(mockedData.input.inputs as DataInputs);
        expect(result).toEqual(mockedData.output.data);
    });
    test('Correct result for case 2', () => {
        const result = calculateData(mockedData2.input.inputs as DataInputs);
        expect(result).toEqual(mockedData2.output.data);
    });

    test('Correct result for case 3', () => {
        const result = calculateData({
            totalPrincipal: 1000,
            interestRate: 5,
            numberOfMonths: 5,
            installementType: 'decreasing',
            overpaymentResult: 'lowerInterest',
            overpayment: { 1: 1000 },
        } as DataInputs);
        expect(result.length).toBe(2);
    });
});

describe('calculateDataRow', () => {
    test('Correct result', () => {
        const result = calculateDataRow(mockedRowData.input as DataRowInputs);
        expect(result).toEqual(mockedRowData.output);
    });
});

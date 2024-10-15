import { Parameters } from './constants';

export type InstallementType = Parameters.decreasing | Parameters.equal;

export type OverpaymentResult =
    | Parameters.lowerInterest
    | Parameters.shortenTime;

export interface DataRow {
    [Parameters.nr]: number;
    [Parameters.month]: string;
    [Parameters.principalBalance]: number;
    [Parameters.principalInstallment]: number;
    [Parameters.interest]: number;
    [Parameters.installmentAmount]: number;
}

export interface DataInputs {
    [Parameters.totalPrincipal]: number;
    [Parameters.interestRate]: number;
    [Parameters.numberOfMonths]: number;
    [Parameters.installementType]: InstallementType;
    [Parameters.overpaymentResult]: OverpaymentResult;
    [Parameters.overpayment]: OverpaymentData;
}

export type OverpaymentData = { [nr: number]: number };

export interface DataRowInputs {
    [Parameters.nr]: number;
    [Parameters.month]: string;
    [Parameters.principalBalance]: number;
    [Parameters.interestRate]: number;
    [Parameters.installementType]: InstallementType;
    [Parameters.overpaymentResult]: OverpaymentResult;
    [Parameters.numberOfMonths]: number;
    [Parameters.totalPrincipal]: number;
}

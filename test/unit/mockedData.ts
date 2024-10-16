export const mockedData = {
    input: {
        inputs: {
            totalPrincipal: 500000,
            interestRate: 5,
            numberOfMonths: 10,
            installementType: 'equal',
            overpaymentResult: 'lowerInterest',
            overpayment: {},
        },
    },
    output: {
        data: [
            {
                nr: 1,
                month: '01.2021',
                principalBalance: 500000,
                principalInstallment: 49069.64637196327,
                interest: 2083.3333333333335,
                installmentAmount: 51152.9797052966,
            },
            {
                nr: 2,
                month: '01.2021',
                principalBalance: 450930.35362803674,
                principalInstallment: 49274.10323184645,
                interest: 1878.876473450153,
                installmentAmount: 51152.9797052966,
            },
            {
                nr: 3,
                month: '01.2021',
                principalBalance: 401656.25039619027,
                principalInstallment: 49479.411995312475,
                interest: 1673.5677099841262,
                installmentAmount: 51152.9797052966,
            },
            {
                nr: 4,
                month: '01.2021',
                principalBalance: 352176.8384008778,
                principalInstallment: 49685.57621195961,
                interest: 1467.4034933369908,
                installmentAmount: 51152.9797052966,
            },
            {
                nr: 5,
                month: '01.2021',
                principalBalance: 302491.2621889182,
                principalInstallment: 49892.59944617611,
                interest: 1260.3802591204924,
                installmentAmount: 51152.9797052966,
            },
            {
                nr: 6,
                month: '01.2021',
                principalBalance: 252598.66274274208,
                principalInstallment: 50100.48527720184,
                interest: 1052.4944280947586,
                installmentAmount: 51152.9797052966,
            },
            {
                nr: 7,
                month: '01.2021',
                principalBalance: 202498.17746554024,
                principalInstallment: 50309.23729919019,
                interest: 843.7424061064177,
                installmentAmount: 51152.9797052966,
            },
            {
                nr: 8,
                month: '01.2021',
                principalBalance: 152188.94016635005,
                principalInstallment: 50518.85912127014,
                interest: 634.1205840264586,
                installmentAmount: 51152.9797052966,
            },
            {
                nr: 9,
                month: '01.2021',
                principalBalance: 101670.0810450799,
                principalInstallment: 50729.35436760877,
                interest: 423.62533768783294,
                installmentAmount: 51152.9797052966,
            },
            {
                nr: 10,
                month: '01.2021',
                principalBalance: 50940.72667747113,
                principalInstallment: 50940.72667747381,
                interest: 212.25302782279638,
                installmentAmount: 51152.9797052966,
            },
        ],
    },
};

export const mockedData2 = {
    input: {
        inputs: {
            totalPrincipal: 500000,
            interestRate: 5,
            numberOfMonths: 5,
            installementType: 'decreasing',
            overpaymentResult: 'lowerInterest',
            overpayment: {},
        },
    },
    output: {
        data: [
            {
                nr: 1,
                month: '01.2021',
                principalBalance: 500000,
                principalInstallment: 100000,
                interest: 2083.3333333333335,
                installmentAmount: 102083.33333333333,
            },
            {
                nr: 2,
                month: '01.2021',
                principalBalance: 400000,
                principalInstallment: 100000,
                interest: 1666.6666666666667,
                installmentAmount: 101666.66666666667,
            },
            {
                nr: 3,
                month: '01.2021',
                principalBalance: 300000,
                principalInstallment: 100000,
                interest: 1250,
                installmentAmount: 101250,
            },
            {
                nr: 4,
                month: '01.2021',
                principalBalance: 200000,
                principalInstallment: 100000,
                interest: 833.3333333333334,
                installmentAmount: 100833.33333333333,
            },
            {
                nr: 5,
                month: '01.2021',
                principalBalance: 100000,
                principalInstallment: 100000,
                interest: 416.6666666666667,
                installmentAmount: 100416.66666666667,
            },
        ],
    },
};

export const mockedRowData = {
    input: {
        nr: 1,
        month: '01.2021',
        totalPrincipal: 500000,
        interestRate: 5,
        numberOfMonths: 10,
        installementType: 'equal',
        overpaymentResult: 'lowerInterest',
        overpayment: {},
        principalBalance: 500000,
    },
    output: {
        nr: 1,
        month: '01.2021',
        principalBalance: 500000,
        principalInstallment: 49069.64637196327,
        interest: 2083.3333333333335,
        installmentAmount: 51152.9797052966,
    },
};

import React, { memo } from 'react';
import {CurrencyButton, RowContainer} from "../../ui/constants";

type IProps = {
    currency: string;
    setCurrency: React.Dispatch<React.SetStateAction<string>>;
}

export const Currency = memo(({currency, setCurrency}: IProps) => {
    return (
        <>
            <div style={{margin: '0 0 15px 20px', textTransform: 'uppercase'}}>
                Валюта
            </div>
            <RowContainer style={{margin: '0 20px 20px 20px'}}>
                <CurrencyButton onClick={() => setCurrency('RUB')} disabled={currency === 'RUB'}
                                style={{borderRadius: '10px 0 0 10px'}}>
                    rub
                </CurrencyButton>
                <CurrencyButton onClick={() => setCurrency('USD')} disabled={currency === 'USD'}>
                    usd
                </CurrencyButton>
                <CurrencyButton onClick={() => setCurrency('EUR')} disabled={currency === 'EUR'}
                                style={{borderRadius: '0 10px 10px 0'}}>
                    eur
                </CurrencyButton>
            </RowContainer>
        </>
    );
});

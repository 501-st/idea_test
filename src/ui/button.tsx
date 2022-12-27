import React, {memo} from 'react';
import styled from "styled-components";

const convertToAnotherCurrency = (price: number, currency: string) => {
    if (currency === 'USD'){
        return (price / 70).toFixed(2) + '$'
    }
    if (currency === 'EUR'){
        return (price / 74.5).toFixed(2) + '€'
    }

    let str = String(price)
    let amountOfGaps = Math.floor(str.length / 3);

    for (let i = 0; i < amountOfGaps; i++) {
        let endOfString = str.slice(-3 * (i + 1) - i)
        str = str.slice(0, -3 * (i + 1) - i)
        str = str.concat(' ' + endOfString)
    }
    str = str.concat('₽')
    return str
}

export const Button = memo(({price, currency}: {price: number, currency: string}) => {
    return (
        <MyButton>
            Купить<br/> за {convertToAnotherCurrency(price, currency)}
        </MyButton>
    );
});

const MyButton = styled.button`
  padding: 10px 0;
  background-color: #ff6404;
  border-radius: 5px;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 30px;
  width: 300px;
  height: 90px;
`;
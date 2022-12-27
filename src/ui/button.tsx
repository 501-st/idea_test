import React, {memo} from 'react';
import styled from "styled-components";

export const Button = memo(({price}: {price: number}) => {

    let str = String(price)
    let amountOfGaps = Math.floor(str.length / 3);

    for (let i = 0; i < amountOfGaps; i++) {
        let endOfString = str.slice(-3 * (i + 1) - i)
        str = str.slice(0, -3 * (i + 1) - i)
        str = str.concat(' ' + endOfString)
    }

    return (
        <MyButton>
            Купить<br/> за {str}₽
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
`;
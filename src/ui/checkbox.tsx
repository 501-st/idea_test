import React, {memo} from 'react';
import styled from "styled-components";
import {RowContainer} from "./constants";

type Props = {
    value?: number;
    label: string;
    chooseOnlyMe: (arg0: number | undefined) => void;
    state: boolean;
    setState: React.Dispatch<React.SetStateAction<boolean>>;
}


export const Checkbox = memo(({label, state, setState, chooseOnlyMe, value}: Props) => {
    return (
        <ModRowContainer>
            <RowContainer onClick={() => setState(!state)}
                          style={{columnGap: 10, cursor: 'pointer', alignItems: 'center'}}>
                <MyCheckbox onChange={() => setState(!state)} checked={state} type='checkbox'/>
                <div>
                    {label}
                </div>
            </RowContainer>
            <Text onClick={() => chooseOnlyMe(value)}>
                только
            </Text>
        </ModRowContainer>
    );
});

const MyCheckbox = styled.input`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

const ModRowContainer = styled(RowContainer)`
  padding: 10px 20px;
  column-gap: 60px;
  justify-content: space-between;
  align-items: center;
  :hover {
    background-color: lightskyblue;
  }
`;

const Text = styled.div`
  text-transform: uppercase;
  color: #795548;
  cursor: pointer;
`;
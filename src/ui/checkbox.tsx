import React, {memo} from 'react';
import styled from "styled-components";
import {RowContainer} from "./constants";

type Props = {
    value?: number;
    label: string;
    onChooseOnlyMe: (arg0: number | undefined) => void;
    state: boolean;
    setState?: React.Dispatch<React.SetStateAction<boolean>>;
    onChooseAll?: () => void;
}


export const Checkbox = memo(({label, state, setState = () => {}, onChooseOnlyMe, value, onChooseAll = () => {}}: Props) => {

    return (
        <ModRowContainer>
            <RowContainer onClick={() => {setState(!state); onChooseAll()}}
                          style={{columnGap: 10, cursor: 'pointer', alignItems: 'center'}}>
                <MyCheckbox onChange={() => {setState(!state); onChooseAll()}} checked={state} type='checkbox'/>
                <div>
                    {label}
                </div>
            </RowContainer>
            {label !== 'Все' &&
            <Text onClick={() => onChooseOnlyMe(value)}>
                только
            </Text>}
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
    background-color: rgba(135, 206, 250, 0.36);

    div {
      visibility: visible;
    }
  }
`;

const Text = styled.div`
  text-transform: uppercase;
  color: #2196f3;
  cursor: pointer;
  visibility: hidden;
`;
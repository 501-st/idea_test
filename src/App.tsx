import {Checkbox} from "./ui/checkbox";
import styled from "styled-components";
import {Container, ModRowContainer, RowContainer} from "./ui/constants";
import {useCallback, useEffect, useState} from "react";
import {List} from "./components/list/list";
import {Currency} from "./components/currency/currency";

export const App = () => {
    const [allCheckboxes, setAllCheckboxes] = useState<boolean>(false)
    const [oneStopCheckbox, setOneStopCheckbox] = useState<boolean>(false)
    const [twoStopsCheckbox, setTwoStopsCheckbox] = useState<boolean>(false)
    const [threeStopsCheckbox, setThreeStopsCheckbox] = useState<boolean>(false)
    const [withoutStopsCheckbox, setWithoutStopsCheckbox] = useState<boolean>(false)

    const [currency, setCurrency] = useState<string>('RUB')

    let filters = [{
        value: '0',
        usable: allCheckboxes || withoutStopsCheckbox
    }, {
        value: '1',
        usable: allCheckboxes || oneStopCheckbox
    }, {
        value: '2',
        usable: allCheckboxes || twoStopsCheckbox
    }, {
        value: '3',
        usable: allCheckboxes || threeStopsCheckbox
    }]

    const onChooseOnlyMe = useCallback((value: number | undefined) => {
        setAllCheckboxes(false)
        setOneStopCheckbox(false)
        setTwoStopsCheckbox(false)
        setThreeStopsCheckbox(false)
        setWithoutStopsCheckbox(false)
        if (value === 0) {
            setWithoutStopsCheckbox(true)
            return
        }
        if (value === 1) {
            setOneStopCheckbox(true)
            return
        }
        if (value === 2) {
            setTwoStopsCheckbox(true)
            return
        }
        if (value === 3) {
            setThreeStopsCheckbox(true)
            return
        }
        setAllCheckboxes(true)
    }, [])

    const onChooseAll = useCallback(() => {
        setAllCheckboxes(!allCheckboxes)
        setOneStopCheckbox(!allCheckboxes)
        setTwoStopsCheckbox(!allCheckboxes)
        setThreeStopsCheckbox(!allCheckboxes)
        setWithoutStopsCheckbox(!allCheckboxes)
    }, [allCheckboxes])

    useEffect(() => {
        if (!oneStopCheckbox || !twoStopsCheckbox || !threeStopsCheckbox || !withoutStopsCheckbox){
            setAllCheckboxes( false)
        }
        if (oneStopCheckbox && twoStopsCheckbox && threeStopsCheckbox && withoutStopsCheckbox){
            setAllCheckboxes( true)
        }
    }, [oneStopCheckbox, twoStopsCheckbox, threeStopsCheckbox, withoutStopsCheckbox])

    return (
        <Wrapper>
            <RowContainer
                style={{justifyContent: 'space-between', alignItems: 'flex-start', marginTop: 100, width: '100%'}}>
                <ModRowContainer>
                    <Container style={{borderRadius: 10, padding: '30px 0 15px 0'}}>
                        <Currency currency={currency} setCurrency={setCurrency}/>
                        <div style={{margin: '0 0 15px 20px', textTransform: 'uppercase'}}>
                            Количество пересадок
                        </div>
                        <Checkbox onChooseOnlyMe={onChooseOnlyMe} state={allCheckboxes} onChooseAll={onChooseAll}
                                  label={'Все'}/>
                        <Checkbox onChooseOnlyMe={onChooseOnlyMe} state={withoutStopsCheckbox}
                                  setState={setWithoutStopsCheckbox} label={'Без пересадок'} value={0}/>
                        <Checkbox onChooseOnlyMe={onChooseOnlyMe} state={oneStopCheckbox} setState={setOneStopCheckbox}
                                  label={'1 пересадка'} value={1}/>
                        <Checkbox onChooseOnlyMe={onChooseOnlyMe} state={twoStopsCheckbox} setState={setTwoStopsCheckbox}
                                  label={'2 пересадки'} value={2}/>
                        <Checkbox onChooseOnlyMe={onChooseOnlyMe} state={threeStopsCheckbox}
                                  setState={setThreeStopsCheckbox}
                                  label={'3 пересадки'} value={3}/>
                    </Container>
                </ModRowContainer>
                <List currency={currency} filters={filters}/>
            </RowContainer>
        </Wrapper>
    );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 1150px;
`;
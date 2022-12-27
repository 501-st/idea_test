import {Checkbox} from "./ui/checkbox";
import styled from "styled-components";
import {Container, ModRowContainer, RowContainer} from "./ui/constants";
import {useCallback, useState} from "react";
import {List} from "./components/list/list";

export const App = () => {
  const [allCheckboxes, setAllCheckboxes] = useState<boolean>(false)
  const [oneStopCheckbox, setOneStopCheckbox] = useState<boolean>(false)
  const [twoStopsCheckbox, setTwoStopsCheckbox] = useState<boolean>(false)
  const [threeStopsCheckbox, setThreeStopsCheckbox] = useState<boolean>(false)
  const [withoutStopsCheckbox, setWithoutStopsCheckbox] = useState<boolean>(false)

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

  const chooseOnlyMe = useCallback((value: number | undefined) => {
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

  return (
      <Wrapper>
        <RowContainer
            style={{justifyContent: 'space-between', alignItems: 'flex-start', marginTop: 100, width: '100%'}}>
          <ModRowContainer>
            <Container style={{borderRadius: 10, padding: '30px 0 15px 0'}}>
              <div style={{margin: '0 0 15px 20px', textTransform: 'uppercase'}}>
                Количество пересадок
              </div>
              <Checkbox chooseOnlyMe={chooseOnlyMe} state={allCheckboxes} setState={setAllCheckboxes}
                        label={'Все'}/>
              <Checkbox chooseOnlyMe={chooseOnlyMe} state={withoutStopsCheckbox}
                        setState={setWithoutStopsCheckbox} label={'Без пересадок'} value={0}/>
              <Checkbox chooseOnlyMe={chooseOnlyMe} state={oneStopCheckbox} setState={setOneStopCheckbox}
                        label={'1 пересадка'} value={1}/>
              <Checkbox chooseOnlyMe={chooseOnlyMe} state={twoStopsCheckbox} setState={setTwoStopsCheckbox}
                        label={'2 пересадки'} value={2}/>
              <Checkbox chooseOnlyMe={chooseOnlyMe} state={threeStopsCheckbox}
                        setState={setThreeStopsCheckbox}
                        label={'3 пересадки'} value={3}/>
            </Container>
          </ModRowContainer>
          <List filters={filters}/>
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
import React, {memo, useEffect, useState} from 'react';
import {flightData} from "../tickets/tickets";
import {ColumnContainer, Container, ModRowContainer, RowContainer} from '../../ui/constants';
import TKLogo from '../../assets/images/tk_logo.png';
import S7Logo from '../../assets/images/S7_logo.png';
import SULogo from "../../assets/images/su_logo.png";
import BALogo from "../../assets/images/ba-logo.png";
import {Button} from "../../ui/button";
import styled from "styled-components";

const defineEnding = (stops: number) => {
    const base = 'пересад'
    if (stops === 0) {
        return stops + ' ' + base + 'ок'
    }
    if (stops === 1) {
        return stops + ' ' + base + 'ка'
    }
    if (stops > 1 && stops < 5) {
        return stops + ' ' + base + 'ки'
    }
    if (stops < 21) {
        return stops + ' ' + base + 'ок'
    }
    return 'А может надо лететь другим маршрутом?'
}

const defineLogo = (company: string) => {
    if (company === 'TK') {
        return TKLogo
    }
    if (company === 'S7') {
        return S7Logo
    }
    if (company === 'SU') {
        return SULogo
    }
    return BALogo
}

type FlightDataType = {
    origin: string;
    origin_name: string;
    destination: string;
    destination_name: string;
    departure_date: string;
    departure_time: string;
    arrival_date: string;
    arrival_time: string;
    carrier: string;
    stops: number;
    price: number;
}[]

type IProps = {
    filters: {
        value: string;
        usable: boolean;
    }[]
}

export const List = memo(({filters} : IProps) => {

    flightData.sort((a, b) => a.price - b.price);
    // @ts-ignore
    const [list, setList] = useState<FlightDataType>([flightData])

    useEffect(() => {
        let filtersValues: number[] = [];
        for (let i = 0; i < filters.length; i++){
            if (filters[i].usable){
                filtersValues.push(+filters[i].value)
            }
        }
        setList(flightData.filter((item) => filtersValues.includes(item.stops)))
    }, [filters])

    return (
        <ColumnContainer style={{rowGap: 30}}>
            {list.map((item, index) => (
                <ModRowContainer key={index} style={{width: 800, height: 260}}>
                    <Container style={{borderRadius: '10px 0 0 10px', borderRight: '1px solid grey'}}>
                        <ColumnContainer>
                            <Image src={defineLogo(item.carrier)} alt='TK logo'/>
                            <Button price={item.price}/>
                        </ColumnContainer>
                    </Container>
                    <Container style={{borderRadius: '0 10px 10px 0', width: '100%'}}>
                        <RowContainer style={{columnGap: 40}}>
                            <ColumnContainer style={{alignItems: 'flex-start'}}>
                                <Time>
                                    {item.departure_time}
                                </Time>
                                <div>
                                    {item.origin}, {item.origin_name}
                                </div>
                                <Date>
                                    {item.departure_date}
                                </Date>
                            </ColumnContainer>
                            <ColumnContainer style={{alignSelf: 'center'}}>
                                {defineEnding(item.stops)}
                            </ColumnContainer>
                            <ColumnContainer style={{alignItems: 'flex-end'}}>
                                <Time>
                                    {item.arrival_time}
                                </Time>
                                <div>
                                    {item.destination_name}, {item.destination}
                                </div>
                                <Date>
                                    {item.arrival_date}
                                </Date>
                            </ColumnContainer>
                        </RowContainer>
                    </Container>
                </ModRowContainer>
            ))}
        </ColumnContainer>
    );
});

const Image = styled.img`
  width: 200px;
  height: 60px;
  margin-bottom: 50px;
`;

const Time = styled.div`
  font-size: 50px;
`;

const Date = styled.div`
  font-size: 15px;
  color: grey;
`;
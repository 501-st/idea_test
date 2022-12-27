import styled from "styled-components";

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ModRowContainer = styled(RowContainer)`
  box-shadow: 0 0 10px 2px rgba(34, 60, 80, 0.2);
  -webkit-box-shadow: 0 0 10px 2px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0 0 10px 2px rgba(34, 60, 80, 0.2);
  border-radius: 10px;
`;

export const Container = styled.div`
  background-color: white;
  padding: 30px 20px;
`;
// 수식과 결과 출력
import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

const StyledFormula = styled.div`
    font-size: 18px;
    line-height: 21px;
    margin-bottom: 30px;
`;

const StyledAnswer = styled.h1`
    font-size: 40px;
    font-weight: 600;
    margin-bottom: 50px;
`;

const Formula = () => {
    return (
        <Container>
            <StyledFormula>4 * 5</StyledFormula>
            <StyledAnswer>20</StyledAnswer>
        </Container>
    );
};

export default Formula;

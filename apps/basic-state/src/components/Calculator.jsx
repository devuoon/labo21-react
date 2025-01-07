import React from 'react';
import styled from '@emotion/styled';
import Formula from './Formula';
import Button from './Button';

const Container = styled.div`
    width: 330px;
    padding: 66px 22px 28px 24px;
    border-radius: 20px;
    border: solid 1px #c8c8c8;
    background-color: #fff;
    margin: 60px auto;
`;

const Calculator = () => {
    return (
        <Container>
            <Formula />
            <Button />
        </Container>
    );
};

export default Calculator;

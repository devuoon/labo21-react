import React from 'react';
import styled from '@emotion/styled';

// 버튼 컨테이너 스타일 (버튼들을 그리드로 배치)
const ButtonContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 16px;
    row-gap: 16px;
    padding: 0;
    justify-items: center;
`;

// 버튼 스타일
const StyledButton = styled.button`
    border: none;
    border-radius: 10px;
    background-color: #e1e4e5;
    width: 68px;
    height: 68px;
    font-size: 23px;
    font-weight: 500;
    line-height: 28px;
    transition: all 0.2s ease;
    cursor: pointer;

    &:hover {
        background-color: #c1c4c5; /* 호버 시 색상 변경 */
    }
`;

const Button = () => {
    const handleClick = value => {
        console.log(value); // 버튼 클릭 시 값 출력 (여기서 계산 로직 추가)
    };

    return (
        <ButtonContainer>
            <StyledButton onClick={() => handleClick('C')}>C</StyledButton>
            <StyledButton onClick={() => handleClick('%')}>%</StyledButton>
            <StyledButton onClick={() => handleClick('()')}>( )</StyledButton>
            <StyledButton onClick={() => handleClick('÷')}>÷</StyledButton>
            <StyledButton onClick={() => handleClick('7')}>7</StyledButton>
            <StyledButton onClick={() => handleClick('8')}>8</StyledButton>
            <StyledButton onClick={() => handleClick('9')}>9</StyledButton>
            <StyledButton onClick={() => handleClick('x')}>x</StyledButton>
            <StyledButton onClick={() => handleClick('4')}>4</StyledButton>
            <StyledButton onClick={() => handleClick('5')}>5</StyledButton>
            <StyledButton onClick={() => handleClick('6')}>6</StyledButton>
            <StyledButton onClick={() => handleClick('-')}>-</StyledButton>
            <StyledButton onClick={() => handleClick('1')}>1</StyledButton>
            <StyledButton onClick={() => handleClick('2')}>2</StyledButton>
            <StyledButton onClick={() => handleClick('3')}>3</StyledButton>
            <StyledButton onClick={() => handleClick('+')}>+</StyledButton>
            <StyledButton onClick={() => handleClick('.')}>.</StyledButton>
            <StyledButton onClick={() => handleClick('0')}>0</StyledButton>
            <StyledButton onClick={() => handleClick('del')}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="17" viewBox="0 0 24 17">
                    <g data-name="그룹 11">
                        <path data-name="합치기 1" d="M6 17 0 8.5 6 0h18v17z" />
                        <g data-name="그룹 12" transform="translate(-1549.406 -405.713)">
                            <rect
                                data-name="사각형 7"
                                width="1.884"
                                height="11.303"
                                rx=".942"
                                transform="rotate(45 288.65 2095.156)"
                                style={{ fill: '#fff' }}
                            />
                            <rect
                                data-name="사각형 8"
                                width="1.884"
                                height="11.303"
                                rx=".942"
                                transform="rotate(-45 1275.003 -1675.292)"
                                style={{ fill: '#fff' }}
                            />
                        </g>
                    </g>
                </svg>
            </StyledButton>
            <StyledButton onClick={() => handleClick('=')}>=</StyledButton>
        </ButtonContainer>
    );
};

export default Button;

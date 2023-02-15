import React from 'react';
import styled from 'styled-components';

function Header() {
	return (
		<HeadSection>
			<Navigation>
				<Title>2022년 3월</Title>
				<Buttons>
					<Button>&lt;</Button>
					<Button>오늘</Button>
					<Button>&gt;</Button>
				</Buttons>
			</Navigation>
			<Days>
				<Day weekend={true}>일</Day>
				<Day>월</Day>
				<Day>화</Day>
				<Day>수</Day>
				<Day>목</Day>
				<Day>금</Day>
				<Day weekend={true}>토</Day>
			</Days>
		</HeadSection>
	);
}

export default Header;

const HeadSection = styled.div`
	width: 100%;
`;

const Navigation = styled.div`
	width: 100%;
	padding-top: 0.5rem;
	display: flex;
	justify-content: space-between;
`;

const Title = styled.div``;

const Buttons = styled.div`
	display: flex;
`;

const Button = styled.li`
	padding: 0.2vw 0.2vw 0.1vw;
	text-align: center;
	border: 0.5px solid #e0e0e0;
	border-radius: 5px;
	background-color: transparent;
	font-size: 0.8rem;
	cursor: pointer;
`;

const Days = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-evenly;
`;

const Day = styled.div`
	font-weight: 300;
	color: ${(props) => (props.weekend === true ? '#e0e0e0' : 'black')};
`;

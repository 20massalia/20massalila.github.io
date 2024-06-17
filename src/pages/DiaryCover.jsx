import React from "react";
import styled from 'styled-components';
import redTapeImage from '../assets/red_tape.png';
import { COLOR } from '../constants/color';

const Body = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
`;

const DiaryCoverWrapper = styled.div`
    margin-top: 70px;
    width: 500px;
    height: 700px;
    background-color: ${COLOR.background};
    position: relative;
    padding: 20px;
    border-radius: 2px;
    transform: rotate(350deg);
    transform-origin: top left;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const SpiralBinding = styled.div`
    position: absolute;
    top: 15px;
    left: 0;
    width: 20px;
    height: calc(100% - 30px);
    background: repeating-linear-gradient(${COLOR.gray} 0%, ${COLOR.gray} 5px, transparent 5px, transparent 50px);
`;

const Content = styled.div`
    position: relative;
    margin-left: 100px;
    margin-top: 50px;
`;

const Drawing = styled.div`
    width: 315px;
    height: 197px;
    background: white;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: rotate(3deg);
    transform-origin: top left;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    position: relative;
`;

const RedTape = styled.img`
    z-index: 5;
    position: absolute;
    bottom: -50px;
    right: 30px;
    transform: rotate(7deg);
    transform-origin: top left;
`;

const DiaryCover = () => {
    return (
        <Body>
            <DiaryCoverWrapper>
                <SpiralBinding />
                <Content>
                    <RedTape src={redTapeImage} alt="Red Tape" />
                    <Drawing>
                        {/* 그림 넣기 */}
                    </Drawing>
                    <div className="letters">
                        {/* 콜라주 글자 넣기 */}
                    </div>
                </Content>
            </DiaryCoverWrapper>
        </Body>
    );
};

export default DiaryCover;
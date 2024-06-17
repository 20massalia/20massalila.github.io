import React from "react";
import styled from 'styled-components';
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
    transform: rotate(350deg); /* 350deg 대신 10deg 사용 */
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
    margin-top: 70px;
`;

const Drawing = styled.div`
    width: 315px;
    height: 197px;
    background: white;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: rotate(4deg); /* 350deg 대신 10deg 사용 */
    transform-origin: top left;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const DiaryCover = () => {
    return (
        <Body>
            <DiaryCoverWrapper>
                <SpiralBinding />
                <Content>
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
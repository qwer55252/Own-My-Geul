import React from 'react';
import backgroundImage from './homeBackgroundImage.png'
import logo from './logo.svg'
import BackgroundImage from "./BackgroundImage";
import Button from './Button';
import { Route, Link, useNavigate} from 'react-router-dom';
import styles from "./Home.module.css"

import {useState} from "react";
import { Routes } from 'react-router-dom';

const OMGFontStyle = {
    fontSize : "128px",
    fontWeight : "600"
}

const DescriptionFontStyle = {
    fontSize : "24px",
    fontWeight : "400",
    paddingLeft : "10px"
}

// TODO
// 버튼 클릭 시 #CEC8D8로 색깔 바꾸기
function Home(props) {
    const navigate = useNavigate()

    const goMain = () => {
        navigate('/main')
    }
    return (
        <div className={styles.components}>
            <BackgroundImage url={backgroundImage}/>
            <div className={styles.description}>
                <div>
                    <span style={OMGFontStyle}>OMG</span>
                    <p style={DescriptionFontStyle}>자신의 손글씨를 폰트로 만들어보세요.</p>
                        <Link to={"/main"}>
                            <Button content={"폰트 만들기"} goMain={goMain}></Button>
                        </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;
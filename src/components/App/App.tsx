import React from 'react';
import styleApp from './App.module.scss';
import Header from "../Header/Header";
import Content from "../Content/Content";
import Branding from "../Branding/Branding";
import Main from "../Main/Main";

class App extends React.Component {
    render() {
        return (
            <div className={styleApp.App}>
                <Branding/>
                <Header/>

                <Content/>
                <Main/>
            </div>
        );
    }
}

export default App;

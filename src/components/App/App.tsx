import React from 'react';
import styleApp from './App.module.scss';
import Header from "../Header/Header";
import Content from "../Content/Content";
import Branding from "../Branding/Branding";

class App extends React.Component {
    render() {
        return (
            <div className={styleApp.App}>
                <Branding/>
                <Header/>

                <Content/>
                <Content/>
            </div>
        );
    }
}

export default App;

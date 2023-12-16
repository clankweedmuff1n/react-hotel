import React from 'react';
import styleApp from './App.module.scss';
import Header from "../Header/Header";
import Content from "../Content/Content";
import Branding from "../Branding/Branding";
import Main from "../Main/Main";
import Reviews from "../Reviews/Reviews";
import Rewards from "../Rewards/Rewards";
import Contact from "../Contact/Contact";
import Description from "../Description/Description";
import Footer from "../Footer/Footer";
import Rooms from "../Rooms/Rooms";

class App extends React.Component {
    render() {
        return (
            <div className={styleApp.App}>
                <Branding/>
                <Header/>
                <Content/>
                <Description/>
                <Main/>
                <Reviews/>
                <Rooms/>
                <Rewards/>
                <Contact/>
                <Footer/>
            </div>
        );
    }
}

export default App;

import React from 'react';
import styleContent from './Content.module.scss';
import content from '../../assets/header/header3840x2304.jpg';
import {data} from "../../constants";
import {BookingContainer} from "../BookingContainer/BookingContainer";

class Content extends React.Component {
    render() {
        return (
                <section className={styleContent.content}>
                    <div className={styleContent.content__element}>
                        <img src={content} className={styleContent.content__image} alt={data.headerAlt}/>
                    </div>
                    <BookingContainer/>
                </section>
        );
    }
}

export default Content;

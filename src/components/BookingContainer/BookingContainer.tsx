import React, {useState} from 'react';
import styleBooking from './BookingContainer.module.scss';
import {ArrowsIcon} from "./icons/Arrows.icon";
import {DotsIcon} from "./icons/Dots.icon";

export function BookingContainer(props: any) {
    const [classNames, setClassNames] = useState([styleBooking.booking]);

    function handleScroll() {
        if (window.scrollY > 0) {
            setClassNames([...classNames, styleBooking.booking_moved]);
        } else {
            const newClassNames = classNames.filter((c) => c !== styleBooking.booking_moved);
            setClassNames(newClassNames);
        }
    }

    //window.addEventListener("scroll", handleScroll);
    console.log("added")

    return (
        <div className={classNames.join(' ')}>
            <div className={styleBooking.booking__container}>
                <div className={styleBooking.booking__element}>
                    <p className={styleBooking.booking__element_text}>Book now</p>
                    <DotsIcon className={styleBooking.booking__element_icon}/>
                </div>
                <div className={styleBooking.booking__element}>
                    <p className={styleBooking.booking__element_text}></p>
                    <DotsIcon className={styleBooking.booking__element_icon}/>
                </div>
                <div className={styleBooking.booking__element}>
                    <p className={styleBooking.booking__element_text}>I have a promocode</p>
                    <ArrowsIcon className={styleBooking.booking__element_icon}/>
                </div>
                <div className={`${styleBooking.booking__element} ${styleBooking.booking__element_primary}`}>
                    <p className={styleBooking.booking__element_text}>Check availability</p>
                </div>
            </div>
        </div>
    );
}

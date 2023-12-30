import React, {useState} from 'react';
import styleBooking from './BookingContainer.module.scss';
import {ArrowsIcon} from "./icons/Arrows.icon";
import {DotsIcon} from "./icons/Dots.icon";
import BookingElement from "./BookingElement/BookingElement";

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
    const dotsIcon = <DotsIcon className={styleBooking.booking__icon}/>;
    const arrowsIcon = <ArrowsIcon className={styleBooking.booking__icon}/>;

    return (
        <div className={classNames.join(' ')}>
            <div className={styleBooking.booking__container}>
                <BookingElement text="Book now" icon={dotsIcon}/>
                <BookingElement icon={dotsIcon}/>
                <BookingElement text="I have a promocode" icon={arrowsIcon}/>
                <div className={`${styleBooking.booking__element} ${styleBooking.booking__element_primary}`}>
                    <p className={styleBooking.booking__element_text}>Check availability</p>
                </div>
            </div>
        </div>
    );
}

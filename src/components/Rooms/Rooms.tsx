import React from 'react';
import styleRooms from './Rooms.module.scss';
import Room from "./Room/Room";

class Rooms extends React.Component {
    render() {
        return (
            <section className={styleRooms.rooms}>
                <div className={styleRooms.rooms__wrapper}>
                    <p className={`${styleRooms.rooms__text} ${styleRooms.rooms__title}`}>
                        ROOMS
                    </p>
                    <p className={`${styleRooms.rooms__text} ${styleRooms.rooms__subtitle}`}>
                        Get to know our 3 unique room types.
                    </p>
                    <div className={styleRooms.rooms__content}>
                        <Room imgSrc="https://stararctichotel.com/wp-content/uploads/2023/05/Scenic-view-suite-lounge-area_toilet-1.jpg"
                              title="SCENIC VIEW SUITE"
                              text="2-Floor suite with a stunning view. Up
                                    to
                                    3 adults or 2 adults + 2
                                    children"
                              buttonText="See room"/>

                        <Room imgSrc="https://stararctichotel.com/wp-content/uploads/2023/05/Sauna-Suite-1-floor-3.jpg"
                              title="Scenic View Suite + Sauna"
                              text="Scenic views with a sauna and kitchen.
                                    Up to 3 adults or 2 adults + 2 children."
                              buttonText="See room"/>

                        <Room imgSrc="https://stararctichotel.com/wp-content/uploads/2020/09/aurora-glass-cabin-teaser.jpg"
                              title="AURORA GLASS CABIN"
                              text="Spectacular views right from your bed. Up to 2 adults + 2 children."
                              buttonText="See room"/>
                    </div>
                </div>
            </section>
        );
    }
}

export default Rooms;

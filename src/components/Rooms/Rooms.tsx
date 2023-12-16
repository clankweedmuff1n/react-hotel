import React from 'react';
import styleRooms from './Rooms.module.scss';

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
                        <div className={styleRooms.rooms__element}>
                            <img className={styleRooms.rooms__image}
                                 src="https://stararctichotel.com/wp-content/uploads/2023/05/Scenic-view-suite-lounge-area_toilet-1.jpg"/>
                            <div className={styleRooms.rooms__element_wrapper}>
                                <p className={styleRooms.rooms__element_title}>SCENIC VIEW SUITE</p>
                                <p className={styleRooms.rooms__element_subtitle}>2-Floor suite with a stunning view. Up
                                    to
                                    3 adults or 2 adults + 2
                                    children</p>
                                <div className={styleRooms.rooms__button}>
                                    <p className={styleRooms.rooms__button_text}>
                                        See room
                                    </p>
                                    {/*need to add arrow*/}
                                </div>
                            </div>
                        </div>

                        <div className={styleRooms.rooms__element}>
                            <img className={styleRooms.rooms__image}
                                 src="https://stararctichotel.com/wp-content/uploads/2023/05/Sauna-Suite-1-floor-3.jpg"/>
                            <div className={styleRooms.rooms__element_wrapper}>
                                <p className={styleRooms.rooms__element_title}>Scenic View Suite + Sauna</p>
                                <p className={styleRooms.rooms__element_subtitle}>Scenic views with a sauna and kitchen.
                                    Up to 3 adults or 2 adults + 2 children.</p>
                                <div className={styleRooms.rooms__button}>
                                    <p className={styleRooms.rooms__button_text}>
                                        See room
                                    </p>
                                    {/*need to add arrow*/}
                                </div>
                            </div>
                        </div>

                        <div className={styleRooms.rooms__element}>
                            <img className={styleRooms.rooms__image}
                                 src="https://stararctichotel.com/wp-content/uploads/2020/09/aurora-glass-cabin-teaser.jpg"/>
                            <div className={styleRooms.rooms__element_wrapper}>
                                <p className={styleRooms.rooms__element_title}>AURORA GLASS CABIN</p>
                                <p className={styleRooms.rooms__element_subtitle}>Spectacular views right from your bed. Up to 2 adults + 2 children.</p>
                                <div className={styleRooms.rooms__button}>
                                    <p className={styleRooms.rooms__button_text}>
                                        See room
                                    </p>
                                    {/*need to add arrow*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Rooms;

import React from 'react';
import styleMain from './Main.module.scss';

class Main extends React.Component {
    render() {
        return (
            <section className={styleMain.main}>
                <div className={styleMain.main__container}>
                    <div className={styleMain.main__row}>
                        <div className={styleMain.main__element}>
                            <div className={styleMain.main__element_wrapper}>
                                <p className={styleMain.main__element_title}>Accommodation</p>
                                <p className={styleMain.main__element_text}>
                                    The cosy, nest-like Arctic TreeHouse Suites, the Arctic GlassHouses with their own
                                    private sauna, and the luxurious ArcticScene Executive Suites sit in their own
                                    tranquil
                                    location on a steep wooded hill slope. What they all have in common is an enchanting
                                    ambiance and the breathtaking views of the northern skies provided by the panoramic
                                    windows.
                                </p>
                                <div className={styleMain.main__element_button}>
                                    Discover more and book your stay
                                </div>
                            </div>
                        </div>

                        <div className={styleMain.main__element}>
                            <img className={styleMain.main__element_image}
                                 src="https://arctictreehousehotel.com/wp-content/uploads/2023/09/Arctic-treehouse-suite-lounge.jpg"
                                 alt="change this"/>
                        </div>
                    </div>

                    <div className={styleMain.main__row}>
                        <div className={styleMain.main__element}>
                            <img className={styleMain.main__element_image}
                                 src="https://arctictreehousehotel.com/wp-content/uploads/2023/12/villa-viima-arctic-treehousehotel-rovaniemi-lapland.jpg"
                                 alt="change this"/>
                        </div>

                        <div className={styleMain.main__element}>
                            <div className={styleMain.main__element_wrapper}>
                                <p className={styleMain.main__element_title}>
                                    Christmas in private Lappish villa
                                </p>
                                <p className={styleMain.main__element_text}>
                                    Celebrate this festive season with a touch of magic in Lapland. While our hotel is
                                    fully booked for December, a few exclusive Lappish villas still await those seeking
                                    a memorable Christmas getaway in Lapland. Don’t miss your chance and have the
                                    christmas of your dreams.
                                </p>
                                <div className={styleMain.main__element_button}>
                                    Discover more
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styleMain.main__row}>
                        <div className={styleMain.main__element}>
                            <div className={styleMain.main__element_wrapper}>
                                <p className={styleMain.main__element_title}>
                                    Food with love
                                </p>
                                <p className={styleMain.main__element_text}>
                                    The name of our restaurant is Rakas, which is Finnish for beloved, also perfectly
                                    describing our understanding of what great food should be. Our meals overflow with
                                    flavours of pure northern ingredients and a passion for quality dining together.
                                    Extra spice is added by the incredibly stylish interior design.
                                </p>
                                <div className={styleMain.main__element_button}>
                                    Discover Arctic cuisine
                                </div>
                            </div>
                        </div>

                        <div className={styleMain.main__element}>
                            <img className={styleMain.main__element_image}
                                 src="https://arctictreehousehotel.com/wp-content/uploads/2023/11/Rakas-restaurant-ala-carte-winter-menu.jpg"
                                 alt="change this"/>
                        </div>
                    </div>

                    <div className={styleMain.main__row}>
                        <div className={styleMain.main__element}>
                            <img className={styleMain.main__element_image}
                                 src="https://arctictreehousehotel.com/wp-content/uploads/2023/11/Winter-activities-snowshoeing-arctic-treehouse-hotel_1920x1280.jpg"
                                 alt="change this"/>
                        </div>

                        <div className={styleMain.main__element}>
                            <div className={styleMain.main__element_wrapper}>
                                <p className={styleMain.main__element_title}>
                                    Extraordinary activities
                                </p>
                                <p className={styleMain.main__element_text}>
                                    Feel like giving your holiday a little more luxury or a bit of Arctic Circle magic?
                                    Combining the unique location of Arctic TreeHouse Hotel with our internationally
                                    prized expertise in producing extraordinary experiences, we guarantee unforgettable
                                    moments for our guests.
                                </p>
                                <div className={styleMain.main__element_button}>
                                    Discover more and book
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styleMain.main__row}>
                        <div className={styleMain.main__element}>
                            <div className={styleMain.main__element_wrapper}>
                                <p className={styleMain.main__element_title}>
                                    Seasons in Lapland
                                </p>
                                <p className={styleMain.main__element_text}>
                                    Arctic TreeHouse Hotel celebrates the ever changing seasons and higlights the
                                    beautiful characteristics in them. Which one would you love to experience: the
                                    winter wonderland, the sunny spring, magical midnight sun or the fest of colors
                                    during the autumn.
                                </p>
                                <div className={styleMain.main__element_button}>
                                    Discover more
                                </div>
                            </div>
                        </div>

                        <div className={styleMain.main__element}>
                            <img className={styleMain.main__element_image}
                                 src="https://arctictreehousehotel.com/wp-content/uploads/2023/11/arctic-treehouse-hotel-winter-seasons_1920x1280.jpg"
                                 alt="change this"/>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Main;

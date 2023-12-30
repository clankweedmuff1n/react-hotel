import React from 'react';
import styleMain from './Main.module.scss';
import ImageElement from "./Element/ImageElement/ImageElement";
import TextElement from "./Element/TextElement/TextElement";

class Main extends React.Component {
    render() {
        return (
            <section className={styleMain.main}>
                <div className={styleMain.main__container}>
                    <div className={styleMain.main__row}>
                        <TextElement title="Accommodation"
                                     text="The cosy, nest-like Arctic TreeHouse Suites, the Arctic GlassHouses with their own
                                    private sauna, and the luxurious ArcticScene Executive Suites sit in their own
                                    tranquil
                                    location on a steep wooded hill slope. What they all have in common is an enchanting
                                    ambiance and the breathtaking views of the northern skies provided by the panoramic
                                    windows."
                                     buttonText="Discover more and book your stay"/>
                        <ImageElement
                            src="https://arctictreehousehotel.com/wp-content/uploads/2023/09/Arctic-treehouse-suite-lounge.jpg"
                            alt="change this"/>
                    </div>

                    <div className={styleMain.main__row}>
                        <ImageElement
                            src="https://arctictreehousehotel.com/wp-content/uploads/2023/12/villa-viima-arctic-treehousehotel-rovaniemi-lapland.jpg"
                            alt="change this"/>
                        <TextElement title="Christmas in private Lappish villa"
                                     text="Celebrate this festive season with a touch of magic in Lapland. While our hotel is
                                    fully booked for December, a few exclusive Lappish villas still await those seeking
                                    a memorable Christmas getaway in Lapland. Don’t miss your chance and have the
                                    christmas of your dreams."
                                     buttonText="Discover more"/>
                    </div>

                    <div className={styleMain.main__row}>
                        <TextElement title="Food with love"
                                     text="The name of our restaurant is Rakas, which is Finnish for beloved, also perfectly
                                    describing our understanding of what great food should be. Our meals overflow with
                                    flavours of pure northern ingredients and a passion for quality dining together.
                                    Extra spice is added by the incredibly stylish interior design."
                                     buttonText="Discover Arctic cuisine"/>
                        <ImageElement
                            src="https://arctictreehousehotel.com/wp-content/uploads/2023/11/Rakas-restaurant-ala-carte-winter-menu.jpg"
                            alt="change this"
                        />
                    </div>

                    <div className={styleMain.main__row}>
                        <ImageElement
                            src="https://arctictreehousehotel.com/wp-content/uploads/2023/11/Winter-activities-snowshoeing-arctic-treehouse-hotel_1920x1280.jpg"
                            alt="change this"/>
                        <TextElement title="Extraordinary activities"
                                     text="Feel like giving your holiday a little more luxury or a bit of Arctic Circle magic?
                                    Combining the unique location of Arctic TreeHouse Hotel with our internationally
                                    prized expertise in producing extraordinary experiences, we guarantee unforgettable
                                    moments for our guests."
                                     buttonText="Discover more and book"/>
                    </div>

                    <div className={styleMain.main__row}>
                        <TextElement title="Seasons in Lapland"
                                     text="Arctic TreeHouse Hotel celebrates the ever changing seasons and higlights the
                                    beautiful characteristics in them. Which one would you love to experience: the
                                    winter wonderland, the sunny spring, magical midnight sun or the fest of colors
                                    during the autumn."
                                     buttonText="Discover more"/>
                        <ImageElement
                            src="https://arctictreehousehotel.com/wp-content/uploads/2023/11/arctic-treehouse-hotel-winter-seasons_1920x1280.jpg"
                            alt="change this"/>
                    </div>
                </div>
            </section>
        );
    }
}

export default Main;

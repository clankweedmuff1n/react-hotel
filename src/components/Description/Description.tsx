import React from 'react';
import styleDescription from './Description.module.scss';

class Description extends React.Component {
    render() {
        return (
            <section className={styleDescription.description}>
                <div className={styleDescription.description__container}>
                    <img className={styleDescription.description__image}
                         src="https://arctictreehousehotel.com/wp-content/themes/kiska/assets/img/kapylehma.png"/>
                    <p className={styleDescription.description__title}>Design hotel and restaurant on the Arctic Circle</p>
                    <p className={styleDescription.description__text}>Arctic TreeHouse Hotel provides a unique blend of
                        luxury comfort in the heart of Arctic nature, local Lappish traditions and modern Scandinavian
                        design. In contrast to the meticulously designed accommodation and nest-like cosiness, the
                        panoramic views from the windows provide impressive spectacles of the forest and Arctic skies:
                        the Northern Lights and Midnight Sun can be admired from the comfort of your bed. Our
                        exceptional restaurant serves culinary delights prepared in stylish surroundings using Arctic
                        ingredients.</p>
                    <div className={styleDescription.description__button}>
                        EXPLORE
                    </div>
                </div>
            </section>
        );
    }
}

export default Description;

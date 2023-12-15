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
                                <h2 className={styleMain.main__element_title}>Accommodation</h2>
                                <p className={styleMain.main__element_text}>
                                    The cosy, nest-like Arctic TreeHouse Suites, the Arctic GlassHouses with their own
                                    private sauna, and the luxurious ArcticScene Executive Suites sit in their own
                                    tranquil
                                    location on a steep wooded hill slope. What they all have in common is an enchanting
                                    ambiance and the breathtaking views of the northern skies provided by the panoramic
                                    windows.
                                </p>
                            </div>
                        </div>

                        <div className={styleMain.main__element}>
                            {/*<div className={styleMain.main__element_wrapper}>*/}
                                <img className={styleMain.main__element_image} src="https://arctictreehousehotel.com/wp-content/uploads/2023/09/Arctic-treehouse-suite-lounge.jpg" alt="change this"/>
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Main;

import React from 'react';
import styleFooter from './Footer.module.scss';

class Footer extends React.Component {
    render() {
        return (
            <section className={styleFooter.footer}>
                <div className={styleFooter.footer__additional}>
                    <div className={styleFooter.footer__additional_container}>
                        <div className={styleFooter.footer__text}>
                            Accommodation
                        </div>
                        <div className={styleFooter.footer__text}>
                            Services
                        </div>
                        <div className={styleFooter.footer__text}>
                            Meetings and events
                        </div>
                        <div className={styleFooter.footer__text}>
                            Restaurant
                        </div>
                        <div className={styleFooter.footer__text}>
                            About us
                        </div>
                        <div className={styleFooter.footer__text}>
                            Contact info
                        </div>
                    </div>
                </div>
                <div className={styleFooter.footer__main}>
                    <div className={styleFooter.footer__row}>
                        <div className={styleFooter.footer__text}>
                            Careers
                        </div>
                        <div className={styleFooter.footer__text}>
                            Yksityisyys
                        </div>
                        <div className={styleFooter.footer__text}>
                            Terms & Conditions
                        </div>
                        <div className={styleFooter.footer__text}>
                            Cookie policy
                        </div>
                        <div className={styleFooter.footer__text}>
                            Safety protocols
                        </div>
                    </div>
                    <div className={styleFooter.footer__row}>
                        <p className={`${styleFooter.footer__text} ${styleFooter.footer__title}`}>
                            Arctic TreeHouse Hotel is part of <span className={styleFooter.footer__title_red}>SantaPark Arctic World</span>
                        </p>
                    </div>
                    <div className={styleFooter.footer__row}>
                        <p className={`${styleFooter.footer__text} ${styleFooter.footer__title}`}>
                            Design by Advertising Kioski
                        </p>
                    </div>
                </div>
            </section>
        );
    }
}

export default Footer;

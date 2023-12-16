import React from 'react';
import styleContact from './Contact.module.scss';
import {GeoIcon} from "./icons/Geo.icon";
import {MailIcon} from "./icons/Mail.icon";
import {PhoneIcon} from "./icons/Phone.icon";
import {InstagramIcon} from "./icons/Instagram.icon";
import {FacebookIcon} from "./icons/Facebook.icon";
import {NewsIcon} from "./icons/News.icon";
import styleMain from "../Main/Main.module.scss";

class Contact extends React.Component {
    render() {
        return (
            <section className={styleContact.contact}>
                <div className={styleContact.contact__container}>

                    <div className={styleContact.contact__column}>
                        <div className={styleContact.contact__column_element}>
                            <p className={styleContact.contact__wrapper_title}>Arctic TreeHouse Hotel</p>
                            <div className={styleContact.contact__column_element_wrapper}>
                                <div className={styleContact.contact__wrapper_row}>
                                    <GeoIcon className={styleContact.contact__wrapper_icon}/>
                                    <p className={styleContact.contact__wrapper_text}>Tarvantie 3 96930 Arctic Circle, Finland</p>
                                </div>
                                <div className={styleContact.contact__wrapper_row}>
                                    <MailIcon className={styleContact.contact__wrapper_icon}/>
                                    <p className={styleContact.contact__wrapper_text}>info@arctictreehousehotel.com</p>
                                </div>
                                <div className={styleContact.contact__wrapper_row}>
                                    <PhoneIcon className={styleContact.contact__wrapper_icon}/>
                                    <p className={styleContact.contact__wrapper_text}>+358 50 517 6909</p>
                                </div>
                            </div>
                        </div>

                        <div className={styleContact.contact__column_element}>
                            <div className={styleContact.contact__column_element_wrapper}>
                                <div className={styleContact.contact__wrapper_row}>
                                    <p className={styleContact.contact__wrapper_text}>VAT Number: FI10950798, Santapark Oy</p>
                                </div>
                            </div>
                        </div>

                        <div className={styleContact.contact__column_element}>
                            <p className={styleContact.contact__wrapper_title}>Media enquiries:</p>
                            <div className={styleContact.contact__column_element_wrapper}>
                                <div className={styleContact.contact__wrapper_row}>
                                    <MailIcon className={styleContact.contact__wrapper_icon}/>
                                    <p className={styleContact.contact__wrapper_text}>media@arctictreehousehotel.com</p>
                                </div>
                            </div>
                        </div>

                        <div className={styleContact.contact__column_element}>
                            <p className={styleContact.contact__wrapper_title}>For group reservations:</p>
                            <div className={styleContact.contact__column_element_wrapper}>
                                <div className={styleContact.contact__wrapper_row}>
                                    <MailIcon className={styleContact.contact__wrapper_icon}/>
                                    <p className={styleContact.contact__wrapper_text}>sales@arctictreehousehotel.com</p>
                                </div>

                                <div className={styleContact.contact__wrapper_row}>
                                    <PhoneIcon className={styleContact.contact__wrapper_icon}/>
                                    <p className={styleContact.contact__wrapper_text}>+358 50 517 6943</p>
                                </div>
                            </div>
                        </div>

                        <div className={styleContact.contact__column_element}>
                            <div className={styleContact.contact__column_element_wrapper}>
                                <div className={styleContact.contact__wrapper_row}>
                                    <p className={styleContact.contact__wrapper_text}>(From Monday to Friday | 9 am – 4 pm)</p>
                                </div>
                            </div>
                        </div>

                        <div className={styleContact.contact__column_element}>
                            <div className={styleContact.contact__column_element_wrapper}>
                                <div className={styleContact.contact__wrapper_row}>
                                    <p className={styleContact.contact__wrapper_text}>Guestservice serves from Monday to Friday | 9 am – 4 pm</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className={styleContact.contact__column}>
                        <div className={styleContact.contact__column_element}>
                            <p className={styleContact.contact__wrapper_title}>SOCIAL MEDIA CHANNELS</p>
                            <div className={styleContact.contact__column_element_wrapper}>
                                <div className={styleContact.contact__wrapper_row}>
                                    <p className={styleContact.contact__wrapper_text}>Our Social Media Influencers</p>
                                </div>
                                <div className={styleContact.contact__wrapper_row}>
                                    <InstagramIcon className={styleContact.contact__wrapper_icon}/>
                                    <FacebookIcon className={styleContact.contact__wrapper_icon}/>
                                </div>
                            </div>
                        </div>

                        <div className={styleContact.contact__column_element}>
                            <p className={styleContact.contact__wrapper_title}>Media coverage</p>
                            <div className={styleContact.contact__column_element_wrapper}>
                                <div className={styleContact.contact__wrapper_row}>
                                    <NewsIcon className={styleContact.contact__wrapper_icon}/>
                                    <p className={styleContact.contact__wrapper_text}>Conde Nast Traveler</p>
                                </div>
                                <div className={styleContact.contact__wrapper_row}>
                                    <NewsIcon className={styleContact.contact__wrapper_icon}/>
                                    <p className={styleContact.contact__wrapper_text}>Poosh</p>
                                </div>
                                <div className={styleContact.contact__wrapper_row}>
                                    <NewsIcon className={styleContact.contact__wrapper_icon}/>
                                    <p className={styleContact.contact__wrapper_text}>Forbes</p>
                                </div>
                                <div className={styleContact.contact__wrapper_row}>
                                    <div className={styleContact.contact__wrapper_button}>
                                        Read more
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className={styleContact.contact__column_element}>
                            <p className={styleContact.contact__wrapper_title}>Sign up to our newsletter:</p>
                            <p className={styleContact.contact__wrapper_title}>Email (Required)</p>
                            <div className={styleContact.contact__column_element_wrapper}>
                                <input className={styleContact.contact__wrapper_input}/>

                                <div className={styleContact.contact__wrapper_row}>
                                    <div className={styleContact.contact__wrapper_button}>
                                        Read more
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        );
    }
}

export default Contact;

import React from 'react';
import styleFooter from './Footer.module.scss';
import AdditionalButton from "./AdditionalButton/AdditionalButton";

class Footer extends React.Component {
    render() {
        const navData = [
            {
                text: "Accommodation",
                href: "#",
            },
            {
                text: "Services",
                href: "#",
            },
            {
                text: "Meetings and events",
                href: "#",
            },
            {
                text: "Restaurant",
                href: "#",
            },
            {
                text: "About us",
                href: "#",
            },
            {
                text: "Contact info",
                href: "#",
            },
        ];

        const additionalNavData = [
            {
                text: "Careers",
                href: "#",
            },
            {
                text: "Yksityisyys",
                href: "#",
            },
            {
                text: "Terms & Conditions",
                href: "#",
            },
            {
                text: "Cookie policy",
                href: "#",
            },
            {
                text: "Safety protocols",
                href: "#",
            },
        ];

        return (
            <section className={styleFooter.footer}>
                <div className={styleFooter.footer__additional}>
                    <div className={styleFooter.footer__additional_container}>
                        {navData.map((nav, index) => (
                            <AdditionalButton key={index} text={nav.text} hrefUrl={nav.href}/>
                        ))}
                    </div>
                </div>
                <div className={styleFooter.footer__main}>
                    <div className={styleFooter.footer__row}>
                        {additionalNavData.map((nav, index) => (
                            <AdditionalButton key={index} text={nav.text} hrefUrl={nav.href}/>
                        ))}
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

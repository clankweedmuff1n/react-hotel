import React from 'react';
import styleHeader from './Header.module.scss';
import {GlobeIcon} from "./icons/Globe.icon";
import {ArrowIcon} from "./icons/Arrow.icon";
import {ListIcon} from "./icons/List.icon";

class Header extends React.Component {
    render() {
        return (
            <section className={styleHeader.header}>
                <div className={styleHeader.header__container}>
                    <div className={styleHeader.header__navigation}>
                        <nav className={styleHeader.header__dropdown_menu} aria-label="Select language">
                            <GlobeIcon className={styleHeader.header__navigation_icon}/>
                            <button
                                className={`${styleHeader.header__dropdown_menu_item} ${styleHeader.header__language_button}`}
                                aria-label="Language" aria-expanded="false">
                                English
                            </button>
                            <ArrowIcon className={styleHeader.header__navigation_icon}/>
                        </nav>
                        <ListIcon className={styleHeader.header__list_icon}/>
                    </div>
                </div>
            </section>
        );
    }
}

export default Header;

import React from 'react';
import styleBranding from './Branding.module.scss';

class Branding extends React.Component {
    render() {
        return (
            <section className={`${styleBranding.branding} ${styleBranding.branding__shadow}`}>
                <div className={`${styleBranding.branding__container} ${styleBranding.branding__shadow}`}>
                    <div className={styleBranding.branding__container_fluid}>
                        <div className={styleBranding.branding__wrapper}>
                            <a href="https://arctictreehousehotel.com"
                               className={styleBranding.branding__link}>
                                <img className={styleBranding.branding__image}
                                     src="https://arctictreehousehotel.com/wp-content/uploads/2023/05/logo.svg"
                                     alt=""/>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Branding;

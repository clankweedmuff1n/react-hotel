import React from 'react';
import styleAdditionalButton from './AdditionalButton.module.scss';

interface AdditionalButtonProps {
    text: string;
    hrefUrl: string;
}

class AdditionalButton extends React.Component<AdditionalButtonProps> {
    render() {
        const { text, hrefUrl } = this.props; // need to use href

        return (
            <div className={styleAdditionalButton.button__text}>{text}</div>
        );
    }
}

export default AdditionalButton;

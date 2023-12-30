import React from 'react';
import styleRoom from './Room.module.scss';

interface RoomElementProps {
    imgSrc: string;
    title: string;
    text: string;
    buttonText: string;
}

class Room extends React.Component<RoomElementProps> {
    render() {
        const { imgSrc, title, text, buttonText } = this.props;

        return (
            <div className={styleRoom.room}>
                <img className={styleRoom.room__image}
                     src={imgSrc}/>
                <div className={styleRoom.room__wrapper}>
                    <p className={styleRoom.room__title}>{title}</p>
                    <p className={styleRoom.room__subtitle}>{text}</p>
                    <div className={styleRoom.room__button}>
                        <p className={styleRoom.room__button_text}>{buttonText}</p>
                        {/*need to add arrow*/}
                    </div>
                </div>
            </div>
        );
    }
}

export default Room;

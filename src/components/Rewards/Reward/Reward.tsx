import React from 'react';
import styleReward from './Reward.module.scss'

interface RewardElementProps {
    imgSrc: string;
    text: string;
}

class Reward extends React.Component<RewardElementProps> {
    render() {
        const {imgSrc, text} = this.props;

        return (
            <div className={styleReward.reward}>
                <img
                    src={imgSrc}
                    className={styleReward.reward__image}/>
                <p className={styleReward.reward__text}>{text}</p>
            </div>
        );
    }
}

export default Reward;

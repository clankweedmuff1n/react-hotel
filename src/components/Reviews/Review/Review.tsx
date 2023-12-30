import React from 'react';
import styleReview from './Review.module.scss';

interface ReviewElementProps {
    title: string;
    text: string;
}

class Review extends React.Component<ReviewElementProps> {
    render() {
        const { title, text } = this.props;

        return (
            <div className={styleReview.review}>
                <div className={styleReview.review__wrapper}>
                    <p className={styleReview.review__title}>{title}</p>
                    <p className={styleReview.review__text}>{text}</p>
                </div>
            </div>
        );
    }
}

export default Review;

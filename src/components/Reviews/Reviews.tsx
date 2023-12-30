import React from 'react';
import styleReview from './Reviews.module.scss';
import Review from "./Review/Review";

class Reviews extends React.Component {
    render() {
        return (
            <section className={styleReview.review}>
                <div className={styleReview.review__content}>
                    <p className={styleReview.review__title}>
                        Feedback from our guests
                    </p>
                    <div className={styleReview.review__container}>
                        <Review title="Absolutely fantastic"
                                text="This hotel is absolutely fantastic. The staff we
                                    all
                                    so welcoming and helpful; they even helped my boyfriend plan our surprise
                                    engagement.
                                    The room itself is incredible; beautiful views from an amazingly comfortable bed,
                                    and
                                    all the amenities you could possibly want. It is even more stunning than the website
                                    shows! The restaurant was fantastic. All the food was delicious and well presented,
                                    and
                                    the staff even made us bespoke cocktails."/>
                        <Review title="Tea in bed will never be the same"
                                text="We stayed at the Arctic Tree House for two
                                    nights,
                                    it wasn’t long enough. I loved it, as did our adult children. The chalets were
                                    lovely,
                                    the furnishings and furniture was beautiful, and I could have happily stayed
                                    forever.
                                    There were lots of little thoughtful touches, like the low level light in the
                                    bathroom
                                    if you got up during the night. The cabin bed, which even our adults tried out, just
                                    for
                                    the fun of it. The view from your bed of the pine trees deep in glistening snow
                                    first
                                    thing in the morning were so special, tea in bed will never be the same."/>
                        <Review title="Perfect"
                                text="Wow! My stay at the Arctic Treehouse hotel was
                                    absolute perfection. The hotel “rooms” themselves are comparable to something like a
                                    “tiny house” – decorated in classic Scandinavian style and SUPER cozy. There is a
                                    floor
                                    to ceiling glass window that provides you with a peaceful view of the forest. The
                                    bed
                                    was comfy and everything worked perfectly."/>
                    </div>
                </div>
            </section>
        );
    }
}

export default Reviews;

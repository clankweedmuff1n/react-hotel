import React from 'react';
import styleRewards from './Rewards.module.scss'
import Reward from "./Reward/Reward";

class Rewards extends React.Component {
    render() {
        const awardsData = [
            {
                imgSrc: "https://arctictreehousehotel.com/wp-content/uploads/2023/01/winner-color-vert-500x500-1-400x400.png",
                text: "Best Luxury Hotel Brand in Finland",
            },
            {
                imgSrc: "https://arctictreehousehotel.com/wp-content/uploads/2022/10/WorldLuxuryHotelAwards_2022Winner-267x248-1-e1666959926945.png",
                text: "Luxury Sustainable Hotel for Northern Europe",
            },
            {
                imgSrc: "https://arctictreehousehotel.com/wp-content/uploads/2020/11/ATHH_awards-2020_500x500px-400x400.jpg",
                text: "Luxury Architecture Design Hotel",
            },
            {
                imgSrc: "https://arctictreehousehotel.com/wp-content/uploads/2020/11/ATHH_Rakas_awards-2020_500x500px-400x400.jpg",
                text: "Finnish Cuisine",
            },
            {
                imgSrc: "https://arctictreehousehotel.com/wp-content/uploads/2020/04/Tripadvisor_certificate-of-excellence_2019_500x500px-400x400.jpg",
                text: "Certificate of Excellence",
            },
            {
                imgSrc: "https://arctictreehousehotel.com/wp-content/uploads/2020/04/World-luxury-hotel-awards_winner-2019_500x500px-400x400.jpg",
                text: "Luxury Design Hotel",
            },
            {
                imgSrc: "https://arctictreehousehotel.com/wp-content/uploads/2020/04/World-luxury-restaurant-awards_winner-2019_500x500px-1-400x400.jpg",
                text: "Most Romantic Atmosphere",
            },
            {
                imgSrc: "https://arctictreehousehotel.com/wp-content/uploads/2020/04/World-luxury-restaurant-awards_winner-2019_500x500px-400x400.jpg",
                text: "Luxury Hotel Restaurant",
            },
            {
                imgSrc: "https://arctictreehousehotel.com/wp-content/uploads/2020/04/World-luxury-hotel-awards_winner-2018_500x500px-400x400.jpg",
                text: "Luxury Forest Resort",
            },
            {
                imgSrc: "https://arctictreehousehotel.com/wp-content/uploads/2020/04/World-luxury-restaurant-awards_winner-2018_500x500px-400x400.jpg",
                text: "Luxury Interior Design/ Architecture",
            },
            {
                imgSrc: "https://arctictreehousehotel.com/wp-content/uploads/2020/04/Ernstyoung-entrepreneur-of-the-year_500x500px-400x400.jpg",
                text: "Promoting Finland’s country brand and tourism",
            },
            {
                imgSrc: "https://arctictreehousehotel.com/wp-content/uploads/2020/04/Evento-awards_voittaja-2018_500x500px-400x400.jpg",
                text: "Best accommodation",
            },
            {
                imgSrc: "https://arctictreehousehotel.com/wp-content/uploads/2020/04/World-luxury-hotel-awards_winner-2017_500x500px-400x400.jpg",
                text: "Luxury Hotel",
            },
            {
                imgSrc: "https://arctictreehousehotel.com/wp-content/uploads/2020/04/World-luxury-hotel-awards_winner-2017_500x500px-2-400x400.jpg",
                text: "Luxury Design Hotel",
            },
            {
                imgSrc: "https://arctictreehousehotel.com/wp-content/uploads/2020/04/World-luxury-hotel-awards_winner-2017_500x500px-1-400x400.jpg",
                text: "Luxury Small Hotel",
            },
            {
                imgSrc: "https://arctictreehousehotel.com/wp-content/uploads/2020/04/Best-innovation-in-hotel-concept_winner-2017_500x500px-400x400.jpg",
                text: "Best Innovation in Hotel Concept",
            },
            {
                imgSrc: "https://arctictreehousehotel.com/wp-content/uploads/2020/04/Green-key_500x500px-400x400.jpg",
                text: "Green Key",
            },
        ];

        return (
            <section className={styleRewards.rewards}>
                <div className={styleRewards.rewards__container}>
                    {awardsData.map((award, index) => (
                        <Reward key={index} imgSrc={award.imgSrc} text={award.text} />
                    ))}
                </div>
            </section>
        );
    }
}

export default Rewards;

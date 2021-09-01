import React, { useEffect } from "react";
import Typography from "../Typography/Typography";
import "./History.css";
import elonTesla from "../../assets/images/elonTesla.png";
import AOS from "aos";
import "aos/dist/aos.css";
const History: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1400,
    });
  }, []);
  return (
    <div id="concept" className="history-component">
      <div className="sec-title">
        <h2
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-easing="linear"
        >
          CONCEPT
        </h2>
        <span
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="linear"
        ></span>
      </div>
      {/* {window.innerWidth > 1025 ? (
        <div className="sec-title">
          <span
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="linear"
          ></span>
          <h2
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-easing="linear"
          >
            CO
            <br />
            NC
            <br />
            EP
            <br />T
          </h2>
        </div>
      ) : (
        
      )} */}
      <div className="img-text-container">
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="left-side-div"
        >
          <Typography className="up-left-p">
            Elon. Tesla. NFT's. Curiosity piqued? Have you ever envisioned
            owning a Tesla you could actually afford? Well, now that we have
            your attention, let us introduce you to the possibilities our
            showroom offers. From the standard model S, 3, X, Y to the elusive
            cyber truck and roadster which are not yet available to the public.
            5,000 custom made Tesla NFTs will be minted, all with exclusive
            features and rarity attributes.
          </Typography>
          <Typography className="down-left-p">
            For you Plaid lovers, we did not forget about you. The Model S Plaid
            and Plaid+ will be also be rare availables in our initial mint!
          </Typography>
        </div>
        <img src={elonTesla} alt="" />
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="right-side-div"
        >
          <Typography className="up-right-p">
            With future updates, you'll be able to upgrade and fully customize
            your Tesla with pimped up accessories from our dealership and garage
            which will be released soon. Also, all holders will receive a custom
            Space X NFT airdrop ready for our ‘dodge to the moon’ play-to-earn
            game.
          </Typography>
          <Typography className="down-right-p">
            Metaverse? Yes, you read that correctly. Elon's Tesla will
            inevitably be part of a highly anticipated metaverse which will be
            built upon successful mint. Until then, we recommend listening to
            Blinding Lights by The Weeknd.
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default History;

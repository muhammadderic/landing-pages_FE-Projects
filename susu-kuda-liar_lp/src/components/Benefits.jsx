import horse from "../assets/horse.png";
import "../styles/benefits.css";

const Benefits = () => {
  return (
    <div className="benefits section__padding">
      <div className="benefits-image">
        <img src={horse} alt="horse milk benefits" />
      </div>
      <div className="benefits-content">
        <h4>Request Early Access to Experience the Wild</h4>
        <h1 className="gradient__text">The Benefits are <br /> Beyond Your Imagination</h1>
        <p>Discover the unparalleled nourishment of Susu Kuda Liar. Embrace the natural vitality and strength that our wild horse milk brings. Transform your health and wellness with every sip of nature's purest elixir.</p>
        <h4>Request Early Access to Experience the Wild</h4>
      </div>
    </div>
  )
}

export default Benefits;
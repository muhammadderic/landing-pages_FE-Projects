import people from "../assets/people.png";
import "../styles/hero.css";

const Header = () => {
  return (
    <header className="header section__padding">
      <div className="header-content">
        <h1 className="gradient__text">Susu Kuda Liar: <br />Natural Strength and Vitality</h1>
        <p>Experience the invigorating power of nature with Susu Kuda Liar, where every sip delivers the natural strength and vitality of wild horse milk, crafted to energize your body and nourish your spirit</p>
      </div>

      <div className="header-content__input">
        <input type="email" placeholder="Type your email" />
        <button className="button">Get Started</button>
      </div>

      <div className="header-content__people">
        <img src={people} alt="people want susu kuda liar" />
        <p>In the last 24 hours, 1,600 people have requested Susu Kuda Liar</p>
      </div>
    </header>
  )
}

export default Header;
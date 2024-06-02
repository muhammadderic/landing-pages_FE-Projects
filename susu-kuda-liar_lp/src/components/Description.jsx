import Feature from "./Feature";
import "../styles/description.css";

const Description = () => {
  return (
    <div className="description section__margin" id="#description">
      <div className="description-feature">
        <Feature
          title="What is SKL"
          text="Susu Kuda Liar is a premier company dedicated to harnessing the exceptional benefits of wild horse milk. We are committed to delivering products that offer natural strength and vitality, sourced from the purest and most untamed environments. Our mission is to provide a unique and invigorating experience, ensuring every drop of Susu Kuda Liar embodies the raw power and nourishing qualities of nature."
        />
      </div>
      <div className="description-heading">
        <h1 className="gradient__text">Pure Strength from Untamed Sources</h1>
        <p>Explore it!</p>
      </div>
      <div className="description-feature__details">
        <Feature
          title="Pure and Natural Ingredients"
          text="Susu Kuda Liar products are made from 100% pure wild horse milk, sourced from pristine, untamed environments to ensure the highest quality and natural purity"
        />
        <Feature
          title="Rich in Nutrients"
          text="Packed with essential vitamins, minerals, and proteins, our wild horse milk provides a robust nutritional profile that promotes overall health, boosts energy levels, and supports a strong immune system"
        />
        <Feature
          title="Eco-Friendly and Sustainable"
          text="We are committed to sustainable and ethical sourcing practices, ensuring that our products are not only beneficial for your health but also environmentally friendly, preserving the natural habitats of wild horses"
        />
      </div>
    </div>
  )
}

export default Description;
import Feature from "./Feature";
import "../styles/features.css";

const featuresData = [
  {
    title: 'Boosts Vitality Instantly',
    text: 'Experience immediate revitalization with every sip of Susu Kuda Liar. Our pure wild horse milk delivers natural energy and vitality, supporting your active lifestyle and well-being.',
  },
  {
    title: 'Supports Active Living',
    text: 'Susu Kuda Liar enhances your daily activities by providing essential nutrients that fuel your body. Our wild horse milk helps you stay active and energized throughout the day.',
  },
  {
    title: 'Pure and Natural Nourishment',
    text: 'Indulge in the purity of Susu Kuda Liar, where every drop is free from additives and preservatives. Our wild horse milk offers unmatched natural nourishment, promoting overall health.',
  },
  {
    title: 'Strengthens Immune System',
    text: 'Susu Kuda Liar is rich in vital nutrients that bolster your immune system. Our wild horse milk supports your body’s natural defenses, keeping you healthy and resilient.',
  },
];

const Features = () => {
  return (
    <div className="features section__padding" id="features">
      <div className="features-heading">
        <h1 className="gradient__text">
          The Power of Nature is Here, and You Just Need to Embrace It. Experience Susu Kuda Liar Today. & Unleash Your Potential.
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="features-container">
        {
          featuresData.map((feature, index) => (
            <Feature
              key={index}
              title={feature.title}
              text={feature.text}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Features;
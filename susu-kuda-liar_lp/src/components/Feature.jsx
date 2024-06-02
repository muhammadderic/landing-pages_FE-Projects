import "../styles/feature.css";

const Feature = ({ title, text }) => {
  return (
    <div className="feature-container">
      <div className="feature-container__title">
        <h2>{title}</h2>
      </div>
      <div className="feature-container__text">
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Feature;
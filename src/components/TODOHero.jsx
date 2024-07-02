/* eslint-disable react/prop-types */
const TODOHero = ({ todos_completed, todos_total }) => {
  return (
    <section className="hero-container">
      <div className="text-container">
        <p className="large-text">Accomplished Tasks:</p>
        <p>Push past your limits</p>
      </div>
      <div className="visual-container extra-large-text">
        {todos_completed} / {todos_total}
      </div>
    </section>
  );
};
export default TODOHero;

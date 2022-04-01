import Header from '../components/Header';
import './styles/About.scss';

function About() {
  const isTitle = false;
  return (
    <section className="about">
      <Header isTitle={isTitle} />
    </section>
  );
}

export default About;

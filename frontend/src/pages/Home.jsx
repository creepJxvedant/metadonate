import Hero from '../components/Home/Hero';
import Stats from '../components/Home/Stats';
import Features from '../components/Home/Features';
import CTA from '../components/Home/CTA';
import Trust from '../components/Home/Trust';
import Analytics from '../components/Home/Analytics';

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero></Hero>
     <Stats></Stats>
      <Features></Features>
        <CTA></CTA>
     <Trust></Trust>       
       <Analytics></Analytics>
        
    </div>
  );
};

export default Home;


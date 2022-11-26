
import AppFeatures from './components/appFeature/AppFeatures';
import AppStore from './components/appStore/AppStore';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import SecondSection from './components/secondSection/SecondSection';
import ThirdSection from './components/thirdSection/ThirdSection';

function App() {
  return (
    <div className="App bg-[#FAFAFA]">
      <Header />
      <Hero />
      <SecondSection />
      <ThirdSection />
      <AppFeatures />
      <AppStore />
      <Footer />
    </div>
  );
}

export default App;

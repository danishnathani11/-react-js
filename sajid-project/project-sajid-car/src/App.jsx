import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/custom.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import Pricing from './components/Pricing';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Booking from './components/Booking';
import Contact from './components/Contact';
import Footer from './components/Footer';
import withErrorBoundary from './hoc/withErrorBoundary';

function App() {
  return (
    <div className="app">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Process />
      <WhyChooseUs />
      <Pricing />
      <Gallery />
      <Testimonials />
      <Booking />
      <Contact />
      <Footer />
    </div>
  );
}

export default withErrorBoundary(App);

import Hero from './components/Hero';
import Categories from './components/Categories';
import FeaturedProducts from './components/FeaturedProducts';
import Offers from './components/Offers';
import Banner from './components/Banner';
import Testimonials from './components/Testimonials';
import Features from './components/Features';
import Newsletter from './components/Newsletter';
import Blog from './components/Blog';
import { withLayout } from './hoc/withLayout';
import { withCart } from './hoc/withCart';

function HomePage() {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Offers />
      <Banner />
      <Features />
      <Testimonials />
      <Blog />
      <Newsletter />
    </>
  );
}

const App = withCart(withLayout(HomePage));

export default App;

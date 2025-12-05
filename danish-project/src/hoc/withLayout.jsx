import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export function withLayout(Component) {
  return function WithLayoutComponent(props) {
    return (
      <>
        <Navigation />
        <Component {...props} />
        <Footer />
      </>
    );
  };
}

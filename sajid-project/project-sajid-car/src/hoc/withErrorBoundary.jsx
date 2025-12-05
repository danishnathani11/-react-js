import { Component } from 'react';
import { Alert, Container } from 'react-bootstrap';

const withErrorBoundary = (WrappedComponent) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
      return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
      console.error('Error caught by boundary:', error, errorInfo);
    }

    render() {
      if (this.state.hasError) {
        return (
          <Container className="my-5">
            <Alert variant="danger">
              <Alert.Heading>Something went wrong</Alert.Heading>
              <p>We're sorry, but something unexpected happened. Please refresh the page.</p>
            </Alert>
          </Container>
        );
      }

      return <WrappedComponent {...this.props} />;
    }
  };
};

export default withErrorBoundary;

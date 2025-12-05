import { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';

const withLoading = (WrappedComponent, loadingTime = 1000) => {
  return (props) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, loadingTime);

      return () => clearTimeout(timer);
    }, []);

    if (loading || props.isLoading) {
      return (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '300px' }}>
          <Spinner animation="border" variant="warning" />
        </div>
      );
    }

    return <WrappedComponent {...props} />;
  };
};

export default withLoading;

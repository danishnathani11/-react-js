import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

export function withAuth(Component) {
  return function WithAuthComponent(props) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      (async () => {
        const { data } = await supabase.auth.getSession();
        setIsAuthenticated(!!data.session);
        setLoading(false);
      })();

      const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
        setIsAuthenticated(!!session);
      });

      return () => subscription.unsubscribe();
    }, []);

    if (loading) {
      return (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      );
    }

    if (!isAuthenticated) {
      return (
        <div className="container mt-5 pt-5">
          <div className="alert alert-warning text-center">
            Please log in to access this page.
          </div>
        </div>
      );
    }

    return <Component {...props} />;
  };
}

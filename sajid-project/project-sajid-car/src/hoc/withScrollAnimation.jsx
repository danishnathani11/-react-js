import { useEffect, useRef, useState } from 'react';

const withScrollAnimation = (WrappedComponent, animationClass = 'fade-in-up') => {
  return (props) => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.1 }
      );

      if (elementRef.current) {
        observer.observe(elementRef.current);
      }

      return () => {
        if (elementRef.current) {
          observer.unobserve(elementRef.current);
        }
      };
    }, []);

    return (
      <div ref={elementRef} className={isVisible ? animationClass : 'invisible'}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default withScrollAnimation;

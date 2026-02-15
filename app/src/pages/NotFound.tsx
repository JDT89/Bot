import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Ghost, Home, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function NotFound() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.error-content', {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: 'power2.out',
      });

      gsap.to('.ghost-icon', {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="min-h-screen flex items-center justify-center pt-20 pb-16">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-lg mx-auto text-center">
          <div className="error-content">
            {/* Ghost Icon */}
            <div className="ghost-icon w-24 h-24 rounded-2xl bg-astra-lime/10 border border-astra-lime/30 flex items-center justify-center mx-auto mb-8">
              <Ghost className="w-12 h-12 text-astra-lime" />
            </div>

            {/* Error Code */}
            <h1 className="font-display font-bold text-7xl lg:text-8xl text-astra-text mb-4">
              404
            </h1>

            {/* Message */}
            <h2 className="font-display font-semibold text-2xl text-astra-text mb-4">
              Page not found
            </h2>
            <p className="text-astra-text-muted mb-8">
              The page you're looking for doesn't exist or has been moved. 
              Let's get you back on track.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                className="astra-btn-primary justify-center"
              >
                <Home className="w-4 h-4" />
                Go Home
              </Link>
              <button
                onClick={() => window.history.back()}
                className="astra-btn-secondary justify-center"
              >
                <ArrowLeft className="w-4 h-4" />
                Go Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

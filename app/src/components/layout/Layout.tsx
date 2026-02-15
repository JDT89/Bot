import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-astra-dark">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      {/* Grain overlay for texture */}
      <div className="grain-overlay" aria-hidden="true" />
    </div>
  );
}

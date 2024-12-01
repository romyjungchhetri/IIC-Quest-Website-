import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const authRoutes = ['/login', '/signup', '/forgot-password'];

export default function Layout({ children }) {
  const location = useLocation();
  const isAuthPage = authRoutes.includes(location.pathname);

  if (isAuthPage) {
    return children;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}

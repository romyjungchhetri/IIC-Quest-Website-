import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { Toaster } from 'react-hot-toast';
import Layout from './components/layout/Layout';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import UserLogin from './components/auth/UserLogin';
import UserSignup from './components/auth/UserSignup';
import ForgotPassword from './components/auth/ForgotPassword';
import AdminSignup from './components/auth/AdminSignup';
import Home from './components/pages/Home';
import Dashboard from './components/pages/Dashboard';
import AdminDashboard from './components/pages/AdminDashboard';
import Contact from './components/pages/Contact';
import Registration from './components/pages/Registration';
import EventDetails from './components/pages/EventDetails';
import About from './components/pages/About';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Toaster position="top-right" />
        <Layout>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/user-login" element={<UserLogin />} />
            <Route path="/user-signup" element={<UserSignup />} />
            <Route path="/admin-signup" element={<AdminSignup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/event-details" element={<EventDetails />} />
            <Route path="/about" element={<About />} />
            
            {/* Protected Routes */}
            <Route
              path="/registration"
              element={
                <ProtectedRoute>
                  <Registration />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            
            {/* Admin Routes */}
            <Route
              path="/admin"
              element={
                <ProtectedRoute adminOnly>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;

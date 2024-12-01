import { useNavigate } from 'react-router-dom';
import { auth } from '../config/firebase';
import toast from 'react-hot-toast';

export const useRegistrationAccess = () => {
  const navigate = useNavigate();

  const handleRegistrationAccess = () => {
    const user = auth.currentUser;
    
    if (!user) {
      toast.error('Please sign in to access registration');
      navigate('/user-login', { 
        state: { from: { pathname: '/registration' } }
      });
      return false;
    }
    return true;
  };

  return { handleRegistrationAccess };
};

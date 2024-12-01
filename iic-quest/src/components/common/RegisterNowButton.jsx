import { useRegistrationAccess } from '../../hooks/useRegistrationAccess';

export const RegisterNowButton = ({ children, className }) => {
  const { handleRegistrationAccess } = useRegistrationAccess();

  const handleClick = (e) => {
    e.preventDefault();
    if (handleRegistrationAccess()) {
      window.location.href = '/registration';
    }
  };

  return (
    <button
      onClick={handleClick}
      className={className}
    >
      {children}
    </button>
  );
};

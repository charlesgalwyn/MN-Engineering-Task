import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const RestrictedRoute = Component => props => {
  const navigate = useNavigate();
  const { auth } = useSelector(({ authReducer }) => authReducer);

  React.useEffect(() => {
    if (!auth) navigate('/');
  }, [auth]);

  return <Component {...props} />;
};

export default RestrictedRoute;
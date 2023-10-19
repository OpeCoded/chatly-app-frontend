import { useEffect, useState } from 'react';
import '@pages/auth/auth-tabs/AuthTabs.scss';
import backgroundImage from '@assets/images/background.jpg';
import Login from '@pages/auth/login/Login';
import Register from '@pages/auth/register/Register';
import useLocalStorage from '@hooks/useLocalStorage';
import { useNavigate } from 'react-router-dom';
import { Utils } from '@services/utils/utils.service';
import PageLoader from '@components/page-loader/PageLoader';
/*
AuthTabs: Auth tab component
<>: top level entity tags
[type, setType]: state var and function [var, func] used to make changes to the tab that will be displayed
useState('Sign In'): this is our default tab that would be displayed
type === 'Sign In' &&: sets the tab to display based on the onclick type that was set
${type === 'Sign In' ? 'active' : '': dynamically adding the 'active' class name to change the background color of Sign in or up text TAB
*/
const AuthTabs = () => {
  const [type, setType] = useState('Sign In');
  const keepLoggedIn = useLocalStorage('keepLoggedIn', 'get');
  const [environment, setEnvironment] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const env = Utils.appEnvironment();
    setEnvironment(env);
    if (keepLoggedIn) navigate('/app/social/streams');
  }, [keepLoggedIn, navigate]);

  return (
    <>
      {keepLoggedIn ? (
        <PageLoader />
      ) : (
        <div className="container-wrapper" style={{ backgroundImage: `url(${backgroundImage})` }}>
          <div className="environment">{environment}</div>
          <div className="container-wrapper-auth">
            <div className="tabs">
              <div className="tabs-auth">
                <ul className="tab-group">
                  <li className={`tab ${type === 'Sign In' ? 'active' : ''}`} onClick={() => setType('Sign In')}>
                    <button className="login">Sign In</button>
                  </li>
                  <li className={`tab ${type === 'Sign Up' ? 'active' : ''}`} onClick={() => setType('Sign Up')}>
                    <button className="signup">Sign Up</button>
                  </li>
                </ul>
                {type === 'Sign In' && (
                  <div className="tab-item">
                    <Login />
                  </div>
                )}
                {type === 'Sign Up' && (
                  <div className="tab-item">
                    <Register />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AuthTabs;

import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const userInfo = {
  name: 'hogeTarou',
  age: '20',
};

const UserInfoContext = createContext(userInfo);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <UserInfoContext.Provider value={userInfo}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </UserInfoContext.Provider>
);

export default UserInfoContext;

import './styles.css';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './component/Sidebar';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Service from './pages/Service';
import RestrictedRoute from './hoc/RestrictedRoute';
import { useSelector } from 'react-redux';

const RestrictedDashboard = RestrictedRoute(Dashboard);
const RestrictedAbout = RestrictedRoute(About);
const RestrictedService = RestrictedRoute(Service);

export default function App() {
  const { auth } = useSelector(({ authReducer }) => authReducer);
  return (
    <div className="App">
      {auth && <Sidebar />}
      <div className="main">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<RestrictedDashboard />} />
          <Route path="/about" element={<RestrictedAbout />} />
          <Route path="/service" element={<RestrictedService />} />
        </Routes>
      </div>
    </div>
  );
}

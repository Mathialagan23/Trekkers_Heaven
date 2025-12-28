import { Link } from 'react-router-dom';
import { FaHotel, FaPlane, FaBus, FaRoute, FaMapMarkedAlt } from 'react-icons/fa';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const sections = [
    {
      title: 'Accommodations',
      icon: <FaHotel />,
      link: '/accommodations',
      description: 'Manage your hotel bookings'
    },
    {
      title: 'Flights',
      icon: <FaPlane />,
      link: '/flights',
      description: 'Track your flight reservations'
    },
    {
      title: 'Bus Travel',
      icon: <FaBus />,
      link: '/buses',
      description: 'Organize your bus journeys'
    },
    {
      title: 'Itineraries',
      icon: <FaRoute />,
      link: '/itineraries',
      description: 'Plan your trip schedules'
    },
    {
      title: 'Map View',
      icon: <FaMapMarkedAlt />,
      link: '/map',
      description: 'Visualize your destinations'
    }
  ];

  return (
    <div className="dashboard">
      <div className="container">
        <div className="dashboard-header">
          <h1>My Dashboard</h1>
          <p>Manage your travel plans and adventures</p>
        </div>

        <div className="dashboard-grid">
          {sections.map((section, index) => (
            <Link key={index} to={section.link} className="dashboard-card">
              <div className="dashboard-icon">{section.icon}</div>
              <h3>{section.title}</h3>
              <p>{section.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;


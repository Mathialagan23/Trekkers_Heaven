import { useNavigate } from 'react-router-dom';
import { FaHotel, FaPlane, FaBus, FaRoute, FaMapMarkedAlt } from 'react-icons/fa';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const sections = [
    {
      title: 'Accommodations',
      icon: <FaHotel />,
      link: '/accommodations',
      description: 'Manage your hotel bookings',
      bookingLink: ''
    },
    {
      title: 'Flights',
      icon: <FaPlane />,
      link: '/flights',
      description: 'Track your flight reservations',
      bookingLink: ''
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
            <div
              key={index}
              className="dashboard-card"
              role="link"
              tabIndex={0}
              onClick={() => navigate(section.link)}
              onKeyDown={(e) => { if (e.key === 'Enter') navigate(section.link); }}
            >
              <div className="dashboard-icon">{section.icon}</div>
              <h3>{section.title}</h3>
              <p>{section.description}</p>

              {/* Accommodations & Flights: Book + Manage; Itineraries: Manage only */}
              {(section.title === 'Accommodations' || section.title === 'Flights') && (
                <div className="card-actions">
                  <button
                    className="btn btn-primary btn-small"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      if (section.bookingLink) window.open(section.bookingLink, '_blank');
                      // bookingLink empty: button is disabled so this won't be reachable
                    }}
                    disabled={!section.bookingLink}
                  >
                    Book Now
                  </button>

                  <button
                    className="btn btn-outline btn-small"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      navigate(section.link);
                    }}
                  >
                    Manage
                  </button>
                </div>
              )}

              {section.title === 'Itineraries' && (
                <div className="card-actions">
                  <button
                    className="btn btn-outline btn-small"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      navigate(section.link);
                    }}
                  >
                    Manage
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
import { useState, useEffect } from 'react';
import { FaHotel, FaPlus, FaEdit, FaTrash } from 'react-icons/fa';
import { getAccommodations, deleteAccommodation } from '../services/accommodationService';
import AccommodationForm from '../components/AccommodationForm';
import '../styles/ListPage.css';

const Accommodations = () => {
  const [accommodations, setAccommodations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  useEffect(() => {
    fetchAccommodations();
  }, []);

  const fetchAccommodations = async () => {
    try {
      const data = await getAccommodations();
      setAccommodations(data);
    } catch (error) {
      console.error('Error fetching accommodations:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this accommodation?')) {
      try {
        await deleteAccommodation(id);
        fetchAccommodations();
      } catch (error) {
        console.error('Error deleting accommodation:', error);
      }
    }
  };

  const handleEdit = (item) => {
    setEditingItem(item);
    setShowForm(true);
  };

  const handleFormClose = () => {
    setShowForm(false);
    setEditingItem(null);
    fetchAccommodations();
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="list-page">
      <div className="container">
        <div className="page-header">
          <div>
            <FaHotel className="page-icon" />
            <h1>My Accommodations</h1>
          </div>
          <button onClick={() => setShowForm(true)} className="btn btn-primary">
            <FaPlus /> Add Accommodation
          </button>
        </div>

        {showForm && (
          <AccommodationForm
            item={editingItem}
            onClose={handleFormClose}
            onSuccess={handleFormClose}
          />
        )}

        {accommodations.length === 0 ? (
          <div className="empty-state">
            <FaHotel className="empty-icon" />
            <p>No accommodations yet. Add your first booking!</p>
          </div>
        ) : (
          <div className="items-grid">
            {accommodations.map((item) => (
              <div key={item._id} className="item-card">
                <div className="item-header">
                  <h3>{item.name}</h3>
                  <div className="item-actions">
                    <button onClick={() => handleEdit(item)} className="btn-icon">
                      <FaEdit />
                    </button>
                    <button onClick={() => handleDelete(item._id)} className="btn-icon btn-icon-danger">
                      <FaTrash />
                    </button>
                  </div>
                </div>
                <div className="item-details">
                  <p><strong>Location:</strong> {item.location}</p>
                  <p><strong>Check-in:</strong> {new Date(item.checkIn).toLocaleDateString()}</p>
                  <p><strong>Check-out:</strong> {new Date(item.checkOut).toLocaleDateString()}</p>
                  {item.price > 0 && <p><strong>Price:</strong> ${item.price}</p>}
                  {item.notes && <p><strong>Notes:</strong> {item.notes}</p>}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Accommodations;


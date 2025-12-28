import Flight from '../models/Flight.js';

export const getFlights = async (req, res) => {
  try {
    const flights = await Flight.find({ user: req.user._id }).sort({ 'departure.date': -1 });
    res.json(flights);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getFlight = async (req, res) => {
  try {
    const flight = await Flight.findById(req.params.id);
    
    if (!flight) {
      return res.status(404).json({ message: 'Flight not found' });
    }

    if (flight.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    res.json(flight);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createFlight = async (req, res) => {
  try {
    const flight = await Flight.create({
      ...req.body,
      user: req.user._id
    });
    res.status(201).json(flight);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateFlight = async (req, res) => {
  try {
    const flight = await Flight.findById(req.params.id);

    if (!flight) {
      return res.status(404).json({ message: 'Flight not found' });
    }

    if (flight.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    const updatedFlight = await Flight.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    res.json(updatedFlight);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteFlight = async (req, res) => {
  try {
    const flight = await Flight.findById(req.params.id);

    if (!flight) {
      return res.status(404).json({ message: 'Flight not found' });
    }

    if (flight.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    await flight.deleteOne();
    res.json({ message: 'Flight removed' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


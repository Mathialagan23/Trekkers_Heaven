import Itinerary from '../models/Itinerary.js';

export const getItineraries = async (req, res) => {
  try {
    const itineraries = await Itinerary.find({ user: req.user._id })
      .populate('flights')
      .populate('accommodations')
      .sort({ startDate: -1 });
    res.json(itineraries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getItinerary = async (req, res) => {
  try {
    const itinerary = await Itinerary.findById(req.params.id)
      .populate('flights')
      .populate('accommodations');
    
    if (!itinerary) {
      return res.status(404).json({ message: 'Itinerary not found' });
    }

    if (itinerary.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    res.json(itinerary);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createItinerary = async (req, res) => {
  try {
    const itinerary = await Itinerary.create({
      ...req.body,
      user: req.user._id
    });
    const populatedItinerary = await Itinerary.findById(itinerary._id)
      .populate('flights')
      .populate('accommodations');
    res.status(201).json(populatedItinerary);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateItinerary = async (req, res) => {
  try {
    const itinerary = await Itinerary.findById(req.params.id);

    if (!itinerary) {
      return res.status(404).json({ message: 'Itinerary not found' });
    }

    if (itinerary.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    const updatedItinerary = await Itinerary.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    ).populate('flights').populate('accommodations');

    res.json(updatedItinerary);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteItinerary = async (req, res) => {
  try {
    const itinerary = await Itinerary.findById(req.params.id);

    if (!itinerary) {
      return res.status(404).json({ message: 'Itinerary not found' });
    }

    if (itinerary.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    await itinerary.deleteOne();
    res.json({ message: 'Itinerary removed' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


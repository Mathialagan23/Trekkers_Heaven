import dotenv from 'dotenv';

// Load environment variables from config file before other imports
dotenv.config({ path: './src/config/config.env' });

import app from './app.js';
import connectDB from './config/database.js';

const PORT = process.env.PORT || 5000;

connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


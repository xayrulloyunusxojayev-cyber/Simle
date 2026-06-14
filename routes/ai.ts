import express from 'express';
import { SimpleAI } from '../models/AIModel';

const router = express.Router();
const aiModel = new SimpleAI();

// Train AI model
router.post('/train', async (req, res) => {
  try {
    const { inputs, outputs } = req.body;
    
    if (!Array.isArray(inputs) || !Array.isArray(outputs)) {
      return res.status(400).json({ error: 'Inputs and outputs must be arrays' });
    }
    
    if (inputs.length !== outputs.length) {
      return res.status(400).json({ error: 'Input and output arrays must have the same length' });
    }
    
    aiModel.train(inputs, outputs);
    res.json({ message: 'Model trained successfully' });
  } catch (error) {
    console.error('Training error:', error);
    res.status(500).json({ error: 'Failed to train model' });
  }
});

// Make prediction
router.post('/predict', (req, res) => {
  try {
    const { input } = req.body;
    
    if (!Array.isArray(input)) {
      return res.status(400).json({ error: 'Input must be an array' });
    }
    
    const prediction = aiModel.predict(input);
    res.json({ prediction });
  } catch (error) {
    console.error('Prediction error:', error);
    res.status(500).json({ error: 'Failed to make prediction' });
  }
});

export default router;

import { LinearRegression } from 'brain.js';

export class SimpleAI {
  private model: LinearRegression;

  constructor() {
    this.model = new LinearRegression();
  }

  public train(inputData: number[][], outputData: number[]): void {
    if (inputData.length !== outputData.length) {
      throw new Error('Input and output data arrays must have the same length');
    }
    
    for (let i = 0; i < inputData.length; i++) {
      this.model.train([{ input: inputData[i], output: outputData[i] }]);
    }
  }

  public predict(input: number[]): number {
    if (input.length === 0) {
      throw new Error('Input array cannot be empty');
    }
    
    const result = this.model.run(input);
    return parseFloat(result.toFixed(4));
  }
}

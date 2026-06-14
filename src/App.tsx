import React from 'react';
import InputForm from './components/InputForm';
import ResultDisplay from './components/ResultDisplay';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <h1>Simple AI</h1>
      <InputForm />
      <Button />
      <ResultDisplay />
    </div>
  );
}

export default App;

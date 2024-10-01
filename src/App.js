import React, { useState } from 'react';
import QuillEditor from './components/QuillEditor';
import './App.css';

function App() {
  const [value, setValue] = useState('');

  return (
    <div className="App">
      <h1>Quill Editor with Mention</h1>
      <QuillEditor value={value} onChange={setValue} />
      <div className="content-preview">
        <h2>Editor Content:</h2>
        <pre>{value}</pre>
      </div>
    </div>
  );
}

export default App;
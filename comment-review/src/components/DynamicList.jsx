import { useState } from 'react';

function DynamicList({ label, items, onItemsChange, placeholder }) {
  const [inputValue, setInputValue] = useState('');

  const handleAdd = () => {
    if (inputValue.trim()) {
      onItemsChange([...items, inputValue.trim()]);
      setInputValue('');
    }
  };

  const handleRemove = (index) => {
    onItemsChange(items.filter((_, i) => i !== index));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAdd();
    }
  };

  return (
    <div className="dynamic-list">
      <label className="form-label">{label}</label>
      <div className="dynamic-list-input-group">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder={placeholder}
          className="form-input"
        />
        <button
          type="button"
          onClick={handleAdd}
          className="btn-add"
        >
          + Add
        </button>
      </div>
      {items.length > 0 && (
        <ul className="dynamic-list-items">
          {items.map((item, index) => (
            <li key={index} className="dynamic-list-item">
              <span>{item}</span>
              <button
                type="button"
                onClick={() => handleRemove(index)}
                className="btn-remove"
              >
                × Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DynamicList;

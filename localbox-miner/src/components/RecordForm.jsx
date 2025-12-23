import { useState, useEffect } from 'react';

function RecordForm({ onSubmit, editingRecord, onCancelEdit }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: ''
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (editingRecord) {
      setFormData({
        name: editingRecord.name,
        email: editingRecord.email,
        category: editingRecord.category
      });
    } else {
      setFormData({ name: '', email: '', category: '' });
    }
  }, [editingRecord]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.category.trim()) {
      newErrors.category = 'Category is required';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    onSubmit(formData);
    setFormData({ name: '', email: '', category: '' });
    setErrors({});
  };

  const handleCancel = () => {
    setFormData({ name: '', email: '', category: '' });
    setErrors({});
    onCancelEdit();
  };

  return (
    <div className="record-form-container">
      <h2>{editingRecord ? 'Edit Record' : 'Add New Record'}</h2>
      <form onSubmit={handleSubmit} className="record-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter name"
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="">Select category</option>
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
            <option value="Education">Education</option>
            <option value="Other">Other</option>
          </select>
          {errors.category && <span className="error">{errors.category}</span>}
        </div>

        <div className="form-actions">
          <button type="submit" className="btn-primary">
            {editingRecord ? 'Update Record' : 'Add Record'}
          </button>
          {editingRecord && (
            <button type="button" onClick={handleCancel} className="btn-secondary">
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default RecordForm;

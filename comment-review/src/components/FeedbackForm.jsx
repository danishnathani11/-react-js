import { useState, useRef } from 'react';
import DynamicList from './DynamicList';

function FeedbackForm({ onSubmitFeedback }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
    priority: '',
    description: ''
  });

  const [steps, setSteps] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const screenshotRef = useRef(null);
  const notesRef = useRef(null);

  const categories = ['Bug', 'Suggestion', 'Complaint', 'Other'];
  const priorities = ['Low', 'Medium', 'High'];

  const validateField = (name, value) => {
    let error = '';

    switch (name) {
      case 'name':
        if (!value.trim()) {
          error = 'Name is required';
        }
        break;
      case 'email':
        if (!value.trim()) {
          error = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = 'Invalid email format';
        }
        break;
      case 'category':
        if (!value) {
          error = 'Please select a category';
        }
        break;
      case 'priority':
        if (!value) {
          error = 'Please select a priority';
        }
        break;
      case 'description':
        if (!value.trim()) {
          error = 'Description is required';
        } else if (value.trim().length < 10) {
          error = 'Description must be at least 10 characters';
        }
        break;
      default:
        break;
    }

    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });
    setErrors(newErrors);
    setTouched({
      name: true,
      email: true,
      category: true,
      priority: true,
      description: true
    });
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const feedbackData = {
      ...formData,
      screenshot: screenshotRef.current.value,
      notes: notesRef.current.value,
      steps,
      suggestions,
      timestamp: new Date().toISOString()
    };

    onSubmitFeedback(feedbackData);

    setFormData({
      name: '',
      email: '',
      category: '',
      priority: '',
      description: ''
    });
    setSteps([]);
    setSuggestions([]);
    setErrors({});
    setTouched({});
    screenshotRef.current.value = '';
    notesRef.current.value = '';
  };

  const isFormValid = () => {
    return Object.keys(formData).every(key => {
      const error = validateField(key, formData[key]);
      return !error;
    });
  };

  return (
    <div className="feedback-form-container">
      <h2 className="form-title">Submit Feedback or Report an Issue</h2>
      <form onSubmit={handleSubmit} className="feedback-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Full Name <span className="required">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`form-input ${errors.name && touched.name ? 'error' : ''}`}
              placeholder="Enter your full name"
            />
            {errors.name && touched.name && (
              <span className="error-message">{errors.name}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email Address <span className="required">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`form-input ${errors.email && touched.email ? 'error' : ''}`}
              placeholder="your.email@example.com"
            />
            {errors.email && touched.email && (
              <span className="error-message">{errors.email}</span>
            )}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="category" className="form-label">
              Issue Category <span className="required">*</span>
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`form-input ${errors.category && touched.category ? 'error' : ''}`}
            >
              <option value="">Select a category</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
            {errors.category && touched.category && (
              <span className="error-message">{errors.category}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="priority" className="form-label">
              Priority Level <span className="required">*</span>
            </label>
            <select
              id="priority"
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`form-input ${errors.priority && touched.priority ? 'error' : ''}`}
            >
              <option value="">Select priority</option>
              {priorities.map(pri => (
                <option key={pri} value={pri}>{pri}</option>
              ))}
            </select>
            {errors.priority && touched.priority && (
              <span className="error-message">{errors.priority}</span>
            )}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="description" className="form-label">
            Detailed Description <span className="required">*</span>
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            onBlur={handleBlur}
            rows="5"
            className={`form-input ${errors.description && touched.description ? 'error' : ''}`}
            placeholder="Please provide a detailed description of your feedback or issue..."
          />
          {errors.description && touched.description && (
            <span className="error-message">{errors.description}</span>
          )}
        </div>

        <DynamicList
          label="Steps to Reproduce (Optional)"
          items={steps}
          onItemsChange={setSteps}
          placeholder="Add a step..."
        />

        <DynamicList
          label="Suggested Improvements (Optional)"
          items={suggestions}
          onItemsChange={setSuggestions}
          placeholder="Add a suggestion..."
        />

        <div className="form-group">
          <label htmlFor="screenshot" className="form-label">
            Screenshot URL (Optional)
          </label>
          <input
            type="url"
            id="screenshot"
            ref={screenshotRef}
            className="form-input"
            placeholder="https://example.com/screenshot.png"
          />
          <small className="form-hint">Provide a URL to a screenshot if available</small>
        </div>

        <div className="form-group">
          <label htmlFor="notes" className="form-label">
            Additional Notes (Optional)
          </label>
          <textarea
            id="notes"
            ref={notesRef}
            rows="3"
            className="form-input"
            placeholder="Any other information you'd like to share..."
          />
        </div>

        <button
          type="submit"
          className="btn-submit"
          disabled={!isFormValid()}
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
}

export default FeedbackForm;

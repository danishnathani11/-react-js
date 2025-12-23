import { useState, useRef } from 'react';
import { Send } from 'lucide-react';
import DynamicList from './DynamicList';

function FeedbackForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    category: '',
    priority: '',
    description: '',
    steps: [],
    suggestions: []
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const screenshotRef = useRef(null);
  const notesRef = useRef(null);

  const validateField = (name, value) => {
    switch (name) {
      case 'fullName':
        if (!value.trim()) return 'Full name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        return '';

      case 'email':
        if (!value.trim()) return 'Email is required';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return 'Please enter a valid email';
        return '';

      case 'category':
        if (!value) return 'Please select a category';
        return '';

      case 'priority':
        if (!value) return 'Please select a priority level';
        return '';

      case 'description':
        if (!value.trim()) return 'Description is required';
        if (value.trim().length < 10) return 'Description must be at least 10 characters';
        return '';

      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (touched[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: validateField(name, value)
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    setErrors(prev => ({
      ...prev,
      [name]: validateField(name, value)
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      if (key !== 'steps' && key !== 'suggestions') {
        const error = validateField(key, formData[key]);
        if (error) newErrors[key] = error;
      }
    });
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setTouched({
        fullName: true,
        email: true,
        category: true,
        priority: true,
        description: true
      });
      return;
    }

    const submission = {
      ...formData,
      screenshot: screenshotRef.current.value,
      notes: notesRef.current.value,
      timestamp: new Date().toISOString(),
      id: Date.now()
    };

    onSubmit(submission);

    setFormData({
      fullName: '',
      email: '',
      category: '',
      priority: '',
      description: '',
      steps: [],
      suggestions: []
    });
    setErrors({});
    setTouched({});
    screenshotRef.current.value = '';
    notesRef.current.value = '';
  };

  const isFormValid = () => {
    return Object.keys(validateForm()).length === 0;
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-2xl font-bold text-gray-800">Submit Feedback</h2>
        <p className="text-sm text-gray-600 mt-1">
          Help us improve by sharing your experience
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all ${
              errors.fullName && touched.fullName ? 'border-red-500 bg-red-50' : 'border-gray-300'
            }`}
            placeholder="John Doe"
          />
          {errors.fullName && touched.fullName && (
            <p className="text-red-600 text-sm mt-1">{errors.fullName}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all ${
              errors.email && touched.email ? 'border-red-500 bg-red-50' : 'border-gray-300'
            }`}
            placeholder="john@example.com"
          />
          {errors.email && touched.email && (
            <p className="text-red-600 text-sm mt-1">{errors.email}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="category" className="block text-sm font-semibold text-gray-700 mb-2">
            Issue Category <span className="text-red-500">*</span>
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all ${
              errors.category && touched.category ? 'border-red-500 bg-red-50' : 'border-gray-300'
            }`}
          >
            <option value="">Select a category</option>
            <option value="bug">Bug Report</option>
            <option value="suggestion">Suggestion</option>
            <option value="complaint">Complaint</option>
            <option value="other">Other</option>
          </select>
          {errors.category && touched.category && (
            <p className="text-red-600 text-sm mt-1">{errors.category}</p>
          )}
        </div>

        <div>
          <label htmlFor="priority" className="block text-sm font-semibold text-gray-700 mb-2">
            Priority Level <span className="text-red-500">*</span>
          </label>
          <select
            id="priority"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all ${
              errors.priority && touched.priority ? 'border-red-500 bg-red-50' : 'border-gray-300'
            }`}
          >
            <option value="">Select priority</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          {errors.priority && touched.priority && (
            <p className="text-red-600 text-sm mt-1">{errors.priority}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-2">
          Detailed Description <span className="text-red-500">*</span>
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          onBlur={handleBlur}
          rows={4}
          className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none ${
            errors.description && touched.description ? 'border-red-500 bg-red-50' : 'border-gray-300'
          }`}
          placeholder="Please describe your issue or feedback in detail..."
        />
        {errors.description && touched.description && (
          <p className="text-red-600 text-sm mt-1">{errors.description}</p>
        )}
      </div>

      <DynamicList
        title="Steps to Reproduce"
        items={formData.steps}
        onChange={(steps) => setFormData(prev => ({ ...prev, steps }))}
        placeholder="Step"
      />

      <DynamicList
        title="Suggested Improvements"
        items={formData.suggestions}
        onChange={(suggestions) => setFormData(prev => ({ ...prev, suggestions }))}
        placeholder="Suggestion"
      />

      <div>
        <label htmlFor="screenshot" className="block text-sm font-semibold text-gray-700 mb-2">
          Screenshot URL (Optional)
        </label>
        <input
          type="url"
          id="screenshot"
          ref={screenshotRef}
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
          placeholder="https://example.com/screenshot.png"
        />
      </div>

      <div>
        <label htmlFor="notes" className="block text-sm font-semibold text-gray-700 mb-2">
          Additional Notes (Optional)
        </label>
        <textarea
          id="notes"
          ref={notesRef}
          rows={3}
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
          placeholder="Any other information you'd like to share..."
        />
      </div>

      <button
        type="submit"
        disabled={!isFormValid()}
        className={`w-full py-3.5 px-6 rounded-lg font-semibold text-white flex items-center justify-center gap-2 transition-all ${
          isFormValid()
            ? 'bg-blue-600 hover:bg-blue-700 hover:shadow-lg transform hover:-translate-y-0.5'
            : 'bg-gray-300 cursor-not-allowed'
        }`}
      >
        <Send size={20} />
        Submit Feedback
      </button>
    </form>
  );
}

export default FeedbackForm;

import { useState } from 'react';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';

function App() {
  const [feedbacks, setFeedbacks] = useState([]);

  const handleSubmitFeedback = (feedbackData) => {
    setFeedbacks(prev => [feedbackData, ...prev]);

    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="header-content">
          <h1 className="app-title">Customer Feedback & Issue Reporting System</h1>
          <p className="app-subtitle">
            Help us improve by sharing your feedback, reporting bugs, or suggesting new features
          </p>
        </div>
      </header>

      <main className="main-content">
        <FeedbackForm onSubmitFeedback={handleSubmitFeedback} />
        <FeedbackList feedbacks={feedbacks} />
      </main>

      <footer className="app-footer">
        <p>&copy; 2025 Customer Feedback System. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

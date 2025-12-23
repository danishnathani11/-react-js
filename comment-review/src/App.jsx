import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';

function App() {
  const [feedbacks, setFeedbacks] = useState([]);

  const handleSubmitFeedback = (feedback) => {
    setFeedbacks(prev => [feedback, ...prev]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <header className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
              <MessageCircle size={32} className="text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
            Customer Feedback System
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Help us improve by sharing your experience, reporting issues, and suggesting enhancements
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="lg:sticky lg:top-8 h-fit">
            <FeedbackForm onSubmit={handleSubmitFeedback} />
          </div>

          <div>
            <FeedbackList feedbacks={feedbacks} />
          </div>
        </div>

        <footer className="mt-16 text-center pb-8">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-md">
            <span className="text-sm text-gray-600">
              Built with React • Professional Form Handling • Real-time Updates
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;

import { MessageSquare, Inbox } from 'lucide-react';
import FeedbackCard from './FeedbackCard';

function FeedbackList({ feedbacks }) {
  if (feedbacks.length === 0) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center">
            <Inbox size={40} className="text-gray-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-700">No Feedback Yet</h3>
          <p className="text-gray-500 max-w-md">
            Be the first to submit feedback! Your input helps us improve our services.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-blue-600">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
            <MessageSquare size={24} className="text-blue-600" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Feedback Dashboard</h2>
            <p className="text-sm text-gray-600">
              {feedbacks.length} {feedbacks.length === 1 ? 'submission' : 'submissions'} received
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {feedbacks.map((feedback) => (
          <FeedbackCard key={feedback.id} feedback={feedback} />
        ))}
      </div>
    </div>
  );
}

export default FeedbackList;

import { Calendar, Mail, User, AlertCircle, Image as ImageIcon, FileText, ListOrdered, Lightbulb } from 'lucide-react';

function FeedbackCard({ feedback }) {
  const getCategoryStyle = (category) => {
    const styles = {
      bug: 'bg-red-100 text-red-700 border-red-200',
      suggestion: 'bg-green-100 text-green-700 border-green-200',
      complaint: 'bg-orange-100 text-orange-700 border-orange-200',
      other: 'bg-gray-100 text-gray-700 border-gray-200'
    };
    return styles[category] || styles.other;
  };

  const getPriorityStyle = (priority) => {
    const styles = {
      high: 'bg-red-500 text-white',
      medium: 'bg-yellow-500 text-white',
      low: 'bg-blue-500 text-white'
    };
    return styles[priority] || styles.low;
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200">
      <div className="bg-gradient-to-r from-blue-50 to-slate-50 px-6 py-4 border-b border-gray-200">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <User size={18} className="text-gray-600" />
              <h3 className="text-lg font-bold text-gray-800">{feedback.fullName}</h3>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Mail size={16} />
              <span>{feedback.email}</span>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-end">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide border ${getCategoryStyle(feedback.category)}`}>
              {feedback.category}
            </span>
            <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${getPriorityStyle(feedback.priority)}`}>
              {feedback.priority}
            </span>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <FileText size={18} className="text-blue-600" />
            <h4 className="font-semibold text-gray-800">Description</h4>
          </div>
          <p className="text-gray-700 leading-relaxed pl-6">{feedback.description}</p>
        </div>

        {feedback.steps && feedback.steps.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <ListOrdered size={18} className="text-blue-600" />
              <h4 className="font-semibold text-gray-800">Steps to Reproduce</h4>
            </div>
            <ol className="list-decimal list-inside space-y-1 pl-6">
              {feedback.steps.map((step, index) => (
                <li key={index} className="text-gray-700">{step}</li>
              ))}
            </ol>
          </div>
        )}

        {feedback.suggestions && feedback.suggestions.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Lightbulb size={18} className="text-blue-600" />
              <h4 className="font-semibold text-gray-800">Suggested Improvements</h4>
            </div>
            <ul className="list-disc list-inside space-y-1 pl-6">
              {feedback.suggestions.map((suggestion, index) => (
                <li key={index} className="text-gray-700">{suggestion}</li>
              ))}
            </ul>
          </div>
        )}

        {feedback.screenshot && (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <ImageIcon size={18} className="text-blue-600" />
              <h4 className="font-semibold text-gray-800">Screenshot</h4>
            </div>
            <div className="pl-6">
              <img
                src={feedback.screenshot}
                alt="Screenshot"
                className="rounded-lg border border-gray-200 max-w-full h-auto max-h-64 object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<a href="' + feedback.screenshot + '" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline text-sm">View Screenshot</a>';
                }}
              />
            </div>
          </div>
        )}

        {feedback.notes && (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <AlertCircle size={18} className="text-blue-600" />
              <h4 className="font-semibold text-gray-800">Additional Notes</h4>
            </div>
            <p className="text-gray-700 leading-relaxed pl-6">{feedback.notes}</p>
          </div>
        )}

        <div className="pt-4 border-t border-gray-200">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Calendar size={16} />
            <span>Submitted on {formatDate(feedback.timestamp)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedbackCard;

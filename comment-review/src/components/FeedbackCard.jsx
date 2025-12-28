function FeedbackCard({ feedback }) {
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getPriorityClass = (priority) => {
    switch (priority) {
      case 'High':
        return 'priority-high';
      case 'Medium':
        return 'priority-medium';
      case 'Low':
        return 'priority-low';
      default:
        return '';
    }
  };

  const getCategoryClass = (category) => {
    switch (category) {
      case 'Bug':
        return 'category-bug';
      case 'Suggestion':
        return 'category-suggestion';
      case 'Complaint':
        return 'category-complaint';
      case 'Other':
        return 'category-other';
      default:
        return '';
    }
  };

  return (
    <div className="feedback-card">
      <div className="feedback-header">
        <div className="feedback-user-info">
          <h3 className="feedback-name">{feedback.name}</h3>
          <p className="feedback-email">{feedback.email}</p>
        </div>
        <div className="feedback-badges">
          <span className={`badge ${getCategoryClass(feedback.category)}`}>
            {feedback.category}
          </span>
          <span className={`badge ${getPriorityClass(feedback.priority)}`}>
            {feedback.priority} Priority
          </span>
        </div>
      </div>

      <div className="feedback-body">
        <div className="feedback-section">
          <h4 className="section-title">Description</h4>
          <p className="feedback-description">{feedback.description}</p>
        </div>

        {feedback.steps && feedback.steps.length > 0 && (
          <div className="feedback-section">
            <h4 className="section-title">Steps to Reproduce</h4>
            <ol className="feedback-list">
              {feedback.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        )}

        {feedback.suggestions && feedback.suggestions.length > 0 && (
          <div className="feedback-section">
            <h4 className="section-title">Suggested Improvements</h4>
            <ul className="feedback-list">
              {feedback.suggestions.map((suggestion, index) => (
                <li key={index}>{suggestion}</li>
              ))}
            </ul>
          </div>
        )}

        {feedback.screenshot && (
          <div className="feedback-section">
            <h4 className="section-title">Screenshot</h4>
            <a
              href={feedback.screenshot}
              target="_blank"
              rel="noopener noreferrer"
              className="screenshot-link"
            >
              View Screenshot
            </a>
          </div>
        )}

        {feedback.notes && (
          <div className="feedback-section">
            <h4 className="section-title">Additional Notes</h4>
            <p className="feedback-notes">{feedback.notes}</p>
          </div>
        )}
      </div>

      <div className="feedback-footer">
        <span className="feedback-timestamp">
          Submitted on {formatDate(feedback.timestamp)}
        </span>
      </div>
    </div>
  );
}

export default FeedbackCard;

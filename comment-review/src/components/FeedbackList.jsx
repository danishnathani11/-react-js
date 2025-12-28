import FeedbackCard from './FeedbackCard';

function FeedbackList({ feedbacks }) {
  if (feedbacks.length === 0) {
    return (
      <div className="feedback-list-container">
        <div className="empty-state">
          <div className="empty-icon">📋</div>
          <h3 className="empty-title">No Feedback Yet</h3>
          <p className="empty-description">
            Submit your first feedback or issue report using the form above.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="feedback-list-container">
      <h2 className="list-title">
        Feedback Dashboard
        <span className="feedback-count">({feedbacks.length})</span>
      </h2>
      <div className="feedback-grid">
        {feedbacks.map((feedback, index) => (
          <FeedbackCard key={index} feedback={feedback} />
        ))}
      </div>
    </div>
  );
}

export default FeedbackList;

function StudentCard({ student, onToggleDetails, onMarkAttendance, onDelete }) {
  return (
    <>
      <div className={`student-card ${student.attendance === 'present' ? 'present' : 'absent'}`}>
        <div className="student-header">
          <h3>{student.name}</h3>
          <div className="student-actions">
            <button
              onClick={() => onToggleDetails(student.id)}
              className="btn btn-small btn-secondary"
            >
              {student.showDetails ? 'Hide Details' : 'Show Details'}
            </button>
            <button
              onClick={() => onDelete(student.id)}
              className="btn btn-small btn-danger"
            >
              Delete
            </button>
          </div>
        </div>

        <div className="student-status">
          <span className={`status-badge ${student.attendance}`}>
            {student.attendance === 'present' ? 'Present' : 'Absent'}
          </span>
          <div className="attendance-buttons">
            <button
              onClick={() => onMarkAttendance(student.id, 'present')}
              className={`btn btn-small ${student.attendance === 'present' ? 'btn-success-active' : 'btn-success'}`}
              disabled={student.attendance === 'present'}
            >
              Mark Present
            </button>
            <button
              onClick={() => onMarkAttendance(student.id, 'absent')}
              className={`btn btn-small ${student.attendance === 'absent' ? 'btn-warning-active' : 'btn-warning'}`}
              disabled={student.attendance === 'absent'}
            >
              Mark Absent
            </button>
          </div>
        </div>

        {student.showDetails && (
          <div className="student-details">
            <div className="detail-item">
              <strong>Student ID:</strong> {student.id}
            </div>
            <div className="detail-item">
              <strong>Added At:</strong> {student.addedAt}
            </div>
            <div className="detail-item">
              <strong>Status:</strong> {student.attendance === 'present' ? 'Attending class' : 'Not in class'}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default StudentCard;

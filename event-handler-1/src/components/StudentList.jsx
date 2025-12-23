import StudentCard from './StudentCard';

function StudentList({ students, onToggleDetails, onMarkAttendance, onDelete }) {
  if (students.length === 0) {
    return (
      <div className="empty-state">
        <h3>No Students Found</h3>
        <p>Add your first student using the form above to get started!</p>
      </div>
    );
  }

  return (
    <>
      <div className="student-list">
        {students.map((student) => (
          <StudentCard
            key={student.id}
            student={student}
            onToggleDetails={onToggleDetails}
            onMarkAttendance={onMarkAttendance}
            onDelete={onDelete}
          />
        ))}
      </div>
    </>
  );
}

export default StudentList;

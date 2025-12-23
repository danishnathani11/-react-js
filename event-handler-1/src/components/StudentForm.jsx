import { useRef, useState } from 'react';

function StudentForm({ onAddStudent }) {
  const nameInputRef = useRef(null);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const studentName = nameInputRef.current.value.trim();

    if (!studentName) {
      setError('Student name is required');
      nameInputRef.current.focus();
      return;
    }

    if (studentName.length < 2) {
      setError('Name must be at least 2 characters');
      nameInputRef.current.focus();
      return;
    }

    onAddStudent({
      id: Date.now(),
      name: studentName,
      attendance: 'absent',
      showDetails: false,
      addedAt: new Date().toLocaleString()
    });

    nameInputRef.current.value = '';
    setError('');
    nameInputRef.current.focus();
  };

  const handleChange = () => {
    if (error) {
      setError('');
    }
  };

  return (
    <>
      <div className="student-form-container">
        <h2>Add New Student</h2>
        <form onSubmit={handleSubmit} className="student-form">
          <div className="form-group">
            <input
              type="text"
              ref={nameInputRef}
              onChange={handleChange}
              placeholder="Enter student name"
              className="form-input"
              autoFocus
            />
            <button type="submit" className="btn btn-primary">
              Add Student
            </button>
          </div>
        </form>
        {error && (
          <div className="error-message">
            {error}
          </div>
        )}
      </div>
    </>
  );
}

export default StudentForm;

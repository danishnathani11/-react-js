import { useState } from 'react';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
import './App.css';

function App() {
  const [students, setStudents] = useState([]);

  const handleAddStudent = (newStudent) => {
    setStudents((prevStudents) => [...prevStudents, newStudent]);
  };

  const handleToggleDetails = (id) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === id
          ? { ...student, showDetails: !student.showDetails }
          : student
      )
    );
  };

  const handleMarkAttendance = (id, status) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === id ? { ...student, attendance: status } : student
      )
    );
  };

  const handleDelete = (id) => {
    setStudents((prevStudents) =>
      prevStudents.filter((student) => student.id !== id)
    );
  };

  const totalStudents = students.length;
  const presentCount = students.filter((s) => s.attendance === 'present').length;
  const absentCount = students.filter((s) => s.attendance === 'absent').length;

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Student Activity Manager</h1>
        <p>Master React concepts through interactive student management</p>
      </header>

      <div className="dashboard">
        <div className="dashboard-card">
          <div className="dashboard-number">{totalStudents}</div>
          <div className="dashboard-label">Total Students</div>
        </div>
        <div className="dashboard-card present">
          <div className="dashboard-number">{presentCount}</div>
          <div className="dashboard-label">Present</div>
        </div>
        <div className="dashboard-card absent">
          <div className="dashboard-number">{absentCount}</div>
          <div className="dashboard-label">Absent</div>
        </div>
      </div>

      <StudentForm onAddStudent={handleAddStudent} />

      <div className="student-list-container">
        <h2>Student List</h2>
        <StudentList
          students={students}
          onToggleDetails={handleToggleDetails}
          onMarkAttendance={handleMarkAttendance}
          onDelete={handleDelete}
        />
      </div>

      <footer className="app-footer">
        <div className="concepts-covered">
          <h3>React Concepts Demonstrated</h3>
          <div className="concept-tags">
            <span className="tag">Events & Handlers</span>
            <span className="tag">Passing Arguments</span>
            <span className="tag">Conditional Rendering</span>
            <span className="tag">Refs</span>
            <span className="tag">Fragments</span>
            <span className="tag">State Management</span>
            <span className="tag">Props</span>
            <span className="tag">Component Structure</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

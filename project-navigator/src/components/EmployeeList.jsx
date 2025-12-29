import EmployeeRow from './EmployeeRow'

function EmployeeList({ employees, startEdit, deleteEmployee }) {
  if (employees.length === 0) {
    return (
      <div className="employee-list-section">
        <h2>Employee Records</h2>
        <div className="empty-state">
          <svg
            width="120"
            height="120"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          <h3>No Employees Found</h3>
          <p>Start by adding your first employee using the form above</p>
        </div>
      </div>
    )
  }

  return (
    <div className="employee-list-section">
      <h2>Employee Records ({employees.length})</h2>
      <div className="table-container">
        <table className="employee-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Department</th>
              <th>Position</th>
              <th>Salary</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <EmployeeRow
                key={employee.id}
                employee={employee}
                startEdit={startEdit}
                deleteEmployee={deleteEmployee}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default EmployeeList

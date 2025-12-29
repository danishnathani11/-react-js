function EmployeeRow({ employee, startEdit, deleteEmployee }) {
  const handleEdit = () => {
    startEdit(employee.id)
  }

  const handleDelete = () => {
    deleteEmployee(employee.id)
  }

  const formatSalary = (salary) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0
    }).format(salary)
  }

  const getStatusClass = (status) => {
    return status === 'active' ? 'status-active' : 'status-inactive'
  }

  return (
    <tr>
      <td>
        <div className="employee-info">
          {employee.image ? (
            <img
              src={employee.image}
              alt={employee.name}
              className="employee-avatar"
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.nextSibling.style.display = 'flex'
              }}
            />
          ) : null}
          <div
            className="employee-avatar-placeholder"
            style={{ display: employee.image ? 'none' : 'flex' }}
          >
            {employee.name.charAt(0).toUpperCase()}
          </div>
          <span className="employee-name">{employee.name}</span>
        </div>
      </td>
      <td>{employee.email}</td>
      <td>{employee.phone}</td>
      <td>{employee.department}</td>
      <td>{employee.position}</td>
      <td>{formatSalary(employee.salary)}</td>
      <td>
        <span className={`status-badge ${getStatusClass(employee.status)}`}>
          {employee.status}
        </span>
      </td>
      <td>
        <div className="action-buttons">
          <button
            onClick={handleEdit}
            className="btn btn-edit"
            title="Edit Employee"
          >
            Edit
          </button>
          <button
            onClick={handleDelete}
            className="btn btn-delete"
            title="Delete Employee"
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  )
}

export default EmployeeRow

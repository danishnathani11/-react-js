function Dashboard({ employees, clearAllEmployees }) {
  const totalEmployees = employees.length

  const activeEmployees = employees.filter(emp => emp.status === 'active').length
  const inactiveEmployees = employees.filter(emp => emp.status === 'inactive').length

  const recentlyAdded = employees.length > 0
    ? employees.reduce((latest, emp) =>
      new Date(emp.createdAt) > new Date(latest.createdAt) ? emp : latest
    )
    : null

  const totalSalary = employees.reduce((sum, emp) =>
    sum + parseFloat(emp.salary || 0), 0
  )

  const avgSalary = totalEmployees > 0 ? totalSalary / totalEmployees : 0

  const formatSalary = (salary) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(salary)
  }

  const getDepartmentCounts = () => {
    const counts = {}
    employees.forEach(emp => {
      counts[emp.department] = (counts[emp.department] || 0) + 1
    })
    return counts
  }

  const departmentCounts = getDepartmentCounts()

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>Dashboard Overview</h2>
        {totalEmployees > 0 && (
          <button onClick={clearAllEmployees} className="btn btn-danger">
            Clear All Employees
          </button>
        )}
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
          <div className="stat-content">
            <h3>Total Employees</h3>
            <p className="stat-value">{totalEmployees}</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon active">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </div>
          <div className="stat-content">
            <h3>Active</h3>
            <p className="stat-value">{activeEmployees}</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon inactive">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <line x1="15" y1="9" x2="9" y2="15" />
              <line x1="9" y1="9" x2="15" y2="15" />
            </svg>
          </div>
          <div className="stat-content">
            <h3>Inactive</h3>
            <p className="stat-value">{inactiveEmployees}</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon salary">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="12" y1="1" x2="12" y2="23" />
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </div>
          <div className="stat-content">
            <h3>Avg Salary</h3>
            <p className="stat-value">{formatSalary(avgSalary)}</p>
          </div>
        </div>
      </div>

      {recentlyAdded && (
        <div className="recent-employee">
          <h3>Recently Added Employee</h3>
          <div className="recent-card">
            <div className="recent-avatar">
              {recentlyAdded.image ? (
                <img
                  src={recentlyAdded.image}
                  alt={recentlyAdded.name}
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />
              ) : null}
              <div
                className="avatar-placeholder"
                style={{ display: recentlyAdded.image ? 'none' : 'flex' }}
              >
                {recentlyAdded.name.charAt(0).toUpperCase()}
              </div>
            </div>
            <div className="recent-info">
              <h4>{recentlyAdded.name}</h4>
              <p>{recentlyAdded.position}</p>
              <p className="recent-department">{recentlyAdded.department}</p>
            </div>
            <div className="recent-status">
              <span className={`status-badge ${recentlyAdded.status === 'active' ? 'status-active' : 'status-inactive'}`}>
                {recentlyAdded.status}
              </span>
            </div>
          </div>
        </div>
      )}

      {Object.keys(departmentCounts).length > 0 && (
        <div className="department-stats">
          <h3>Department Distribution</h3>
          <div className="department-grid">
            {Object.entries(departmentCounts).map(([dept, count]) => (
              <div key={dept} className="department-card">
                <span className="department-name">{dept}</span>
                <span className="department-count">{count}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Dashboard

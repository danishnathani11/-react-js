import { useState, useEffect } from 'react'
import Dashboard from './components/Dashboard'
import EmployeeForm from './components/EmployeeForm'
import EmployeeList from './components/EmployeeList'
import './App.css'

function App() {
  const [employees, setEmployees] = useState([])
  const [editingEmployee, setEditingEmployee] = useState(null)
  const [message, setMessage] = useState({ text: '', type: '' })

  useEffect(() => {
    const storedEmployees = localStorage.getItem('employees')
    if (storedEmployees) {
      setEmployees(JSON.parse(storedEmployees))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('employees', JSON.stringify(employees))
  }, [employees])

  const addEmployee = (employee) => {
    const newEmployee = {
      ...employee,
      id: Date.now().toString(),
      createdAt: new Date().toISOString()
    }
    setEmployees([...employees, newEmployee])
    showMessage('Employee added successfully!', 'success')
  }

  const updateEmployee = (id, updatedData) => {
    setEmployees(employees.map(emp =>
      emp.id === id ? { ...emp, ...updatedData } : emp
    ))
    setEditingEmployee(null)
    showMessage('Employee updated successfully!', 'success')
  }

  const deleteEmployee = (id) => {
    if (window.confirm('Are you sure you want to delete this employee?')) {
      setEmployees(employees.filter(emp => emp.id !== id))
      showMessage('Employee deleted successfully!', 'success')
    }
  }

  const startEdit = (id) => {
    const employee = employees.find(emp => emp.id === id)
    setEditingEmployee(employee)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const cancelEdit = () => {
    setEditingEmployee(null)
  }

  const clearAllEmployees = () => {
    if (window.confirm('Are you sure you want to delete all employees? This action cannot be undone.')) {
      setEmployees([])
      setEditingEmployee(null)
      showMessage('All employees cleared!', 'success')
    }
  }

  const showMessage = (text, type) => {
    setMessage({ text, type })
    setTimeout(() => setMessage({ text: '', type: '' }), 3000)
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Employee Management System</h1>
        <p>Manage your workforce efficiently</p>
      </header>

      {message.text && (
        <div className={`message ${message.type}`}>
          {message.text}
        </div>
      )}

      <Dashboard
        employees={employees}
        clearAllEmployees={clearAllEmployees}
      />

      <EmployeeForm
        addEmployee={addEmployee}
        updateEmployee={updateEmployee}
        editingEmployee={editingEmployee}
        cancelEdit={cancelEdit}
      />

      <EmployeeList
        employees={employees}
        startEdit={startEdit}
        deleteEmployee={deleteEmployee}
      />
    </div>
  )
}

export default App

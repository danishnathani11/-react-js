import { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';
import RecordForm from './components/RecordForm';
import RecordList from './components/RecordList';
import './App.css';

const STORAGE_KEY = 'localbox_records';

function App() {
  const [records, setRecords] = useState([]);
  const [editingRecord, setEditingRecord] = useState(null);
  const [showClearConfirm, setShowClearConfirm] = useState(false);

  useEffect(() => {
    const storedRecords = localStorage.getItem(STORAGE_KEY);
    if (storedRecords) {
      try {
        const parsed = JSON.parse(storedRecords);
        setRecords(parsed);
      } catch (error) {
        console.error('Error loading records from localStorage:', error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
  }, [records]);

  const addRecord = (formData) => {
    const newRecord = {
      id: Date.now().toString(),
      ...formData,
      createdAt: Date.now()
    };
    setRecords(prev => [...prev, newRecord]);
  };

  const updateRecord = (formData) => {
    setRecords(prev =>
      prev.map(record =>
        record.id === editingRecord.id
          ? { ...record, ...formData }
          : record
      )
    );
    setEditingRecord(null);
  };

  const handleSubmit = (formData) => {
    if (editingRecord) {
      updateRecord(formData);
    } else {
      addRecord(formData);
    }
  };

  const startEdit = (id) => {
    const record = records.find(r => r.id === id);
    setEditingRecord(record);
  };

  const cancelEdit = () => {
    setEditingRecord(null);
  };

  const deleteRecord = (id) => {
    if (window.confirm('Are you sure you want to delete this record?')) {
      setRecords(prev => prev.filter(record => record.id !== id));
    }
  };

  const handleClearAll = () => {
    setShowClearConfirm(true);
  };

  const confirmClearAll = () => {
    setRecords([]);
    setShowClearConfirm(false);
    setEditingRecord(null);
  };

  const cancelClearAll = () => {
    setShowClearConfirm(false);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>LocalBox Miner</h1>
        <p className="subtitle">Offline Data Management Dashboard</p>
      </header>

      <main className="app-main">
        <Dashboard records={records} />

        <RecordForm
          onSubmit={handleSubmit}
          editingRecord={editingRecord}
          onCancelEdit={cancelEdit}
        />

        <RecordList
          records={records}
          onEdit={startEdit}
          onDelete={deleteRecord}
          onClearAll={handleClearAll}
        />
      </main>

      {showClearConfirm && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Clear All Records?</h3>
            <p>This action cannot be undone. All records will be permanently deleted from localStorage.</p>
            <div className="modal-actions">
              <button onClick={confirmClearAll} className="btn-danger">
                Yes, Clear All
              </button>
              <button onClick={cancelClearAll} className="btn-secondary">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

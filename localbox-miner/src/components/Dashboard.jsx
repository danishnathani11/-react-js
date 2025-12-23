function Dashboard({ records }) {
  const totalRecords = records.length;
  const lastAdded = records.length > 0 ? records[records.length - 1] : null;
  const storageSize = new Blob([JSON.stringify(records)]).size;

  return (
    <div className="dashboard">
      <div className="dashboard-card">
        <h3>Total Records</h3>
        <p className="dashboard-value">{totalRecords}</p>
      </div>
      <div className="dashboard-card">
        <h3>Last Added</h3>
        <p className="dashboard-value">
          {lastAdded ? lastAdded.name : 'N/A'}
        </p>
      </div>
      <div className="dashboard-card">
        <h3>Storage Used</h3>
        <p className="dashboard-value">{storageSize} bytes</p>
      </div>
    </div>
  );
}

export default Dashboard;

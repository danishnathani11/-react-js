import RecordRow from './RecordRow';

function RecordList({ records, onEdit, onDelete, onClearAll }) {
  if (records.length === 0) {
    return (
      <div className="no-records">
        <p>No Records Found</p>
        <p className="no-records-subtitle">Add your first record using the form above</p>
      </div>
    );
  }

  return (
    <div className="record-list-container">
      <div className="list-header">
        <h2>All Records ({records.length})</h2>
        <button onClick={onClearAll} className="btn-danger">
          Clear All Records
        </button>
      </div>

      <div className="table-wrapper">
        <table className="record-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Category</th>
              <th>Created At</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {records.map(record => (
              <RecordRow
                key={record.id}
                record={record}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RecordList;

function RecordRow({ record, onEdit, onDelete }) {
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
  };

  return (
    <tr>
      <td>{record.name}</td>
      <td>{record.email}</td>
      <td>
        <span className={`category-badge category-${record.category.toLowerCase()}`}>
          {record.category}
        </span>
      </td>
      <td className="date-cell">{formatDate(record.createdAt)}</td>
      <td className="actions-cell">
        <button
          onClick={() => onEdit(record.id)}
          className="btn-edit"
          title="Edit record"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(record.id)}
          className="btn-delete"
          title="Delete record"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default RecordRow;

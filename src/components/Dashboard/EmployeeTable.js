const EmployeeTable = ({ employees, onEdit, onDelete, onToggleStatus }) => {
  return (
    <table border="1" cellPadding="8">
      <thead>
        <tr>
          <th>ID</th>
          <th>Image</th>
          <th>Name</th>
          <th>Gender</th>
          <th>DOB</th>
          <th>State</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {employees.length === 0 ? (
          <tr>
            <td colSpan="8" className="empty-state">
              No employees found
            </td>
          </tr>
        ) : (
          employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td className="image-cell">
                <div className="image-wrapper">
                  {emp.image ? (
                    <img
                      src={emp.image}
                      alt={emp.name}
                      className="profile-img"
                    />
                  ) : (
                    <div className="profile-placeholder">
                      {emp.name.charAt(0).toUpperCase()}
                    </div>
                  )}
                </div>
              </td>
              <td>{emp.name}</td>
              <td>{emp.gender}</td>
              <td>{emp.dob}</td>
              <td>{emp.state}</td>
              <td className="status-cell">
                <label className="status-toggle">
                  <input
                    type="checkbox"
                    checked={emp.isActive}
                    onChange={() => onToggleStatus(emp.id)}
                  />
                  <span>{emp.isActive ? "Active" : "Inactive"}</span>
                </label>
              </td>
              <td>
                <div className="action-buttons">
                  <button onClick={() => onEdit(emp)}>Edit</button>
                  <button className="danger" onClick={() => onDelete(emp.id)}>
                    Delete
                  </button>
                  {/* <button className="secondary" onClick={() => window.print()}>
                    Print
                  </button> */}
                </div>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default EmployeeTable;

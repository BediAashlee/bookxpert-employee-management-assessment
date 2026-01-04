const SummaryCards = ({ employees }) => {
  const total = employees.length;
  const active = employees.filter((e) => e.isActive).length;

  return (
    <div className="summary-container">
      <div className="summary-card">Total Employees: {total}</div>
      <div className="summary-card">Active: {active}</div>
      <div className="summary-card">Inactive: {total - active}</div>
    </div>
  );
};

export default SummaryCards;

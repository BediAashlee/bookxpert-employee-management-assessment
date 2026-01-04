const EmployeeFilters = ({ filters, setFilters }) => {
  return (
    <div className="filters-container">
      <input
        placeholder="Search by name"
        onChange={(e) => setFilters({ ...filters, search: e.target.value })}
      />

      <select
        onChange={(e) => setFilters({ ...filters, gender: e.target.value })}
      >
        <option value="">All Genders</option>
        <option>Male</option>
        <option>Female</option>
      </select>

      <select
        onChange={(e) => setFilters({ ...filters, status: e.target.value })}
      >
        <option value="">All Status</option>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>
    </div>
  );
};

export default EmployeeFilters;

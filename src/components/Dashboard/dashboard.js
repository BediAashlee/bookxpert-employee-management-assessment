import { useState, useEffect } from "react";
import SummaryCards from "./SummaryCards";
import EmployeeTable from "./EmployeeTable";
import EmployeeForm from "./EmployeeForm";
import EmployeeFilters from "./EmployeeFilters";

const Dashboard = () => {
  const [employees, setEmployees] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [filters, setFilters] = useState({
    search: "",
    gender: "",
    status: "",
  });

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("employees")) || [];
    setEmployees(stored);
  }, []);

  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  const handleSave = (employee) => {
    if (editingEmployee) {
      setEmployees(
        employees.map((emp) => (emp.id === employee.id ? employee : emp))
      );
    } else {
      setEmployees([...employees, { ...employee, id: Date.now() }]);
    }

    setShowForm(false);
    setEditingEmployee(null);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      setEmployees(employees.filter((emp) => emp.id !== id));
    }
  };

  const filteredEmployees = employees.filter((emp) => {
    return (
      emp.name.toLowerCase().includes(filters.search.toLowerCase()) &&
      (filters.gender ? emp.gender === filters.gender : true) &&
      (filters.status
        ? filters.status === "active"
          ? emp.isActive
          : !emp.isActive
        : true)
    );
  });

  const handleToggleStatus = (id) => {
    setEmployees(
      employees.map((emp) =>
        emp.id === id ? { ...emp, isActive: !emp.isActive } : emp
      )
    );
  };

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Employee Dashboard</h2>

      <SummaryCards employees={employees} />

      <EmployeeFilters filters={filters} setFilters={setFilters} />

      <button onClick={() => setShowForm(true)} className="add-btn">
        Add Employee
      </button>

      {showForm && (
        <EmployeeForm
          onSave={handleSave}
          editingEmployee={editingEmployee}
          onClose={() => {
            setShowForm(false);
            setEditingEmployee(null);
          }}
        />
      )}

      <div className="table-actions">
        <button className="print-btn" onClick={() => window.print()}>
          Print Employees
        </button>
      </div>

      <div className="print-area">
        <EmployeeTable
          employees={filteredEmployees}
          onEdit={(emp) => {
            setEditingEmployee(emp);
            setShowForm(true);
          }}
          onDelete={handleDelete}
          onToggleStatus={handleToggleStatus}
        />
      </div>
    </div>
  );
};

export default Dashboard;

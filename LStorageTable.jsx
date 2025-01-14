import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const initialData = [
  { id: 1, name: "John Doe", city: "Kolkata", role: "Engineer", salary: 50000 },
  { id: 2, name: "Jane Smith", city: "Delhi", role: "Designer", salary: 45000 },
  { id: 3, name: "Mike Brown", city: "Mumbai", role: "Manager", salary: 60000 },
  { id: 4, name: "Emily Davis", city: "Pune", role: "HR", salary: 40000 },
  {
    id: 5,
    name: "Sam Wilson",
    city: "Guwahati",
    role: "Developer",
    salary: 55000,
  },
  { id: 6, name: "Anna White", city: "Gangtok", role: "Tester", salary: 35000 },
  {
    id: 7,LocalStorage
    name: "Tom Clark",
    city: "Kolkata",
    role: "Consultant",
    salary: 65000,
  },
  { id: 8, name: "Chris Lee", city: "Delhi", role: "Intern", salary: 25000 },
  { id: 9, name: "Pat Green", city: "Mumbai", role: "Engineer", salary: 50000 },
  { id: 10, name: "Nina Black", city: "Pune", role: "Analyst", salary: 47000 },
  {
    id: 11,
    name: "Rick Stone",
    city: "Guwahati",
    role: "Developer",
    salary: 53000,
  },
  { id: 12, name: "Laura Hill", city: "Gangtok", role: "HR", salary: 38000 },
  {
    id: 13,
    name: "Oscar King",
    city: "Kolkata",
    role: "Manager",
    salary: 62000,
  },
  {
    id: 14,
    name: "Sophia Bell",
    city: "Delhi",
    role: "Designer",
    salary: 46000,
  },
  { id: 15, name: "Max Wright", city: "Mumbai", role: "Tester", salary: 36000 },
  { id: 16, name: "Eve Brooks", city: "Pune", role: "Engineer", salary: 52000 },
  {
    id: 17,
    name: "Henry Lane",
    city: "Guwahati",
    role: "Consultant",
    salary: 64000,
  },
  {
    id: 18,
    name: "Grace Park",
    city: "Gangtok",
    role: "Intern",
    salary: 26000,
  },
  {
    id: 19,
    name: "Lucas Adams",
    city: "Kolkata",
    role: "Analyst",
    salary: 48000,
  },
  { id: 20, name: "Lily Evans", city: "Delhi", role: "Manager", salary: 61000 },
];

const LStorage = () => {
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem("employeeData");
    return savedData ? JSON.parse(savedData) : initialData;
  });

  useEffect(() => {
    localStorage.setItem("employeeData", JSON.stringify(data));
  }, [data]);

  const addEmployee = () => {
    const id = Date.now();
    const name = prompt("Enter Name:");
    const city = prompt(
      "Enter City (Kolkata, Delhi, Mumbai, Pune, Guwahati, Gangtok):"
    );
    const role = prompt("Enter Role:");
    const salary = parseInt(prompt("Enter Salary:"), 10);

    if (name && city && role && salary) {
      setData([...data, { id, name, city, role, salary }]);
    } else {
      alert("All fields are required!");
    }
  };

  const updateEmployee = (id) => {
    const employee = data.find((emp) => emp.id === id);

    if (!employee) return alert("Employee not found!");

    const name = prompt("Enter New Name:", employee.name);
    const city = prompt("Enter New City:", employee.city);
    const role = prompt("Enter New Role:", employee.role);
    const salary = parseInt(prompt("Enter New Salary:", employee.salary), 10);

    if (name && city && role && salary) {
      setData(
        data.map((emp) =>
          emp.id === id ? { ...emp, name, city, role, salary } : emp
        )
      );
    } else {
      alert("All fields are required!");
    }
  };

  const deleteEmployee = (id) => {
    setData(data.filter((emp) => emp.id !== id));
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Employee Management</h1>
      <button onClick={addEmployee} className="btn btn-primary mb-3">
        Add Employee
      </button>
      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>City</th>
            <th>Role</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ id, name, city, role, salary }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{city}</td>
              <td>{role}</td>
              <td>{salary}</td>
              <td>
                <button
                  onClick={() => updateEmployee(id)}
                  className="btn btn-warning btn-sm"
                >
                  Update
                </button>
                <button
                  onClick={() => deleteEmployee(id)}
                  className="btn btn-danger btn-sm ms-2"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LStorage;

import { useState } from "react";

function AddRoutineForm({ users, AddRoutin }) {
  const [routine, setRoutine] = useState("");
  const [selected, setSelected] = useState(users[0]?.id || 1);

  const handleChangeRoutine = (e) => setRoutine(e.target.value);
  const handleChangeUser = (e) => setSelected(Number(e.target.value));

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!routine.trim()) return; 

    
    const newRoutine = {
      id: Date.now(),
      text: routine,
      done: false,
    };

    
    AddRoutin(selected, newRoutine);

    
    setRoutine("");
  };

  return (
    <>
      <h1 className="text-center mb-4 text-primary">Daily Habits Tracker</h1>
      <form
        onSubmit={handleSubmit}
        className="d-flex mb-4 align-items-center bg-white p-3 gap-3 rounded"
      >
        <input
          type="text"
          className="form-control"
          onChange={handleChangeRoutine}
          value={routine}
          placeholder="Nouvelle routine ..."
        />
        <select
          className="form-select w-auto"
          onChange={handleChangeUser}
          value={selected}
        >
          {users.map((u) => (
            <option key={u.id} value={u.id}>
              {u.nom}
            </option>
          ))}
        </select>
        <button className="btn btn-primary" type="submit">
          Ajouter
        </button>
      </form>
    </>
  );
}

export default AddRoutineForm;

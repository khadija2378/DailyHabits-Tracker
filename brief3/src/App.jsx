import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import AddRoutineForm from "./component/AddRoutineForm";
import UserList from "./component/UserList";

function App() {
  
  const [users, setUsers] = useState(() => {
    const saved = localStorage.getItem("users");
    return saved
      ? JSON.parse(saved)
      : [
          { id: 1, nom: "Sofia", avatar: "image.jpg", routines: [] },
          { id: 2, nom: "Alice", avatar: "image.jpg", routines: [] },
          { id: 3, nom: "Bob", avatar: "image.jpg", routines: [] },
        ];
  });

 
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const calculateProgress = (routines) => {
    if (routines.length === 0) return 0;
    const doneCount = routines.filter((r) => r.done).length;
    return Math.round((doneCount / routines.length) * 100);
  };
 
  const AddRoutin = (userId, newRoutine) => {
    setUsers((prev) =>
      prev.map((u) =>
        u.id === userId
          ? { ...u, routines: [...u.routines, newRoutine] }
          : u
      )
    );
  };

  
  const CompleteRoutine = (userId, routineId) => {
    setUsers((prev) =>
      prev.map((u) => {
        if (u.id === userId) {
          const updatedRoutines = u.routines.map((r) =>
            r.id === routineId ? { ...r, done: !r.done } : r
          );
          return {
            ...u,
            routines: updatedRoutines,
            progress: calculateProgress(updatedRoutines),
          };
        }
        return u;
      })
    );
  };

  
  const DeleteRoutine = (userId, routineId) => {
    setUsers((prev) =>
      prev.map((u) => {
        if (u.id === userId) {
          const updatedRoutines = u.routines.filter((r) => r.id !== routineId);
          return {
            ...u,
            routines: updatedRoutines,
            progress: calculateProgress(updatedRoutines),
          };
        }
        return u;
      })
    );
  };

  return (
    <div className="container">
   <AddRoutineForm users={users} AddRoutin={AddRoutin}/>
   <UserList users={users}
         onComplete={CompleteRoutine}
         onDelete={DeleteRoutine}
      />
    </div>
  );
}

export default App;

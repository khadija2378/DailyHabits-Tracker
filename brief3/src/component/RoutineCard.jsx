function RoutineCard({routine,onComplete, onDelete }) {
  return (
    <div className="d-flex justify-content-between align-items-center bg-light mb-3 p-2 rounded">
        <div className="text-wrap" >
      <p className={`${routine.done ? "text-muted text-decoration-line-through":""}`} >{routine.text}</p>
      </div>
      <span>
          <button className={`btn btn-sm m-2 ${
            routine.done ? "colorannul" : "colorfait"
          }`}
          
          onClick={() => onComplete(routine.id)}> {routine.done ? "Annuler" : "Accomplir"}</button>
       
        <button className="btn btn-sm colorsuprim" onClick={() => onDelete(routine.id)}>Supprimer</button>
      </span>
    </div>
  );
}
export default RoutineCard;
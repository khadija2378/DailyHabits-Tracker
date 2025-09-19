import RoutineList from "./RoutineList";


function UserCard({ name, avatar, progress,rout,onComplete, onDelete}){
    return(
        <div className="col-md-4">
      <div className="user-column">
        <div className="d-flex flex-column align-items-center mb-3">
          <img src={avatar} className="avatar me-2" alt={name} />
          <h5 className="mb-0">{name}</h5>
        </div>
        <div className="progress mb-3">
          <div className="progress-bar bg-primary" style={{ width: `${progress}%` }}></div>
        </div>
       
          <RoutineList routines={rout} onComplete={onComplete}
          onDelete={onDelete} />
       
      </div>  
    </div>
    )
}
export default UserCard;
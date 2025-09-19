import UserCard from "./UserCard";

function UserList({ users,onComplete, onDelete}){
    
return(
<div className="row g-4">
      {users.map((user) => (
        
          <UserCard
            key={user.id}
          name={user.nom}
          avatar={user.avatar}
          progress={user.progress}
          rout={user.routines}
          onComplete={(routineId) => onComplete(user.id, routineId)}
          onDelete={(routineId) => onDelete(user.id, routineId)}
          />
       
      ))}
    </div>
     
)
}
export default UserList;
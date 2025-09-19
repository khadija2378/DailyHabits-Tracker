
import RoutineCard from "./RoutineCard";


function RoutineList({routines, onComplete, onDelete }){

    return(
routines.map(r => (
          
          <RoutineCard key={r.id} routine={r} onComplete={onComplete}
            onDelete={onDelete}/>
        ))
      
    )
          
}
export default RoutineList;
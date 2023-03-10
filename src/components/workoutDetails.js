import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { useAuthContext } from "../hooks/useAuthContext";
// date fns
import formatDistanceToNow from "date-fns/formatDistanceToNow";
const WorkoutDetails = ({ workout }) => {
  const { workouts, dispatch } = useWorkoutsContext();
  const { user } = useAuthContext();

  const deleteHandler = async () => {
    if (!user) {
      return;
    }
    const response = await fetch("/api/workouts/" + workout._id, {
      method: "DELETE",
      headers: {
        Authorization: `bearer ${user.token}`,
      },
    });
    const json = await response.json();
    if (response.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: json });
    }
  };
  return (
    <>
      <div className="workout-details">
        <h4>{workout.title}</h4>
        <p>
          <strong>Load (kg): </strong>
          {workout.loads}
        </p>
        <p>
          <strong>reps: </strong>
          {workout.reps}
        </p>
        <p>
          {formatDistanceToNow(new Date(workout.createdAt), {
            addSuffix: true,
          })}
        </p>
        <span className="material-symbols-outlined" onClick={deleteHandler}>
          delete
        </span>
      </div>
    </>
  );
};
export default WorkoutDetails;

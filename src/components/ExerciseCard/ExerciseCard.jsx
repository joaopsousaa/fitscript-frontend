import "./ExerciseCard.css";

function ExerciseCard({ workout, deleteSet }) {
  return (
    <div className="whole-workout-log-container">
      <h2>Current Workout Log</h2>
      <div className="workout-log-container">
        {workout.map((el, i) => {
          return (
            <>
              <div className="workout-log-exercise-container">
                <div key={el.id}>
                  <h3 className="workout-log-name">{el.name}</h3>
                </div>
                {el.sets.map((element, index) => {
                  return (
                    <>
                      <div key={element[index]}>
                        Set #{el.sets.indexOf(element) + 1}:{" "}
                        {element.numberOfReps} X {element.weightLifted} kg
                      </div>
                      <div>
                        <button
                          className="btn-delete-set"
                          type="button"
                          onClick={() => deleteSet(i, index)}
                        >
                          Delete Set
                        </button>
                      </div>
                    </>
                  );
                })}
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default ExerciseCard;

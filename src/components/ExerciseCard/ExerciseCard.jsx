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
                <h3 key={el.id} className="workout-log-name">
                  {el.name}
                </h3>

                {el.sets.map((element, index) => {
                  return (
                    <>
                      <div className="sets-info" key={element[index]}>
                        <strong>Set #{el.sets.indexOf(element) + 1}</strong>:{" "}
                        {element.numberOfReps} X {element.weightLifted} kg
                        {/* <button
                          className="btn-delete-set"
                          type="button"
                          onClick={() => deleteSet(i, index)}
                        > */}
                        <img
                          src="/trash-can.png"
                          alt="delete set"
                          className="btn-delete-set"
                          onClick={() => deleteSet(i, index)}
                        ></img>
                        {/* </button> */}
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

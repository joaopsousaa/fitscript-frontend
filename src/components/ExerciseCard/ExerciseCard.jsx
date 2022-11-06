import "./ExerciseCard.css";

function ExerciseCard({ workout }) {
  return (
    <div className="whole-workout-log-container">
      <h2>Current Workout Log</h2>
      <div className="workout-log-container">
        {workout.map((el) => {
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

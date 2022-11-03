function ExerciseCard({ workout }) {
  return (
    <div>
      <h2>Current Workout Log</h2>
      {workout.map((el) => {
        return (
          <>
            <div key={el.id}>
              <h3>{el.name}</h3>
            </div>
            <div>
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
  );
}

export default ExerciseCard;

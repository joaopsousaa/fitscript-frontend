function ExerciseCard({ form }) {
  return (
    <div>
      <h2>Current Workout Log</h2>
      <h3>Workout Type: {form.workoutType}</h3>
      <table>
        <tr>
          <th>Exercise Name</th>
          <td>{form.exerciseName}</td>
        </tr>
        {form.set.map((el) => {
          return (
            <>
              {" "}
              <th>Set #{form.set.indexOf(el) + 1}</th>
              <tr>
                <th>Reps</th>
                <td>{el.numberOfReps}</td>
              </tr>
              <tr>
                <th>Weight Lifted (kg)</th>
                <td>{el.weightLifted}</td>
              </tr>
            </>
          );
        })}
      </table>
    </div>
  );
}

export default ExerciseCard;

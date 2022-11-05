import "./HomePage.css";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <div>
        <h2 style={{ fontSize: "24px" }}>About us</h2>
        <p>
          We all know it's difficult to lose weight and build muscle. However,
          if you become a member of fitscript.com, you'll have access to the
          resources you need to achieve your fitness goals. The best part is
          that there are no obligations to sign up; it is free.
        </p>

        <p>
          The advantages of tracking your physical activity have been supported
          by numerous studies. It's easy to understand: the more frequently you
          record your physical activities, the more probable it is that you will
          be healthy. Therefore, keeping a workout diary and/or an activity
          journal is advised by every effective weight-management program.
          However, without the appropriate tools, keeping track of everything
          you consume can be difficult, if not impossible.
        </p>

        <p>
          We put a lot of effort into making sure you can track your meals as
          quickly and easily as possible at fitscript.com. Because the simpler
          things are for you, the more likely you are to stick with them and
          achieve your weight loss or muscle gain goals.
        </p>
      </div>

      <div>
        <h2>How does it work?</h2>
        <p>
          Otechnology is so simple to use. Over time, we all have a propensity
          to follow the same workout. fitscript.com keeps track of your prior
          workouts and recalls the activities you've added to your log the most
          frequently. Accordingly, it gets simpler the more you log your
          workouts.
        </p>
      </div>

      <div>
        <h2>With a FREE membership you get:</h2>
        <p>
          <ol>
            <li>✅ Your own personal workout database</li>
            <li>✅ A searchable exercise database of over 10,000 items</li>
            <li>✅ Create and monitor activity reports</li>
            <li>✅ Calculate your body mass index</li>
          </ol>
        </p>
        <div>
          <h2>Don't hesitate! Be fit and write your own fitness script!</h2>
        </div>
      </div>
      <Link to="/signup">
        <button>Sign up for FREE!</button>
      </Link>
    </div>
  );
}

export default HomePage;

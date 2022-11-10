import "bootstrap/dist/css/bootstrap.min.css";
import "./HomePage.css";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

function HomePage() {
  return (
    <div>
      <div className={"homepage-banner"}>
        <img
          src="/images/challenge-header.gif"
          style={{ height: "410px", width: "950px" }}
          alt="banner"
        />
      </div>
      <div className={"about-us"}>
        <h2>About us</h2>
        <p>
          We all know it's difficult to lose weight and build muscle. However,
          if you become a member of fitscript.com, you'll have access to the
          resources you need to achieve your fitness goals. The best part is
          that there are no obligations to sign up; it is free.
        </p>
        <br />

        <p>
          The advantages of tracking your physical activity have been supported
          by numerous studies. It's easy to understand: the more frequently you
          record your physical activities, the more probable it is that you will
          be healthy. Therefore, keeping a workout diary and/or an activity
          journal is advised by every effective weight-management program.
          However, without the appropriate tools, keeping track of everything
          you consume can be difficult, if not impossible.
        </p>
        <br />

        <p>
          We put a lot of effort into making sure you can track your meals as
          quickly and easily as possible at fitscript.com. Because the simpler
          things are for you, the more likely you are to stick with them and
          achieve your weight loss or muscle gain goals.
        </p>
      </div>

      <div className={"container"}>
        <div className={"container_content"}>
          <img
            src="/images/technology-1210081964-612x612.jpeg"
            style={{ height: "250px", width: "350px", margin: " auto 0" }}
            alt="banner2"
          />
          <p
            style={{
              fontSize: "28px",
              wordSpacing: "0.9rem",
            }}
          >
            "Our technology is so simple to use. Over time, we all have a
            propensity to follow the same workout. fitscript.com keeps track of
            your prior workouts and recalls the activities you've added to your
            log the most frequently. Accordingly, it gets simpler the more you
            log your workouts."
          </p>
        </div>
      </div>

      <div>
        <div className={"container-two"}>
          <br />
          <div className={"container-card"}>
            <img
              src="/images/photo-1550345332-09e3ac987658.avif"
              style={{ height: "300px", width: "300px" }}
              alt="banner3"
            />
            {/* <h3 style={{ marginTop: "10px" }}>
              Your own personal workout database
            </h3> */}
          </div>
          <div className={"container-card"}>
            <img
              src="/images/humphrey-muleba-LOA2mTj1vhc-unsplash.jpg"
              style={{ height: "300px", width: "300px" }}
              alt="banner4"
            />
            {/* <h3 style={{ marginTop: "10px" }}>
              A searchable exercise database of over 10,000 items
            </h3> */}
          </div>
          <div className={"container-card"}>
            <img
              src="/images/istockphoto-1303295576-612x612.jpg"
              style={{ height: "300px", width: "300px" }}
              alt="banner5"
            />
            {/* <h3 style={{ marginTop: "10px" }}>
              Create and monitor activity reports
            </h3> */}
          </div>
          {/* <h2>Don't hesitate! Be fit and write your own fitness script!</h2> */}
        </div>
      </div>

      <span className="benefits">
        <Link to="/workout">
          <button className={"button-benefits button2"}>
            Explore Workouts
          </button>
        </Link>

        <Link to="/findgym">
          <button className={"button-benefits button2"}>Find a Gym</button>
        </Link>

        <Link to="/dashboard">
          <button className={"button-benefits button2"}>
            Download reports
          </button>
        </Link>
      </span>

      <div className={"container-join"}>
        <h1
          style={{
            textAlign: "center",
            backgroundColor: "#CAD2C5",
            padding: "5px",
            margin: 0,
            letterSpacing: "1.5px",
            fontWeight: "600",
            lineHeight: "1.2",
            fontSize: "32px",
            fontfamily: "Gilroy W05",
          }}
        >
          Write your fitness script today <br />
          <Link to="/signup">
            <button className={"button-join button1"}>Join now</button>
          </Link>
        </h1>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default HomePage;

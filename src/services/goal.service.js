import axios from "axios";

class GoalService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_SERVER_URL || "http://localhost:5005",
    });

    // Automatically set JWT token in the headers for every request
    this.api.interceptors.request.use((config) => {
      // Retrieve the JWT token from the local storage
      const storedToken = localStorage.getItem("authToken");

      if (storedToken) {
        config.headers = { Authorization: `Bearer ${storedToken}` };
      }

      return config;
    });
  }

  // POST /goal
  createOne = async (requestBody) => {
    return this.api.post("/goal", requestBody);
  };

  //GET all goals
  getAllgoals = async () => {
    return this.api.get("/goal");
  };
}

// Create one instance of the service
const goalService = new GoalService();

export default goalService;

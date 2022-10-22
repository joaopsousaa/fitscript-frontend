import axios from "axios";

class WorkoutService {
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

  // POST /workout
  createOne = async (requestBody) => {
    return this.api.post("/workout", requestBody);
  };
}

// Create one instance of the service
const workoutService = new WorkoutService();

export default workoutService;

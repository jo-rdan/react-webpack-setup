import axios from "axios";

export default axios.create({
   baseURL: "https://we-mentors.herokuapp.com",
   responseType: "json",
   headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
   }
});

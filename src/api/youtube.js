import axios from "axios";

const KEY = "AIzaSyDTEwhlSmRdJ7cfvX2IAohoE8bcUJib6BI";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});

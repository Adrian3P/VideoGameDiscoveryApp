import axios from "axios";


export default axios.create({
    baseURL: 'https://api.rawg.io/api',
  params: {
    key: "9b9a86c4b2cf4f1997fc67976831e76e",
  },
});
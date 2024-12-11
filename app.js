import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

async function userData(username) {
  const token = process.env.API_KEY;
  let response = await axios.get(`https://api.github.com/users/${username}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  // console.log(response.data);
  console.log("Username:", response.data.login);
  console.log("Company:", response.data.company);
  console.log("Location:", response.data.location);
  console.log("Bio:", response.data.bio);
  console.log("Public repos:", response.data.public_repos);
  console.log("Follower count:", response.data.followers);
  console.log("Following count:", response.data.following);
}

userData("saadhn4");

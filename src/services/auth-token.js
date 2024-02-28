import axios from "axios";

const getAccessToken = async () => {
  const data = new URLSearchParams();
  data.append("grant_type", "client_credentials");
  data.append("client_id", "15dd23c9e24648918b26e966059eb4a7");
  data.append("client_secret", "4ac84a69b7a944e88a0b6caf49dc6007");

  try {
    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      data
    );
    return response.data.access_token;
  } catch (error) {
    console.error("Error fetching access token:", err);
    throw err;
  }
};

const access_token = await getAccessToken();

export default access_token;

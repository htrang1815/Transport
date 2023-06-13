import axios from "axios";

const clienEndPoint = "/api/khachhangs";

export const getAllClient = async ({ pagination }) => {
  try {
    const reponse = await axios.get(
      `${clienEndPoint}?page=${pagination?.current}&numberpage=${pagination?.pageSize}`
    );
    return reponse;
  } catch (error) {
    console.log(error);
  }
};

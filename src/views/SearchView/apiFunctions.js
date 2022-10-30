import { getCookie } from "../../utils/getCookie";

export const getKeywords = async (text) => {
  const cookieValue = getCookie();
  const data = {
    inputString: `${text}`,
  };
  try {
    const apiResponse = await fetch(
      "https://backend.szukamekipydo.pl/api/keyword",
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `${cookieValue}`,
        },
        body: JSON.stringify(data),
      }
    );
    return await apiResponse.json();
  } catch (e) {
    console.log(e);
  }
};

export const searchGroups = async () => {
  const cookieValue = getCookie();

  try {
    const apiResponse = await fetch(
      "https://backend.szukamekipydo.pl/api/showResults",
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `${cookieValue}`,
        },
      }
    );

    return await apiResponse.json();
  } catch (e) {
    console.log(e);
  }
};

export const addGroup = async () => {
  const cookieValue = getCookie();
  const data = {
    firebase_chat_id: "123456",
    name: "TESTname",
    description: "TESTdescription",
    latitude: 52.40117371024606,
    longitude: 16.91741090208518,
    event_date: "1111-11-11",
    event_time: "12:12",
    max_members: 6,
    members: [4],
    owner: 4,
    tags: ["Aalborg", "Aalto"],
  };
  try {
    const apiResponse = await fetch(
      "https://backend.szukamekipydo.pl/api/showResults",
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `${cookieValue}`,
        },
        body: JSON.stringify(data),
      }
    );

    return await apiResponse.json();
  } catch (e) {
    console.log(e);
  }
};

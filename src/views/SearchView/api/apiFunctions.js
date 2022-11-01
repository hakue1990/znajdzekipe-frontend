import { getCookie } from "../../../utils/getCookie";

export const apiGetKeywords = async (text) => {
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

export const apiSearchGroups = async (
  latitude,
  longitude,
  maxDistance,
  minDate,
  maxDate,
  minTime,
  maxTime,
  keywords
) => {
  const cookieValue = getCookie();
  const data = {
    latitude: latitude,
    longitude: longitude,
    maxDistance: maxDistance,
    minDate: minDate,
    maxDate: maxDate,
    minTime: minTime,
    maxTime: maxTime,
    keywords: keywords,
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

export const apiAddGroup = async (
  groupID,
  name,
  latitude,
  longitude,
  event_date,
  event_time,
  max_members,
  members,
  owner,
  tags
) => {
  const cookieValue = getCookie();
  const data = {
    firebase_chat_id: groupID,
    name: name,
    description: "TESTdescription",
    latitude: latitude,
    longitude: longitude,
    event_date: event_date,
    event_time: event_time,
    max_members: max_members,
    members: [members],
    owner: owner,
    tags: tags,
  };

  try {
    const apiResponse = await fetch(
      "https://backend.szukamekipydo.pl/api/group",
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

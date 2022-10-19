import { getCookie } from "../../utils/getCookie";

const getKeywords = async (text) => {
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

export default getKeywords;

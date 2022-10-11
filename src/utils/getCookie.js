export const getCookie = () => {
  const cookieValue = document.cookie
    .split("; ")
    .find((row) => row.startsWith("znajdzEkipeAuth="))
    ?.split("=")[1];
  return cookieValue;
};

export const setCookie = (value, expiration) => {
  const date = new Date(expiration);
  date.toUTCString();
  document.cookie = `znajdzEkipeAuth=${value}; expires=${date}}`;
};

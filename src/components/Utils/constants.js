export const Logo_URL =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const Photo_URL =
  "https://avatars.githubusercontent.com/u/140896390?s=400&u=d4b4f69d5816042216c97272336c650da60e1bdc&v=4";
export const SPI_OPtions = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_TOKEN,
  },
};
export const CDN_URL = "https://image.tmdb.org/t/p/w500/";
export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_medium.jpg";
export const Supported_lang = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
];
export const open_AI = process.env.REACT_APP_OPEN_AI;

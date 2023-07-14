const key = '4c5d3effcfa79dd078c03f12775aba5b'

const requests = {
  requestPopular: `https://api.themoviedb.org/3/tv/popular?api_key=${key}`,
  requestTopRated: `https://api.themoviedb.org/3/tv/top_rated?api_key=${key}`,
  requestTrending: `https://api.themoviedb.org/3/trending/all/day?api_key=${key}`,
  requestAnime: `https://api.themoviedb.org/3/search/tv?api_key=${key}&query=anime`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}`,
  };

  export default requests
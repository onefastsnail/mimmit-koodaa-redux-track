const apiKey = "seYUer2bPoJZHvH7soSy12u5ynQXIYbT";

const getGiphyUrl = category => {
  return `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&rating=G&tag=${category}`;
};

export const fetchGiphy = category => {
  return fetch(getGiphyUrl(category))
    .then(response => response.json())
    .then(json => json.data.image_url);
};

export const giphyUrl = getGiphyUrl("panda");

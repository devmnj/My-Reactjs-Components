import { useQuery } from 'react-query'

export const fetchImages = async (url) => {
  const res = await fetch(url)
  const data = await res.json();
  return data
}
export const usePixa = ({ tag = "pixa-image", order = 'popular', safeSearch = false, query = "", lang = "en", type = "photo", orientation = "all", category, min_width = 0, min_height = 0, color = "red,pink", editor_choice = false }) => {
  console.log('Hook -' + type);

  let url;
  let mis = "";
  if (category !== undefined) {
    mis = "&category=" + category;
  }
  if (color !== undefined) {
    mis += "&color=" + color;
  }

  url = 'https://pixabay.com/api/?key=17682822-706a4fab555bde037d07b3d9e&q=' + query + '&image_type=' + type + '&pretty=true&lang=' + lang + '&orientation=' + orientation + '&min_width=' + min_width + '&min_height=' + min_height + '&editor_choice' + editor_choice + '&safesearch=' + safeSearch + '&order=' + order + mis;

  // console.log('q='+q);
  return useQuery(tag, () => fetchImages(url), {
    refetchInterval: 0
  })
}
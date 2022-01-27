import React from 'react';
import { usePixa } from '../hook'
function getRndInteger(minimum, maximum) {
  return Math.floor(Math.random() * (maximum - minimum)) + minimum;
}
/**
** Pixa Image component
* @param  {[options:{tag:"pixa-image",order : 'popular/latest', safeSearch : false, query : "car+vehicle+red", lang : "en", type : "all/photo/illustration/vector", orientation : "all/vertical,horizontal", category:"backgrounds/fashion/nature", min_width : 0, min_height : 0, color : "[red,pink]", editor_choice : false}]} props options for fetching images from Pixabay
*/
export const PixabayRImage = (props) => {
  console.log('component :' + props.query);
  const tag = props.query || props.type || props.category
  const { data, isLoading } = usePixa({ query: props.query, type: props.type, tag: tag, lang: props.lang, orientation: props.orientation, min_width: props.min_width, min_height: props.min_height, color: props.color, editor_choice: props.editor_choice, order: props.order, safeSearch: props.safeSearch });
  const random = () => {
    return <img src={isLoading !== true ? data.hits[getRndInteger(0, data.hits.length)].webformatURL : null} alt="" />
  }
  return (
    <div>
      {random()}
      {props.children}
    </div>
  );
}

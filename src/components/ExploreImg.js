import { ImageList, ImageListItem } from '@mui/material'
import React from 'react'
import ExpImg1 from "../assets/ExplorePics/explorePic1.avif";
import ExpImg2 from "../assets/ExplorePics/explorePic2.avif";
import ExpImg4 from "../assets/ExplorePics/explorePic3.avif";
import ExpImg5 from "../assets/ExplorePics/explorePic4.avif";
import ExpImg6 from "../assets/ExplorePics/explorePic5.avif";
import ExpImg7 from "../assets/ExplorePics/explorePic6.avif";
import ExpImg3 from "../assets/ExplorePics/explorePic7.avif";
import ExpImg8 from "../assets/ExplorePics/explorePic8.avif";
import ExpImg9 from "../assets/ExplorePics/explorePic9.avif";
import ExpImg10 from "../assets/ExplorePics/explorePic10.webp";
import ExpImg11 from "../assets/ExplorePics/explorePic11.webp";
import ExpImg12 from "../assets/ExplorePics/explorePic12.webp";
import ExpImg13 from "../assets/ExplorePics/explorePic13.webp";
import ExpImg14 from "../assets/ExplorePics/explorePic14.webp";



const itemData = [
    {image: ExpImg1 },
   { image:ExpImg2 },
   { image:ExpImg4 },
   { image:ExpImg5} ,
   { image:ExpImg6} ,
   { image:ExpImg7} ,
    {image:ExpImg3} ,
    {image:ExpImg8 },
    {image:ExpImg9} ,
   { image:ExpImg10} ,
    {image:ExpImg11} ,
    {image:ExpImg12} ,
   { image:ExpImg13} ,
 { image:ExpImg14} ,
 {image: ExpImg1 },
 { image:ExpImg7 },
 { image:ExpImg10 },
 { image:ExpImg13} ,
  
  ];
export default function ExploreImg() {
  return (
<>
<ImageList style={{ width:" 700px", height: "1000px", marginLeft:"500px",overflow: "hidden" }} cols={3} rowHeight={164}>
  {itemData.map((item) => (
    <ImageListItem key={item.image}>
      <img
        src={item.image}
        alt={"item.title"}
        loading="lazy"
        style={{width: "220px",
            height: "300px"}}
        
      />
    </ImageListItem>
  ))}
</ImageList>
</>

    )
}

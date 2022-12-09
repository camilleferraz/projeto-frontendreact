import img001 from "../assets/rocks/001.png"
import img002 from "../assets/rocks/002.png"
import img003 from "../assets/rocks/003.png"
import img004 from "../assets/rocks/004.png"

export const getImg = (img) => {
    switch (img) {
        case "img001":
          return img001;
        case "img002":
          return img002;
        case "img003":
          return img003;
        case "img004":
          return img004;
        default:
          return img004;
      }
    };

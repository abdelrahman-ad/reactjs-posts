import {
  AiFillLike,
  AiTwotoneLike,
  AiOutlineLike,
  AiOutlineComment,
} from 'react-icons/ai';
import { TfiComment } from 'react-icons/tfi';
import { FaAdn, FaCommentDollar } from 'react-icons/fa';
import { IoMdShareAlt } from 'react-icons/io';
import { BiShare } from 'react-icons/bi';
import { FaCreativeCommonsShare, FaSmileWink } from 'react-icons/fa';
import { GiRapidshareArrow } from 'react-icons/gi';




const Formmap = [
    {description:"blaa" ,iconpicture:{FaSmileWink},name:"ahmed",likeicon:{ AiFillLike},shareicon:{BiShare}, commenticon:{AiOutlineComment},sorce:'/src/container/img/2.jpg',children:'children' },
    {description:"blaa" ,iconpicture:{GiRapidshareArrow},name:"adel",likeicon:{AiTwotoneLike},shareicon:{FaCreativeCommonsShare}, commenticon:{TfiComment},sorce:'/src/container/img/2.jpg',children:'children' },
    {description:"blaa" ,iconpicture:{FaAdn,},name:"abdelrahman",likeicon:{AiOutlineLike},shareicon:{IoMdShareAlt}, commenticon:{FaCommentDollar },sorce:'/src/container/img/2.jpg',children:'children' }



  
]



export default Formmap ;


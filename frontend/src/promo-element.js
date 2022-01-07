import { Link } from 'react-router-dom'
import styled from 'styled-components'



export const PromoCard = styled(Link)`


&:hover {
  box-shadow: 9 6px 20px rgba(39, 108, 236, 0.3);
  /* box-shadow: 0 6px 150px rgba(181, 185, 190, 0.102); */

  transform: scale(1.06);
  transition: all 0.3s ease-out;
  color: #f8b133;
}
  
@media screen and (max-width: 960px) {
  margin-right: 3rem;
  margin-left: 3rem;
}

`
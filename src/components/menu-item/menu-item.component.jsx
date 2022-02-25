import React from "react";
//import {useNavigate} from 'react-router-dom'
import {NavLink, withRouter  } from "react-router-dom"

//import bgimage from "../../images/jsonViewer.svg"

import './menu-item.styles.scss';

const MenuItem = ({title, subtitle, imageUrl, linkUrl }) => {
    //const navigate = useNavigate();
    function handleClick() {
      console.log(linkUrl);
        //navigate(linkUrl);
        <NavLink to={linkUrl} />
    }

return (
    <div   className='menu-item' onClick={handleClick}>
    <div className='content'>
        <h1 className='title'>{title}</h1>
        <span className='subtitle'> {subtitle} </span>
    </div>
</div>
)
};

export default withRouter(MenuItem);

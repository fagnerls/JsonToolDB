import React from "react"
//import { useNavigate } from "react-router-dom"
import  Button  from '@mui/material/Button';
import {NavLink, withRouter  } from "react-router-dom"

import './menu-item.styles.scss';

const ButtonItem = ({title, subtitle, imageUrl, linkUrl }) => {
    //const navigate = useNavigate();
    function handleClick() {
        //navigate(linkUrl);
        console.log(linkUrl);
        <li><NavLink to={linkUrl} /></li>
    }

    return (
        <div className="menu-item">

            <Button onClick={handleClick} variant="contained"><NavLink to={linkUrl} > {title}</NavLink></Button>
        </div>
    );
}

export default withRouter(ButtonItem);

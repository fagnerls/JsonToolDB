import { ButtonGroup } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";

import ButtonItem from "../menu-item/button-item.component";
import MenuItem from "../menu-item/menu-item.component";



//import "./directory.styles.scss";

const  Directory = ({sections}) =>{




        return(
            <div className='directory-menu'>
            <ResponsiveAppBar/>
                <ButtonGroup>


                {
                    sections.map(({id, ...otherSectionProps}) => (
                        <ButtonItem key={id} {...otherSectionProps} className='directory-button' />

                        ))

                }
                </ButtonGroup>

            </div>
        )
}


const mapStateToProps = state => ({
    sections: state.directory.sections
});

export  default connect(mapStateToProps)(Directory);

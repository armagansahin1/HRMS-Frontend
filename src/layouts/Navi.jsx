import React from 'react'
import { NavLink } from "react-router-dom";
import { Menu,Image} from 'semantic-ui-react'
import SignedOut from './SignedOut';
export default function Navi() {
  
    return (
        <div>
            
    <Menu widths="5" style={{marginBottom:"20px"}}>
            
    <Menu.Item as={NavLink} to="/" link>
      <Image src="https://res.cloudinary.com/dm4lumruz/image/upload/v1623344888/hrms-images/HRMSLOGO_ofbqt1.png"/>
    </Menu.Item>
    <Menu.Item as={NavLink}  className="nav-links"  to="/candidates" link>
    İş Arayanlar
    </Menu.Item>
    <Menu.Item className="nav-links" as={NavLink} to="/employers" link>
        İş Verenler
    </Menu.Item>
    <Menu.Item className="nav-links" link>
        Açık Pozisyonlar
    </Menu.Item>
    <Menu.Item className="nav-links">
    <SignedOut/>
    </Menu.Item>
  </Menu>


        </div>
    )
    

}

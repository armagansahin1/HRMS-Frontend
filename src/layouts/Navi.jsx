import React from 'react'
import { useHistory } from "react-router-dom";
import { Menu,Image} from 'semantic-ui-react'
import SignedOut from './SignedOut';
export default function Navi() {
  const history=useHistory()
  function toCandidates(){
    
    history.push("/candidates")
  }

  function toEmployers(){
    history.push("/employers")
  }

  function toIndex(){
    history.push("/")
  }
    return (
        <div>
            
    <Menu widths="5" style={{marginBottom:"20px"}}>
            
    <Menu.Item onClick={toIndex} link>
      <Image src="https://res.cloudinary.com/dm4lumruz/image/upload/v1623344888/hrms-images/HRMSLOGO_ofbqt1.png"/>
    </Menu.Item>
    <Menu.Item className="nav-links" onClick={toCandidates} to="/candidates" link>
    İş Arayanlar
    </Menu.Item>
    <Menu.Item className="nav-links" onClick={toEmployers} link>
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

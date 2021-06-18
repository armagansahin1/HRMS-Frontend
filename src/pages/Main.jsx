import React from 'react'
import { Header, Button } from 'semantic-ui-react'


export default function Main() {
    return (
        <div style={{width:"100%",height:"800px",backgroundSize:"cover", display:"flex", justifyContent:"center",flexDirection:"column",
        backgroundImage:"url(https://res.cloudinary.com/dm4lumruz/image/upload/c_scale,h_800/v1623357011/hrms-images/pexels-charles-parker-5847359_gmwz3c.jpg)"}}>
            
            <Header as='h1' style={{textAlign:"center", marginBottom:"200px", fontSize:"5em",color:"white"}}>Aradığın işe hemen başvur</Header>
            <Button inverted color='violet' size="huge" fluid >
                Tekliflere göz at
             </Button>
            
           
             
       
        </div>
    )
}

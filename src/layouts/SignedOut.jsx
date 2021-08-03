import React from 'react'
import { Button,Dropdown,Container } from 'semantic-ui-react'
import { Link, NavLink  } from "react-router-dom";
export default function SignedOut() {
    const options = [
        { key: 1, text: 'Üye Kaydı', value: 1, as :Link , to:"/candidateRegisterForm"},
        { key: 2, text: 'İş Veren Kaydı', value: 2 , as :Link , to:"/employerRegisterForm" },
        
      ]
    return (
        <div>
            <Container>
            <Button color="violet" class="ui button" as = {NavLink} to = "/loginForm">Üye Girişi</Button>
            <Button color="teal" class="ui button">İş Veren Girişi</Button>
            <Dropdown style={{width:"9em"}} button  options={options} floating text="Kayıt Ol"/>
            </Container>
         </div>
    )
}

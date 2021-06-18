import React from 'react'
import { Button,Dropdown,Container } from 'semantic-ui-react'
export default function SignedOut() {
    const options = [
        { key: 1, text: 'İş Arayan Kaydı', value: 1 },
        { key: 2, text: 'İş Veren Kaydı', value: 2 },
        
      ]
    return (
        <div>
            <Container>
            <Button color="violet" class="ui button">Giriş Yap</Button>
            <Dropdown style={{width:"100px"}} button  options={options} floating text="Kayıt Ol"/>
            </Container>
         </div>
    )
}

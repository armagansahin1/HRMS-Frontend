import { Form, Formik } from 'formik'
import React from 'react'
import { Container, Grid, GridColumn, Header, Segment } from 'semantic-ui-react'
import HrmsTextInput from '../utilities/customFormControl/HrmsTextInput'

export default function LoginForm() {
    return (
        <div>
            <Formik>
                <Form className="ui form">
                    <Grid textAlign = "center" verticalAlign = "top" style={{ height: '100vh', marginTop : "100px"}}>
                        <GridColumn><Header as = "h2" textAlign = "center" >Giriş Yap</Header></GridColumn>
                    </Grid>
                </Form>
            </Formik>

        </div>
    )
}

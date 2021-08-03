import React, { useState } from 'react'
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { Grid,Header,Input,Button } from 'semantic-ui-react';
import HrmsTextInput from "../utilities/customFormControl/HrmsTextInput";
import AuthService from '../services/authService';

export default function CandidateRegisterForm() {

    const [dateOfBirth, setDateOfBirth] = useState()

    let authService = new AuthService()

    const initialValues = {
        firstName: "",
        lastName: "",
        nationalityId: "",
        dateOfBirth: "",
        email: "",
        password: "",
        profession: ""
    }

    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required("Lütfen adınızı giriniz"),
        lastName: Yup.string().required("Lütfen soyadınızı giriniz"),
        nationalityId: Yup.number().max(99999999999, "TC Kimlik numarası 11 haneli olmalıdır").min(10000000000, "TC Kimlik numarası 11 haneli olmalıdır")
            .required("Lütfen TC Kimlik Numaranızı giriniz").typeError("Kimlik numaranız geçerli değil"),
        email: Yup.string().required("Email adresinizi giriniz").email("Geçerli bir email adresi giriniz"),
        password: Yup.string().required("Lütfen bir şifre belirleyiniz"),
        profession: Yup.string().required("Lütfen mesleğinizi giriniz")
    })

    const submit = (values) => {
        values.dateOfBirth = dateOfBirth
        authService.candidateForRegister(values).then(result => {
            console.log(result.data)
        })
    }

    return (
        <div>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={submit}>
                <Form className="ui form">
                    <Grid celled>

                        <Grid.Row>
                            <Grid.Column width="16" textAlign="center">
                                <Header as="h2">Üye Kaydı</Header>
                            </Grid.Column>
                        </Grid.Row>

                        <Grid.Row>
                            <Grid.Column width="16" textAlign="center">
                                <Header as="h3">Kişisel Bilgiler</Header>
                            </Grid.Column>
                        </Grid.Row>

                        <Grid.Row>
                            <Grid.Column width="8">
                                <HrmsTextInput placeHolder="Adınız" name="firstName" />
                            </Grid.Column>
                            <Grid.Column width="8">
                                <HrmsTextInput placeHolder="Soyadınız" name="lastName" />
                            </Grid.Column>
                        </Grid.Row>

                        <Grid.Row>
                            <Grid.Column width="8">
                                <HrmsTextInput placeHolder="TC Kimlik No" name="nationalityId" />
                            </Grid.Column>
                            <Grid.Column width="8">
                                Doğum Tarihi : <Input type="date" name="dateOfBirth" style={{ width: "70%" }} onChange={(e) => { setDateOfBirth(e.target.value) }} />
                            </Grid.Column>
                        </Grid.Row>

                        <Grid.Row>
                            <Grid.Column width="8">
                                <HrmsTextInput placeHolder="Email" name="email" />
                            </Grid.Column>
                            <Grid.Column width="8">
                                <HrmsTextInput placeHolder="Şifre" name="password" />
                            </Grid.Column>
                        </Grid.Row>

                        <Grid.Row>
                            <Grid.Column width = "16">
                            <HrmsTextInput placeHolder="Mesleğiniz" name="profession" />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>

                    <Button type="submit" color="violet" fluid>Kayıt Ol</Button>
                </Form>
            </Formik>
        </div>
    )
}

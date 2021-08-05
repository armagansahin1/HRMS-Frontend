import React, { useState, useEffect } from 'react'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Input, Button, Grid, Header } from 'semantic-ui-react'
import WorkTypeService from "../services/workTypeService"
import WorkTimeService from "../services/workTimeService"
import HrmsTextInput from "../utilities/customFormControl/HrmsTextInput";
import HrmsTextAreaInput from '../utilities/customFormControl/HrmsTextAreaInput';
import HrmsDropdown from '../utilities/customFormControl/HrmsDropdown';
import CityService from '../services/cityService';
import JobAdvertisementService from "../services/jobAdvertisementService"

export default function AddJobAdvertisement() {

  const jobAdvertisementService = new JobAdvertisementService()
  const workTypeSerivce = new WorkTypeService()
  const workTimeService = new WorkTimeService()
  const cityService = new CityService()

  const [workTypes, setWorkTypes] = useState([])
  const [workTimes, setWorkTimes] = useState([])
  const [cities, setCities] = useState([])
  const [deadline, setDeadline] = useState()

  const workTypesOptions = []
  const workTimesOptions = []
  const citiesOptions = []



  useEffect(() => {
    workTypeSerivce.getAll().then(result => {
      setWorkTypes(result.data.data)
    })

    workTimeService.getAll().then(result => {
      setWorkTimes(result.data.data)

    })

    cityService.getAll().then(result => {
      setCities(result.data.data)
    })
  }, [])

  const getWorkTypesOptions = () => {
    for (let i = 0; i < workTypes.length; i++) {
      workTypesOptions[i + 1] = { text: workTypes[i].workType, value: workTypes[i].id }

    }
    return workTypesOptions
  }

  const getWorkTimesOptions = () => {
    for (let i = 0; i < workTimes.length; i++) {
      workTimesOptions[i] = { text: workTimes[i].workTime, value: workTimes[i].id };

    }

    return workTimesOptions
  }

  const getCitiesOptions = () => {
    for (let i = 0; i < cities.length; i++) {
      citiesOptions[i] = { text: cities[i].cityName, value: cities[i].id }

    }
    return citiesOptions
  }

  const initialValues = {
    positionName: "",
    numberOfOpenToWork: "",
    description: "",
    workTypesId: "",
    workTimesId: "",
    minSalary: "",
    maxSalary: "",
    cityId: "",
    deadline: ""
  }

  const validationSchema = Yup.object().shape({
    positionName: Yup.string().required("Lütfen aradğınız pozisyonu yazınız"),
    numberOfOpenToWork: Yup.number().typeError("Sayı türünde bir değer giriniz").required("Lütfen alınacak çalışan sayısını belirleyiniz"),
    description: Yup.string().max(150, "En fazla 150 karakter girebilirsiniz"),
    workTypesId: Yup.number().required("Lütfen bir çalışma şekli seçiniz"),
    minSalary: Yup.number().typeError("Sayı türünde bir değer giriniz"),
    maxSalary: Yup.number().typeError("Sayı türünde bir değer giriniz"),
  })



  const submit = (values) => {

    values.city = { id: values.cityId }
    values.workType = { id: values.workTypesId }
    values.workTime = { id: values.workTimesId }
    values.deadline = deadline
    values.employer = { id: 1 }    //Bu kısım değişecek

    jobAdvertisementService.addJobAdvertisement(values).then(result => {
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
                <Header as="h2">İş İlanı Oluşturma</Header>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column >
                <HrmsTextInput name="positionName" placeHolder="Aranan Pozisyon" style={{ margin: "10px" }} />
                <HrmsTextInput name="numberOfOpenToWork" placeHolder="Aranan Kişi Sayısı" style={{ margin: "10px" }} />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column>
                <HrmsTextAreaInput name="description" placeHolder="İş Tanımı... (max 150 karakter)"
                  style={{ height: "150px", width: "100%", maxHeight: "150px", maxWidth: "100%" }} />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width="8">
                <HrmsDropdown options={getWorkTypesOptions()} name="workTypesId" placeHolder="Çalışma Türünü Seçiniz" />
              </Grid.Column>
              <Grid.Column width="8">
                <HrmsDropdown options={getWorkTimesOptions()} name="workTimesId" placeHolder="Çalışma Düzenini Seçiniz" />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width="8">
                <HrmsTextInput name="minSalary" placeHolder="Minimum Ücret" />
              </Grid.Column>
              <Grid.Column width="8">
                <HrmsTextInput name="maxSalary" placeHolder="Maksimum Ücret" />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>


              <Grid.Column>
                <HrmsDropdown name="cityId" placeHolder="Şehir seçiniz" options={getCitiesOptions()} />

              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column>
                Son Başvuru : <Input type="date" name="deadline" style={{ width: "70%" }} onChange={(e) => { setDeadline(e.target.value) }} />
              </Grid.Column>
            </Grid.Row>

          </Grid>


          <Button type="submit" color="violet" fluid>Gönder</Button>
        </Form>
      </Formik>
    </div>
  )
}

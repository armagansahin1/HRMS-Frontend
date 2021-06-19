import { useFormik } from "formik";
import React from "react";
import * as Yup from 'yup';
import {
  Form,
  Header,
  Input,
  TextArea,
  Grid,
  Select,
  Button,
} from "semantic-ui-react";
import JobAdvertisementService from "../services/jobAdvertisementService";
export default function AddJobAdvertisement() {
  const workTypes = [{text:"Çalışma Türünü Seçiniz"},{ text: "İş Yerinden",value:"İş Yerinden" }, {text: "Uzaktan" ,value:"Uzaktan"}];
  const workTimes = [{text:"Çalışma Zamanı Seçiniz"},{ text: "Yarı Zamanlı" ,value:"Yarı Zamanlı"}, { text: "Tam Zamanlı" ,value:"Tam Zamanlı"}];
  
  const {values,errors,handleSubmit,handleChange,setFieldValue,resetForm} = useFormik({
    initialValues : {
      description:"",
      workType:"",
      workTime:"",
      positionName:"",
      numberOfPosition:"",
      minSalary:"",
      maxSalary:"",
      city:"",
      deadLine:""
    },
    onSubmit : values =>{
       let jobAdvertisementService = new JobAdvertisementService()
       values.employer={id:3}
       jobAdvertisementService.addJobAdvertisement(values).then(result=>{
         console.log(result.data)
       })
      
      console.log(values)
    }, 
    validationSchema:Yup.object({
      description:Yup.string().max(150,"En fazla 150 karakter girebilirsiniz"),
      minSalary:Yup.number(),
      workType:Yup.string().required("Lütfen bir çalışma tipi seçiniz"),
      numberOfPosition:Yup.number().required("Lütfen açık pozisyon sayısı giriniz")
    }),
    
    
  })
  const handleChangeSemantic = (value, fieldName) => {
    setFieldValue(fieldName, value)
}

  return (
    <div>
     
      <Form onSubmit={handleSubmit}>
        
          <Grid celled>
            <Grid.Row>
              <Grid.Column width="16" textAlign="center">
                <Header as="h2">İş Bilgileri</Header>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width="8">
                
                <TextArea name="description"
                  placeholder="İş Tanımı..."
                  onChange={handleChange}
                  value={values.description}
                  
                  style={{
                    height: "150px",
                    width: "100%",
                    maxWidth: "100%",
                    minHeight: "150px",
                  }}
                />
                {errors.description}
              </Grid.Column>
              <Grid.Column
                width="8"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                }}
              >
                <Select
                name="workType"
                
                 value = {values.workType}
                  placeholder="Çalışma türünü seçiniz"
                  options={workTypes}
                  onChange={(event, data) => handleChangeSemantic(data.value,"workType")}
                />
                {errors.workType}
                <Select
                onChange={handleChange}
                name="workTime"
                value = {values.workTime}
                  placeholder="Çalışma zamanı seçiniz"
                  options={workTimes}
                  onChange={(event, data) => handleChangeSemantic(data.value,"workTime")}
                />
                  
                <Input placeholder="Aranan Pozisyon" name = "positionName" style={{ width: "30%" }} onChange={handleChange} value={values.positionName}/>
                <Input placeholder="Açık Pozisyon Sayısı" name = "numberOfPosition" style={{ width: "30%" }} onChange={handleChange} value={values.numberOfPosition}/>
                {errors.numberOfPosition}
              </Grid.Column>
            </Grid.Row>
          </Grid>

          <Grid celled>
            <Grid.Row>
              <Grid.Column width="16" textAlign="center">
                <Header as="h2">Ücret Bilgisi</Header>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width="8">
                <Input placeholder="Minimum Ücret" name="minSalary" style={{ width: "100%" }} onChange={handleChange} value={values.minSalary}/>
                {errors.minSalary}
              </Grid.Column>
              <Grid.Column width="8">
                <Input placeholder="Maksimum Ücret" name="maxSalary" style={{ width: "100%" }} onChange={handleChange} value={values.maxSalary}/>
              </Grid.Column>
            </Grid.Row>
          </Grid>

          <Grid celled>
            <Grid.Row>
              <Grid.Column width="16" textAlign="center">
                <Header as="h2">Ek Bilgiler</Header>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width="8"><Input placeholder="Şehir" name="city" style={{ width: "100%" }} onChange={handleChange} value={values.city}/></Grid.Column>
              <Grid.Column width="8">Son Başvuru Tarihi : <Input name="deadLine" onChange={handleChange} type="date" style={{width:"80%"}}/></Grid.Column>
            </Grid.Row>
           
         
          <Grid.Row>
          <Button color='violet' size="huge" type="submit" style={{width:"100%"}}>İlanı Yayınla</Button>
          </Grid.Row>
          </Grid>
        
        
      </Form>
      
    </div>
  );
}

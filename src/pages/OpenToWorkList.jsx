import React, { useState, useEffect } from 'react'
import { useFormik } from "formik";
import { Table, Menu, Icon, Select } from 'semantic-ui-react'
import JobAdvertisementService from '../services/jobAdvertisementService'



export default function OpenToWorkList() {
  let jobAdvertisementService = new JobAdvertisementService()
  const pageSizes = [

    { text: "10", value: 10 },
    { text: "20", value: 20 },
    { text: "50", value: 50 },
    { text: "100", value: 100 },
  ]
  


  const [jobAdvertisements, setJobAdvertisements] = useState([])
  const [pageCount, setPageCount] = useState()


  useEffect(() => {
    jobAdvertisementService.getAdvertisementsPageFormat(1, 10).then(result => {
      setJobAdvertisements(result.data.data)
      setPageCount(parseInt(result.data.message))
    })


  }, [])

  const { values,setFieldValue } = useFormik({
    initialValues: {
      pageSize: 10
    },
  })

  const handleChangeSemantic = (value, fieldName) => {
    setFieldValue(fieldName, value);
    jobAdvertisementService.getAdvertisementsPageFormat(1,value).then(result=>{
      setJobAdvertisements(result.data.data)
      console.log(result.data)
    })
  };
  return (
    <div>
     <label>Sayfa Boyutunu Belirle : </label> <Select placeholder='Sayfa Boyutunu Seçin' name="pageSize" options={pageSizes} onChange={(event, data) =>
        handleChangeSemantic(data.value, "pageSize")
      } />
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Id</Table.HeaderCell>
            <Table.HeaderCell>İş Veren Adı-Soyadı</Table.HeaderCell>
            <Table.HeaderCell>Şirket Adı</Table.HeaderCell>
            <Table.HeaderCell>Aranan Pozisyon</Table.HeaderCell>
            <Table.HeaderCell>Çalışma Şekli</Table.HeaderCell>
            <Table.HeaderCell>Aranan Kişi Sayısı</Table.HeaderCell>
            <Table.HeaderCell>Son Başvuru Tarihi</Table.HeaderCell>


          </Table.Row>
        </Table.Header>

        <Table.Body>


          {jobAdvertisements.map(jobAdvertisement => (
            <Table.Row key={jobAdvertisement.id}>
              <Table.Cell>{jobAdvertisement.id}</Table.Cell>
              <Table.Cell>{jobAdvertisement.employer?.user?.firstName} {jobAdvertisement.employer?.user?.lastName}</Table.Cell>
              <Table.Cell >{jobAdvertisement.employer?.company?.companyName}</Table.Cell>
              <Table.Cell>{jobAdvertisement.positionName}</Table.Cell>
              <Table.Cell>{jobAdvertisement.workTime}</Table.Cell>
              <Table.Cell>{jobAdvertisement.numberOfPosition}</Table.Cell>
              <Table.Cell >{jobAdvertisement.deadLine}</Table.Cell>
            </Table.Row>
          ))}



        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan='7'>
              <Menu floated='right' pagination>
                <Menu.Item as='a' icon >
                  <Icon name='chevron left' />
                </Menu.Item>
                <Menu.Item as='a' icon>
                  <Icon name='chevron right' />
                </Menu.Item>


              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>

    </div>
  )
}

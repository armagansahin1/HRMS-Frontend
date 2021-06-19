import React,{useState,useEffect} from 'react'
import { Button, Table } from 'semantic-ui-react'
import JobAdvertisementService from '../services/jobAdvertisementService'

export default function RelaseAdvertisement() {

    const [jobAdvertisements, setJobAdvertisements] = useState([])
    let jobAdvertisementService =new JobAdvertisementService()
   

    useEffect(() => {
      
      jobAdvertisementService.getAllOrderByRelaseDateDesc().then(result=>{setJobAdvertisements(result.data.data)})
    }, [])

    let setRelase=(id,status)=>{
      jobAdvertisementService.changeAdvertismentStatus(id,status).then(result=>console.log(result.data))
      window.location.reload()
    }


    return (
        <div>

  
    <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Job Advertisement Id</Table.HeaderCell>
        <Table.HeaderCell>İş Veren Adı-Soyadı</Table.HeaderCell>
        <Table.HeaderCell>Şirket Adı</Table.HeaderCell>
        <Table.HeaderCell>İlan Tarihi</Table.HeaderCell>
        <Table.HeaderCell>Son Başvuru Tarihi</Table.HeaderCell>
        <Table.HeaderCell></Table.HeaderCell>
        

      </Table.Row>
    </Table.Header>

    <Table.Body>
     

        {jobAdvertisements.map(jobAdvertisement=>(
             <Table.Row key={jobAdvertisement.id}>
            <Table.Cell>{jobAdvertisement.id}</Table.Cell>
            <Table.Cell>{jobAdvertisement.employer?.user?.firstName} {jobAdvertisement.employer?.user?.lastName}</Table.Cell>
            <Table.Cell >{jobAdvertisement.employer?.companyName}</Table.Cell>
            <Table.Cell >{jobAdvertisement.relaseDate}</Table.Cell>
            <Table.Cell >{jobAdvertisement.deadLine}</Table.Cell>
            <Table.Cell>{jobAdvertisement.advertismentStatus?<Button onClick={()=>{setRelase(jobAdvertisement.id,false)}} color="red">Yayından Kaldır</Button>
            :<Button onClick={()=>{setRelase(jobAdvertisement.id,true)}} color="green">Yayınla</Button>}</Table.Cell>
            </Table.Row>
        ))}
        
                                                       
     
    </Table.Body>
  </Table>
        </div>
    )
}

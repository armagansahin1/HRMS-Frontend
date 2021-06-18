import React, {useEffect,useState} from 'react'
import {Table,Container } from 'semantic-ui-react'
import EmployerService from '../services/employerService'
export default function Employers() {
    const [employers, setEmployers] = useState([])

    useEffect(() => {
        let employerService = new EmployerService()
        employerService.getEmployers().then(result=>setEmployers(result.data.data))
    }, [])
    return (
        <div>
            <Container>
             <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Ad</Table.HeaderCell>
        <Table.HeaderCell>Soyad</Table.HeaderCell>
        <Table.HeaderCell>Şirket Adı</Table.HeaderCell>
        <Table.HeaderCell>Email</Table.HeaderCell>
        <Table.HeaderCell>Web Sitesi</Table.HeaderCell>
        <Table.HeaderCell>Telefon Numarası</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
        {employers.map(employer=>(
            <Table.Row key={employer.id}>
            <Table.Cell>
              {employer.user?.firstName}
            </Table.Cell>
            <Table.Cell> {employer.user?.lastName}</Table.Cell>
            <Table.Cell>{employer.company?.companyName}</Table.Cell>
            <Table.Cell>{employer.user?.email}</Table.Cell>
            <Table.Cell>{employer.company?.website}</Table.Cell>
            <Table.Cell>{employer.phone}</Table.Cell>
          </Table.Row>
        ))}
      
    </Table.Body>
  </Table>
  </Container>
        </div>
    )
}

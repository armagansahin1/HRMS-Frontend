import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Grid,Header, Icon,Table } from 'semantic-ui-react'
import EducationService from '../../services/educationService'
export default function EducationInformation() {

    const {candidateId} = useParams()

    const [educations, setEducations] = useState([])

    let educationService = new EducationService()

    useEffect(() => {
       educationService.getByCandidateIdOrderBygraduationDesc(candidateId).then(result=>{
           console.log(result.data.data)
           setEducations(result.data.data)
       })
    }, [])

    return (
        <div>
            <Grid columns={16} celled>
                <Grid.Row>
                <Grid.Column width={16} textAlign="center" ><Header as='h2' >Eğitim Bilgileri</Header></Grid.Column>
                </Grid.Row>

                {educations.map(education=>(
                    <Grid.Row key={education.id}>
                    <Grid.Column width={3} verticalAlign="middle" textAlign = "center"><Icon name="book" size="massive"/></Grid.Column>

                    <Grid.Column width={13} verticalAlign="middle">
                    <Table definition >
                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell width={2}>Okul Adı </Table.Cell>
                                    <Table.Cell>{education.schoolName}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Bölüm Adı </Table.Cell>
                                    <Table.Cell>{education.departmentName}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Giriş Tarihi </Table.Cell>
                                    <Table.Cell>{education.startTime}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell> Mezuniyet Tarihi  </Table.Cell>
                                    <Table.Cell>{education.graduation}</Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </Grid.Column>

                </Grid.Row>
                ))}
                        
            
            

            </Grid>
        </div>
    )
}

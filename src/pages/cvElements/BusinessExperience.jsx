import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Grid,Header, Icon,Table } from 'semantic-ui-react'
import BusinessExperienceService from '../../services/businessExperienceService'

export default function BusinessExperience() {
    const {candidateId} = useParams()

    const [businessExperiences, setBusinessExperiences] = useState([])

    let businessExperienceService = new BusinessExperienceService()

    useEffect(() => {
        businessExperienceService.getByCandidateIdOrderByOutDateDesc(candidateId).then(result=>{
            console.log(result.data.data)
            setBusinessExperiences(result.data.data)
        })
    }, [])


    return (
        <div>
            <Grid columns={16} celled>
                <Grid.Row>
                <Grid.Column width={16} textAlign="center" ><Header as='h2' >İş Deneyimleri</Header></Grid.Column>
                </Grid.Row>

            {businessExperiences.map(businessExperience=>(
                        <Grid.Row key={businessExperience.id}>
                        <Grid.Column width={3} verticalAlign="middle" textAlign = "center"><Icon name="building outline" size="massive"/></Grid.Column>
    
                        <Grid.Column width={13} verticalAlign="middle">
                        <Table definition >
                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell width={2}>İşyeri Adı </Table.Cell>
                                        <Table.Cell>{businessExperience.workplaceName}</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>Pozisyon </Table.Cell>
                                        <Table.Cell>{businessExperience.position}</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>Giriş Tarihi </Table.Cell>
                                        <Table.Cell>{businessExperience.enterDate}</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell> Çıkış Tarihi  </Table.Cell>
                                        <Table.Cell>{businessExperience.outDate}</Table.Cell>
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

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Grid, Image, Label, Header, Table } from "semantic-ui-react";
import CandidateService from "../../services/candidateService";
import PhotoService from "../../services/photoService";
import SocialMediaService from "../../services/socialMediaService";

export default function PersonelInformation() {
    let { candidateId } = useParams()
    const [candidate, setCandidate] = useState()
    const [photo, setPhoto] = useState()
    const [socialMedia, setSocialMedia] = useState()

    let candidateService = new CandidateService()
    let photoService = new PhotoService()
    let socialMediaService = new SocialMediaService()

    useEffect(() => {
        candidateService.getCandidateDetails(candidateId).then(result => {
            setCandidate(result.data.data)

        })

        photoService.getByCandidateId(candidateId).then(result => {
            setPhoto(result.data.data)

        })

        socialMediaService.getByCandidateId(candidateId).then(result => {
            setSocialMedia(result.data.data)

        })

    }, [])
    return (
        <div>

            <Grid columns={16} celled>
                <Grid.Row >
                    <Grid.Column width={16} textAlign="center" ><Header as='h2' >Kişisel Bilgiler</Header></Grid.Column>
                </Grid.Row>
                <Grid.Row >

                    <Grid.Column verticalAlign="middle" width={4} >

                        <Image src={photo?.url} size='medium' circular />
                    </Grid.Column>

                    <Grid.Column verticalAlign="middle" width={12}>
                        <Table definition >
                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell width={2}>Adı </Table.Cell>
                                    <Table.Cell>{candidate?.firstName}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Soyadı </Table.Cell>
                                    <Table.Cell>{candidate?.lastName}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Doğum Tarihi </Table.Cell>
                                    <Table.Cell>{candidate?.dateOfBirth}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell> E-mail  </Table.Cell>
                                    <Table.Cell>{candidate?.email}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Meslek </Table.Cell>
                                    <Table.Cell>{candidate?.profession}</Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                    <Grid.Column width={8}>
                        <Label>Linkedin : </Label> {socialMedia?.githubLink}
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <Label>GitHub : </Label> {socialMedia?.linkedinLink}
                    </Grid.Column>
                </Grid.Row>

            </Grid>
        </div>
    );
}

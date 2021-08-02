import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Card,Image } from 'semantic-ui-react'
import CandidateService from '../services/candidateService'
import PhotoService from '../services/photoService'
export default function Candidates() {

    const [candidates, setCandidates] = useState([])
    const [photos, setPhotos] = useState([])

    useEffect(() => {
       let candidateService = new CandidateService()
       let photoService = new PhotoService()
       candidateService.getCandidates().then(result=>setCandidates(result.data.data))
       photoService.getPhotos().then(result=>setPhotos(result.data.data))
    }, [])
    return (       
        <div>
         <Card.Group itemsPerRow="4">
            {candidates.map(candidate=>(
               <Card key={candidate?.id}>
               <Image src={photos.filter(photo=>photo.candidate?.id===candidate.id)[0]?.url} size="small" centered/>
               <Card.Content>
                 <Card.Header>{candidate.user?.firstName} {candidate.user?.lastName}</Card.Header>
                 <Card.Meta>
                   <span className='date'>{candidate?.profession}</span>
                 </Card.Meta>
                 <Link to={`CvDetails/${candidate.id}`}><button class="ui fluid button" style={{backgroundColor:"black", color:"white"}}>Cv Görüntüle</button></Link>
               </Card.Content>
             </Card>
            ))}
           
           </Card.Group>
        </div>
    )
}

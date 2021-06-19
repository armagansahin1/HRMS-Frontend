import React, { useState,useEffect } from 'react'
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
         
            {candidates.map(candidate=>(
               <Card key={candidate.id}>
               <Image src={photos.filter(photo=>photo.candidate?.id===candidate.id)[0].url} size="small" centered/>
               <Card.Content>
                 <Card.Header>{candidate.user?.firstName} {candidate.user?.lastName}</Card.Header>
                 <Card.Meta>
                   <span className='date'>{candidate.profession}</span>
                 </Card.Meta>
               </Card.Content>
             </Card>
            ))}
           
      
        </div>
    )
}

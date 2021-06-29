import React from 'react'
import BusinessExperience from './cvElements/BusinessExperience'
import EducationInformation from './cvElements/EducationInformation'
import PersonelInformation from './cvElements/PersonelInformation'

export default function CvDetails() {
    return (
        <div>
            <PersonelInformation/>
            <BusinessExperience/>
            <EducationInformation/>
        </div>
    )
}

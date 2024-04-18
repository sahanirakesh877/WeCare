import React from 'react'
import { useParams } from 'react-router-dom'
import servicedata from "../Data/ServiceData";


const ServiceDetails = () => {
    const {id}=useParams()
    const serviceData = servicedata.find((a)=>a.id==id)
  return (
    <>
      <p>{serviceData.title}</p>
    </>
  )
}

export default ServiceDetails

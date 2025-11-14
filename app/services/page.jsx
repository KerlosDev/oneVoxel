import React from 'react'
import Nav from '../components/Nav'
import HeroServ from '../components/HeroServ'
import Services from '../components/Services'
import ServicesContent from '../components/ServicesContent'
import Footerr from '../components/Footerr'
import Devices from '../components/Devices'
import ContactServ from '../components/ContactServ'

const page = () => {
    return (
        <div>

            <HeroServ></HeroServ>
            <Services></Services>
            <ServicesContent></ServicesContent>
            <Devices></Devices>
            <ContactServ></ContactServ>
            <Footerr></Footerr>
        </div>
    )
}

export default page
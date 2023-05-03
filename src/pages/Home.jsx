import React from "react";
import Header from "../components/header/header";
import Footer from "../components/Footer/footer";
import AboutUs from "../components/aboutUs/aboutUs";
import AboutUsSec from "../components/aboutUs/aboutUs2";

import Slider from "../components/slider/slider";
import OurTeam from "../components/ourTeam/ourTeam";
import SectionWithCards from "../components/aboutUs/card";
import ContactForm from "../components/contactForm/contactForm";
import UpArrow from "../components/arrow_up/upArrow";

const Home = ()=>{
    return(<>
    
    <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.css"  rel="stylesheet" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js"></script>

        <Header/>
        <Slider/>
        <AboutUsSec/>
        <AboutUs/>
        <SectionWithCards/>
        <OurTeam/>
        <ContactForm/>
        <Footer/>
        <UpArrow/>

    </>);
}


export default Home;
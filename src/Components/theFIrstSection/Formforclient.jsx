import React from 'react'
import  Logo  from "../../assets/images/leadGEn/young-couple-examining-blueprints-with-real-estate-agent-while-buying-new-home 1.svg";
import Secnd from '../theSecondComponent/Secnd.jsx';
import ThirdSectio from '../theThirdSection/ThirdSectio.jsx';
import Projects from '../ourProject/Project.jsx';
import Testimonials from '../HappyClients/Clients.jsx';
import Last from '../LastSection/Last.jsx';
import AdminRegisterForm from '../Admin/AdminRegisterForm.jsx';

const Formforclient = () => {

  return (
    <div >

      <img style={{marginTop:"0px" , width:"100%"}} src ={Logo} alt="" />
  <AdminRegisterForm />
    <Secnd /> 
    <ThirdSectio />
    <Projects />
    <Testimonials />
    <Last />

    </div>
  )
}

export default Formforclient
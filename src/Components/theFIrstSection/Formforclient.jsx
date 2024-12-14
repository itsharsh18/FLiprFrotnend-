import React from 'react'
import  Logo  from "../../assets/images/leadGEn/young-couple-examining-blueprints-with-real-estate-agent-while-buying-new-home 1.svg";
import Secnd from '../theSecondComponent/secnd';
import ThirdSectio from '../theThirdSection/ThirdSectio';
import Projects from '../ourProject/Project';
import Testimonials from '../HappyClients/Clients';
import Last from '../LastSection/Last';
import AdminRegisterForm from '../Admin.jsx/AdminRegisterForm';

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
import {Button,Form} from 'react-bootstrap'
import { useState } from 'react'
import {useNavigate } from 'react-router-dom';
import Login from '../login/login'
function Signup(){
    const Navigate1=useNavigate()
    const [formData,setFormData]=useState({name:'',email:'',password:''})
    const HandleSubmit=async(e)=>{
e.PreventDefault();
console.log(formData)
    }
}
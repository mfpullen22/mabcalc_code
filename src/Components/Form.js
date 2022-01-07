import "./Form.css";
import {useState} from "react";
import React, { Component } from 'react';
import Result from "./Result";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
//import FormLabel from '@mui/material/FormLabel';
import Switch, { SwitchProps } from '@mui/material/Switch';

function CalculationForm() {
    const [ageChecked, setAgeChecked] = useState(false);
    const [weightChecked, setWeightChecked] = useState(false);
    const [diabetesChecked, setDiabetesChecked] = useState(false);
    const [ckdChecked, setCkdChecked] = useState(false);
    const [cvdChecked, setCvdChecked] = useState(false);
    const [respChecked, setRespChecked] = useState(false);
    const [htnChecked, setHtnChecked] = useState(false);
    const [immChecked, setImmChecked] = useState(false);
    const [bipocChecked, setBipocChecked] = useState(false);
    const [pregChecked, setPregChecked] = useState(false);
    let [prob, setProb] = useState(0);


    function scoreAdd(val, trigger) {
        
        if(trigger === true) {
            prob = prob + val;
        } else {
            prob = prob - val;
        }

        return prob;
    }

    function ageChange(event){
        setAgeChecked(event.target.checked);
        setProb(scoreAdd(2, event.target.checked));
        //console.log(event.target.checked);
        console.log(prob);
    }

    function weightChange(event){
        setWeightChecked(event.target.checked);
        setProb(scoreAdd(2, event.target.checked));
        console.log(prob);
    }

    function diabetesChange(event){
        setDiabetesChecked(event.target.checked);
        setProb(scoreAdd(2, event.target.checked));
        console.log(event.target.checked);
        console.log(prob);
    }

    function ckdChange(event){
        setCkdChecked(event.target.checked);
        setProb(scoreAdd(3, event.target.checked));
        console.log(event.target.checked);
        console.log(prob);
    }

    function cvdChange(event){
        setCvdChecked(event.target.checked);
        setProb(scoreAdd(2, event.target.checked));
        console.log(event.target.checked);
        console.log(prob);
    }

    function respChange(event){
        setRespChecked(event.target.checked);
        setProb(scoreAdd(3, event.target.checked));
        console.log(event.target.checked);
        console.log(prob);
    }

    function htnChange(event){
        setHtnChecked(event.target.checked);
        setProb(scoreAdd(1, event.target.checked));
        console.log(event.target.checked);
        console.log(prob);
    }

    function immChange(event){
        setImmChecked(event.target.checked);
        setProb(scoreAdd(4, event.target.checked));
        console.log(event.target.checked);
    }

    function bipocChange(event){
        setBipocChecked(event.target.checked);
        setProb(scoreAdd(2, event.target.checked));
        console.log(event.target.checked);
    }

    function pregChange(event){
        setPregChecked(event.target.checked);
        setProb(scoreAdd(4, event.target.checked));
        console.log(event.target.checked);
    }
    
    return (
        <div>
            <p>This calculator was developed by the University of Minnesota in partnership with Mayo Clinic and the Minnesota Department of Health to help providers assess patient risk factors and need for COVID-19 monoclonal antibody therapy.</p>
            <form >
            <FormControl component="fieldset">
                <h2>Patient Risk Factors:</h2>
                
                <FormGroup aria-label="position" column>
                <FormControlLabel
                    control={<Switch color="primary" checked={ageChecked} onChange={ageChange}/>}
                    label="Age ≥ 65"
                    labelPlacement="end"
                />  
                <FormControlLabel
                    control={<Switch color="primary" checked={weightChecked} onChange={weightChange}/>}
                    label="BMI ≥ 35"
                    labelPlacement="end"
                /> 
                <FormControlLabel
                    control={<Switch color="primary" checked={diabetesChecked} onChange={diabetesChange}/>}
                    label="Diabetes Mellitus"
                    labelPlacement="end"
                /> 
                <FormControlLabel
                    control={<Switch color="primary" checked={ckdChecked} onChange={ckdChange}/>}
                    label="Chronic Kidney Disease"
                    labelPlacement="end"
                /> 
                <FormControlLabel
                    control={<Switch color="primary" checked={cvdChecked} onChange={cvdChange}/>}
                    label="Cardiovascular disease in a ≥ 55 year old"
                    labelPlacement="end"
                /> 
                <FormControlLabel
                    control={<Switch color="primary" checked={respChecked} onChange={respChange}/>}
                    label="Chronic respiratory disease in a ≥ 55 year old"
                    labelPlacement="end"
                /> 
                <FormControlLabel
                    control={<Switch color="primary" checked={htnChecked} onChange={htnChange}/>}
                    label="Hypertension in a ≥ 55 year old"
                    labelPlacement="end"
                /> 
                <FormControlLabel
                    control={<Switch color="primary" checked={immChecked} onChange={immChange} />}
                    label="Immunocompromised status"
                    labelPlacement="end"
                />     
                <FormControlLabel
                    control={<Switch color="primary" checked={bipocChecked} onChange={bipocChange} />}
                    label="Black, Indigenous, or Person of Color"
                    labelPlacement="end"
                />  
                <FormControlLabel
                    control={<Switch color="primary" checked={pregChecked} onChange={pregChange} />}
                    label="Pregnant"
                    labelPlacement="end"
                />    
                </FormGroup>
            </FormControl>
            </form>
            <Result prob={prob}/>
        </div>
    );
};

export default CalculationForm;
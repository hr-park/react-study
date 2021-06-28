import React, { useState } from 'react';
import '../assets/css/reset.css'
import './style.css'
import SurveyStep1 from './SurveyStep1';
import SurveyStep2 from './SurveyStep2';
import SurveyStep3 from './SurveyStep3';
import SurveyStep4 from './SurveyStep4';

const Survey = () => {
    const [step , setStep] = useState(1)
    const [form , setForm] = useState({
        username:'',
        age:'',
        addr:'',
        tel:'',
        job:'',
        email:'',
        sex:'',
        interest:''
    })
    const {username, age, addr, tel,job,email,sex,interest} = form 

    const changeInput = (e) => {
        const { value , name } = e.target 
        setForm({
            ...form , 
            [name] : value 
        })
    }

    const onNext = () => {
        setStep( step + 1 )
    }
    const onPrev = () => {
        setStep( step - 1 )
    }

    return (
        <div className="wrap">
            {step === 1 && <SurveyStep1 username={username} age={age} addr={addr} tel={tel} changeInput={changeInput} onNext={onNext} />}

            { step === 2 && <SurveyStep2  
            // form요소안에 키값을 전달
            {...form}
            onNext={onNext} onPrev={onPrev} changeInput={changeInput} />}
           

            { step === 3 && <SurveyStep3 
            form = { form }
            onPrev={onPrev}  onNext={onNext} />}

            { step === 4 && <SurveyStep4 username={username} />}
        </div>
    );
};

export default Survey;
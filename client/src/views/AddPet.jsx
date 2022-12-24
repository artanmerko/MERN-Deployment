import React, {useState} from 'react';
import PetForm from '../components/PetForm';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import '../App.css'

const AddPet = (props) => {
    const {addPet, setAddPet} = props;
    const [name, setName] = useState('name');
    const [type, setType]= useState('type')
    const [description, setDescription] = useState('description')
    const [skill1, setSkill1] = useState([null])
    const [skill2, setSkill2] = useState([null])
    const [skill3, setSkill3] = useState([null])
    const [errors, setErrors] = useState([]);

    const handleSubmit = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/pets/new', {
        name:name,
        type:type,
        description:description,
        skills:[skill1, skill2, skill3]
        })
        .then(res => {console.log(res)
            setAddPet(addPet + 1);
            navigate('/')
            })
        .catch(err => {
            console.log({err})
            if (err.response.data.code !== 11000){
            const errorResponse = err.response.data.errors;
            const errorArr =[];
            for (const key of Object.keys(errorResponse)) {
                errorArr.push(errorResponse[key].message)
            }
            setErrors(errorArr);
            console.log({err});
            console.log(errors);
            }else{
                const errorArr =[];
                errorArr.push('This pet already exist')
                setErrors(errorArr);
            }
        })
    }
    return (
        <div>
            <header className="row bg-white">
                <h1 className='text-left ml-3 my-4'>Pet Shelter</h1>
                <Link to='/' className='text-right text-primary header-link'>
                    Go home
                </Link>
            </header>
            <div className='form'>
                <h3 className ='my-4'>Know a pet needing a home?</h3>
                <PetForm
                handleSubmit={handleSubmit}
                name={name}
                setName={setName}
                type={type}
                setType={setType}
                description={description}
                setDescription={setDescription}
                skill1={skill1}
                setSkill1={setSkill1}
                skill2={skill2}
                setSkill2={setSkill2}
                skill3={skill3}
                setSkill3={setSkill3}
                verb={'Add'}/>
                {errors.map((err,index) => <p className='text-danger' key={index}>{err}</p>)}
            </div>
        </div>
    )
}

export default AddPet;
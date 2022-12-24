import React, {useState, useEffect} from 'react';
import PetForm from '../components/PetForm';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import '../App.css'

const EditPet = (props) => {
    const [thisPet, setThisPet] = useState({})
    const [name, setName] = useState("");
    const [type, setType]= useState("")
    const [description, setDescription] = useState("")
    const [skill1, setSkill1] = useState([])
    const [skill2, setSkill2] = useState([])
    const [skill3, setSkill3] = useState([])
    const [errors, setErrors] = useState([]);

    const {id} = props;

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pets/${id}`)
        .then(res =>{
            setThisPet(res.data.pet);
            console.log(res.data.pet);
            setName(res.data.pet.name);
            setType(res.data.pet.type);
            setDescription(res.data.pet.description);
            setSkill1(res.data.pet.skills[0]);
            setSkill2(res.data.pet.skills[1]);
            setSkill3(res.data.pet.skills[2]);
        } )
        .catch(err => console.log(err))
    }, [id])


    const handleSubmit = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/pets/update/${id}`,{
            name: name,
            type: type,
            description: description,
            skills:[skill1, skill2, skill3]
        })
        .then(res=> {console.log(res)
        props.setEditPet(props.editPet +1);
        navigate(`/pet/${thisPet._id}`)})
        .catch(err => {
            const errorResponse = err.response.data.errors;
            const errorArr =[];
            for (const key of Object.keys(errorResponse)) {
                errorArr.push(errorResponse[key].message)
            }
            setErrors(errorArr);
            console.log({err});
            console.log(errors);
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
                <h3>Edit: {thisPet.name}</h3>
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
                verb={'Edit'}/>
                {errors.map((err,index) => <p className='text-danger' key={index}>{err}</p>)}
            </div>
        </div>
    )
}

export default EditPet;
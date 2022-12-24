import React from 'react';

const PetForm = (props) => {

    const {handleSubmit, name, setName, type, setType, description, setDescription, skill1, skill2, skill3, setSkill1, setSkill2, setSkill3, verb} = props;

    return (
        <form className='form-group'>
            <div className='form-grouping'>
                <label htmlFor='name'>Pet Name: </label>
                    <input
                        className='form-control col-6 m-auto'
                        type='text'
                        defaultValue = {name}
                        onChange={(e)=> setName(e.target.value)}
                    />
                    <p className='text-danger'>
                        { name.length < 3  ? 'Pet Name must be at least 3 character!' : null }
                    </p>
                <label htmlFor='type'>Pet Type: </label>
                    <input
                        className='form-control col-6 m-auto'
                        type='text'
                        defaultValue = {type}
                        onChange={(e)=> setType(e.target.value)}
                    />
                    <p className='text-danger'>
                        { type.length < 3  ? 'Pet type must be at least 3 character!' : null }
                    </p>
                <label htmlFor='description'>Pet Description: </label>
                    <input
                        className='form-control col-6 m-auto'
                        type='text'
                        defaultValue = {description}
                        onChange={(e)=> setDescription(e.target.value)}
                    />
                    <p className='text-danger'>
                        { description.length < 3  ? 'Pet description must be at least 3 character!' : null }
                    </p>
            </div>
            <div className ='form-grouping'>
                <label htmlFor='skills'>Skills (optional):</label>
                    <input
                        className='form-control col-6 mx-auto my-2'
                        type='text'
                        defaultValue = {skill1}
                        onChange={(e) => setSkill1(e.target.value)}
                    />
                    <input
                        className='form-control col-6 mx-auto my-2'
                        type='text'
                        defaultValue = {skill2}
                        onChange={(e) => setSkill2(e.target.value)}
                    />
                    <input
                    className='form-control col-6 mx-auto my-2'
                    type='text'
                    defaultValue = {skill3}
                    onChange={(e) => setSkill3(e.target.value)}/>
                <button
                    className='btn-lg btn-primary my-3 mx-2'
                    onClick = {handleSubmit}>{verb} pet
                </button>
            </div>
        </form>
    )
}

export default PetForm;
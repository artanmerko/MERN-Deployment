import React from 'react';
import {Link} from '@reach/router';

const ViewPets = (props) => {
    const {pets} = props;
    return (
        <div>
            <header className="row bg-white d-flex">
                <h1 className='text-left ml-3 my-3'>Pet Shelter</h1>
                <div className='text-primary ml-auto mr-5 my-3'>
                    <Link to='/pet/new'>Add a pet to the shelter</Link>
                </div>
            </header>
            <h3 className='my-4 text-left ml-4'>These pets are looking for a good home</h3>
            <table className='table table-striped col-9 mx-auto my-5 border border-black'>
            <thead className='thead-dark'>
                <tr>
                    <th scope="col">Name</th>
                    <th scope='col'>Type</th>
                    <th scope ='col'>Actions</th>
                </tr>
            </thead>
            <tbody>
            {pets.map((pet, index) => (
            <tr key={index}>
                <td>{pet.name}</td>
                <td>{pet.type}</td>
                <td>
                    <Link className='m-1' to={`/pet/${pet._id}`}>
                        Details
                    </Link>
                    <Link className='m-1' to={`/pet/edit/${pet._id}`}>
                        Edit
                    </Link>
                </td>
            </tr>
            ))}
            </tbody>
            </table>
        </div>
    )
}

export default ViewPets;

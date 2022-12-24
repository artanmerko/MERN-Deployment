import React from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';

const AdoptButton = ({record, records, setRecords, petName}) => {
    const removeFromDom = recordId => {
        setRecords(records.filter(record => record._id !== recordId))
    }
    const deleteRecord = (recordId) => {
        axios.delete(`http://localhost:8000/api/pets/delete/${recordId}`)
        .then(res => {
            removeFromDom(recordId);
            navigate('/');
        })
    }
    return(
        <>
            <button
                className='btn-lg btn-danger m-3'
                onClick={(e) => {deleteRecord(record._id)}}> Adopt {petName} !
            </button>
        </>
    )
}

export default AdoptButton;
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import React, {useState, useEffect} from 'react'
import {Router} from '@reach/router';
import ViewPets from './views/ViewPets';
import AddPet from './views/AddPet';
import PetDetail from './views/PetDetail';
import axios from 'axios'
import EditPet from './views/EditPet';


function App() {
  const [pets, setPets] = useState([])
  const [addPet, setAddPet] = useState({})
  const [editPet, setEditPet] = useState({})

  useEffect(()=> {
    axios.get('http://localhost:8000/api/pets/')
    .then(res => { console.log(res)
        setPets(res.data.pets);
        })
    .catch(err => console.log(err))
}, [addPet, editPet]);

  return (
    <div className="App">
      <Router>
        <ViewPets
          path='/'
          pets={pets}
          setPets={setPets}
        />
        <AddPet
          path='/pet/new'
          pets={pets}
          setPets={setPets}
          addPet={addPet}
          setAddPet={setAddPet}
        />
        <PetDetail
          path='/pet/:id'
          pets={pets}
          setPets={setPets}
        />
        <EditPet
          path='/pet/edit/:id'
          editPet={editPet}
          setEditPet={setEditPet}
        />
      </Router>
    </div>
  );
}

export default App;

import React, {useContext, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/userContext';

function Logout() {
  const {setCurrentUser} = useContext(UserContext)
  const navigate = useNavigate();

  setCurrentUser(null)
  navigate('/login')
  return (
    <div>Logout</div>
  )
}

export default Logout
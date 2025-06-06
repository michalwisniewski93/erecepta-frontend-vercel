import React, {useState, useEffect} from 'react'
import {useNavigate, Link} from 'react-router-dom'
import axios from 'axios'
import API_LINK from '../configapi'



const Logout = () => {
    const navigate = useNavigate()

    const [permission, setPermission] = useState(true)
   


useEffect(()=> {
    axios.get(`${API_LINK}/permission`)
    .then((response) => setPermission(response.data))
    .catch((err) => console.log('Wystąpił bład podczas pobierania pozwolenia, błąd: ' + err))
}, [permission])


    const handleLogOut = () => {
       const permission = false
       
                 axios.put(`${API_LINK}/permission/67e6bf322cd838954261fd1a`, {permission})
                 .then((response) => setPermission({
                   permission: response.data.permission,
                 }))
                 .catch((err) => console.log('error updating permission ' + err))
        navigate('/')
       
    }

    

    return (
        <>
 

    



    {permission ? (<><div className="logout">
            <button className="logout" onClick={ handleLogOut}>Wyloguj się</button>
        </div>
     <div className="mainMenu">
     <nav className="mainMenu__nav">
         <ul className="mainMenu__list">
             <li><Link to="/doctorsprofiles">Profile lekarzy</Link></li>
             <li><Link to="/addnewrecipe">Wystaw nową receptę</Link></li>
             <li><Link to="/patients">Lista pacjentów</Link></li>
             <li><Link to="/recipes">Lista recept</Link></li>
             <li><Link to="/addpatient">Dodaj nowego pacjenta</Link></li>
         </ul>
     </nav>
 </div></>
    
    
    ): (<div className="youwerelogout"><h1 className="subpage">Zostałeś wylogowany</h1>  <Link to="/">Home</Link></div>)}
        
       
        
        </>

      
        
        
    )
}




export default Logout ;
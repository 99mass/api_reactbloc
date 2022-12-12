import { Link } from 'react-router-dom';  //Link  permet de naviger entre les differentes page de notre application reac
import { useState,useEffect } from "react";
import { useHistory } from 'react-router-dom';
import './styles/NavBar.css';

const NavBar = () => {
            // on verification si il existe un utilisateur dans le stockage local 
        const [auth,setAuth]=useState('');
        const history_=useHistory();
        useEffect(()=>{
                // on recupere ici l'email et on le passe a notre hock uStat() s'il y a n'a
             var auth = localStorage.getItem('email'); 
                 setAuth(auth);
          }, [])
        //   si il n'y ya pas de donner dans le stockage local  on le redirige vers la page d'acceuil
        if(auth===null){
                  history_.push('/Page404'); 
        }
        /**fonction pour deconnecter utilisateur */
      const LogOut = ()=>{
        localStorage.removeItem('email');
        localStorage.clear();
        history_.push('/');
    }

    return ( 
              <div className="container-fluid ">
                    <header className="d-flex bg-dark justify-content-center py-3">
                     <ul className="nav nav-pills">
                       
                        <li className="nav-item"><Link to="/" className="nav-link active" aria-current="page">Home</Link></li>
                         <li className="nav-item"><Link to="/Bloc" className="nav-link active">Bloc</Link></li>
                        <li className="nav-item"><Link to="/newbloc/addBloc" className="nav-link active ">New Article</Link></li>
                        <li className="nav-item "><Link to="" onClick={LogOut} className="nav-link active bg-light text-primary ">LogOut</Link></li>   
                     </ul>
                    </header>
      
                </div>

     );
}
 
export default NavBar;
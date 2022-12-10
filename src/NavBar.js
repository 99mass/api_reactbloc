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

    return ( <nav className="navbar navbar-expand-lg navbar-dark bg-dark container mt-3 ">
                    <div className=''>
                    <h2 id="hh2" className='text-capitalize text-center  font-italic mb-1'>page d'acceuille</h2>
                    </div>
                        <div id='fdiv' className="collapse navbar-collapse ">
                            <ul  id='sdiv' className="navbar-nav nBar">
                                <li className='me-5' ><Link to="/Bloc" className=" nav-link btn-primary btnAcceuil" >Acceuille</Link></li>
                                <li ><Link to="/newbloc/addBloc" className="btn-primary nav-link btnCreerBloc" >Créer Article</Link></li>
                                <li ><Link to="" onClick={LogOut} className="btn-primary nav-link btnCreerBloc" >LogOut</Link></li>
                            </ul>
                        </div>
                </nav>
     );
}
 
export default NavBar;
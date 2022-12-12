
import { useState,useEffect } from "react";
import { useHistory } from "react-router-dom";
import BlocList from './BlocList'
import useFetch from './hockPersonel/useFetch'; //importation de notre hock useFetch
import './styles/Bloc.css';

const Bloc = () => { 
        // on verification si il existe un utilisateur dans le stockage local 
        const [auth,setAuth]=useState('');
        const history=useHistory();
        useEffect(()=>{
                // on recupere ici l'email et on le passe a notre hock uStat() s'il y a n'a
             var auth = localStorage.getItem('email'); 
                 setAuth(auth);
          }, [])
        //   si il n'y ya pas de donner dans le stockage local  on le redirige vers la page d'acceuil
        if(auth===null){
                  history.push('/'); 
        }

        // ici on recuper notre hock personnel : useFetch pour recuperer les donnee du serveur
        // const {datas: blogs,isloading,error}=useFetch('http://localhost:8000/blogs?_sort=id&_order=desc'); //afficher les donnnes dans l'oder decroissant
        //  const {datas: blogs,isloading,error}=useFetch('http://localhost/api_react_bloc/blocs/lire.php/bloc');
         const {datas: blogs,isloading,error}=useFetch('https://teste.terou.biz/api_react_bloc/blocs/lire.php/bloc');
        
        return ( <div className="container bigBog"> 
                {/* <BlocList blogs={blogs.filter( (blog) => blog.author === 'samba' )}  /> */}  {/*afficher les Bloc de samba  */}
                <h3 className='text-center'>Listes des Blocs</h3>
                {error && <div className="alert alert-danger" role="alert">{error}</div>}   {/*afficher l'erreur  */}

                {isloading && <div className="d-flex justify-content-center mt-5">       {/*afficher le loading */}
                                    <div className="spinner-border" role="status"> </div>
                                    <span className="ml-2">Données en cours de chargement...</span>
                              </div>}

                { blogs && <BlocList  blogs={blogs}  /> }   {/*afficher les blocs  */}
                 </div> 
                ); 
}
 
export default Bloc;






















import { useHistory, useParams } from "react-router-dom";  //useParams permet de recuper l'id passer en url
import { Link } from "react-router-dom";
import useFetch from "./hockPersonel/useFetch";
import Page404 from "./Page404";
import './styles/Detail.css';
const GetBlocDetail = () => {

    const {id} = useParams();

     // ici on recuper notre hock personnel : useFetch pour recuperer une bloc dans le serveur en fonction de l'id
        // const {datas: blog,isloading,error}=useFetch('http://localhost/api_react_bloc/blocs/lire_un.php/'+id);
        const {datas: blog,isloading,error}=useFetch('https://teste.terou.biz/api_react_bloc/blocs/lire_un.php/'+id);
    // fonction pour supprimer un bloc 
        const history=useHistory();
        
        const deleteBloc = () => {
            //on confirme avan de supprimer le bloc
       const avis= window.confirm("vous allez supprimer le bloc ?");
        if (avis===true) {   
        //  fetch('http://localhost/api_react_bloc/blocs/supprimer.php/'+id,{
            fetch('https://teste.terou.biz/api_react_bloc/blocs/supprimer.php/'+id,{
            method: "DELETE"
           })
           .then(()=>{
                history.push('/Bloc');
                // alert('bloc supprimé avec succé');
           })
         }
        }
    return ( 
               <div className="container bigBog "> 
                        {/* {error && <div className="alert alert-danger" role="alert">{error}</div>}   afficher l'erreur  */}
                         {error && <Page404 /> }
                        {isloading && <div className="d-flex justify-content-center mt-5">       {/*afficher le loading */}
                                            <div className="spinner-border" role="status"> </div>
                                            <span className="ml-2">Données en cours de chargement...</span>
                                    </div>}

                        { blog && <div>
                                        <h3 className='text-center text-primary '>Détail du bloc : {blog.title} </h3>
                                            <div id='contenu'  >
                                                    <span className="nav-link"  >contenu : {blog.body}</span>
                                            </div>
                                            <div className="nav-item author">
                                                <span className="nav-link  text-muted" >Auteur : {blog.author}</span>
                                            </div>
                                            <div className="div_delete_edit">
                                                <button className="me-2 " onClick={deleteBloc}>Supprimer</button>
                                                <span> <Link to={`/update/UpDateBloc/${blog.id}`} className="nav-link text-white"  >Modifier</Link></span>
                                            </div>
                                </div> 
                        } 
                    </div>
                
                );
}
 
export default GetBlocDetail;
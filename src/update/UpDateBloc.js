import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";  //useParams permet de recuper l'id passer en url


const UpDateBloc = () => {
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
                  history_.push('/'); 
        }

    const {id} = useParams();

    // utilisation de useState pour initialise nos champs
    const [title,setTitle]=useState("");
    const [author,setAuthor]=useState("");
    const [body,setBody]=useState("");
    // le useState isloanding garanti l'expreance de l'utlisateur
    const [isloading,setIsloading]=useState(false);
    const history=useHistory();

    // recuperer le contenu des differentes champs de l'id selectionner
      useEffect(() => {
        fetch('https://teste.terou.biz/api_react_bloc/blocs/lire_un.php/'+id)
        .then((res) => {
            return res.json();
        })
        .then((resp) => {
            setTitle(resp.title);
            setAuthor(resp.author);
            setBody(resp.body);
        })
        .catch((err) => {
            console.log(err.message);
        })
    },[id]); 

// fonction qui permet d'envoyer les donnes a modifier
    const upDateBlocform = (e) => {
        e.preventDefault();
        const blog={id, title ,body,author}; 
        // console.log(blog);
         setIsloading(true);

            // setTimeout(() => {
                // fetch('http://localhost/api_react_bloc/blocs/modifier.php/bloc'+id,{
                    fetch('https://teste.terou.biz/api_react_bloc/blocs/modifier.php/bloc'+id,{
                    method: "PUT",                   
                    headers: {"content-type":"application/json" },
                     body: JSON.stringify(blog)
                    
                })
                .then(()=> {
                            history.push('/Bloc');  
                            setIsloading(false);
                            // alert("modifier avec succees");
                  })
                .catch((err) => {
                     console.log(err.message);
                 })
            // }, 1000);
       
    }
        
    return (   
             <div className="container-fluid bigBog"> 
                    <form onSubmit={upDateBlocform}>
                            
                                <input   type="hidden"
                                         className="form-control" 
                                         id="exampleFormControlInput1"
                                        value={id}
                                />
                        
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">title</label>
                                <input  type="text"
                                         className="form-control" 
                                         id="exampleFormControlInput1"
                                         value={title || ""}
                                        onChange={e =>setTitle(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlSelect1">author</label>
                                <select className="form-control" 
                                        id="exampleFormControlSelect1" 
                                        value={author || ""}
                                        onChange={e=> setAuthor(e.target.value)  }
                                >
                                    <option >{author || ""}</option>
                                    <option value="seydou badiane">Seydou Badiane</option>
                                    <option value="victore hugo">Victore Hugo</option>
                                    <option value="mariama ba">Mariama Ba</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlTextarea1">body</label>
                                <textarea   className="form-control" 
                                          id="exampleFormControlTextarea1" 
                                          rows="3"
                                         value={body || ""}
                                        onChange={e =>setBody(e.target.value)  }
                                        
                                >
                                
                                </textarea>
                            </div>
                            {!isloading && <input className="btn btn-primary" type="submit" value="Modifier"></input>}
                            {isloading && <input className="btn btn-success"
                                                 type="submit" disabled 
                                                 value="Loading..." >   
                                          </input>}
                    </form>
              </div>
                );
}
 
export default UpDateBloc;


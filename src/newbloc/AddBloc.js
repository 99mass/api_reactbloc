import { useState,useEffect } from "react";
import { useHistory } from 'react-router-dom';

const AddBloc = () => {

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

    const [title,setTitle]=useState('');
    const [author,setAuthor]=useState('');
    const [body,setBody]=useState('');
    const [isloading,setIsloading]=useState(false);

    const history=useHistory();

    const addform = (e) => {
        e.preventDefault();
        const blog={title , author,body};
         setIsloading(true);
           
            setTimeout(() => { 
                // fetch("http://localhost/api_react_bloc/blocs/creer.php/bloc",{
                 fetch('https://teste.terou.biz/api_react_bloc/blocs/creer.php/bloc',{
                    method: "POST",
                    headers: {"Content-Type" : "application/json" },
                    body: JSON.stringify(blog)
                }) 
                .then(()=> {
                            history.push('/Bloc');  
                            setIsloading(false);
                        })
            }, 1000);
       
    }
    
    return ( 
             <div className="container bigBog"> 
                    <form onSubmit={addform}>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">title</label>
                                <input   type="text"
                                         className="form-control" 
                                         id="exampleFormControlInput1"
                                         required
                                        value={title}
                                        onChange={(e) =>setTitle(e.target.value) }
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlSelect1">author</label>
                                <select className="form-control" 
                                        id="exampleFormControlSelect1"
                                        required
                                        value={author}
                                        onChange={(e) =>setAuthor(e.target.value) }
                                >
                                    <option value=""></option>
                                    <option value="seydou badiane">Seydou Badiane</option>
                                    <option value="victore hugo">Victore Hugo</option>
                                    <option value="mariama ba">Mariama Ba</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlTextarea1">body</label>
                                <textarea className="form-control" 
                                          id="exampleFormControlTextarea1" 
                                          rows="3"
                                          required
                                          value={body}
                                        onChange={(e) =>setBody(e.target.value) }
                                >
                                </textarea>
                            </div>
                            {!isloading && <input className="btn btn-primary" type="submit" value="Créer Bloc"></input>}
                            {isloading && <input className="btn btn-success"
                                                 type="submit" disabled 
                                                 value="Loading..." >   
                                          </input>}
                    </form>
              </div>
            );
}
 
export default AddBloc;
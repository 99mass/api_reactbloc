import { useState } from "react";
import { Link, useHistory } from 'react-router-dom';
import './styles/Acceuil.css';

const Inscription = () => {

    const history=useHistory();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [isloading,setIsloading]=useState(false);
    const [goodPassword,setGoodPassword]=useState('');


    const addUser = (e) => {
        e.preventDefault();
        const cleanPassword=password.trim();
        const taillePassword=cleanPassword.length;
        if (taillePassword >= 4) {
        const user={email ,password};
         setIsloading(true);
           
            // setTimeout(() => {
                // fetch("http://localhost/api_react_bloc/user/newUser.php/user",{
                    fetch("http://teste.terou.biz/api_react_bloc/user/newUser.php/user",{
                    method: "POST",
                    headers: {"Content-Type" : "application/json" },
                    body: JSON.stringify(user)
                }) 
                .then((resp)=> {
                    if (resp.status===200) {
                         window.localStorage.setItem('email',email);
                         window.localStorage.setItem('password',password);
                         history.push('/Bloc');  
                         setIsloading(false);
                    }else{                    
                        history.push('/Inscription');  
                        setIsloading(false);
                    }
                 })
            // }, 1000);

         }else{
                 history.push('/Inscription'); 
                setGoodPassword("mot passe minimume 8 caractères : majuscule,muniscule,chiffre et symbole ?");
         }
       

    }
    
    return ( 
             <div className="container bigBog">
              <div className="divForm">
                         <h4>Incription</h4>
                    <form onSubmit={addUser}>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">Email</label>
                                <input   type="email"
                                         className="form-control" 
                                         id="exampleFormControlInput1"
                                         required
                                         placeholder="ex : diop@gmail.com"
                                        value={email}
                                        onChange={(e) =>setEmail(e.target.value) }
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input   type="password"
                                         className="form-control" 
                                         id="exampleInputPassword1"
                                         required
                                         placeholder="ex:Sdmass@55"
                                        value={password}
                                        onChange={(e) =>setPassword(e.target.value) }
                                />
                            </div>
                            {goodPassword && <span className="goodPassword">{goodPassword}</span>}
                            {!isloading && <input className="btn btn-primary" type="submit" value="Submit"></input>}
                            {isloading && <input className="btn btn-success"
                                                 type="submit" disabled 
                                                 value="Loading..." >   
                                          </input>}                         
                    </form>
                    <h5 > <Link to='/'>Login </Link></h5>
                 </div>
              </div>
            );
}
 
export default Inscription;
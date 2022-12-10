import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import './styles/Acceuil.css';

const Login = () => {
     const history=useHistory();
    const [error,setError]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [isloading,setIsloading]=useState(false);

    const Handlesubmit=(e)=>{
        e.preventDefault(); 
        setIsloading(true);
        // if (email !='' && password !='') {
            const infos={email,password};  
            // setTimeout(()=>{ 
                // fetch('http://localhost/api_react_bloc/user/connect.php/user',{
                    fetch('http://teste.terou.biz/api_react_bloc/user/connect.php/user',{
                            method: "POST",
                            headers: {"Content-Type" : "application/json" },
                            body: JSON.stringify(infos)
                        }) 
                        .then((result)=> {
                        if (result.status === 200) { 
                            window.localStorage.setItem('email',email);
                            window.localStorage.setItem('password',password);
                            history.push('/Bloc'); 
                             setIsloading(false); 
                    }
                        else  {
                            
                            setError("E-mail or password incorect ?");
                            history.push('/'); 
                             setIsloading(false);
                        }
                        
                })
                .catch((err) => {
                         console.log(err.message);
                 });
            // },2000)
        //  }else{
        //     setError("E-mail or password incorect ?");
        //      history.push('/'); 
        //       setIsloading(false);
        //  }
    }
    return (<div className="container bigBog">
              <div className="divForm">
                    <h4>Login</h4>
                    {error &&  <h6>{error}</h6>}
                <form onSubmit={Handlesubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        required
                        placeholder="ex : diop@gmail.com"
                         value={email}
                         onChange={e=>setEmail(e.target.value)}
                         />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"
                      required
                      placeholder="ex:Sdmass@55"
                       value={password}
                         onChange={e=>setPassword(e.target.value)}
                         />
                    </div>
                    <div className="divBtnFogotPassword">
                        {/* <button type="submit" className="btn btn-primary">Submit</button> */}
                        {!isloading && <input className="btn btn-primary" type="submit" value="Submit"></input>}
                        {isloading && <input className="btn btn-success"
                                                 type="submit" disabled 
                                                 value="Loading..." >   
                                     </input>
                        }                        
                        <span>Mot de passe oublié ?</span>
                    </div>
                 </form>
                  <h5 ><Link to="/Inscription"> s'inscrire </Link></h5>
              </div> 
            </div>
    );
}
 
export default Login;
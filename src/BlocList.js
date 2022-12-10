import { Link } from "react-router-dom";

const BlocList = ({blogs}) => {

    return ( 
                blogs.map((blog)=>(

                                     <ul className="nav flex-column"  key={blog.id}>                                         
                                            <li id='titre' className="nav-item">
                                                  <Link to={`/Bloc/${blog.id}`} className="nav-link"  >Titre : {blog.title}</Link>
                                           </li>
                                            <li id='contenu' className="nav-item" >
                                                 <span className="nav-link"  >contenu : {blog.body}</span>
                                            </li>
                                           <li className="nav-item author">
                                                <span className="nav-link active text-muted" >Auteur : {blog.author}</span>
                                           </li>
                                           {/* <button onClick={() => viewBlocNodelete(blog.id)}>Delete</button> */}
                                       </ul>
                    ))
        
     );
}
 
export default BlocList;
import { Link } from "react-router-dom";

import './styles/Page404.css';
const Page404 = () => {

    return ( <div id="notfound">
                <div className="notfound">
                    <div className="notfound-404">
                        <h1>404</h1>
                    </div>
                    <h2>Désolé, Page non Trouver!</h2>
                    <p>La page que cherche n'existe pas ou bien il se peut qu'elle soit indisponible Temporairement.</p>
                    <Link to="/">Reournez  A L'Acceuil</Link> 
                </div>
	        </div>
     );
}
 
export default Page404;
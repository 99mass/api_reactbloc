import { useState, useEffect } from 'react';  //on importations de hocks de react

const useFetch = (url) => {

        const [datas,setDatas] = useState(''); //pour afficher la liste des blog
        const [isloading,setIsloading] = useState(true); //pour gerer le delai de chargement d'une page
        const [error,setError] = useState(null); //pour gerer les erreures

        
        // la fonction useEffect permet de charger des donnees lors du chargement de la page
         useEffect(() =>{
                // setTimeout(() => {  //setTimeout permet de sumiler si on le temps de chargementt des données
                         // fetch est un api de javascript qui permet de recuperer des donnes situer dans un serveur distant
                    fetch(url)
                    // .then retourne les donnees au format json //le .then ce qu'il retourne est appele une promise
                        .then( (reponse)=>{

                            if (!reponse.ok) { //ici les données n'ont pas été bien recupere
                                // on envoit le message d'erreur
                                throw Error("une erreur est survenu avec le serveur veillez actualisez la page...")
                            }
                            // les données on été bien recupérer
                            return reponse.json();
                        } )
                        .then( (data)=>{
                            // ici on passe no donnees dans notre blogs
                            setDatas(data);
                            setIsloading(false); //on arrete le loading de la page pour afficher les données recuperer
                            setError(null); //s'il ny a pas d'erreur on met le useState erreur a null
                        })
                        .catch((err) => { //la Promise .catch permet de gerer l'erreur lors d'un probleme d'acces au serveur
                            setError(err.message) //on passe a notre useState error le message d'erreur
                            setIsloading(false)  //on arrete le loading de la page pour afficher l'erreur
                        })
                    
                // }, 1500);
           
        },[url]);


    return {datas,isloading,error}; //on retourne les valeurs de notre hock
}
 
export default useFetch;
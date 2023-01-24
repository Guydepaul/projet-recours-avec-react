import React, {useRef, useEffect} from "react";
import './style.css'

const Connexion = () =>{
    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(inputRef.current.value);
    }
    const inputRef = useRef();
    useEffect(() => {
        console.log(inputRef);
    }, [])
    return (
        <div className="aaa">
          
          <div className="log">
                <nav className="">
                <img src="logo.png" className="avatar" alt="logo"/>
                <h1 className="bbb">ULPGL</h1>
                </nav>

           </div>
            
            <div>

            <h1 className="heading">Bienvenue a la plateforme de recours</h1>
            <section className="">
            <form action="" onSubmit = {handleSubmit} className="base">
                <h2>Connexion</h2>
                <div>
                    <label htmlFor="" id="1">Matricule : </label>
                    <input type="number" id="1" className="input" ref={inputRef} placeholder="Entrer votre matricule"/>
                </div>
                <div>
                    <label htmlFor="">Mot dz passe :</label>
                    <input type="password" className="input" ref={inputRef} placeholder="Entrer votre code"/>
                </div>
                <input type="submit" name="" value="Suivant"/><br/>
                <a href="#">S'inscrure</a><br/>
                <a href="#">Mot de passe oublié</a>
                
            </form>
        </section>

        </div>

        <footer className="pied">

        </footer>
    </div>
    )
}
export default Connexion
// import './style.css'
// import Validation from "./validation";


// const Connexion =() => {
//     const [values, setValues] = useState({
//         matr:"",
//         password:"",
//     });
//     const[errors, setErrors] = useState({});
//     const handleChange = (event) => {
//         setValues({
//             ...values,
//             [event.target.name]: event.target.value,
//         })
//     };
//     const handleFormSubmit = (event)=>
//         event.preventDefault();
//     setErrors(Validation(values))

//     return(  <div className="aaa">
          
//           <div className="log"> 
//                 <nav className="">
//                 <img src="logo.png" className="avatar" alt="logo"/>
//                 <h1 className="bbb">ULPGL</h1>
//                 </nav>

//            </div>
            
//             <div>

//             <h1 className="heading">Bienvenue a la plateforme de recours</h1>
//             <section className="">
//             <form action="" className="base">
//                 <h2>Connexion</h2>
//                 <div>
//                     <label htmlFor="" id="1">Matricule : </label>
//                     <input type="number" id="1" 
//                     className="input" 
//                     placeholder="Entrer votre matricule"
//                     name="matr"
//                     value={values.matr}
//                     onChange={handleChange}
//                     />
//                     {errors.matr && <p className="error">{errors.matr}</p>}
//                 </div>
//                 <div>
//                     <label htmlFor="">Mot de passe :</label>
//                     <input type="password" 
//                     className="input" 
//                     placeholder="Entrer votre code"
//                     name="password"
//                     value={values.password}
//                     onChange={handleChange}
//                     />
//                     {errors.password && <p className="error">{errors.password}</p>}
//                 </div>
//                 <input type="submit" className="submit" name="" onClick={handleFormSubmit}value="Suivant"/><br/>
//                 <a href="#">S'inscrure</a><br/>
//                 <a href="#">Mot de passe oublié</a>
                
//             </form>
//         </section>

//         </div>

//         <footer className="pied">

//         </footer>
//     </div>
//     )
// }
// export default Connexion


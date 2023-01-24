import React, {useRef, useEffect} from "react";
import "../App.css"

const Inscription = () => {
    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(inputRef.current.value);
    }

    const handleChange = (event) => {
        event.preventDefault();

        // console.log(inputRef.current.value)
    }
    const inputRef = useRef();
    useEffect(() => {
        console.log(inputRef);
    }, [])
    return (
        <div>
            <div className="log">
                <nav className="">
                <img src="logo.png" className="avatar" alt="logo"/>
                <h1 className="bbb">ULPGL</h1>
                </nav>

           </div>
        <div className="container">
        <div className="app-wrapper">
            <div>
               <h2 className="titre"> Entrer vos informations</h2> 
            </div>
            <form className="form-wrapper"  onSubmit = {handleSubmit}>
                <div className="nom" >
                    <label className="label">Nom</label>
                    <input className="input" 
                    type="text" name="nom" 
                    ref={inputRef}
                    // value={values.nom}  
                    onChange={handleChange}
                    />
                    {/* {errors.nom && <p className="error">{errors.nom}</p>} */}
                </div>
                <div className="prenom">
                    <label className="label">Prenom</label>
                    <input className="input" 
                    type="text" 
                    name="prenom" 
                    ref={inputRef}
                    // value={values.prenom} 
                    onChange={handleChange}
                    />
                    {/* {errors.prenom && <p className="error">{errors.prenom}</p>} */}
                </div>
                <div className="postnom">
                    <label className="label">Postnom</label>
                    <input className="input" 
                    type="text" name="postnom" 
                    ref={inputRef}
                    // value={values.postnom} 
                    onChange={handleChange}
                    />
                    {/* {errors.postnom && <p className="error">{errors.postnom}</p>} */}
                </div>
                <div className="email">
                    <label className="label">Email</label>
                    <input className="input" 
                    type="email" 
                    name="email" 
                    ref={inputRef}
                    // value={values.email} 
                    onChange={handleChange}
                    />
                    {/* {errors.email && <p className="error">{errors.email}</p>} */}
                </div>
                <div className="promotion">
                    <label className="label">Promotion</label>
                    <input className="input" 
                    type="text" 
                    name="promotion" 
                    ref={inputRef}
                    // value={values.promotion} 
                    onChange={handleChange}
                    />
                    {/* {errors.promotion && <p className="error">{errors.promotion}</p>} */}
                </div>
                <div className="tel">
                    <label className="label">Num tél</label>
                    <input className="input" 
                    type="number" 
                    name="num" 
                    ref={inputRef}
                    min="0"
                    max="13"
                    placeholder="+243"
                    // value={values.num} 
                    onChange={handleChange}
                    />
                    {/* {errors.num && <p className="error">{errors.num}</p>} */}
                </div>
                <div>
                    <button className="submit">Suivant</button>
                </div>
            </form>
            
        </div>
    </div>
        </div>
        
    )
}
// import validation from "./validation";

// const Inscription = ({submitForm}) => {
//     const [values, setValues] = useState ({
//         nom :"",
//         prenom :"",
//         postnom :"",
//         email :"",
//         promotion :"",
//         tel :"",
//     });
//     const [errors, setErrors] = useState ({});
//     const [dataIsCorrect, setDataIsCorrect] = useState(false)
//     const handleChange = (event) => {
//         setValues({
//             ...values, 
//             [event.target.prenom]: event.target.value,
//         });
//     }
//     const handleFormSubmit = (event) => {
//         event.preventDefault();
//         setErrors(validation(values));
//         setDataIsCorrect(true)
//     }
//     useEffect (() => {
//         if(Object.keys(errors).length === 0 && dataIsCorrect){
//             submitForm(true);
//         }

//     }, );
//     return (
//         <div className="container">
//         <div className="app-wrapper">
//             <div>
//                <h2 className="titre"> Entrer vos informations</h2> 
//             </div>
//             <from className="form-wrapper">
//                 <div className="nom">
//                     <label className="label">Nom</label>
//                     <input className="input" 
//                     type="text" name="nom" 
//                     // value={values.nom}  
//                     onChange={handleChange}
//                     />
//                     {errors.nom && <p className="error">{errors.nom}</p>}
//                 </div>
//                 <div className="prenom">
//                     <label className="label">Prenom</label>
//                     <input className="input" 
//                     type="text" 
//                     name="prenom" 
//                     // value={values.prenom} 
//                     onChange={handleChange}
//                     />
//                     {errors.prenom && <p className="error">{errors.prenom}</p>}
//                 </div>
//                 <div className="postnom">
//                     <label className="label">Postnom</label>
//                     <input className="input" 
//                     type="text" name="postnom" 
//                     // value={values.postnom} 
//                     onChange={handleChange}
//                     />
//                     {errors.postnom && <p className="error">{errors.postnom}</p>}
//                 </div>
//                 <div className="email">
//                     <label className="label">Email</label>
//                     <input className="input" 
//                     type="email" 
//                     name="email" 
//                     // value={values.email} 
//                     onChange={handleChange}
//                     />
//                     {errors.email && <p className="error">{errors.email}</p>}
//                 </div>
//                 <div className="promotion">
//                     <label className="label">Promotion</label>
//                     <input className="input" 
//                     type="text" 
//                     name="promotion" 
//                     // value={values.promotion} 
//                     onChange={handleChange}
//                     />
//                     {errors.promotion && <p className="error">{errors.promotion}</p>}
//                 </div>
//                 <div className="tel">
//                     <label className="label">Num tél</label>
//                     <input className="input" 
//                     type="number" 
//                     name="num" 
//                     value={values.num} 
//                     onChange={handleChange}
//                     />
//                     {errors.num && <p className="error">{errors.num}</p>}
//                 </div>
//                 <div>
//                     <button className="submit" onClick={handleFormSubmit}>Suivant</button>
//                 </div>
//             </from>
            
//         </div>
//     </div>
//     )
//     }
    


export default Inscription
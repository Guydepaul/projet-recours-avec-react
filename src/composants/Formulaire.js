import React, {useRef, useEffect} from "react";
import "../App.css"

const Formulaire = () => {
    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(inputRef.current.value);
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
               <h1 className="titre"> Rempisez les informations du recours</h1> 
            </div>
            <form className="form-wrapper" onSubmit = {handleSubmit} >
                <label className="label">Cours : </label>
                <input className="" 
                    type="text" 
                    name="cours" ref={inputRef}/>
                <div>
                    <h2>Concerne</h2><br/>
                    <input type="radio" name="type" id= "motif" ref={inputRef}/>
                    <label htmlFor="motif" className="label">TPE : </label>
                    <select id="motif">
                        <option selected value="revision de cotes1">Révision cotes</option>
                        <option value="cote manquant1">Cote manquante</option>
                    </select><br/>
                    <input type="radio" name="type" id= "motif" ref={inputRef}/>
                    <label htmlFor="motif" className="label">TD : </label>
                    <select id="motif">
                        <option selected value="revision de cotes2">Révision cotes</option>
                        <option value="cote manquant2">Cote manquante</option>
                    </select><br/>
                    <input type="radio" name="type" id= "motif" ref={inputRef}/>
                    <label htmlFor="motif" className="label">Interro : </label>
                    <select id="motif">
                        <option selected value="revision de cotes3">Révision cotes</option>
                        <option value="cote manquant3">Cote manquante</option>
                    </select><br/>
                    <input type="radio" name="type" id= "motif" ref={inputRef}/>
                    <label htmlFor="motif" className="label">Examen : </label>
                    <select id="motif">
                        <option selected value="revision de cotes4">Révision cotes</option>
                        <option value="cote manquant4">Cote manquante</option>
                    </select><br/>
                </div><br/>

                <div>
                    <h2>Révision cote TPE</h2>
                    <label className="label">Date epreuve : </label>
                    <input className="" type="date" name ="date" ref={inputRef}/><br/>
                    <label className=""> cote obtenue :  </label>
                    <input className="" type="number" min="0" max="20" ref={inputRef}></input><br/>
                    <label className=""> cote reclaméé :  </label>
                    <input className="" type="number" min="0" max="20" ref={inputRef}></input><br/>
                    <label className=""> Preuve :  </label>
                    <input className="" type="file" min="0" max="20" ref={inputRef}></input><br/>
                </div><br/>
                <div>
                    <h2>Cote manquante</h2>
                    <label className="label">Date epreuve : </label>
                    <input className="" type="date" name ="date" ref={inputRef}/><br/>
                    <label className=""> Preuve :  </label>
                    <input className="" type="file" min="0" max="20" ref={inputRef}></input><br/>
                </div><br/>
                <textarea cols="30" rows="10" placeholder="Entrez votre commentaire" ></textarea><br/>
                <div>
                    <button className="submit">Enregistrer</button>
                </div>
            </form>
            
        </div>
    </div>
        </div>
    )
}

export default Formulaire
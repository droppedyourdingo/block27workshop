import { useState } from "react";
import "../app.css";

const api = "https://fsa-jwt-practice.herokuapp.com/authenticate"

export default function Authenticate({token}) {

    const [successMessage, setSuccessMessage] = useState(" ");
    const [error, setError] = useState(null);

    async function handleClick() {
        
        try {
            const response = await fetch(api, {
                method: "GET",
                headers: {"Content-Type": "application/json", Authorization: `Bearer ${token}`,},

            });
            const result = await response.json();
            console.log(result);
            setSuccessMessage(`Authenticated as: ${result.data.username}`)
        }

        catch {
            setError(error.message);
        }
    }

    return (
    
    <div className="authBorder">
        <h2>Authenticate</h2>
        {successMessage && <p className="highlight">{successMessage}</p>}
        {error && <p>{error}</p>}
        <button onClick={handleClick}>Authenticate Token</button>
    </div>
    
    );
  }
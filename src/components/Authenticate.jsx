import { useState } from "react";

const api = "https://fsa-jwt-practice.herokuapp.com/authenticate"

export default function Authenticate({token}) {

    const [successMessage, setSuccessMessage] = useState(null);
    const [error, setError] = useState(null);

    async function handleClick() {
        
        try {
            const response = await fetch(api, {
                method: "GET",
                headers: {"Content-Type": "application/json", Authorization: `Bearer ${token}`,},

            });
            const result = await response.json();
            setSuccessMessage(result.message)
        }

        catch {
            setError(error.message);
        }
    }

    return (
    
    <div>
        <h2>Authenticate</h2>
        {successMessage && <p>{successMessage}</p>}
        {error && <p>{error}</p>}
        <button onClick={handleClick}>Authenticate Token</button>
    </div>
    
    );
  }
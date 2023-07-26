import { useState } from "react";
const api = 'https://fsa-jwt-practice.herokuapp.com/signup';
import "../app.css";

export default function SignUpForm({setToken}) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);  

    const validateUsername = () => {
        if (username.length !== 8) {
          setError("Username must be eight characters in length");
          return false;
        }
        setError(null);
        return true;
      };


    async function handleSubmit(event) {
        event.preventDefault();
        
        const validUsername = validateUsername();

        if (!validUsername) {
            return;
        }

        try {
            const response = await fetch(api, {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify({ username, password }),
              });
            const result = await response.json();
            console.log(result);
            setToken(result.token);
        }
        catch (error) {
            setError(error.message);
        }
        
      }

    return (
    <div className="authBorder">
    <h2>Sign Up</h2>
    {error && <p>{error}</p>}
    <form onSubmit={handleSubmit}>
        <label>
            Username: {" "} <input value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
            Password: {" "} <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button>Submit</button>
    </form>
    </div>
    );
  }
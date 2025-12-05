import { useState } from "react";

function FormModule() {
  const [name, setName] = useState("");

  return (
    <div>
      <h2>Form & Event Handling</h2>

      <input 
        value={name}
        placeholder="Type name..."
        onChange={(e) => setName(e.target.value)}
      />

      <p>You typed: {name}</p>
    </div>
  );
}

export default FormModule;
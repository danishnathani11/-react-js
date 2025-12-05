import { useState } from "react";

function ListModule() {
   
   const numbers = [10, 20, 30, 40, 50, 1,3,5,6];
  const filtered = numbers.filter((num) => num % 2 == 0);
  const items = ["Apple", "Banana", "Orange", "Mango"];
  return (
    <div>
      <h2> Filtered</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
        <p>Even number : {filtered.join(" ; ")} </p>
    </div>
  );
  

}

export default ListModule;
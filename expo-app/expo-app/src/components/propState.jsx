import { useState } from "react";
import React from "react";

function PropsState({message}){

    return(
        <>
            <div>
                <h1>Props</h1>
                <h4>Welcome to {message}</h4>
            </div>
        </>
    )

}

export default PropsState;
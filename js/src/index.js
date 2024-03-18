/* In summary, this JavaScript code imports the Liquid module and associated CSS styles, 
and then sets up the Liquid module for global access in a browser environment by 
adding it to the window.jsmodule object. 
This allows other parts of the application to use the Liquid module easily. */

// IMPORTING THE LIQUID MODULE
/*
Here, the require function is used to import the Liquid module from 
the @emdgroup-liquid/liquid package. This module seems to be related to 
React, given the /dist/react part of the import path. 
The Liquid object is assigned to a constant named Liquid.
*/
const Liquid = require('@emdgroup-liquid/liquid/dist/react')
const { InputAdapter } = require('@/shiny.react')

// IMPORTING CSS STYLES
/*
This line imports the CSS file liquid.css from the @emdgroup-liquid/liquid package. 
This CSS file likely contains styles used by the Liquid module.
*/
require('@emdgroup-liquid/liquid/dist/css/liquid.css')

const LdSelect = InputAdapter(
    Liquid.LdSelect, 
    (value, setValue) => ({
        onLdchange: (event) => {
            setValue(event.detail);
        },
    })
    );

// SETTING UP THE MODULE FOR USE IN THE BROWSER
/* This code sets up a global object named jsmodule on the window object 
(which represents the global context in a web browser environment). 
It extends the existing jsmodule object by adding a property with 
the key '@emdgroup-liquid/liquid' and the value of the Liquid object. */
window.jsmodule = {
    ...window.jsmodule,
    '@emdgroup-liquid/liquid' : Liquid,
    '@/liquid': { LdSelect }
};
/* The syntax ...window.jsmodule is known as the spread operator. 
It copies all properties from the existing jsmodule object into a new object. 
This ensures that any existing properties of jsmodule are not overwritten but retained.
So, effectively, this code makes the Liquid module accessible globally 
via window.jsmodule['@emdgroup-liquid/liquid']. */
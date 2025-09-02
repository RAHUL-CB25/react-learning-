import React from "react";

import { createRoot } from 'react-dom/client'

import App from './App.jsx'

const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: '_blank'
    },
    children: 'Click me to visit Google' // fixed Children → children
};

 function MyApp(){
       return (
        <div>
            <h1> Custom React</h1>
        </div>
       )
 }

 const AnotherElement=(
    <a href="http://google.com" target='-blank'> Visit Google</a>
 )

 const areactElement =React.createElement(
    'a',
    {href:"https://google.com",target:"_blank"},
    'click to visit google'
 )

createRoot(document.getElementById('root')).render(
     <App/>
)

import React from 'react';
import {Navbar, Footer} from "./components/index";

export default function layouts() {
  return (
    <html lang='en'>
       <body>
        <div className="container">
            <Navbar/>
            {/* {children} */}
            <Footer/>
        </div>
       </body>
        </html>
  )
}

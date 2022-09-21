import React from 'react';
import { Link } from 'react-router-dom';
//hooks:
//redux:
//components:
//style:
//function and objects:
function BackTo({pageUrl, pageName}) {
  return (
    <Link to={pageUrl} ><p style={{ display:"inline "}}>{"<< Back to "}{pageName}</p></Link> 
  )
}

export default BackTo;
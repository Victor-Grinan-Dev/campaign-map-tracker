import React from 'react';
import { Link } from 'react-router-dom';

function BackTo({pageUrl, pageName}) {
  return (
    <Link to={pageUrl} ><p style={{ display:"inline "}}>{"<< Back to "}{pageName}</p></Link> 
  )
}

export default BackTo;
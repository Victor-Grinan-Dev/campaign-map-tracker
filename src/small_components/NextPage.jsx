import React from 'react';
import { Link } from 'react-router-dom';

function NextPage({pageUrl, pageName = "Next Page"}) {
  return (
    <div>
        <Link to={pageUrl} ><p style={{ display:"inline "}}>{"Go to "}{pageName}{">>>"}</p></Link> 
    </div>
  )
}

export default NextPage;
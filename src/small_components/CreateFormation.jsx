import React from 'react';
import Button from './Button';

function CreateFormation() {
  return (
    <div>
        <h2>CreateFormation</h2>
        <div>
            <form>
                <Button role='submit' caption={'Add Formation'}/>
            </form>
        </div>
    </div>
  )
}

export default CreateFormation;
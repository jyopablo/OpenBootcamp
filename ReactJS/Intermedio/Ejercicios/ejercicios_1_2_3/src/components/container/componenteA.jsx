import React from 'react';
import { Data } from '../../models/data.class';
import ComponentB from '../pure/componentB';

const ComponenteA = () => {
    
    const defaultData = new Data('Juan Pablo ','Gonzlez Leal','juan@gmail.com',true)

    return (
        <div>
            <div>
                Your Data:
            </div>
            <ComponentB data={defaultData}></ComponentB>
        </div>
    );
}

export default ComponenteA;

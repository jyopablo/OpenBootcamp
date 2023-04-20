import React from 'react';
import PropTypes from 'prop-types';
import { Data } from '../../models/data.class';


const ComponentB = ({data}) => {
    return (
        <div>
            <h3>
            Nombre: {data.name}
            </h3>
            <h3>
             Apellido: {data.lastName}   
            </h3>
            <h3>
             Email: {data.email}   
            </h3>
            <h3>
             conectado: {data.conectado ? 'Conectado':'No Conectado'}   
            </h3>
        </div>
    );
};


ComponentB.propTypes = {
    data : PropTypes.instanceOf(Data)
};


export default ComponentB;

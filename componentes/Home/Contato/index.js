import React from 'react';
import '../Contato/contato.css'
import {HashLink as Link} from 'react-router-hash-link';

function Contato () {
    return(
        <div id="contato" className="contato">
        <h3>Contato da gerencia <br/>
            Contato do supervisor<br/>
            Contato das vendas<br/>
        </h3>
        <div className="link">
        <Link smooth to="#sobre">Sobre</Link>
        <Link smooth to="#home">Home</Link>
        </div>
        </div>
    );
}
export default Contato;
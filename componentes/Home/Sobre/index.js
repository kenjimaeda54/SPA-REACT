import { func } from 'prop-types';
import '../Sobre/sobre.css'
import {HashLink as Link} from 'react-router-hash-link';

function Sobre (){
    return(
        <div  id="sobre" className="sobre">
        <h3>Sobre a empressa <br/>
            Nossa historia<br/>
            Nossos fornecedores<br/>
        </h3>
        <div className="link">
        <Link smooth to="#contato">Contato</Link>
        <Link smooth to="#home">Home</Link>
        </div>
        </div>
    );
}
export default Sobre;
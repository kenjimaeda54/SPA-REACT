import React from 'react';



import Inicio from './Inicio';
import Contato from './Contato';
import Sobre from './Sobre';

function Home (){
  return(
   <nav>
      <ul>
       <Inicio/>
       <Sobre/>
       <Contato/>
       </ul>
  </nav> 
  );
}

export default Home;
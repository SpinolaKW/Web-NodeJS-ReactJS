import React, { Component } from 'react';
import { Image } from 'react-bootstrap';

class Imagem extends Component {
    render(){
        let imagem = "https://super.abril.com.br/wp-content/uploads/2020/09/SI_419_pernalonga_site1.jpg?quality=70&strip=info&w=1024"

        return(
            <Image src={imagem} fluid></Image>
        );
    }
}

export default Imagem;
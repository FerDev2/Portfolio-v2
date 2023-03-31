
import hom from '../styles/hom.module.css'

import perfil from '../img/perfil4.png'
import CV from '../download/CV_FERNANDO VARAS_2023.pdf'

function Home() {

  
    return (
      <div id="Home" className={hom.size}>
            <div className={hom.cont_2}>
                <h1>Fernando Varas Lizana</h1>
                <p>I am a Junior Front End Developer who is passionate about web 
                    development, committed to my professional growth and eager to add 
                    strength to my profile</p>
                <div className={hom.btn_dw}>
                  <a href={CV} download title='Descargar CV'>Descargar</a>
                </div>
            </div>

            <img src={perfil} alt="Imagen"/>
      </div>
    );
  }

export default Home;
import React,{useEffect,useRef} from 'react';
import ParticleBackground from "./ParticleBackground";
import './estilosPrincipal.css'
import perfil from './assets/Perfil.jpeg'
import Typed from "typed.js";
import   Cv  from './assets/Cv-VogelNahuel-10mesesExp.pdf'
import  Cotizador from './assets/Cotizador.png'
import  Citas from './assets/Citas.png'
import  Criptomonedas from './assets/Criptomonedas.png'
import  Crud from './assets/Crud.png'

function App() {

  const el = useRef(null);
  // Create reference to store the Typed instance itself
	const typed = useRef(null);

  useEffect(() => {
    const options = {
    	strings: [
        'Front end!',
        'Back end!',
        'Full stack!'
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop:true
    };
    
    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);
    
    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    }
  }, [])


  
  return (
    <div>
          <ParticleBackground />
          <div className="pagina-inicio">
              <div className="nav-flexbox">
            
                <p className="NombrePrincipal">
                  Nahuel Vogel
                  </p>
                <nav className="navegacion">
                    <a className="navegacion-principal" href="#portafolio" alt="portfolio"> Portafolio </a>
                    <a className="navegacion-principal" href="#contacto" alt="portfolio"> Contacto </a>
                </nav>
              </div>
              <div className="center">
                  <img className="img-principal" src={perfil} alt=""/>
                  <h2 className="arroba">@vogelNahuel</h2>
                  <p className="arroba">I am a developer <span className="animacion-dev" ref={el}></span></p>
                  
                    <a className="z-index" href={Cv} download="vogel-nahuel-cv">
                      <button className="button-cv">
                        Curriculum vitae
                      </button>
                    </a>
              </div>
          </div>

          <hr className="separador"/>

          <section className="flex-column">
            
              <div className="card" id="card-1">

                      <i class="laptop fas fa-laptop"></i>

                    <h4 className="subTitle">About</h4>
                    <p className="content-p">A lo largo de mi vida encontre una pasión en la informatica 
                      desde pequeño a travez de esto me aventure en esta hermosa 
                      carrera de ingenieria informatica desde el 2015 estudiando en la universidad nacional de la matanza ,
                       encontrando asi el rubro que mas me gusto, el desarrollo de aplicaciones web</p>

                    <p className="content-p">Cuento con una amplia trayectoria en temas asociados a la programacion con proyectos 
                         propios ,academicos y laborales ademas como desarrollador me ha permitido tener una visión 
                         completa en los diferentes procesos relacionados con del desarrollo de una aplicacion.</p>
              </div>
              <div className="card">

                    <i class="codigo fas fa-code"></i>

                   
                    <h4 className="subTitle">Skills</h4>
                    <ul>
                      <li className="li-skills">• Html  • Css  • JavaScript/ES8 </li>
                      <li className="li-skills">• Bootstrap  • Sass  • Typescript </li>
                      <li className="li-skills">• React  • Redux  • Node/Express </li>
                      <li className="li-skills">• C  • C++  • Java </li>
                    </ul> 
                    <h4 className="subTitle">DevOps/Tools</h4>
                    <ul>
                      <li className="li-skills">• Sql  • MongoDB  • Firebase </li>
                      <li className="li-skills">• AWS/Azure  • Git  • Adobe XD </li>
                    </ul> 
              </div>
          </section>
          <hr className="separador"/>
          <h4 className="subTitle">Work Experience</h4>  
          <section className="flex-column">
                
                  <div className="card">
                    <div className="card-container">
                          <p className="li-skills">Empresa: Adv Technology</p>
                          <p className="experiencia">Puesto : Fullstack developer</p>
                          <p className="experiencia"> agosto 2020 - diciembre 2020 </p>
                          <p className="experiencia">Tecnologias utilizadas  : 
                            -Front-End (HTML, CSS, JavaScript)
                            <br/>
                            -Back-End (C++)
                            <br/>
                            -Base de Datos (SQL SERVER,PL SQL ORACLE).
                          </p>
                          <p className="experiencia">Tareas: realice tanto diseño de paginas ,
                            como su funcionalidad y la integracion con las diferentes bases de datos,
                            Utilizando diferentes Patrones de diseño.
                          </p>
                    </div>
                  </div>  
                  <div className="card">
                    <div className="card-container">
                          <p className="li-skills">Empresa: VirtualDreams</p>
                          <p className="experiencia">Puesto : Front end developer</p>
                          <p className="experiencia"> abril 2021 - actualidad </p>
                        
                          <p className="experiencia">Tecnologias utilizadas  : 
                          -Front-End (HTML5, CSS3,BOOTSTRAP,SASS, JavaScript,TypeScript,REACT.JS)
                          </p>
                          <p className="experiencia">Tareas: en el rol de front realizo el diseño de paginas ,
                              optimizacion de componentes,servicios de integraciones y creacion de documentacion
                              y analisis para otros pares programadores.
                          </p>
                    </div>
                  </div>  

          </section>
          <hr className="separador"/>
          <section id="portafolio">
                    <h4 className="subTitle">Projects</h4>
                    <div className="card-100">
                          <div className="alinear-contenido-proyectos">
                            <div className="container-img">
                              <img className="proyectos-img" alt="cotizador" src={Cotizador}/>
                            </div>
                            <div className="contenido"> 
                              <p className="tags">
                                <ul className="tags-ul">  
                                  <li>#html</li>
                                  <li>#css</li>
                                  <li>#js</li>
                                  <li>#react</li>
                                  <li>#tailwind</li>
                                </ul>
                                </p>
                                  <h3 className="subTitle-center">Buscador de autos</h3>

                              <a rel="noreferrer" className="z-index button-link" target="_blank" href="https://vogelnahuel.github.io/BuscadorDeProductos/">Ver Proyecto</a>
                              <a id="espacio" rel="noreferrer" className="z-index button-link" target="_blank" href="https://github.com/vogelnahuel/BuscadorDeProductos">Codigo</a>
                            </div>
                          </div>
                    </div>
                    <div className="card-100">
                          <div className="alinear-contenido-proyectos">
                              <div className="container-img">
                                <img className="proyectos-img" alt="cotizador" src={Citas}/>
                              </div>
                            <div className="contenido"> 
                              <p className="tags">
                              <ul className="tags-ul">  
                                  <li>#html</li>
                                  <li>#css</li>
                                  <li>#js</li>
                                  <li>#tailwind</li>
                                </ul>
                              </p>
                                <h3 className="subTitle-center">Administrador de Citas</h3>
                              <a rel="noreferrer" className="z-index button-link" target="_blank" href="https://vogelnahuel.github.io/Administrador-De-Citas/">Ver Proyecto</a>
                              <a id="espacio" rel="noreferrer" className="z-index button-link" target="_blank" href="https://github.com/vogelnahuel/Administrador-De-Citas">Codigo</a>
                            </div>
                          </div>
                    </div>
                    <div className="card-100">
                          <div className="alinear-contenido-proyectos">
                            <div className="container-img">
                              <img className="proyectos-img" alt="cotizador" src={Criptomonedas}/>
                            </div>
                            <div className="contenido"> 
                              <p className="tags">
                              <ul className="tags-ul">  
                                  <li>#html</li>
                                  <li>#css</li>
                                  <li>#js</li>
                                  <li>#bootstrap</li>
                                </ul>
                              </p>

                                <h3 className="subTitle-center">Cotizador de Criptomonedas</h3>

                              <a rel="noreferrer" className="z-index button-link" target="_blank" href="https://vogelnahuel.github.io/Criptomonedas/">Ver Proyecto</a>
                              <a id="espacio" rel="noreferrer" className="z-index button-link" target="_blank" href="https://github.com/vogelnahuel/Criptomonedas">Codigo</a>
                            </div>
                          </div>
                    </div>
                    <div className="card-100">
                          <div className="alinear-contenido-proyectos">
                            <div className="container-img">
                              <img className="proyectos-img" alt="cotizador" src={Crud}/>
                            </div>
                            <div className="contenido"> 
                              <p className="tags">
                                <ul className="tags-ul">  
                                  <li>#html</li>
                                  <li>#css</li>
                                  <li>#js</li>
                                  <li>#tailwind</li>
                                </ul>
                              </p>

                                <h3 className="subTitle-center">Administrador de Clientes</h3>

                              <a rel="noreferrer" className="z-index button-link" target="_blank" href="https://vogelnahuel.github.io/administradorDeCLientes/">Ver Proyecto</a>
                              <a id="espacio" rel="noreferrer" className="z-index button-link" target="_blank" href="https://github.com/vogelnahuel/administradorDeCLientes">Codigo</a>
                            </div>
                          </div>
                    </div>
          </section>
          
          <hr className="separador" id="separadorFinal"/>
          <footer id="contacto">
                  <div className="flex">
                    <p className="footer-p">vogelnahuel@gmail.com</p>
                    <div>
                      <a className="z-index" rel="noreferrer" target="_blank" href="https://www.facebook.com/youtube.com.user/"><i class="icon-facebook fab fa-facebook"></i></a>
                      <a className="z-index" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/nahuel-vogel-a4b681181/"><i class="icon-facebook fab fa-linkedin"></i></a>
                      <a className="z-index" rel="noreferrer" target="_blank" href="https://twitter.com/bloqueo_trolls"><i class="icon-facebook fab fa-twitter"></i></a>
                      <a className="z-index" rel="noreferrer" target="_blank" href="https://github.com/vogelnahuel"><i class="icon-facebook fab fa-github"></i></a>
                    </div>
                    <p className="footer-p">Copyright © Nahuel V  |  2021</p>
                  </div>
          </footer>
    </div>
  );
  }


export default App;

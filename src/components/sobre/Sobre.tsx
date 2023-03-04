import './sobre.css'
import Foto from './fotoEdita.png'
export const Sobre = () => {
  return (
    <>
      <section id="sobre" className="sobre dark">
        <div className="limite ">
          <div className="sec-tittle">
            <h2>Sobre mim</h2>
          </div>
          <div className="sec-body sobre-content">
            <div className="sobre-img">
              <img src={Foto} alt="Foto de Igor" />
            </div>
            <div className="sobre-info--historia">
              <p>Hello me chamo Igor Daniel tenho 21 anos, moro no Rio de Janeiro. Sou universitário e estou cursando Análise e desenvolvimento de sistemas. <br /> Sou entusiasta e apaixonado por tecnologia e estou
                em busca da vaga de desenvolvedor front and junior. <br />
                Atualmente atuo como militar no Exército Brasileiro e busco
                transicionar minha carreira em direção ao que eu, de fato, tenho prazer, talento e vocação em fazer.
              </p>
              <p className="assinatura">Igor Daniel</p>
            </div>
          </div>
        </div >
      </section >

    </>
  )
};
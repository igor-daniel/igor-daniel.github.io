import './footer.css'
import iconL from './icLinkedin.png';
import iconG from './icGithub.png';

export const Footer = () => {
  return (
    <>
      <footer>
        <div className="limite footer-content">
          <div className="info">
            <p>E-mail para contato: <a href="igord1870@gmail.com">igord1870@gmail.com</a></p>
            <p>Desenvolvido por: Igor Daniel</p>
          </div>
          <div className="icones">
            <a href="https://www.linkedin.com/in/igor-daniel-8bbb74216/">
              <img src={iconL} alt="" /></a>

            <a href="https://github.com/igor-daniel">
              <img src={iconG} alt="" /></a>

          </div>
        </div>
      </footer>
    </>
  )
}
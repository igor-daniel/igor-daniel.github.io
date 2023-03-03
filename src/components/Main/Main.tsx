import programer from './Programmer-cuate.svg'
import './main.css'

export const Main = () => {
  return (
    <>
      <main>
        <div className="limite conteudo">
          <section className="main-sec ">
            <h1>Olá me chamo Igor Daniel e sou desenvolvedor front-end</h1>
            <p>Estudante de Análise e desenvolvimento de Sistemas pela Estacio de Sá e, atualmente militar do exercito brasileiro.</p>
            <ul className="links">
              <li><a href="https://github.com/igor-daniel">GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/igor-daniel-8bbb74216/">Linkedln</a></li>
              <li><a href="https://www.instagram.com/igordaniel5/">Instagram</a></li>
              <li><a href="curriculo.html">Currículo</a></li>
            </ul>
          </section>
          <section className="image" data-tilt="">
            <img data-tilt src={programer} alt="Foto de Igor" />
          </section>
        </div>
      </main>
    </>
  )
}
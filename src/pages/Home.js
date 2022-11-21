import '../style/App.css';
import lolo from '../images/lolo.png';

function Home() {
  return (
    // App
      <div className="App">
        <div className='App-header-Home'>
          <div className='App__text'>
            <div className='App__text_subtitle'>
              <p>Projekt:</p>
            </div>
            <h1>Radio Telescope 2022</h1>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
              et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
              eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
              est Lorem ipsum dolor sit amet.</p>
            <p><a href='/topics'><strong>Let's get started</strong></a></p>
          </div>
        </div>

        <div className='App-header-About'>
          <div className='App__text-about'>
            <p>Dieses Projekt wurde von Schülern der
              Klasse 12NP der Lore Lorentz Schule in
              der  Projektwoche vom 21. November 2022
              bis zum 26. November 2022 durchgeführt.</p>
            <a href='http://www.lore-lorentz-schule.de'><img src={lolo} alt='lolo' className='App__lolo' /></a>
          </div>

          <div className='copyright'>
           <p>© 2022 - Aaron Wagner<br></br>
              Developed by <a href='https://www.aaronwagner.earth'>Aaron Wagner</a><br></br>
              Source code on <a href='https://github.com/Lore-Lorentz-Schule/radio-telescope-2022'>GitHub</a><br></br>
              Contact: <a href='mailto:webmaster@aaronwagner.earth'>webmaster@aaronwagner.earth</a><br></br>
              <a href='https://www.aaronwagner.earth/impressum'>Impressum</a></p>
          </div>
        </div>

      </div>
  );
}

export default Home;
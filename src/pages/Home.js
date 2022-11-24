import '../style/App.css';
import lolo from '../images/lolo.png';
import title_pic from '../images/2022_11_19_LRPT_07-50-18.s-ch5i-rectified.jpg'
import ContentTable from '../compenents/ContentTable';

function Home() {
  return (
    // App
      <div className="App">
        <div className='App-header-Home'>
          <div className='App__text'>
            <h1>Wettersatelliten - Meteor M2</h1>
            <img src={title_pic} class='title_pic' alt='title' />
            <p>Projekt Wettersatelliten/Radioastronomie, Lore Lorentz Schule 12NP</p>
          </div>
        </div>

        <ContentTable />

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
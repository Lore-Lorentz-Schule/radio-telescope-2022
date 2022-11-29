import '../style/ContentTable-Style.css';

function ContentTable() {
  return (
    // App
      <div className="App">
        <div className="App-header-content">
            <h1>Inhaltsverzeichnis</h1>
            <button id='about' type='submit' name='about'>Über dieses Projekt</button>
            <button id='project' type='submit' name='project'>Projektplanung</button>
            <button id='hardware' type='submit' name='hardware'>Hardware</button>
            <button id='software' type='submit' name='software'>Software</button>

        </div>
      </div>
  );
}

export default ContentTable;
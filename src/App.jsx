import './App.css';
import { BrowserRouter, Link } from 'react-router-dom';

function App() {
  document.title = "Kerrshak - a web dev's portfolio"

  return (
    <BrowserRouter>
      <div>
        <header id='nav-bar'>
          <nav>
            <a href="https://github.com/Kerrshak" className='nav-buttons'>GitHub</a>
          </nav>
        </header>

        <div id='home-grid'>
          <img id='bio-image' src="https://cdn.discordapp.com/attachments/1019271692171882496/1024652368383582238/Kerrshak_junior_software_developer_0d3830a8-9fe9-4ce1-8ddc-0d675b706f3e.png" alt='junior software developer' />
          <h2 id='heading'>HI!</h2>
          <p id='bio-text'>My name is Jack Kerr, nicknamed Kerrshak &#40;Jack Kerr &#62; Kerr Jack &#62; Kerrshak&#41;</p>
        </div>
      </div>

      <p id='bottom-text'>This is a website made by Jack Kerr. For enquiries please email jack723@hotmail.co.uk</p>
    </BrowserRouter>
  );
}

export default App;

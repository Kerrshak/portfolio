import './App.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
  document.title = "Kerrshak - a web dev's portfolio"

  return (
    <BrowserRouter>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Aboreto&family=Noto+Sans+Mono&display=swap');
      </style> 

      <div>
        <header id='nav-bar'>
          <nav>
            <a href="https://github.com/Kerrshak" className='nav-buttons'>GitHub</a>
          </nav>
        </header>

        <div id='home-grid'>
          <img id='bio-image' src="https://cdn.discordapp.com/attachments/1019271692171882496/1024652368383582238/Kerrshak_junior_software_developer_0d3830a8-9fe9-4ce1-8ddc-0d675b706f3e.png" alt='junior software developer' />
          <h2 id='greeting'>HI!</h2>
          <div id='bio-block'>
            <p id='bio-text'>
              My name is Jack Kerr, nicknamed Kerrshak &#40;Jack Kerr &#62; Kerr Jack &#62; Kerrshak&#41;<br/><br/>
              I'm an aspiring software developer graduated from Northcoders Coding Bootcamp. I have experience in the following languages:
            </p>
            <div className='language-container'>
              <img className='language-icon' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png" alt="JavaScript icon" />
              <p>Javascript</p>
            </div>
            <div className='language-container'>
              <img className='language-icon' src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/695px-C_Programming_Language.svg.png" alt="C icon" />
              <p>C</p>
            </div>
            <div className='language-container'>
              <img className='language-icon' src="https://alefragnani.gallerycdn.vsassets.io/extensions/alefragnani/pascal/9.5.1/1658077210084/Microsoft.VisualStudio.Services.Icons.Default" alt="Pascal icon" />
              <p>Pascal</p>
            </div>
            <div className='language-container'>
              <img className='language-icon' src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png" alt="TypeScript icon" />
              <p>TypeScript</p>
            </div>
            <div className='language-container'>
              <img className='language-icon' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="React icon" />
              <p>React</p>
            </div>
            <div className='language-container'>
              <img className='language-icon' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="React Native icon" />
              <p>React Native</p>
            </div>
            <div className='language-container'>
              <img className='language-icon' src="https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-html-markup-develop-layout-language-512.png" alt="HTML5 icon" />
              <p>HTML5</p>
            </div>
            <div className='language-container'>
              <img className='language-icon' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png" alt="CSS3 icon" />
              <p>CSS3</p>
            </div>
            <div className='language-container'>
              <img className='language-icon' src="https://seeklogo.com/images/J/jest-logo-F9901EBBF7-seeklogo.com.png" alt="Jest icon" />
              <p>Jest</p>
            </div>
            <div className='language-container'>
              <img className='language-icon' src="https://static.studytonight.com/css/resource.v3/icons/subject/logo-sql.svg" alt="SQL icon" />
              <p>SQL</p>
            </div>
            <div className='language-container'>
              <img className='language-icon' src="https://cdn.iconscout.com/icon/free/png-256/mongodb-5-1175140.png" alt="MongoDB icon" />
              <p>MongoDB</p>
            </div>
          </div>
        </div>
      </div>

      <p id='bottom-text'>This is a website made by Jack Kerr. For enquiries please email jack723@hotmail.co.uk</p>
    </BrowserRouter>
  );
}

export default App;

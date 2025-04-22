import SBDLogo from './assets/SBDLogo.svg';
import Navbar from './Navbar';
import DMJ from './dmj';
import OS from './os';
import AslabInfo from './AslabInfo';
import FeedbackForm from './FeedbackForm';

import './App.css';

export default function App() {
  return (
    <div>
      <Navbar />
      <section id="sbd" className="w-screen h-screen bg-gradient-pastel text-white flex flex-col justify-center items-center fade-in">
        <div className="flex flex-col md:flex-row items-center gap-6 px-4">
          <img src={SBDLogo} alt="SBD Logo" className="h-64 w-64 animate-pulse" />
          <div className="text-left max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4 text-white drop-shadow-lg">NETLAB SBD</h1>
            <div className="card-container text-white space-y-4">
              <p className="text-md md:text-lg leading-relaxed">
              Praktikum SBD fokus pada perancangan dan pengelolaan basis data menggunakan model relasional serta konsep join, view, query lanjutan, dan normalisasi.
              </p>
              <p className="text-md md:text-lg leading-relaxed">
              Implementasi dilakukan melalui pengembangan aplikasi fullstack menggunakan Node.js, MongoDB, React.js, dan Express.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="dmj" className="fade-in">
        <DMJ />
      </section>

      <section id="os" className="fade-in">
        <OS />
      </section>
      
      <section id="aslab" className="fade-in">
        <AslabInfo />
      </section>
      <FeedbackForm/>
    </div>
  );
}

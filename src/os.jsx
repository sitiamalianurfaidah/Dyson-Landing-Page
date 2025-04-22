import OSLogo from './assets/OSLogo.svg';
import './App.css';

export default function OS() {
    return (
        <section id="os" className="w-screen h-screen bg-gradient-os text-white flex flex-col justify-center items-center fade-in">
            <div className="flex flex-col md:flex-row items-center gap-6 px-4">
                <img src={OSLogo} alt="OS Logo" className="h-64 w-64 animate-pulse" />
                <div>
                <h1 className="text-3xl md:text-5xl font-extrabold mb-4 text-white drop-shadow-lg">NETLAB OS</h1>
                    <div className="card-container max-w-2xl space-y-4">
                        <p className="text-md md:text-lg leading-relaxed">
                        Praktikum ini mengenalkan sistem operasi berbasis Linux, dimulai dari proses booting dan manajemen proses.
                        </p>
                        <p className="text-md md:text-lg leading-relaxed">
                        Materi dilanjutkan dengan penggunaan keluarga fungsi exec dan teknik penanganan sinyal dalam sistem operasi.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

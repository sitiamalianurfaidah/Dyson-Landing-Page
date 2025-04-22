import DMJLogo from './assets/DMJLogo.svg';
import './App.css';

export default function DMJ() {
    return (
    <section id="dmj"className="w-screen h-screen bg-gradient-dmj text-white flex flex-col justify-center items-center fade-in">
        <div className="flex flex-col md:flex-row items-center gap-6 px-4">
            <div>
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4 text-white drop-shadow-lg">NETLAB DMJ</h1>
                <div className="card-container max-w-2xl space-y-4">
                    <p className="text-md md:text-lg leading-relaxed">
                    Praktikum DMJ membahas berbagai topik lanjutan dalam jaringan komputer, seperti multi-access dan multi-area OSPFv2, EIGRP, NAT, ACL, WAN, point-to-point, VPN, QoS, network monitoring, network virtualization, dan network automation.
                    </p>
                    <p className="text-md md:text-lg leading-relaxed">
                    Materi juga mencakup VPN, QoS, network monitoring, virtualisasi jaringan, hingga otomatisasi jaringan.
                    </p>
                </div>
            </div>
            <img src={DMJLogo} alt="DMJ Logo" className="h-64 w-64 animate-pulse" />
        </div>
    </section>
    );
}

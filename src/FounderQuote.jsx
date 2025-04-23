import { useEffect, useRef } from 'react';
import jamesDysonImage from './assets/james-dyson.jpg'; // pastikan path gambar benar

export default function FoundersQuote() {
    const sectionRef = useRef(null);
    const quoteRef = useRef(null); // Referensi untuk teks quote
    const authorRef = useRef(null); // Referensi untuk teks author

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Tambahkan animasi ke elemen
                        quoteRef.current.classList.add('animate__animated', 'animate__fadeInLeft');
                        authorRef.current.classList.add('animate__animated', 'animate__fadeInLeft', 'animate__delay-1s');
                    }
                });
            },
            { threshold: 0.3 } // Menunggu 30% elemen terlihat
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section
            id="founder-quote"
            ref={sectionRef}
            className="founder-section"
            style={{ backgroundImage: `url(${jamesDysonImage})` }}
        >
            <div className="founder-overlay"></div>

            <div className="founder-content">
                <blockquote
                    className="quote-text"
                    ref={quoteRef} // Menambahkan referensi untuk quote
                >
                    “What we're interested in is whether our kind of technology can make a big difference and whether it can really do the job much better than the existing products.”
                </blockquote>
                <cite
                    className="quote-author"
                    ref={authorRef} // Menambahkan referensi untuk author
                >
                    — <strong>Sir James Dyson</strong><br />
                    Engineer and Founder
                </cite>
            </div>
        </section>
    );
}

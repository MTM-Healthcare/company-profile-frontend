import { MapPin } from 'lucide-react';

export function LocationMap() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-28 mb-16">
            <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 bg-blue-100/80 backdrop-blur-sm text-blue-700 text-xs font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full mb-3">
                    <MapPin size={13} />
                    Our Location
                </div>
                <h2 className="font-heading font-bold text-3xl text-brand-dark">Find Us</h2>
                <p className="text-sm text-gray-500 mt-2">Jl. Kesehatan Raya No. 123, Kebayoran Baru, Jakarta Selatan</p>
            </div>
            <div className="w-full h-[380px] md:h-[460px] rounded-3xl overflow-hidden shadow-2xl shadow-blue-200/50 border border-white/60">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126907.03159955376!2d106.72629631248037!3d-6.2840509618585675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1ec2422b0b3%3A0x39a0d0fe47404d02!2sSouth%20Jakarta%2C%20South%20Jakarta%20City%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1709825484838!5m2!1sen!2sid"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                ></iframe>
            </div>
        </section>
    );
}

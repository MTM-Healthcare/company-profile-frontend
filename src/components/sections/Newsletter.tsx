'use client';

export function Newsletter() {
    return (
        <section className="max-w-xl mx-auto px-4 mt-24 text-center">
            <h2 className="font-heading font-bold text-3xl text-brand-dark">Our Newsletters</h2>
            <p className="text-sm text-gray-500 mt-2 mb-8">Dapatkan informasi kesehatan terbaru, tips, dan promo layanan langsung ke email Anda.</p>

            <form className="relative max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
                <input
                    type="email"
                    placeholder="Masukkan Email Anda"
                    className="w-full pl-6 pr-32 py-4 rounded-full bg-white border border-gray-100 focus:border-blue-100 focus:ring-4 focus:ring-brand-blue outline-none shadow-sm text-sm transition-all text-brand-dark placeholder:text-gray-400"
                    required
                />
                <button
                    type="submit"
                    className="absolute right-1 top-1 bottom-1 bg-blue-100 text-blue-700 font-medium px-6 rounded-full hover:bg-blue-200 transition-colors"
                >
                    Kirim
                </button>
            </form>
            <p className="text-[10px] text-gray-400 mt-3">Kami menjaga privasi Anda. Tidak ada spam.</p>
        </section>
    );
}

const AboutUs = () => {
    return (
        <section className="py-28 px-10">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div>
                    <h2 className="text-4xl uppercase font-Nunito-font font-bold text-secandari mb-4">About Us</h2>
                    <p className="text-gray-500 font-normal text-sm font-Opensans mb-4">
                        Welcome to <strong>Eurosespa</strong>, — where the healing power of relaxation takes center stage. Our
                        certified massage therapists specialize in techniques that ease tension, restore balance, and promote
                        lasting wellness.
                    </p>
                    <p className="text-gray-500 font-normal text-sm font-Opensans mb-4">
                        With a deep passion for holistic care, we’ve created a serene, nurturing environment designed to help you
                        unwind and recharge. Our mission is simple: to help you feel better — in body, mind, and soul.
                    </p>
                    <div className="mt-6">
                        <a
                            href="/product"
                            className="inline-block bg-secandari font-Nunito-font font-medium text-white px-6 py-3 rounded-md hover:bg-emerald-700 transition"
                        >
                            Explore Our Product
                        </a>
                    </div>
                </div>

                {/* Google Map */}
                <div className="relative w-full h-72 md:h-96">
                    <div className="mt-10 rounded-xl overflow-hidden shadow-md">
                        <div className="w-full h-[350px]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.7732484892067!2d90.4120816!3d23.7905525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c711998d5a03%3A0xde4579cce3557ace!2sEuRose%20Spa!5e1!3m2!1sen!2sbd!4v1752347389991!5m2!1sen!2sbd"
                                className="w-full h-full border-0"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                allowFullScreen
                                title="Eurosespa Location"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;

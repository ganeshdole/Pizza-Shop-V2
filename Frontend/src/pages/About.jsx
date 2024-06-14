const About = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl mb-8">
                <h1 className="text-4xl font-bold mb-6 text-center text-red-600">About Us</h1>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Our Story</h2>
                    <p className="text-gray-700 mb-4">
                        Welcome to HUNGRY CRUST! Our journey began with a passion for authentic Italian pizzas and a desire to bring the freshest ingredients to our community. Since our establishment in 2010, we've been committed to creating delicious pizzas that bring people together.
                    </p>
                    <p className="text-gray-700">
                        From our humble beginnings as a small pizzeria, we've grown into a beloved local favorite, known for our mouth-watering pizzas and friendly service. Our commitment to quality and customer satisfaction has been the cornerstone of our success.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                    <p className="text-gray-700">
                        At HUNGRY CRUST, our mission is simple: to provide our customers with the best pizza experience possible. We believe in using only the freshest, highest quality ingredients, and crafting each pizza with love and care. Whether you're dining in, taking out, or getting delivery, we strive to make every bite a delightful experience.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Meet Our Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="text-center">
                            <img
                                src="https://via.placeholder.com/150"
                                alt="Founder"
                                className="w-32 h-32 rounded-full mx-auto mb-4"
                            />
                            <h3 className="text-xl font-bold">Kritix</h3>
                            <p className="text-gray-600">Founder & CEO</p>
                        </div>
                        <div className="text-center">
                            <img
                                src="https://via.placeholder.com/150"
                                alt="Chef"
                                className="w-32 h-32 rounded-full mx-auto mb-4"
                            />
                            <h3 className="text-xl font-bold">Smith</h3>
                            <p className="text-gray-600">Head Chef</p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Our History</h2>
                    <p className="text-gray-700">
                        HUNGRY CRUST was founded in 2010 by Kritix, a pizza enthusiast with a dream of creating the perfect pizza. Starting with a small location and a few family recipes, John's dedication to quality and authenticity quickly earned Pizza Palace a loyal following.
                    </p>
                    <p className="text-gray-700">
                        Over the years, we have expanded to multiple locations, each maintaining the same commitment to excellence. Our head chef, Jane Smith, brings over 20 years of culinary experience, ensuring that every pizza we serve is a masterpiece.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default About;

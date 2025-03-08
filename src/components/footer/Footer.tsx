import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faXTwitter, faLinkedinIn, faYoutube } from "@fortawesome/free-brands-svg-icons";

const Footer2 = () => {
    return (
        <>
            <div
                className={`bg-black w-[90%] md:w-[84%] max-w-7xl text-black/90  h-auto mt-32 mx-auto rounded-3xl`}>
                <div
                    className={`bg-white text-black/90 shadow-xl w-full h-full rounded-3xl`}>
                    <div className={`px-8 md:px-24 py-16`}>
                        {/* Top Section */}
                        <div className="text-center ">
                            <h2 className="text-4xl md:text-4xl font-bold">
                                Pace your journey with Bootcoding
                            </h2>
                            <p className="mt-4 font-medium max-w-2xl mx-auto">
                                Prepare for success with AI-powered mock tests, personalized interview preparation, and curated resources to ace your placements.
                            </p>
                            <div className="flex justify-center mt-6 space-x-10">
                                <a href="#" className="hover:text-indigo-600">
                                    <FontAwesomeIcon icon={faInstagram} className="text-4xl" />
                                </a>
                                <a href="#" className="hover:text-indigo-600">
                                    <FontAwesomeIcon icon={faLinkedinIn} className="text-4xl" />
                                </a>
                                <a href="#" className="hover:text-indigo-600">
                                    <FontAwesomeIcon icon={faXTwitter} className="text-4xl" />
                                </a>
                                <a href="#" className="hover:text-indigo-600">
                                    <FontAwesomeIcon icon={faYoutube} className="text-4xl" />
                                </a>
                            </div>
                        </div>

                        <div className="mt-12  grid grid-cols-2 md:grid-cols-4 gap-8 text-md">
                            {/* Offerings */}
                            <div>
                                <h3 className="font-bold mb-4 text-black/80">Preparation Resources</h3>
                                <ul className="space-y-2 font-medium text-sm  text-black/60">
                                    <li><a>Mock Tests</a></li>
                                    <li><a>AI-Powered Quizzes</a></li>
                                    <li><a>Resume Building</a></li>
                                    <li><a>Interview Questions</a></li>
                                    <li><a>Expert Webinars</a></li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-bold mb-4 text-black/80">Platform</h3>
                                <ul className="space-y-2 font-medium text-sm text-black/60">
                                    <li><a href="product" className="hover:text-purplePalette">Product</a></li>
                                    <li><a href="pricing" className="hover:text-purplePalette">Pricing</a></li>
                                    <li><a href="contact" className="hover:text-purplePalette">Contact</a></li>
                                    <li><a href="testimonials" className="hover:text-purplePalette">Testimonials</a></li>
                                    <li><a href="faq" className="hover:text-purplePalette">FAQ's</a></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-bold mb-4 text-black/80">Features</h3>
                                <ul className="space-y-2 font-medium text-sm text-black/60">
                                    <li><a>AI Feedback</a></li>
                                    <li><a>Customized Learning Paths</a></li>
                                    <li><a>Real-Time Analytics</a></li>
                                    <li><a>Skill Assessments</a></li>
                                    <li><a>Placement Simulations</a></li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-bold mb-4 text-black/80">Our Goals</h3>
                                <ul className="space-y-2 font-medium text-sm text-black/60">
                                    <li><a>Placement Readiness</a></li>
                                    <li><a>Confidence Building</a></li>
                                    <li><a>Skill Enhancement</a></li>
                                    <li><a>Mock Interview Practice</a></li>
                                    <li><a>Career Success</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-12 border-t border-gray-500/20 pt-8 text-center text-sm text-black/60">
                            <div className="flex flex-col justify-between items-center">
                                <ul className="flex space-x-4">
                                    <li><a href="#" className="hover:underline hover:text-purplePalette">Terms</a></li>
                                    <li><a href="#" className="hover:underline hover:text-purplePalette">Privacy</a></li>
                                    <li><a href="#" className="hover:underline hover:text-purplePalette">Refund Policy</a></li>
                                    <li><a href="#" className="hover:underline hover:text-purplePalette">Community Guidelines</a></li>
                                </ul>
                                <div className="mt-5 md:mt-3">
                                    <p className={`mb-2 text-xl text-indigo-600 font-bold`}>Bootcoding Pvt. Ltd</p>
                                    <p className={`hover:text-purplePalette`}>&copy; All rights reserved 2025</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer2;

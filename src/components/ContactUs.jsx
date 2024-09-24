import linkedin from "../assets/images/icons/linkedin.svg"
import github from "../assets/images/icons/github.svg"
import email from "../assets/images/icons/email.svg"
import leetCode from "../assets/images/icons/leetcode.svg"
function ContactUs() {
    return (
        <div id="contact" className="mt-6">
            <div className="grid sm:grid-cols-2 gap-16 p-8 bg-primary rounded-md text-[#333] font-[sans-serif]">
                <div>
                    <h1 className="text-3xl text-accent font-extrabold">Let’s Talk</h1>
                    <p className="text-sm text-gray-400 mt-3">
                        Have some big idea to develop or problem to solve and need help? Then reach out I’d love to hear about your project and provide help.
                    </p>
                </div>
                <div>
                    <div className="mt-12">
                        <h2 className="text-lg text-accent font-extrabold">Email</h2>
                        <ul className="mt-3">
                            <li className="flex items-center">
                                <div className="bg-transparent h-10 w-10 p-2 border border-accent rounded-full flex items-center justify-center shrink-0">
                                    <img src={email} />
                                </div>
                                <a target="blank" href="mailto:abd.work20502@gmail.com" className="text-accent text-sm ml-3">
                                    <strong className="block">Mail</strong>
                                    <p>abd.work20502@gmail.com</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-12">
                        <h2 className="text-lg text-accent font-extrabold">Socials</h2>
                        <ul className="flex mt-3 space-x-4">
                            <li className="bg-transparent h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                <a href="https://github.com/Abdalkader-Kouhda" target="_blank">
                                    <img src={github} />
                                </a>
                            </li>
                            <li className="bg-transparent border border-accent h-10 w-10 p-2 rounded-full flex items-center justify-center shrink-0">
                                <a href="https://www.linkedin.com/in/abd-kouhda20502/" target="_blank">
                                    <img src={linkedin} />
                                </a>
                            </li>
                            <li className="bg-transparent h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                <a href="https://leetcode.com/u/Abdalkader_Kouhda/" target="_blank">
                                    <img src={leetCode} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;

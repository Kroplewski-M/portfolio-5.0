export const Contact = () => {
    return (
        <section className="w-[100%] min-h-[100vh] z-[20] bg-[#222222] relative pt-5" id="contact">
            <div className="w-[100%] z-50 relative pt-5 md:pl-16 pl-6">
                <h1 className="text-[50px] font-bold text-gray-200">
                    <span className="bg-purple-600 p-[7px] rounded-md">Contact</span>
                </h1>
                <div className="text-gray-100 text-[17px] mt-5 leading-8">
                    <p>Email me: <span className="rounded-md bg-purple-700 p-[5px]">m.kroplewski.contact@gmail.com</span></p>
                    <p>Or send me a message on <a className="text-purple-700" href="https://www.linkedin.com/in/mateusz-kroplewski-732239176/" target="_blank">Linkedin</a></p>
                    <p>Or you can fill out the form below!</p>
                </div>
                <div className="mt-6">
                    <form>
                        {/*<p className="font-bold text-gray-200 text-[40px]">Form</p>*/}
                        <div className="flex">
                            <label>Name:</label>
                            <input type="text" />
                        </div>
                        <div className="flex">
                            <label>Email:</label>
                            <input type="email" />
                        </div>
                        <div className="flex">
                            <label>Message:</label>
                            <input type="text" />
                        </div>
                        <div>
                            <button>Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

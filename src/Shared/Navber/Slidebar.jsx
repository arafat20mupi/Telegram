
const Sidebar = ({ isOpen }) => {
    return (
        <div className={`fixed left-0 bottom-0 top-0 w-3/4 bg-gray-700 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 sm:max-w-xs lg:w-80`}>
            <nav className="flex flex-col pt-20 pb-8">
                <div className="px-4 ">
                    <h3 className="mb-2 text-xs font-medium uppercase text-gray-500">Main</h3>
                    <ul className="mb-8 flex text-sm font-medium">
                        <li>
                            <a className="active flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600" href="#homepage">
                                <span className="select-none">Homepage</span>
                            </a>
                        </li>
                        {/* Theme Control */}
                        <label className="swap swap-rotate">
                            {/* this hidden checkbox controls the state */}
                            <input type="checkbox" className="theme-controller" value="dark" />

                            {/* sun icon */}
                            <svg
                                className="swap-off h-10 w-10 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24">
                                <path
                                    d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                            </svg>

                            {/* moon icon */}
                            <svg
                                className="swap-on h-10 w-10 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24">
                                <path
                                    d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                            </svg>
                        </label>
                    </ul>
                </div>
                <div className="px-4 pb-6">
                    <h3 className="mb-2 text-xs font-medium uppercase text-gray-500">Legal</h3>
                    <ul className="mb-8 text-sm font-medium">
                        <li>
                            <a className="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600" href="#tc">
                                <span className="select-none">Terms and Condition</span>
                            </a>
                        </li>
                        <li>
                            <a className="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600" href="#privacy">
                                <span className="select-none">Privacy policy</span>
                            </a>
                        </li>
                        <li>
                            <a className="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600" href="#imprint">
                                <span className="select-none">Imprint</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="px-4 pb-6">
                    <h3 className="mb-2 text-xs font-medium uppercase text-gray-500">Others</h3>
                    <ul className="mb-8 text-sm font-medium">
                        <li>
                            <a className="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600" href="#ex1">
                                <span className="select-none">...</span>
                            </a>
                        </li>
                        <li>
                            <a className="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600" href="#ex2">
                                <span className="select-none">...</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Sidebar;

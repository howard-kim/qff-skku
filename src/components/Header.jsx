import React from "react";
// import SKKAILogo from "images/logos/skkai.svg";

const Header = () => {
  return (
    <header className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <a className="block text-teal-600 dark:text-teal-300" href="/">
              <img
                src="home/images/logos/skkai.svg"
                alt="SKKAI Logo"
                className="h-8"
              />
            </a>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <a
                    className="text-black transition hover:text-black/75"
                    href="aboutus"
                  >
                    About Us
                  </a>
                </li>

                <li>
                  <a
                    className="text-black transition hover:text-black/75"
                    href="schedule"
                  >
                    Schedule
                  </a>
                </li>

                <li>
                  <a
                    className="text-black transition hover:text-black/75"
                    href="speakers"
                  >
                    Speakers
                  </a>
                </li>

                <li>
                  <a
                    className="text-black transition hover:text-black/75"
                    href="organizers"
                  >
                    Organizers
                  </a>
                </li>

                <li>
                  <a
                    className="text-black transition hover:text-black/75"
                    href="sponsors"
                  >
                    Sponsors
                  </a>
                </li>

                <li>
                  <a
                    className="text-black transition hover:text-black/75"
                    href="#"
                  >
                    Register
                  </a>
                </li>
              </ul>
            </nav>
            <button
              className="ml-4 px-3 py-1 text-sm font-medium text-white border border-gray-300 rounded hover:bg-gray-100"
              onClick={() => {
                // Replace this with your actual language toggle logic
                alert("Language toggled");
              }}
            >
              EN/한
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

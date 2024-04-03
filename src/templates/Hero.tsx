import Image from 'next/image';

const Hero = () => (
  <>
    <header className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-12">
            <a aria-label="Home" href="#">
              {' '}
              <Image src="/1024px.png" alt="Sentry" width={60} height={40} />
            </a>
            <div className="hidden md:flex md:gap-x-6"></div>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
            <a
              className="group inline-flex items-center justify-center rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500 hover:text-slate-100 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:bg-blue-800 active:text-blue-100"
              color="blue"
            >
              <span>
                Get started <span className="hidden lg:inline">today</span>
              </span>
            </a>
            <div className="-mr-1 md:hidden">
              <div data-headlessui-state="">
                <button
                  className="ui-not-focus-visible:outline-none relative z-10 flex size-8 items-center justify-center"
                  aria-label="Toggle Navigation"
                  type="button"
                  aria-expanded="false"
                  data-headlessui-state=""
                  id="headlessui-popover-button-:Rbpnla:"
                >
                  <svg
                    aria-hidden="true"
                    className="size-3.5 overflow-visible stroke-slate-700"
                    fill="none"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <path
                      d="M0 1H14M0 7H14M0 13H14"
                      className="origin-center transition"
                    ></path>
                    <path
                      d="M2 2L12 12M12 2L2 12"
                      className="origin-center scale-90 opacity-0 transition"
                    ></path>
                  </svg>
                </button>
              </div>
              <div
                style={{
                  position: 'fixed',
                  top: '1px',
                  left: '1px',
                  width: '1px',
                  height: 0,
                  padding: 0,
                  margin: '-1px',
                  overflow: 'hidden',
                  clip: 'rect(0, 0, 0, 0)',
                  whiteSpace: 'nowrap',
                  borderWidth: 0,
                  display: 'none',
                }}
              ></div>
            </div>
          </div>
        </nav>
      </div>
    </header>

    <div className="mx-auto max-w-7xl px-4 pb-16 pt-20 text-center sm:px-6 lg:px-8 lg:pt-32">
      <h1 className="font-display sm:text-7xl mx-auto max-w-4xl text-5xl font-medium tracking-tight text-slate-900">
        Elevate Your Government Contract Hunt with
        <span className="relative whitespace-nowrap text-blue-600">
          <br />
          <span className="relative">GovCon Explorer!</span>
        </span>{' '}
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
        The Free Chrome extension simplifies your{' '}
        <a
          target="_blank"
          href="https://sam.gov/content/home"
          style={{ color: 'blue' }}
        >
          SAM.gov{' '}
        </a>
        search, saves time, and helps you stay ahead. GovCon Explorer: instantly
        scans{' '}
        <a
          target="_blank"
          href="https://sam.gov/content/home"
          style={{ color: 'blue' }}
        >
          SAM.gov
        </a>{' '}
        and saves and organizes the contracts in your web browser. GovCon
        Explorer: Your Shortcut to Government Contracts.
      </p>
      <div className="mt-10 flex justify-center gap-x-6">
        <a
          className="group inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700 hover:text-slate-100 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 active:bg-slate-800 active:text-slate-300"
          color="slate"
          href="/register"
        >
          Add To Chrome
        </a>
      </div>
    </div>
  </>
);

export { Hero };

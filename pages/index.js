import Layout from '../components/Layout'

function getAge(dateString) {
      var today = new Date();
      var birthDate = new Date(dateString);
      var age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
          age--;
      }
      return age;
  }

export default () => (
  <Layout>
    <header class="pt-12 lg:pt-12 pb-12 w-full flex">
      <div class="container px-4 m-auto">
        <div class="row flex flex-wrap align-center justify-center mx-auto">
          {/* w-1/2 sm:w-auto md:w-full lg:w-32 xl:w-3/4 */}
          <div class="w-full lg:w-1/3">
            <img
              class="avatar p-6 w-auto h-auto max-w-full rounded-full m-auto lg:float-right"
              src="https://avatars0.githubusercontent.com/u/6512813?s=460&u=95c2a1f2bb132eeab6d7e4bb01871b61e4287ab6&v=4"
            />
          </div>
          <div class="w-auto lg:w-2/3 text-left">
            <h4 class="font-black text-5xl mb-2">
              <span class=" text-5xl text-red-500 italic">const</span> whoAmI ={" "}
              <span class="text-green-500">&#123;</span>
            </h4>
            <h4 class="font-light text-xl pl-6">
              <span class="pr-6 font-bold">name:</span>
              <span class="font-bold">[</span>
            </h4>
            <div class="pl-6">
              <h4 class="font-light text-xl pl-6">
                <span class="pr-6 font-bold">first:</span>'Todd',
              </h4>
              <h4 class="font-light text-xl pl-6">
                <span class="pr-6 font-bold">last:</span>'Christensen',
              </h4>
            </div>
            <h4 class="font-light text-xl pl-6">
              <span class="font-bold">]</span>,
            </h4>
            {/* <h4 class="font-light text-2xl pl-6">
                  <span class="pr-6 font-bold">age:</span>
                  <span class="text-purple-500 font-bold mr-2">
                    getAge('1986')
                  </span>{" "}
                  <span class="text-gray-500">// {getAge("1986/04/18")}</span>,
                </h4> */}
            <div class="max-w-xl block md:grid lg:grid xl:grid grid-cols-3 gap-4 text-xl pl-6">
              <span class="block sm:w-full col-span-1 pr-6 font-bold font-light">
                profession:
              </span>
              <span class="sm:block sm:w-full sm:clear-both md:col-span-2 lg:col-span-2 xl:col-span-2">
                'Javascript Developer',
              </span>
            </div>

            <div class="max-w-2xl block md:grid lg:grid xl:grid grid-cols-3 gap-4 text-xl pl-6">
              <span class="block sm:w-full col-span-1 pr-6 font-bold font-light">
                currentLocation:
              </span>
              <span class="sm:block sm:w-full sm:clear-both md:col-span-2 lg:col-span-2 xl:col-span-2">
                'Angeles, Philippines 🇵🇭',
              </span>
            </div>

            <div class="max-w-2xl block md:grid lg:grid xl:grid grid-cols-3 gap-4 text-xl pl-6">
              <span class="block sm:w-full col-span-1 pr-6 font-bold font-light">
                hometown:
              </span>
              <span class="sm:block sm:w-full sm:clear-both md:col-span-2 lg:col-span-2 xl:col-span-2">
                'Foster City, CA, USA 🇺🇲',
              </span>
            </div>

            <span class=" font-black text-5xl mb-2 text-green-500">&#125;</span>
          </div>
        </div>
      </div>
    </header>
    <div class="container px-4 m-auto">
      <div class="row flex align-center flex-wrap">
        <h2 class="font-black text-5xl mb-4">
          <span class=" text-5xl text-purple-500 italic">return</span>{" "}
          <span class="text-yellow-500">( </span>
          <span class="text-red-500">projects</span>
          <span class="text-blue-500">.map</span>
          <span class="text-yellow-500">(</span> project &rArr;{" "}
          <span class="text-green-500">&#123;</span>
        </h2>
      </div>
      <div class="row">
        {/* card */}
        <div class="card w-full rounded overflow-hidden shadow-lg">
          <img
            class="w-full"
            src="https://storage.cloud.google.com/toddchristensen/portfolio/binance-taker-trades.jpg"
            alt="Binance Taker Trades"
          />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 text-gray-200">
              Binance Taker Trades
              <div class="card__actions mt-2 mb-2 flex flex-wrap flex-row">
                <div class="card__action mr-4">
                  <a
                    class="relative flex flex-row items-center"
                    href="https://binance-taker-trades.herokuapp.com/"
                    target="_blank"
                    alt="Live Site"
                  >
                    <svg
                      class="mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="35"
                      height="35"
                      viewBox="0 0 172 172"
                    >
                      <g
                        fill="none"
                        fill-rule="nonzero"
                        stroke="none"
                        stroke-width="1"
                        stroke-linecap="butt"
                        stroke-linejoin="miter"
                        stroke-miterlimit="10"
                        stroke-dasharray=""
                        stroke-dashoffset="0"
                        font-family="none"
                        font-weight="none"
                        font-size="none"
                        text-anchor="none"
                      >
                        <path d="M0,172v-172h172v172z" fill="none"></path>
                        <g fill="#4a5568">
                          <path d="M30.1,21.5c-4.72832,0 -8.6,3.87168 -8.6,8.6v111.8c0,4.72832 3.87168,8.6 8.6,8.6h111.8c4.72832,0 8.6,-3.87168 8.6,-8.6v-62.35h-4.3v62.35c0,2.40195 -1.89805,4.3 -4.3,4.3h-111.8c-2.40195,0 -4.3,-1.89805 -4.3,-4.3v-111.8c0,-2.40195 1.89805,-4.3 4.3,-4.3h62.35v-4.3zM109.65,21.5v4.3h33.50977l-11.36309,11.35469l-52.6918,52.7002l3.04023,3.04023l52.6582,-52.6498l11.39668,-11.40508v33.50976h4.3v-40.85zM38.7,36.55c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM47.3,36.55c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM55.9,36.55c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM64.5,36.55c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM73.1,36.55c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM81.7,36.55c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM90.3,36.55c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM38.7,45.15c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM38.7,53.75c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM38.7,62.35c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM38.7,70.95c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM38.7,79.55c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM133.3,79.55c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM38.7,88.15c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM133.3,88.15c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM38.7,96.75c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM133.3,96.75c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM38.7,105.35c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM133.3,105.35c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM38.7,113.95c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM133.3,113.95c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM38.7,122.55c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM133.3,122.55c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM38.7,131.15c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM47.3,131.15c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM55.9,131.15c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM64.5,131.15c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM73.1,131.15c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM81.7,131.15c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM90.3,131.15c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM98.9,131.15c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM107.5,131.15c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM116.1,131.15c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM124.7,131.15c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM133.3,131.15c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15z"></path>
                        </g>
                      </g>
                    </svg>
                    <span class="text-xs">Visit Site</span>
                  </a>
                </div>
                <div class="card__action ml-2 mr-4">
                  <a
                    class="relative flex flex-row items-center"
                    href="https://github.com/trchristensen/binance-taker-trades-api"
                    target="_blank"
                    alt="Github"
                  >
                    <svg
                      class="mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="35"
                      height="35"
                      viewBox="0 0 172 172"
                    >
                      <g
                        fill="none"
                        fill-rule="nonzero"
                        stroke="none"
                        stroke-width="1"
                        stroke-linecap="butt"
                        stroke-linejoin="miter"
                        stroke-miterlimit="10"
                        stroke-dasharray=""
                        stroke-dashoffset="0"
                        font-family="none"
                        font-weight="none"
                        font-size="none"
                        text-anchor="none"
                      >
                        <path d="M0,172v-172h172v172z" fill="none"></path>
                        <g className="sidebar-icon-fill" fill="#6c7983">
                          <path d="M78.11667,15.05c-32.96667,3.58333 -59.48333,30.1 -63.06667,62.35c-3.58333,33.68333 15.76667,63.78333 45.15,75.25c2.15,0.71667 4.3,-0.71667 4.3,-3.58333v-11.46667c0,0 -2.86667,0.71667 -6.45,0.71667c-10.03333,0 -14.33333,-8.6 -15.05,-13.61667c-0.71667,-2.86667 -2.15,-5.01667 -4.3,-7.16667c-2.15,-0.71667 -2.86667,-0.71667 -2.86667,-1.43333c0,-1.43333 2.15,-1.43333 2.86667,-1.43333c4.3,0 7.88333,5.01667 9.31667,7.16667c3.58333,5.73333 7.88333,7.16667 10.03333,7.16667c2.86667,0 5.01667,-0.71667 6.45,-1.43333c0.71667,-5.01667 2.86667,-10.03333 7.16667,-12.9c-16.48333,-3.58333 -28.66667,-12.9 -28.66667,-28.66667c0,-7.88333 3.58333,-15.76667 8.6,-21.5c-0.71667,-1.43333 -1.43333,-5.01667 -1.43333,-10.03333c0,-2.86667 0,-7.16667 2.15,-11.46667c0,0 10.03333,0 20.06667,9.31667c3.58333,-1.43333 8.6,-2.15 13.61667,-2.15c5.01667,0 10.03333,0.71667 14.33333,2.15c9.31667,-9.31667 20.06667,-9.31667 20.06667,-9.31667c1.43333,4.3 1.43333,8.6 1.43333,11.46667c0,5.73333 -0.71667,8.6 -1.43333,10.03333c5.01667,5.73333 8.6,12.9 8.6,21.5c0,15.76667 -12.18333,25.08333 -28.66667,28.66667c4.3,3.58333 7.16667,10.03333 7.16667,16.48333v18.63333c0,2.15 2.15,4.3 5.01667,3.58333c26.51667,-10.75 45.15,-36.55 45.15,-66.65c0,-43 -36.55,-76.68333 -79.55,-71.66667z"></path>
                        </g>
                      </g>
                    </svg>
                    <span class="text-xs">Backend Code</span>
                  </a>
                </div>
                <div class="card__action ml-2">
                  <a
                    class="relative flex flex-row items-center"
                    href="https://github.com/trchristensen/binance-taker-trades-client"
                    target="_blank"
                    alt="Github"
                  >
                    <svg
                      class="mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="35"
                      height="35"
                      viewBox="0 0 172 172"
                    >
                      <g
                        fill="none"
                        fill-rule="nonzero"
                        stroke="none"
                        stroke-width="1"
                        stroke-linecap="butt"
                        stroke-linejoin="miter"
                        stroke-miterlimit="10"
                        stroke-dasharray=""
                        stroke-dashoffset="0"
                        font-family="none"
                        font-weight="none"
                        font-size="none"
                        text-anchor="none"
                      >
                        <path d="M0,172v-172h172v172z" fill="none"></path>
                        <g className="sidebar-icon-fill" fill="#6c7983">
                          <path d="M78.11667,15.05c-32.96667,3.58333 -59.48333,30.1 -63.06667,62.35c-3.58333,33.68333 15.76667,63.78333 45.15,75.25c2.15,0.71667 4.3,-0.71667 4.3,-3.58333v-11.46667c0,0 -2.86667,0.71667 -6.45,0.71667c-10.03333,0 -14.33333,-8.6 -15.05,-13.61667c-0.71667,-2.86667 -2.15,-5.01667 -4.3,-7.16667c-2.15,-0.71667 -2.86667,-0.71667 -2.86667,-1.43333c0,-1.43333 2.15,-1.43333 2.86667,-1.43333c4.3,0 7.88333,5.01667 9.31667,7.16667c3.58333,5.73333 7.88333,7.16667 10.03333,7.16667c2.86667,0 5.01667,-0.71667 6.45,-1.43333c0.71667,-5.01667 2.86667,-10.03333 7.16667,-12.9c-16.48333,-3.58333 -28.66667,-12.9 -28.66667,-28.66667c0,-7.88333 3.58333,-15.76667 8.6,-21.5c-0.71667,-1.43333 -1.43333,-5.01667 -1.43333,-10.03333c0,-2.86667 0,-7.16667 2.15,-11.46667c0,0 10.03333,0 20.06667,9.31667c3.58333,-1.43333 8.6,-2.15 13.61667,-2.15c5.01667,0 10.03333,0.71667 14.33333,2.15c9.31667,-9.31667 20.06667,-9.31667 20.06667,-9.31667c1.43333,4.3 1.43333,8.6 1.43333,11.46667c0,5.73333 -0.71667,8.6 -1.43333,10.03333c5.01667,5.73333 8.6,12.9 8.6,21.5c0,15.76667 -12.18333,25.08333 -28.66667,28.66667c4.3,3.58333 7.16667,10.03333 7.16667,16.48333v18.63333c0,2.15 2.15,4.3 5.01667,3.58333c26.51667,-10.75 45.15,-36.55 45.15,-66.65c0,-43 -36.55,-76.68333 -79.55,-71.66667z"></path>
                        </g>
                      </g>
                    </svg>
                    <span class="text-xs">Frontend Code</span>
                  </a>
                </div>
              </div>
            </div>
            <p class="text-gray-300 text-lg">
              A cryptocurrency market order volume monitor. Using Binance
              exchange's API, it manipulates data and displays it live on the
              front-end in a sortable and easy to consume table.
            </p>
          </div>
          <div class="px-6 py-4">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 my-1">
              nodeJs
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 my-1">
              express
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 my-1">
              VueJs
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 my-1">
              redis
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 my-1">
              tailwindCSS
            </span>
          </div>
        </div>
        {/* card */}
      </div>
      <div class="row">
        <span class="font-black text-5xl mb-2 block">
          <span class="text-green-500">&#125;</span>
          <span class="text-yellow-500">))</span>;
        </span>
      </div>
    </div>
  </Layout>
);

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
                  <span class=" text-5xl text-red-500 italic">const</span>{" "}
                  whoAmI = <span class="text-green-500">&#123;</span>
                </h4>
                <h4 class="font-light text-xl pl-6">
                  <span class="pr-6 font-bold">name:</span><span class="font-bold">[</span>
                </h4>
                <div class="pl-6">
                  <h4 class="font-light text-xl pl-6">
                    <span class="pr-6 font-bold">first:</span>'Todd',
                  </h4>
                  <h4 class="font-light text-xl pl-6">
                    <span class="pr-6 font-bold">last:</span>'Christensen',
                  </h4>
                </div>
                <h4 class="font-light text-xl pl-6"><span class="font-bold">]</span>,</h4>
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

                <span class=" font-black text-5xl mb-2 text-green-500">
                  &#125;
                </span>
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
                  <a
                    href="https://binance-taker-trades.herokuapp.com/"
                    target="_blank"
                  >
                    Binance Taker Trades
                  </a>
                </div>
                <p class="text-gray-300 text-lg">
                  A cryptocurrency market order volume monitor. Using Binance
                  exchange's API, it manipulates data and displays it live on
                  the front-end in a sortable and easy to consume table.
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
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 my-1">
                  redis
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

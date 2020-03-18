import Layout from "../components/Layout";


export default () => (
  <Layout>
    <div id="app" class="min-h-screen">
      <nav class="sidenav hidden lg:inline-flex xl:inline-flex fixed left-0 top-0 bottom-0 overflow-x-visible bg-gray-200 h-screen flex-col items-center z-50">
        <div class="container">
          <div class="links flex flex-wrap">
            <a href="/" class="no-underline text-gray-700 px-2 py-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="80"
                height="80"
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
                  <g fill="#6c7983" class="sidebar-icon-fill">
                    <path d="M86,12.51367l-70.95,44.34375v20.12266l3.29219,-2.05762l1.00781,-0.63828v78.36582h133.3v-78.35742l4.3,2.6875v-20.12266zM86,17.58633l66.65,41.65625v9.98574l-66.65,-41.66465l-66.65,41.66465v-9.98574zM86,32.63633l62.35,38.96875v61.69492c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15v10.75h-43v-10.75c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15v-38.7h-38.7v38.7c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15v10.75h-43v-10.75c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15v-61.70332zM66.65,53.75v25.8h38.7v-25.8zM70.95,58.05h12.9v17.2h-12.9zM88.15,58.05h12.9v17.2h-12.9zM70.95,98.9h30.1v49.45h-30.1zM93.525,122.55c-1.78047,0 -3.225,1.44453 -3.225,3.225c0,1.78047 1.44453,3.225 3.225,3.225c1.78047,0 3.225,-1.44453 3.225,-3.225c0,-1.78047 -1.44453,-3.225 -3.225,-3.225zM32.25,133.3c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM40.85,133.3c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM49.45,133.3c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM58.05,133.3c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM113.95,133.3c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM122.55,133.3c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM131.15,133.3c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM139.75,133.3c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15z"></path>
                  </g>
                </g>
              </svg>
            </a>
            <a href="/projects" class="no-underline text-gray-700 px-2 py-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="80"
                height="80"
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
                    <path d="M27.95,27.95c-5.9125,0 -10.75,4.8375 -10.75,10.75v105.35h137.6v-105.35c0,-5.9125 -4.8375,-10.75 -10.75,-10.75zM27.95,32.25h116.1c3.58613,0 6.45,2.86387 6.45,6.45v6.45c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15v90.3h-129v-90.3c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15v-6.45c0,-3.58613 2.86387,-6.45 6.45,-6.45zM30.1,45.15c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM38.7,45.15c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM47.3,45.15c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM55.9,45.15c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM64.5,45.15c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM73.1,45.15c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM81.7,45.15c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM90.3,45.15c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM98.9,45.15c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM107.5,45.15c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM116.1,45.15c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM124.7,45.15c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM133.3,45.15c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM141.9,45.15c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM93.47461,66.65l-22.52461,58.05h4.3084l22.52461,-58.05zM60.82988,78.02988l-16.57012,16.57012l16.57012,16.57012l3.04023,-3.04023l-13.52988,-13.52988l13.52988,-13.52988zM111.17012,78.02988l-3.04023,3.04023l13.52988,13.52988l-13.52988,13.52988l3.04023,3.04023l16.57012,-16.57012z"></path>
                  </g>
                </g>
              </svg>
            </a>
            <a href="/resume" class="no-underline text-gray-700 px-2 py-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="80"
                height="80"
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
                    <path d="M32.25,19.35v133.3h107.5v-133.3zM36.55,23.65h98.9v124.7h-98.9zM47.3,27.95c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM47.3,36.55c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM73.1,36.55c-5.9125,0 -10.75,4.8375 -10.75,10.75c0,3.26699 1.51172,6.17285 3.82969,8.15488c-4.8207,2.51113 -8.12969,7.5502 -8.12969,13.34512h4.3c0,-5.96289 4.78711,-10.75 10.75,-10.75c5.96289,0 10.75,4.78711 10.75,10.75h4.3c0,-5.79492 -3.30898,-10.83398 -8.12969,-13.34512c2.31797,-1.98203 3.82969,-4.88789 3.82969,-8.15488c0,-5.9125 -4.8375,-10.75 -10.75,-10.75zM96.75,38.7v4.3h25.8v-4.3zM73.1,40.85c3.58613,0 6.45,2.86387 6.45,6.45c0,3.58613 -2.86387,6.45 -6.45,6.45c-3.58613,0 -6.45,-2.86387 -6.45,-6.45c0,-3.58613 2.86387,-6.45 6.45,-6.45zM47.3,45.15c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM96.75,51.6v4.3h25.8v-4.3zM47.3,53.75c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM47.3,62.35c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM96.75,64.5v4.3h25.8v-4.3zM47.3,70.95c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM47.3,79.55c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM47.3,88.15c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM58.05,88.15v4.3h64.5v-4.3zM47.3,96.75c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM58.05,103.2v4.3h51.6v-4.3zM47.3,105.35c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM47.3,113.95c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM58.05,118.25v4.3h64.5v-4.3zM47.3,122.55c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM47.3,131.15c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM58.05,133.3v4.3h51.6v-4.3zM47.3,139.75c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15z"></path>
                  </g>
                </g>
              </svg>
            </a>
            <a
              href="https://medium.com/@christensen.tr"
              target="_blank"
              class="no-underline text-gray-700 px-2 py-4 w-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="45"
                height="45"
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
                    <path d="M163.42688,42.79844c-0.16125,-0.22844 -0.33594,-0.45687 -0.5375,-0.65844c-0.17469,-0.18812 -0.34938,-0.37625 -0.55094,-0.5375c-0.47031,-0.41656 -0.9675,-0.79281 -1.54531,-1.075l-41.15906,-20.855l-2.44563,-1.23625h-0.01344c-0.76594,-0.38969 -1.58562,-0.68531 -2.41875,-0.88687c-0.91375,-0.22844 -1.85437,-0.34938 -2.78156,-0.34938c-4.12531,0 -7.99531,2.16344 -10.11844,5.63031l-6.07375,10.01094l-18.11375,29.80438l-9.76906,-19.10813c-0.7525,-1.23625 -1.80062,-2.20375 -3.05031,-2.83531l-41.32031,-20.90875c0,-0.01344 -0.01344,-0.01344 -0.02688,-0.02687l-1.30344,-0.645c-1.72,-0.87344 -3.49375,-1.31688 -5.2675,-1.31688c-5.72437,0 -10.05125,4.63594 -10.05125,10.79031v93.06813c0,5.07937 3.26531,10.41406 7.78031,12.69844l37.49062,18.97375c1.90813,0.9675 3.85656,1.46469 5.805,1.46469c6.28875,0 10.84406,-4.945 10.84406,-11.77125v-30.03281l75.68,38.36406v-0.04031l2.64719,1.34375c2.31125,1.16906 4.6225,1.76031 6.88,1.76031c6.43656,0 11.11281,-4.79719 11.11281,-11.395v-95.43312c0,-1.80063 -0.645,-3.44 -1.69312,-4.79719zM61.92,143.02875c0,3.06375 -1.63937,4.89125 -3.96406,4.89125c-0.81969,0 -1.73344,-0.22844 -2.70094,-0.71219l-37.49062,-18.98719c-2.20375,-1.11531 -4.00438,-4.07156 -4.00438,-6.5575v-93.06813c0,-2.45906 1.30344,-3.91031 3.17125,-3.91031c0.65844,0 1.3975,0.17469 2.16344,0.56438l1.31688,0.67187h0.01344l41.32031,20.92219c0.06719,0.04031 0.12094,0.1075 0.17469,0.16125zM105.21563,30.55688l2.52625,-4.15219c0.90031,-1.47812 2.55312,-2.32469 4.23281,-2.32469c0.38969,0 0.79281,0.05375 1.1825,0.16125c0.29563,0.06719 0.60469,0.17469 0.92719,0.33594l43.57781,22.06438c0.01344,0 0.01344,0.01344 0.01344,0.01344l0.04031,0.01344c0.02688,0.01344 0.02688,0.05375 0.05375,0.06719c0.215,0.17469 0.30906,0.47031 0.16125,0.71219l-43.40312,71.43375l-4.43438,7.28312l-28.75625,-56.31656zM68.8,105.28281v-44.86781l30.89281,60.5225l-27.78875,-14.06906zM158.24,143.02875c0,2.87563 -1.70656,4.515 -4.21937,4.515c-1.12875,0 -2.41875,-0.3225 -3.77594,-1.00781l-6.22156,-3.15781l-27.78875,-14.06906l42.00562,-69.1225z"></path>
                  </g>
                </g>
              </svg>
            </a>
            <a
              href="https://github.com/trchristensen"
              target="_blank"
              class="no-underline text-gray-700 px-2 py-4 w-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="96"
                height="96"
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
            </a>
          </div>
        </div>
      </nav>
      <main class="">
        <div class="container px-4 m-auto">
          <div class="row flex align-center flex-wrap">
            <h2 class="font-black text-5xl mb-2">
              <span class=" text-4xl text-red-500 italic">const</span> resume ={" "}
              <span class="text-green-500">&#123;</span>
            </h2>
          </div>

          <div class="row">
            <span class="font-black text-5xl mb-2 block text-green-500">
              &#125;
            </span>
          </div>
        </div>
      </main>
      <footer class="bg-gray-900">
        <div class="container mx-auto">
          <div class="row">
            <div class="col p-4">
              <p class="text-base text-gray-600 text-center">
                Site made with ☕ ..and 🍺
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </Layout>
);

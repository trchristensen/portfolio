export default ({ children }) => {
  return (
    <div className="antialiased text-gray-900 justify-center min-h-screen">
      { children }
    </div>
  )
}

<style jsx>{`
  body {
   background-color: #12181b;
    font-size: 20px;
  } 

  main {
    margin-left: 70px;
  }

  .avatar {
    width: 300px;
    max-width:100%;
  }

  .sidenav {
    height: 100vh;
    min-height: 500px;
    overflow-x: visible;
    position: fixed;
    top: 0;
    left: 0;
    width: 70px;
    max-width: 70px;
    padding-top: 70px;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    background: #2a2e35;
    box-shadow: rgb(1, 1, 1) 4px 0px 10px -3px;
    z-index: 99;
    transition: left .3s ease;
  }

  .sidenav .links a {
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;

  }

  .sidenav svg {
    max-width: 100%;
  }
`}</style>
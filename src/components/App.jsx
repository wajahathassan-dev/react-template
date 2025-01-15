import yollLogo from '/yollo-logo.svg';

function App() {

  return (
    <div className='container'>
      <div className='d-flex justify-content-center m-5'>
          <img src={yollLogo} className="w-25" alt="logo" />
      </div>
      <h1 className='text-center text-secondary fw-bold'>Yoll Vite-React Template</h1>
    </div>
  );
}

export default App;

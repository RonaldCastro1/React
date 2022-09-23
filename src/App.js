import './css/bootstrap.min.css';
function App() {
  return (
      <body>
        <h1 className='text-center'>ESPECIES EN PELIGRO DE EXTINCION</h1>
        <table class="table table-striped table-inverse table-responsive">
          <thead className='table'>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th></th>
            </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="row">1</td>
                <td>Oso Polar</td>
                <td> </td>
              </tr>
              <tr>
                <td scope="row">2</td>
                <td>Rinoceronte De Java</td>
                <td></td>
              </tr>
              <tr>
                <td scope="row">3</td>
                <td>Tigre</td>
                <td></td>
              </tr>
              <tr>
                <td scope="row">4</td>
                <td>Canguro </td>
                <td></td>
              </tr>
              <tr>
                <td scope="row">5</td>
                <td>Atun Rojo</td>
                <td></td>
              </tr>
              <tr>
                <td scope="row">6</td>
                <td>Gorila De Montaña</td>
                <td></td>
              </tr>
              <tr>
                <td scope="row">7</td>
                <td>Pinguino</td>
                <td></td>
              </tr>
              <tr>
                <td scope="row">8</td>
                <td>Perro Salvaje Africano</td>
                <td></td>
              </tr>
              <tr>
                <td scope="row">9</td>
                <td>Mariposa Monarca</td>
                <td></td>
              </tr>
              <tr>
                <td scope="row">10</td>
                <td>Abejas</td>
                <td></td>
              </tr>
            </tbody>
        </table>
        
      </body>
  );
}

export default App;

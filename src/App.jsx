
import { render } from '@testing-library/react';
import './App.css';

function App() {

  const name = "Hello World";
  const obj = { name: "Hello World Object" };
  const data = ["We", "are", "United"];
  const list = [{ name: "Hello World 1" }, { name: "Hello World 2" }, { name: "Hello World 3" }];
  const complex = [{ company: "XYZ", jobs: ["javascript", "React"] }, { company: "ABC", jobs: ["AngularJs", "inoic"] }]

  return (
    <div className="App">

      <h1>{name}</h1><hr />
      <h2>{obj.name}</h2><hr />
      <ul>
        {
          data.map((value, index) => {
            return <li key={index}>{value}</li>

          })
        }
      </ul><hr />
      <ul>
        {
          list.map((object, key) => {
            return <li key={key}>{object.name}</li>
          })
        }
      </ul><hr />
      <table>
        {
          complex.map((render, index) => {
            return <tr>
              <th>Company</th>
              <td>
                {render.company}
              </td>
            </tr>

          })

        }
        {
          complex.map((render, index) => {
            return <tr>
              <th>Jobs</th>
              <td>
                {render.jobs}
              </td>
            </tr>

          })
        }


      </table>



    </div>
  );
}

export default App;

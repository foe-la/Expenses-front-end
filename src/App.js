import React, { useState } from 'react';
import './App.css';

  function App() {

  const [name, setName] = useState('');
  const [datetime, setDatetime] = useState('');
  const [description, setDescription] = useState('');

  function addNewTransaction(ev) {
    ev.preventDefault();
    const url = process.env.API_URL;
    console.log(url);
    // fetch(url)
  }
  
  return (
    <main>
      <h1>$400<span>.00</span></h1>
      <form onSubmit={addNewTransaction}>
        <div className="expenses">
          <input type="text" 
                 value={name}
                 onChange={(ev) => setName(ev.target.value)}
                 placeholder='-100 hair done'
                 />
          <input type="datetime-local"
                 value={datetime}
                 onChange={(ev) => setDatetime(ev.target.value)}
                 />
        </div>
        <div className="description">
          <input type="text"
                 value={description}
                 onChange={(ev) => setDescription(ev.target.value)} 
                 placeholder='description'
                 />
        </div>
        <button type="submit">Submit transaction</button>
      </form>
      <div className ="transactions">
        <div className="transaction">
          <div className="left">
            <div className="name">Hair Appointment</div>
            <div className="description">"Monthly maintenance"</div>
          </div>
          <div className="right">
            <div className="price red">-$100</div>
            <div className="datetime">10/01/2023 12:30 PM</div>
          </div>
        </div>
        <div className="transaction">
          <div className="left">
            <div className="name">New York trip</div>
            <div className="description">"Shopping"</div>
          </div>
          <div className="right">
            <div className="price red">-$500</div>
            <div className="datetime">10/08/2023 9:30 AM</div>
          </div>
        </div>
        <div className="transaction">
          <div className="left">
            <div className="name">Website</div>
            <div className="description">"Made for moms business"</div>
          </div>
          <div className="right">
            <div className="price green">+$320</div>
            <div className="datetime">10/05/2023 1:30 PM</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;

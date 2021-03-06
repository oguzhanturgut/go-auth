import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
        <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Home</a>

                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Register</a>
                        </li>

                    </ul>

                </div>
            </div>
        </nav>
      <main className="form-signin">
        <form>
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
            <input type="email"  className="form-control" placeholder="Email address" required autoFocus />
              <input type="password" className="form-control" placeholder="Password" required />
                <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        </form>
      </main>
    </div>
  );
}

export default App;

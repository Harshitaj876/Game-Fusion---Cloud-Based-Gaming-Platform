import React from 'react';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../Firebase';

const Home = (props) => {
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Redirect or perform any other actions after logout
        // For example, you can redirect the user to the login page
        window.location.reload(); // Reload the page to reflect changes
      })
      .catch((error) => {
        console.error('Error signing out: ', error);
      });
  };

  return (
    <div>
      <div>
        <h1><Link to="/login">Login</Link></h1><br/>
        <h1><Link to="/signup">SignUp</Link></h1><br/>
      </div>

      <br/><br/><br/>
      {props.name ? (
        <>
          <h2>Welcome - {props.name}</h2>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <h2>Login Please</h2>
      )}
    </div>
  );
}

export default Home;

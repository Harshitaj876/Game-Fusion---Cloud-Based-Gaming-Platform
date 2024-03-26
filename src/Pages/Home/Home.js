import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../Firebase';
import '../Home/Home.css'

const Home = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setUser(null); // Reset user state upon logout
        // Redirect or perform any other actions after logout
        // For example, you can redirect the user to the login page
      })
      .catch((error) => {
        console.error('Error signing out: ', error);
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='top'>

      <div className='topBar'>
        <div className='namebox'>
          {!user ? (
              <h2><Link to="/login" className='name'>Click here to Login</Link></h2>
            ) : (
              <h2 className='name'>Hello {user.displayName}</h2>
            )}
            <h1>Welcome Back!</h1>
            {user && <button onClick={handleLogout}>Logout</button>}
        </div>
      </div>
    </div>
  );
}

export default Home;

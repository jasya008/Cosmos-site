import { Container } from '@mui/material'
import React from 'react'
import { Link, NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { Footer } from '../footer'
import { GetContext } from '../context'

export const Layouts = () => {
  const setActive = ({ isActive }) => (isActive ? 'active-page' : null)

  const location = useLocation();
  const { user, setUser } = GetContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser({
      email: "",
    });

    localStorage.removeItem("user");
    navigate("/login");
  };


  return (
    <>
      <header>
        <nav>
          <Container fixed>
            <div className="navbar">
              <Link to="/">
              <h2 className="logo_title">SPACE EXPLORE</h2>
              </Link>
              <div className="all_text">
                <NavLink to="/" className={setActive}>
                  HOME
                </NavLink>
                <NavLink to="/SolarSystem" className={setActive}>
                  SOLAR SYSTEM
                </NavLink>
                <NavLink to="/Observations" className={setActive}>
                  OBSERVATION
                </NavLink>
                <NavLink to="/objects" className={setActive}>
                  ObJECTS
                </NavLink>
                {user.email === "admin@gmail.com" ? (
                  <NavLink to="/adminPage" className={setActive}>
                    ADMIN
                  </NavLink>
                ) : null}

                {user.email ? (
                  <button onClick={handleLogout} className='btn'>Exit</button>
                ) : null}

                {!user.email &&
                  (location.pathname = "/" ||
                    location.pathname === '/login') && (
                    < Link to="/registr">
                      <button className='btn'>Sign Up</button>
                    </Link>
                  )
                }

                {!user.email && location.pathname === "/register" && (
                  < Link to="/registr">
                    <button className='btn'>Login</button>
                  </Link>
                )}
              </div>
            </div>
          </Container>
        </nav>
      </header >



      <main>
        <Outlet />
      </main>

      <Footer />
    </>

  )
}

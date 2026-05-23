import { Container } from '@mui/material'
import React from 'react'
import { Link, NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { Footer } from '../footer'
import { GetContext } from '../context'


export const Layouts = () => {
  const setActive = ({ isActive }) => (isActive ? 'active-page' : null)

  const location = useLocation();
  const { data } = GetContext(); // user and setUser removed
  const navigate = useNavigate();

  // handleLogout function removed

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
                {/* Admin link check removed */}
                {/* Exit button removed */}
                {/* Sign Up/Login buttons removed */}
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

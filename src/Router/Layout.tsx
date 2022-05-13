import { Link, Outlet } from "react-router-dom"
import "./Layout.css"

export const Layout=()=>{
    return(
        <div className="layout">
          <header>
              <nav>
                  <ul className="list">
                      <li className="li1"><Link to={"/"}>Home</Link></li>
                      <li><Link to={"/contact"}>Contact</Link></li>
                      <li><Link to={"/about"}>About</Link></li>
                  </ul>
              </nav>
          </header>
            <main>

                <Outlet/>
            </main>
        </div>
    )
};
import React from 'react'
import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlateWheat, faBowlFood, faMugSaucer, faBurger, faPizzaSlice, faFireBurner, faDrumstickBite, faFish, faCakeCandles, faBeerMugEmpty, faCartShopping, faUserGear } from '@fortawesome/free-solid-svg-icons'

function Sidebar() {
    return (
      <div className="d-flex flex-column flex-shrink-0 bg-light" style={{ width: '4.5rem' }}>
        <a href="/" className="d-block p-3 link-dark text-decoration-none" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Icon-only">
          <img src="https://iili.io/J90lcJf.webp" alt="Restaurant Logo" className='rounded-circle' style={{ width: '3rem', height: 'auto' }}></img>
          <span className="visually-hidden">Icon-only</span>
        </a>
        <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
          <li className="nav-item">
            <Button href="#" className="nav-link py-3 border-bottom" aria-current="page" title="Home" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Home">
              <FontAwesomeIcon icon={faPlateWheat} />
            </Button>
          </li>
          <li>
            <Button href="#" className="nav-link py-3 border-bottom" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Dashboard">
              <FontAwesomeIcon icon={faBurger} />
            </Button>
          </li>
          <li>
            <Button href="#" className="nav-link py-3 border-bottom" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Orders">
              <FontAwesomeIcon icon={faPizzaSlice} /> 
            </Button>
          </li>
          <li>
            <Button href="#" className="nav-link py-3 border-bottom" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Products">
              <FontAwesomeIcon icon={faFireBurner} />
            </Button>
          </li>
          <li>
            <Button href="#" className="nav-link py-3 border-bottom" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Customers">
              <FontAwesomeIcon icon={faDrumstickBite} />
            </Button>
          </li>
          <li>
            <Button href="#" className="nav-link py-3 border-bottom" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Customers">
              <FontAwesomeIcon icon={faFish} />
            </Button>
          </li>
          <li>
            <Button href="#" className="nav-link py-3 border-bottom" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Customers">
            <FontAwesomeIcon icon={faBowlFood} />
            </Button>
          </li>
          <li>
            <Button href="#" className="nav-link py-3 border-bottom" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Customers">
              <FontAwesomeIcon icon={faCakeCandles} />            
            </Button>
          </li>
          <li>
            <Button href="#" className="nav-link py-3 border-bottom" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Customers">
              <FontAwesomeIcon icon={faMugSaucer} />
            </Button>
          </li>
          <li>
            <Button href="#" className="nav-link py-3 border-bottom" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Customers">
              <FontAwesomeIcon icon={faBeerMugEmpty} />
            </Button>
          </li>
          <li>
            <Button href="#" className="nav-link py-3 border-bottom" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Customers">
              <FontAwesomeIcon icon={faCartShopping} />
            </Button>
          </li>
          <li>
            <Button href="#" className="nav-link py-3 border-bottom" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Customers" style={{ height: '7rem'}}>
              <FontAwesomeIcon icon={faUserGear} />
            </Button>
          </li>

          
        </ul>
      </div>
    );
  }
  
  export default Sidebar;  
  
  
  
  
  
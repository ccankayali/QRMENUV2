import React from 'react'
import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../Design/App.css'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlateWheat, faBurger, faPizzaSlice, faBowlFood, faMugSaucer, faFireBurner, faDrumstickBite, faFish, faCakeCandles, faBeerMugEmpty, faCartShopping, faUserGear } from '@fortawesome/free-solid-svg-icons'

const Sidebar = ( {changePage, currentPage} ) => {
    return (
      <div className="d-flex flex-column flex-shrink-0 bg-light" style={{ width: '2.5rem', height: '0vh'}}>
        

        <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
        
        <li className="nav-item">
          <Button
            aria-current="page"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            data-bs-original-title="GurmeLogo"
            className={`nav-link p-1 link-dark text-decoration-none ${currentPage === 'GurmeLogo' ? 'active' : ''}`}
            title="GurmeLogo"
            onClick={() => changePage('GurmeLogo')}
          >
            <img src="https://iili.io/J90lcJf.webp" alt="Restaurant Logo" className="rounded-circle" style={{ width: '2.5rem', height: 'auto'}}></img>
          </Button>
        </li>


        <li className="nav-item ">
          <Button
            aria-current="page"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            data-bs-original-title="Breakfast"
            className={`nav-link py-3 border-bottom ${currentPage === 'Breakfast' ? 'active' : ''}`}
            title="Breakfast"
            onClick={() => changePage('Breakfast')}
          >
            <FontAwesomeIcon icon={faPlateWheat} />
          </Button>
        </li>
        <li>
          <Button
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            data-bs-original-title="Burger"
            className={`nav-link py-3 border-bottom ${currentPage === 'Burger' ? 'active' : ''}`}
            title="Burger"
            onClick={() => changePage('Burger')}
          >
            <FontAwesomeIcon icon={faBurger} />
          </Button>
        </li>
        <li>
          <Button
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            data-bs-original-title="Pizza"
            className={`nav-link py-3 border-bottom ${currentPage === 'Pizza' ? 'active' : ''}`}
            title="Pizza"
            onClick={() => changePage('Pizza')}
          >
            <FontAwesomeIcon icon={faPizzaSlice} />
          </Button>
        </li>


          <li>
            <Button
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            data-bs-original-title="bbq"
            className={`nav-link py-3 border-bottom ${currentPage === 'bbq' ? 'active' : ''}`}
            title="bbq"
            onClick={() => changePage('bbq')}
            style={{ paddingRight: '0.8rem'}}>
              <FontAwesomeIcon icon={faFireBurner} />
            </Button>
          </li>
          <li>
            <Button
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            data-bs-original-title="Meat"
            className={`nav-link py-3 border-bottom ${currentPage === 'Meat' ? 'active' : ''}`}
            title="Meat"
            onClick={() => changePage('Meat')}>
              <FontAwesomeIcon icon={faDrumstickBite} />
            </Button>
          </li>
          <li>
            <Button 
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            data-bs-original-title="Fish"
            className={`nav-link py-3 border-bottom ${currentPage === 'Fish' ? 'active' : ''}`}
            title="Fish"
            onClick={() => changePage('Fish')}
            style={{ paddingRight: '0.9rem'}}>
              <FontAwesomeIcon icon={faFish} />
            </Button>
          </li>
          <li>
            <Button 
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            data-bs-original-title="Salat"
            className={`nav-link py-3 border-bottom ${currentPage === 'Salat' ? 'active' : ''}`}
            title="Salat"
            onClick={() => changePage('Salat')}>
            <FontAwesomeIcon icon={faBowlFood} />
            </Button>
          </li>
          <li>
            <Button 
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            data-bs-original-title="Desert"
            className={`nav-link py-3 border-bottom ${currentPage === 'Desert' ? 'active' : ''}`}
            title="Desert"
            onClick={() => changePage('Desert')}
            style={{ paddingRight: '1.1rem'}}>
              <FontAwesomeIcon icon={faCakeCandles} />            
            </Button>
          </li>
          <li>
            <Button
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            data-bs-original-title="Coffe"
            className={`nav-link py-3 border-bottom ${currentPage === 'Coffe' ? 'active' : ''}`}
            title="Coffe"
            onClick={() => changePage('Coffe')}
            style={{ paddingRight: '0.8rem'}}>
              <FontAwesomeIcon icon={faMugSaucer} />
            </Button>
          </li>
          <li>
            <Button 
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            data-bs-original-title="Drink"
            className={`nav-link py-3 border-bottom ${currentPage === 'Drink' ? 'active' : ''}`}
            title="Drink"
            onClick={() => changePage('Drink')}>
              <FontAwesomeIcon icon={faBeerMugEmpty} />
            </Button>
          </li>
          <li>
            <Button 
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            data-bs-original-title="Shop"
            className={`nav-link py-3 border-bottom ${currentPage === 'Shop' ? 'active' : ''}`}
            title="Shop"
            onClick={() => changePage('Shop')}
            style={{ paddingRight: '0.9rem'}}>
              <FontAwesomeIcon icon={faCartShopping} />
            </Button>
          </li>
          <li>
            <Button 
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            data-bs-original-title="User"
            className={`nav-link py-3 border-bottom ${currentPage === 'User' ? 'active' : ''}`}
            title="User"
            onClick={() => changePage('User')}
            style={{ paddingRight: '0.8rem'}}>
              <FontAwesomeIcon icon={faUserGear} />
            </Button>
          </li> 
        </ul>
      </div>
    );
  }
  
  export default Sidebar;  
  
  
  
  
  
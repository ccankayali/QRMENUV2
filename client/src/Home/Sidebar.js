import React from 'react'

import '../Design/App.css'
import '../Design/Responsive.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-bootstrap'

import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlateWheat, faBurger, faPizzaSlice, faBowlFood, faMugSaucer, faFireBurner, faDrumstickBite, faBacon, faCakeCandles, faBeerMugEmpty, faMugHot, faCartShopping, faUserGear } from '@fortawesome/free-solid-svg-icons'

const Sidebar = ( {changePage, currentPage} ) => {
    return (
      <div className="after-effect d-flex flex-column flex-shrink-0 bg-light" style={{ width: '2.5rem', height: '0vh'}}>

        <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
        
        <li className="nav-item">
          <Button
            aria-current="page"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            data-bs-original-title="Home"
            className={`nav-link p-1 link-dark text-decoration-none ${currentPage === 'Home' ? 'active' : ''}`}
            title="Home"
            onClick={() => changePage('Home')}
          >
            <img src="https://iili.io/J90lcJf.webp" alt="Restaurant Logo" className="rounded-circle" style={{ width: '2.5rem', height: 'auto'}}></img>
          </Button>
        </li>


        <li className="nav-item paddingy ">
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
        <li className="nav-item paddingy ">
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
        <li className="nav-item paddingy ">
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


          <li className="nav-item paddingy ">
            <Button
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            data-bs-original-title="Mangal"
            className={`nav-link py-3 border-bottom ${currentPage === 'Mangal' ? 'active' : ''}`}
            title="Mangal"
            onClick={() => changePage('Mangal')}
            style={{ paddingRight: '0.8rem'}}>
              <FontAwesomeIcon icon={faFireBurner} />
            </Button>
          </li>

          <li className="nav-item paddingy ">
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
          <li className="nav-item paddingy ">
            <Button 
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            data-bs-original-title="Beyaz"
            className={`nav-link py-3 border-bottom ${currentPage === 'Beyaz' ? 'active' : ''}`}
            title="Beyaz"
            onClick={() => changePage('Beyaz')}
            style={{ paddingRight: '0.9rem'}}>
              <FontAwesomeIcon icon={faBacon} />
            </Button>
          </li>
          <li className="nav-item paddingy ">
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
          <li className="nav-item paddingy ">
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
          <li className="nav-item paddingy ">
            <Button
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            data-bs-original-title="Coffee"
            className={`nav-link py-3 border-bottom ${currentPage === 'Coffee' ? 'active' : ''}`}
            title="Coffee"
            onClick={() => changePage('Coffee')}
            style={{ paddingRight: '0.8rem'}}>
              <FontAwesomeIcon icon={faMugSaucer} />
            </Button>
          </li>
          <li className="nav-item paddingy ">
            <Button 
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            data-bs-original-title="Hot"
            className={`nav-link py-3 border-bottom ${currentPage === 'Hot' ? 'active' : ''}`}
            title="Hot"
            onClick={() => changePage('Hot')}>
              <FontAwesomeIcon icon={faMugHot} />
            </Button>
          </li>
          <li className="nav-item paddingy ">
            <Button 
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            data-bs-original-title="Cold"
            className={`nav-link py-3 border-bottom ${currentPage === 'Cold' ? 'active' : ''}`}
            title="Cold"
            onClick={() => changePage('Cold')}>
              <FontAwesomeIcon icon={faBeerMugEmpty} />
            </Button>
          </li>
          {/* <li className="nav-item paddingy ">
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
          <li className="nav-item paddingy ">
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
          </li>  */}
        </ul>
      </div>
    );
  }
  
  export default Sidebar;  
  
  
  
  
  
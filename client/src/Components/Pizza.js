import React from 'react'
import '../Design/App.css'
import { categories } from '../Database/data';

function Pizza() {
  const breakfastCategory = categories.find(category => category.name === 'Pizza');
  const breakfastItems = breakfastCategory ? breakfastCategory.items : [];
  const categoryName = breakfastCategory ? breakfastCategory.name : '';
  const categoryImage = breakfastCategory ? breakfastCategory.image : '';
  
  return (
    <div className="page-content page-div">
      
      <ul className="page-element" style={{  color: 'white' }} >
      <h1 className="p-1 text-primary page-header">
        {categoryName}
      </h1>
        {breakfastItems.map(item => (
          <li key={item.name}  >
              <div>
                  <div className="page-item-header">
                  {item.name}
                  <span className="page-item-price">{item.price} TL</span>
                </div>
                <p className="page-item-description">{item.description}</p>
              </div>
            
          </li>
        ))} 
      </ul>
      <img src={categoryImage} alt={categoryName} className="page-image" />
    </div>
  );
}

export default Pizza;
import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <>
      <div className="Header">
        <div className="Header-left">
          <Link to={{pathname:'/'}}>
            <div className="logo">
              <img src="https://firebasestorage.googleapis.com/v0/b/recipe-recommendation-system.appspot.com/o/logo.png?alt=media&token=6be87cf0-462a-4bb0-bb7c-46f26543b7ca" height="30px"/>
            </div>
          </Link>
        </div>
        <div className="Header-right">
          <Link to={{pathname:'/addrecipe'}}>
          <input className="Header-button" type="button" value="Add Recipe"/>
          </Link>
          <Link to={{pathname:'/allrecipe'}}>
          <input className="Header-button"type="button" value="View Categories"/>
          </Link>
          <Link to={{pathname:'/allrecipe'}}>
          <input className="Header-button"type="button" value="View All"/>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Header;
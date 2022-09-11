import React, { useState } from 'react'
import classes from './NavBar.module.css';
import { useNavigate } from "react-router-dom";
function Navbar() {
  let [searchValue , setSearchValue] = useState("");

  function updatesearchValue(e){
    setSearchValue(e.target.value);
  }
  
  const navegate = useNavigate() ;
  function sendData(e){
      navegate(`/${searchValue}`);
  }
  function goHome(){
    navegate(`/`);
  }

  //getSearch
  return (
    <nav className={classes.nav}>
      <div className={`bar-icon ${classes["bar-icon"]}`}>
        <i className={`${classes["fa-solid"]} ${classes["fa-bars"]} fa-solid fa-bars`}></i>
      </div>
      <div className={classes.leftSide}>
        <div style={{cursor:"pointer"}} onClick={goHome} className={classes.logo}>
          <p className={classes.logo}>Udemy</p>
        </div>
        <div>
          <p className={`${classes.navP} ${classes["udemy-categories"]}`}>Categories</p>
        </div>
      </div>
      <div className={classes.middle}>
        <form className={classes["search-form"]} onSubmit={sendData} >
          <button  onClick={sendData} type="submit">Search</button>
          <input 
            value={searchValue}
            onInput={updatesearchValue}
            id="searchBox-id"
            className={classes["searchBox"]}
            type="text"
            placeholder="Search for anything"
          />
        </form>
      </div>
      <div className={classes.rightSide}>
        <p className={`${classes.navP} ${classes["udemy-business"]}`}>Udemy Business</p>
        <p className={`${classes.navP} ${classes["udemy-teach"]}`} >Teach on Udemy</p>
        <i className={`${classes.navP} ${classes["udemy-teach"]} fa-solid fa-cart-shopping`}></i>
        <div className={classes.btns}>
          <button className={`${classes["btn--"]} ${classes.btn1} ${classes.navBox}`}>Log in</button>
          <button className={`${classes["btn--"]} ${classes.btn2}`}>Sign up</button>
        </div>
        <div  className={`${classes.navBox} ${classes["lang-icon"]}`}>
          <i className={`${classes["fa-solid"]} ${classes["fa-earth-americas"]} fa-solid fa-earth-americas`}></i>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
import React from 'react'
import classes from './header.module.css'
import SmallCard from './SmallCard'
function Header() {
  return (
    <div className={classes["Head-container"]}>
        <img alt='' src="https://img-c.udemycdn.com/notices/web_banner/slide_1_image_udlite/b8f46419-eca3-44c1-8ba0-ed2ca89f8884.jpg">
        </img>
        <SmallCard classNameVar={"head-card"}/>
        <SmallCard classNameVar={"head-card-small"}/>
      </div>
  )
}
export default Header 
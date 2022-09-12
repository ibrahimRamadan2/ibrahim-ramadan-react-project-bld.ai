import React from 'react'
import classes from './SmallCard.module.css'
function SmallCard(classNameVar) {
  return (
    <div className={classes[classNameVar]}>
        <p>
          <span className={classes.welcome}>New to Udemy?Lucky you.</span><br /><br />
          Courses start at E$169.99 Ger your new-student offer before it
          expires.
        </p>
      </div>
  )
}

export default SmallCard
import React, {useState} from 'react'
import {motion} from 'framer-motion'

const Box3 = () => {
    
    const variants ={
        hidden : {
            opacity : 0,
            y : "-110vh"
        },
        visible : {
            y : 0,
            opacity : 1,
            transition : {
                delay : 3
            }
        }
    }

  return (
  <div className="box-container">
      <motion.div 
      className="test-div"
      variants={variants}
      animate='visible'
      intial="hidden"
      >
          {
              [1,2,3].map(box => {
                  return(
                      <li className='box-item'></li>
                  )
              })
          }
      </motion.div>
  </div>
  )
}

export default Box3;
import React, {useState} from 'react'
import {motion} from 'framer-motion'

const Box2 = () => {

    
  return (
  <div className="box-container">
      <motion.div 
      className="test-div"
        drag
        dragConstraints={{
            top : 5,
            bottom : 5,
            right : 10,
            left : 2
        }}
        whileHover={{
            scale : 1.1
        }}
        whileTap={{
            scale : 0.9
        }}
      >

      </motion.div>
  </div>
  )
}

export default Box2
;
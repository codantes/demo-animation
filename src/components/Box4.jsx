import React, {useState} from 'react'
import {motion} from 'framer-motion'

const Box4 = () => {

  return (
  <div className="box-container">
      <motion.div 
      className="test-div"
      animate={{
          scale : [1.2, 1, 1.6, 1.2, 1],
          borderRadius : ["10%", "20%", "30%", "50%", "5%"],
          rotate: [0, 0, 270, -270, 0]
      }}
      transition={{
          duration : 6
      }}
      >

      </motion.div>
  </div>
  )
}

export default Box4;
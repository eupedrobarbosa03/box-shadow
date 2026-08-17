import { motion } from 'motion/react'

const Reveal = ({children}) => {
    return (
        <motion.div initial={{opacity: 0, y: 60}} whileInView={{opacity: 1, y:0}} transition={{duration: 0.6}} viewport={{once: false, amount: 0.2}}>
            {children}            
        </motion.div>
    )
};

export default Reveal;
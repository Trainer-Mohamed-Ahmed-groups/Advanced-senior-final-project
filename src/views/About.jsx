import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
export default function About() {
    const [show, setShow] = useState(true)
    const [visible, setVisible] = useState(true)

    const variants = {
        hidden: { x: 0 },
        visible: { x: 100 },
        transition: { duration: 2 }
    }
    return (
        <div>
            <h2>About</h2>
            <motion.button variants={variants} onClick={() => setShow(!show)}>Click me</motion.button>
            <>
                {show &&
                    <motion.div
                        className="test"
                        animate={{ x: 100 }}
                        transition={{
                            duration: 2,
                            type: "spring",// Type of transition
                            stiffness: 100, //Hesitate
                            mass: .5, // الكتلة
                            damping: 2 // عدد الاهتزازات كل ما قل كا ما كان افضل
                        }}
                        whileTap={{ scale: 1.1 }}
                        whileHover={{ scale: .7 }}
                        exit={{ opacity: .5 }}
                    >
                        I am a division
                    </motion.div>
                }
                <motion.div
                    initial={{ position: "absolute", height: 100, width: 100, backgroundColor: '#000', marginTop: 600, marginBottom: 600 }}
                    transition={{ duration: 2 }}
                    whileInView={{ left: 200 }}
                >
                </motion.div>

                <motion.input
                    className="custom_input"
                    type="text"
                    transition={{ duration: 2 }}
                    whileFocus={{ scale: 1.2 }}
                />

            </>

            <AnimatePresence>
                <button className="btn btn-primary">OK</button>
                {
                    visible &&
                    <motion.div
                        className="tw-h-32 tw-w-32 tw-bg-primary tw-text-white tw-text-center"
                        initial={{ rotate: '0deg', scale: 0, x: [] }}
                        animate={{ rotate: '360deg', scale: 1, y: [0, 150, -150, -150, 0] }}
                        transition={{ duration: 5, ease: 'easeIn', times: [0, 1, 4, 5] }}
                    >
                        Thi+-s is division
                    </motion.div>
                }
            </AnimatePresence>
        </div>
    )
}

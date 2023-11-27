import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";
import ProgressBar from "@ramonak/react-progress-bar";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};


export default function Services() {
    const ref = useRef();

    const isInView = useInView(ref, { margin: "-100px" });
  return (
    <motion.div
    className="services"
    variants={variants}
    initial="initial"
    // animate="animate"
    // whileInView="animate"
    ref={ref}
    animate={"animate"}
  >
    <motion.div className="textContainer" variants={variants}>
      <p>
        I focus on helping your brand grow
        <br /> and move forward
      </p>
      <hr />
    </motion.div>
    <motion.div className="titleContainer" variants={variants}>
      <div className="title">
        <img src="/people.webp" alt="" />
        <h1>
          <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
        </h1>
      </div>
      <div className="title">
        <h1>
          <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business.
        </h1>
        <button>WHAT WE DO?</button>
      </div>
    </motion.div>
    <motion.div className="listContainer" variants={variants}>
      <motion.div
        className="box"
        whileHover={{ background: "lightgray", color: "black" }}
      >
        <h2>FrontEnd</h2>
        <p >
        <div >React Js</div>
            <ProgressBar 
          completed={90} 
          bgColor="orange"
          labelColor="#000"
          animateOnRender={false}
          transitionDuration='2s'
          // completedClassName="barCompleted"
          />
          <div style={{paddingTop:15}}>React Native</div>
          <ProgressBar 
          completed={90} 
          bgColor="orange"
          labelColor="#000"
          animateOnRender={false}
          transitionDuration='2s'
          // completedClassName="barCompleted"
          />
         <div style={{paddingTop:15}}>TypeScript</div>
            <ProgressBar 
          completed={60} 
          bgColor="orange"
          labelColor="#000"
          animateOnRender={false}
          transitionDuration='2s'
          // completedClassName="barCompleted"
          />
        </p>
        <button>Go</button>
      </motion.div>
      <motion.div
        className="box"
        whileHover={{ background: "lightgray", color: "black" }}
      >
        <h2>Back End </h2>
        <p >
        <div >Node Js</div>
            <ProgressBar 
          completed={90} 
          bgColor="orange"
          labelColor="#000"
          animateOnRender={false}
          transitionDuration='2s'
          // completedClassName="barCompleted"
          />
          <div style={{paddingTop:15}}>Express Js</div>
          <ProgressBar 
          completed={90} 
          bgColor="orange"
          labelColor="#000"
          animateOnRender={false}
          transitionDuration='2s'
          // completedClassName="barCompleted"
          />
         <div style={{paddingTop:15}}>Python (Django)</div>
            <ProgressBar 
          completed={60} 
          bgColor="orange"
          labelColor="#000"
          animateOnRender={false}
          transitionDuration='2s'
          // completedClassName="barCompleted"
          />
        </p>
        <button>Go</button>
      </motion.div>
      <motion.div
        className="box"
        whileHover={{ background: "lightgray", color: "black" }}
      >
        <h2>DataBase</h2>
        <p >
        <div >Mongo DB</div>
            <ProgressBar 
          completed={90} 
          bgColor="orange"
          labelColor="#000"
          animateOnRender={false}
          transitionDuration='2s'
          // completedClassName="barCompleted"
          />
          <div style={{paddingTop:15}}>PostgreSQL</div>
          <ProgressBar 
          completed={90} 
          bgColor="orange"
          labelColor="#000"
          animateOnRender={false}
          transitionDuration='2s'
          // completedClassName="barCompleted"
          />
      
        </p>
        <button>Go</button>
      </motion.div>
      <motion.div
        className="box"
        whileHover={{ background: "lightgray", color: "black" }}
      >
        <h2>DevOPs</h2>
        <p >
        <div >CD/CI(GitHub)</div>
            <ProgressBar 
          completed={90} 
          bgColor="orange"
          labelColor="#000"
          animateOnRender={false}
          transitionDuration='2s'
          // completedClassName="barCompleted"
          />
        
        </p>
        <button>Go</button>
      </motion.div>
    </motion.div>
  </motion.div>

  )
}

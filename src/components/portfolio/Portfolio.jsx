import React,{useRef} from 'react'
import './portfolio.scss'
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import TradPoint from '../../assets/logo.png'


const items = [
    {
      id: 0,
      title: "TradPoint Exchange",
      img: TradPoint,
      desc: "A mobile trading application where users trade match events",
      link:'https://expo.dev/artifacts/eas/sgqhowkFLFRne1ZbjrdPYw.apk',
    },
    {
      id: 1,
      title: "Galio Students",
      img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      desc: "An E-learning platform for students ",
      link:'https://mystudentinfos.myiuc.com/',
    },
    {
      id: 2,
      title: "Galio Admin",
      img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      desc: "An Admin Portal for Gaelio App where teachers and administrator control students.",
      link:'https://galio.myiuc.com/',
    },
    {
      id: 3,
      title: "CryptCommunities",
      img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      desc: "A Mobile application For crypto currency exchange and daily updates of the market.",
      link:'https://play.google.com/store/apps/details?id=com.cryptcommunities',
    },
    {
      id: 4,
      title: "Aspiring kids",
      img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
      link:'http://www.aspiringkids.org/',
    },
    {
      id: 5,
      title: "Black Prince House",
      img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
      link:'https://blackprincehouses.com/',
    },
    {
      id: 6,
      title: "Healing marketplace",
      img: "	https://healingmarketplace.com/img/logo.c533a6a4.svg",
      desc: "For crypto currency exchange and daily updates of the market.",
      link:'https://healingmarketplace.com/',
    },
    {
      id: 7,
      title: "Cargo express",
      img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      desc: "For crypto currency exchange and daily updates of the market.",
      link:'https://cargos-express.com/',
    },
  ];
  

const Single = ({ item }) => {
    const ref = useRef();
  
    const { scrollYProgress } = useScroll({
      target: ref,
    });
  
    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
   
  
    return (
      <section >
        <div className="container">
          <div className="wrapper">
            <div className="imageContainer" ref={ref}>
              <img src={item.img} alt="" />
            </div>
            <motion.div className="textContainer" style={{y}}>
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
              <button >
                <a href={`${item.link}`} className='button-links'>Visit</a>
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    );
  };

export default function Portfolio() {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["end end", "start start"],
    });
  
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
    });


  return (
    <div className="portfolio" ref={ref}>
    <div className="progress">
      <h1>Featured Works</h1>
      <motion.div style={{ scaleX }} className="progressBar"></motion.div>
    </div>
    {items.map((item) => (
      <Single item={item} key={item.id} />
    ))}
  </div>
  )
}

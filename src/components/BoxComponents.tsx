import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./BoxComponents.css";

interface TextBox {
  text: string;
  color: string;
  colorText: string;
  fontSize: string;
  paragraph: string;
}

const BoxComponents: React.FC<TextBox> = (props, { text }) => {
  const [isOpen, setIsOpen] = useState(false);
  const TextArray = [
    {
      id: 0,
      paragraph: "Mateus henrique lindo",
    },
    { id: 1, paragraph: "Mateus henrique lindo" },
  ];
  const colorBox = {
    backgroundColor: props.color,
    color: props.colorText,
    fontSize: props.fontSize,
  };
  return (
    <div className="Box">
      <div className="BoxSet">
        <motion.div transition={{layout: {duration:2, type:"spring"}}} onClick= {()=> setIsOpen(!isOpen)} className="BoxPrincipal" style={colorBox}>
        <motion.h2 layout="position">{props.text}</motion.h2>
       
          {isOpen &&(
          
          <motion.div initial={{opacity:0}} animate ={{opacity:1}} transition={{duration:1}} >
          {/* {
         TextArray.map((TextArray)  =>(
          <p key={TextArray.id}>{TextArray.paragraph}</p>
         )  )} */}
         <p>{props.paragraph}</p>
         </motion.div>)}
       
        </motion.div>
        {/* <motion.div className="BoxPrincipal" style={colorBox}>{props.text}</motion.div> */}
      </div>
    </div>
  );
};

export default BoxComponents;

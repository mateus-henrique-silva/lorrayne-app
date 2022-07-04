import React from "react";
import "./BoxComponents.css";

interface TextBox {
  text: string;
  color: string;
  colorText:string;
  fontSize:string;

}

const BoxComponents: React.FC<TextBox> = (props, {text}) => {
  const colorBox ={
    backgroundColor:props.color,
    color: props.colorText,
    fontSize: props.fontSize,
  }
  return (
    <div className="Box">
      <div className="BoxSet">
        <div className="BoxPrincipal" style={colorBox}>
          <strong>{props.text}</strong>
        </div>
        {/* <div className="BoxPrincipal" style={colorBox}>{props.text}</div> */}
      </div>
    </div>
  );
};

export default BoxComponents;

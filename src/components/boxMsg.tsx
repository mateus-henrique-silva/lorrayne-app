import React from "react";
import "./boxMsg.css";
interface StateBox {
  state: string;
}

const boxMsg: React.FC<StateBox> = (props, { state }) => {
  const BoxState = {
    display: props.state,
  };
  return (
    <div className="BoxMsg" style={BoxState}>
      <div className="BoxMsgSub">
        <h2>TERMO DE CIÊNCIA</h2>
        <hr />
        <span>
          Estou ciente que a disponibilidade da rede de internet sem fio é feita
          por mera liberalidade do Sindicato dos Petroleiros do Norte Fluminense
          – SINDIPETRO/NF e poderá ser descontinuada por decisão unilateral
          desta entidade.
        </span>
      </div>
    </div>
  );
};

export default boxMsg;

import React from "react";

function Flex(props) {
  return (<div className={'flex '+props.className}>
      {props.children}
  </div>)
}

export default Flex;

import React from 'react'

interface I_Props {
  children: JSX.Element;
  className?: string;
}

const CardDetails = (props: I_Props) => {
  return (
    <div
      className={`scrollBar-hidden mt-4 ${props.className}`}
    >
      {props.children}
    </div>
  );
};

export default CardDetails;
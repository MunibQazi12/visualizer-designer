import React from 'react'

interface I_Props {
  children: JSX.Element;
  className?: string;
}

const CardDetails = (props: I_Props) => {
  return (
    <div
      className={`${props.className}`}
    >
      {props.children}
    </div>
  );
};

export default CardDetails;
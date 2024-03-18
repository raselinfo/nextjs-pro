"use client";
const Test = () => {
  const dispatchError = () => {
    throw new Error("there is a huge error");
  };
  return (
    <div>
      <button className="bg-green-500" onClick={dispatchError}>Dispatch Error</button>
    </div>
  );
};

export default Test;

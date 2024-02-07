"use client";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

const Error = ({ error, reset }: ErrorProps) => {
  return (
    <div
      style={{
        padding: "1rem",
      }}
    >
      <h1>😒</h1>
      <span>Error 404</span>
      <button onClick={reset}>Intentar de nuevo</button>
    </div>
  );
};

export default Error;

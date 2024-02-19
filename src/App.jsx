import React, { useEffect, useState } from "react";
import "./App.css";

import axios from "axios";

export default function App() {
  const [advice, setAdvice] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchAdvice = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get("https://api.adviceslip.com/advice");
      const { advice } = response.data.slip;
      setIsLoading(false);
      setAdvice(advice);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAdvice();
  }, [advice]);

  return (
    <div className="app">
      <section className="flex justify-center items-center h-full w-full">
        {isLoading ? (
          <div className=" flex justify-center items-center h-full">
            <h5 className="text-2xl font-bold tracking-tight text-center text-black">
              Loading...
            </h5>
          </div>
        ) : (
          <main className="card">
            {advice.length > 0 && <h5 className="heading">{advice}</h5>}
            {error && <h5 className="heading">{error}</h5>}

            <button onClick={fetchAdvice} className="button">
              <span>Get Advice</span>
            </button>
          </main>
        )}
      </section>
    </div>
  );
}

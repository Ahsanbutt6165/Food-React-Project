import React, { useEffect, useState } from "react";
import { SyncLoader } from "react-spinners";
import { Navigate } from "react-router-dom";
const Success = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {loading ? (
        <SyncLoader />
      ) : (
        <>
          <h2 className="text-3xl font-semibold mb-4">Order Successfull!</h2>
          <p>Your order has been placed successfuly</p>
        </>
      )}
    </div>
  );
};

export default Success;

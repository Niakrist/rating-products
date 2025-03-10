"use client";

import { useRouter } from "next/navigation";

const TestUseClient = () => {
  const router = useRouter();

  console.log("router: ", router);

  return <div>TestUseClient</div>;
};

export default TestUseClient;

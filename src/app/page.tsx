import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense fallback={<>Loading...</>}>
      <div className="bg-gray-200">Main section</div>
    </Suspense>
  );
}

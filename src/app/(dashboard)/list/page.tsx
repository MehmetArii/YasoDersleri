"use client";

import {
  useRouter,
  useParams,
  usePathname,
  useSearchParams,
} from "next/navigation";
import React, { useEffect, useState } from "react";

export default function List() {
  const [state, setState] = useState<number>(0);
  const [tag, setTag] = useState<string[]>([]);

  const router = useRouter();
  const params = useParams();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  console.log("params", params);
  console.log("pathname", pathname);
  console.log("searchParams", searchParams.get("id"));
  console.log("searchParams", searchParams.get("name"));

  const handleClick = () => {
    setState(state + 1);
  };

  const fetchTag = async () => {
    try {
      const response = await fetch("https://cataas.com/api/tags");
      const data = await response.json();
      setTag(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTag();
  }, []);

  return (
    <div>
      <button onClick={handleClick}>Increment</button>
      <button onClick={() => router.push("/login")}>Go to Login</button>
      <div>{state}</div>
      <div>
        {tag?.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </div>
  );
}

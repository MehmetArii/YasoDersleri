'use client';
import { useParams } from "next/navigation";
import React from "react";

export default function ListDetail() {
  const { id } = useParams();

  console.log("id", id);

  return <div>ListDetail</div>;
}
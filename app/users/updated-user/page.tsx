"use client";

import { userState } from "@/app/recoil/atoms";
import { useRecoilValue } from "recoil";

export default function UpdatedUserPage() {
  const user = useRecoilValue(userState);
  return (
    <div>
      <h1>Updated User</h1>
      <p>Email: {user.email}</p>
      <p>Name: {user.name}</p>
    </div>
  );
}

"use client";

import { userState } from "@/app/recoil/atoms";
import { useRecoilState } from "recoil";
import Link from "next/link";
export default function UpdateUserPage() {
  const [user, setUser] = useRecoilState(userState);
  return (
    <div>
      <h1>Update User</h1>
      <input
        type="email"
        placeholder="Enter your Email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <input
        type="name"
        placeholder="name"
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />
      <Link href="/users/updated-user">Link</Link>
    </div>
  );
}

"use client";

import Link from "next/link";
import { useEffect,useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Home() {
  const [user,setUser] = useState(null);

  useEffect(() => {
    loadUser();
  }, []);

  async function loadUser() {
    const { data } = await supabase.auth.getUser();
    setUser(data.user);
  }

  async function logout() {
    await supabase.auth.signOut();
    location.reload();
  }

  return (
    <>
      <div className="navbar">
        <div className="logo">HAPIS TOPUP</div>

        {user ? (
          <button className="btn" onClick={logout}>
            Logout
          </button>
        ) : (
          <Link href="/login">
            <button className="btn">Login</button>
          </Link>
        )}
      </div>

      <div className="container">
        <div className="hero">
          <h1>Topup Game Murah & Cepat</h1>

          {user ? (
            <p>{user.email}</p>
          ) : (
            <p>Silakan login</p>
          )}
        </div>
      </div>
    </>
  );
}
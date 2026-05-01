"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function Login() {
  const router = useRouter();

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [msg,setMsg] = useState("");

  async function masuk() {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if(error){
      setMsg(error.message);
    } else {
      router.push("/");
      router.refresh();
    }
  }

  return (
    <div className="container">
      <div className="hero">
        <h1>Login</h1>
      </div>

      <div className="card" style={{marginTop:"16px"}}>
        <input className="input" placeholder="Email"
          onChange={(e)=>setEmail(e.target.value)} />

        <input className="input" type="password"
          placeholder="Password"
          onChange={(e)=>setPassword(e.target.value)} />

        <button className="btn"
          style={{marginTop:"12px",width:"100%"}}
          onClick={masuk}>
          Login
        </button>

        <p style={{marginTop:"10px"}}>{msg}</p>

        <p style={{marginTop:"12px"}}>
          Belum punya akun? <Link href="/register">Daftar</Link>
        </p>
      </div>
    </div>
  );
}
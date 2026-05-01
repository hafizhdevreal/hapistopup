"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function Register() {
  const router = useRouter();

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [msg,setMsg] = useState("");

  async function daftar() {
    const { error } = await supabase.auth.signUp({
      email,
      password
    });

    if(error){
      setMsg(error.message);
    } else {
      router.push("/login");
    }
  }

  return (
    <div className="container">
      <div className="hero">
        <h1>Daftar</h1>
      </div>

      <div className="card" style={{marginTop:"16px"}}>
        <input className="input" placeholder="Email"
          onChange={(e)=>setEmail(e.target.value)} />

        <input className="input" type="password"
          placeholder="Password"
          onChange={(e)=>setPassword(e.target.value)} />

        <button className="btn"
          style={{marginTop:"12px",width:"100%"}}
          onClick={daftar}>
          Daftar
        </button>

        <p style={{marginTop:"10px"}}>{msg}</p>

        <p style={{marginTop:"12px"}}>
          Sudah punya akun? <Link href="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}
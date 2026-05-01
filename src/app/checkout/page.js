"use client";

import { useState } from "react";

export default function Checkout() {
  const [userId,setUserId] = useState("");
  const [zone,setZone] = useState("");
  const [msg,setMsg] = useState("");

  async function bayar() {
    const pay = await fetch("/api/pay", {
      method:"POST",
      headers:{ "Content-Type":"application/json" },
      body: JSON.stringify({ amount:10000 })
    });

    const payData = await pay.json();

    setMsg("QRIS dibuat. Mengecek pembayaran...");

    const reff = payData.data.reff_id;

    setTimeout(async () => {
      const cek = await fetch("/api/check", {
        method:"POST",
        headers:{ "Content-Type":"application/json" },
        body: JSON.stringify({ reff_id: reff })
      });

      const cekData = await cek.json();

      if (cekData.data.status === "success") {
        await fetch("/api/order", {
          method:"POST",
          headers:{ "Content-Type":"application/json" },
          body: JSON.stringify({
            code:"ML5",
            userId,
            zone
          })
        });

        setMsg("Pembayaran sukses, topup diproses.");
      } else {
        setMsg("Menunggu pembayaran...");
      }

    }, 5000);
  }

  return (
    <div className="container">
      <div className="hero">
        <h1>Checkout</h1>
        <p>Isi data akun lalu bayar</p>
      </div>

      <div className="card" style={{marginTop:"16px"}}>
        <input
          className="input"
          placeholder="User ID"
          onChange={(e)=>setUserId(e.target.value)}
        />

        <input
          className="input"
          placeholder="Zone ID"
          onChange={(e)=>setZone(e.target.value)}
        />

        <button
          className="btn"
          style={{marginTop:"12px",width:"100%"}}
          onClick={bayar}
        >
          Bayar QRIS
        </button>

        <p style={{marginTop:"12px"}}>{msg}</p>
      </div>
    </div>
  );
}
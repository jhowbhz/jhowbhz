"use client"

import { useEffect, useRef } from "react"

export default function ReclameAquiSeal() {
  const sealRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (sealRef.current && !sealRef.current.querySelector("script")) {
      const script = document.createElement("script")
      script.type = "text/javascript"
      script.id = "ra-embed-verified-seal"
      script.src = "https://s3.amazonaws.com/raichu-beta/ra-verified/bundle.js"
      script.setAttribute("data-id", "NDJLSDZtVzhjUFBLWHp3bTphcGlicmFzaWwtc2l0ZXMtZS1zb2Z0d2FyZXM=")
      script.setAttribute("data-target", "ra-verified-seal-container") // Target the inner div
      script.setAttribute("data-model", "2")
      script.async = true
      sealRef.current.appendChild(script)
    }
  }, [])

  return (
    <div ref={sealRef} className="mt-6 md:mt-0">
      <div id="ra-verified-seal-container"></div>
    </div>
  )
}

import * as React from "react"

export default function BrandLogo() {
  return (
  <svg width="128" height="54" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <rect x="5" y="5" width="90" height="90" rx="15" ry="15" 
        fill="rgb(240, 62, 47)" stroke="currentColor" stroke-width="5"/>

  <g fill="currentColor">
    <circle cx="28" cy="28" r="8"/>
    <circle cx="72" cy="28" r="8"/>
    
    <circle cx="50" cy="50" r="8"/>
    
    <circle cx="28" cy="72" r="8"/>
    <circle cx="72" cy="72" r="8"/>
  </g>
  
</svg>
  )
}

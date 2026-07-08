// components/ui/tooltip.jsx
import { useState } from "react"

export const TooltipProvider = ({ children }) => {
  return <>{children}</>
}

export const Tooltip = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false)
  
  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
    </div>
  )
}

export const TooltipTrigger = ({ children, asChild, ...props }) => {
  return (
    <div {...props}>
      {children}
    </div>
  )
}

export const TooltipContent = ({ className = '', side = "top", children, ...props }) => {
  const sideClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  }
  
  return (
    <div
      className={`absolute z-50 ${sideClasses[side]} px-3 py-1.5 text-sm text-white bg-gray-900 rounded-md shadow-lg whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
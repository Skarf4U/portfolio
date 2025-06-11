import React from "react"

export const RainbowHighlight = ({
  color,
  children,
}: {
  color: string
  children: string
}) => {
  // Change the animation duration depending on length of text we're animating (speed = distance / time)
  const animationDuration = Math.floor(30 * children.length)

  return (
    <span style={{ backgroundColor: color, borderRadius: 2, padding: '0 2px' }}>
      {children}
    </span>
  )
}

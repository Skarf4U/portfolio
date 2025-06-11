import { useHover } from "@react-aria/interactions"
import React from "react"

export const HighlightOnHover = ({
  children,
  color = "#EAEAEA",
}: {
  children: React.ReactNode
  color?: string
}) => {
  let { hoverProps, isHovered } = useHover({})

  return (
    <span {...hoverProps}>
      {children}
    </span>
  )
}

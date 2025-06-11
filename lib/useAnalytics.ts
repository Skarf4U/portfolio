import * as Fathom from "fathom-client"
import { usePathname } from "next/navigation"
import { useEffect } from "react"

export const useAnalytics = () => {
  const pathname = usePathname()

  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      Fathom.load(process.env.NEXT_PUBLIC_FATHOM_SITE_ID!, {
        url: "https://iguana.delbaoliveira.com/script.js",
        includedDomains: ["www.delbaoliveira.com"],
      })
    }
  }, [])

  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      Fathom.trackPageview()
    }
  }, [pathname])
}


import { useState } from "react"
import { LoaderCircleIcon } from "lucide-react"

import { Button } from "../ui/button"
type LoadingButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit"; 
  isLoading?: boolean; 
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function LoadingButton({children,type ="button",isLoading,onClick}: LoadingButtonProps) {
//   const [isLoading, setIsLoading] = useState<boolean>(false)

//   const handleClick = () => {
//     setIsLoading(true)
//     // Simulate an async operation
//     setTimeout(() => {
//       setIsLoading(false)
//     }, 1000) // Reset after 1 second
//   }

  return (
    <Button
      onClick={onClick}
      disabled={isLoading}
      data-loading={isLoading || undefined}
      className="group relative disabled:opacity-100"
      type={type}
    >
      <span className="group-data-loading:text-transparent">{children}</span>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <LoaderCircleIcon
            className="animate-spin"
            size={16}
            aria-hidden="true"
          />
        </div>
      )}
    </Button>
  )
}

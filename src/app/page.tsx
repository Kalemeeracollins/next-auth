import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (

    <div className="bg-gray-50 dark:bg-gray-900">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            alt=""
            className="w-full h-[400px] object-cover"
            height="400"
            src="/placeholder.svg"
            style={{
              aspectRatio: "1440/400",
              objectFit: "cover",
            }}
            width="1440"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent" />
        </div>
        <div className="relative z-10">
          <div className="container flex flex-col items-start gap-4 px-4 py-6 md:gap-8 md:flex-row md:items-center md:py-12 lg:px-6 xl:gap-12">
            <div className="flex-1">
              <div className="flex items-center space-x-4">
                <Link className="flex items-center space-x-2" href="#">
                  <HomeIcon className="w-6 h-6" />
                  <span className="text-lg font-semibold">Home</span>
                </Link>
              </div>
            </div>
            <div className="flex flex-1 justify-end md:order-3 md:gap-4 md:justify-center lg:gap-6 lg:order-2">
              <Link className="w-full max-w-xs" href="signUp">
                <Button className="w-full">Sign up</Button>
              </Link>
              <Link className="w-full max-w-xs" href="signIn">
                <Button className="w-full" variant="outline">
                  Login
                </Button>
              </Link>
            </div>
          </div>
          <div className="container flex flex-col items-center justify-center min-h-[200px] text-center md:min-h-[300px] md:items-start md:flex-row md:justify-between md:gap-4 lg:min-h-[400px] lg:gap-8 xl:min-h-[500px]">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter lg:text-6xl/none">Beautiful components</h1>
              <p className="text-gray-500 dark:text-gray-400">Accessible. Customizable. Open Source.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}
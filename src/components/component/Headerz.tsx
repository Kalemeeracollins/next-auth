// "use client"
// import { useState } from "react"
// import Link from "next/link"
// import { Badge } from "@/components/ui/badge"
// import { Input } from "@/components/ui/input"
// import { Button } from "@/components/ui/button"
// import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"

// export function Header() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const cards = [
//     {
//       id: 1,
//       head: "Div 1",
//       body: "This is the body of Div 1.",
//       imageUrl: "https://example.com/div1.jpg",
//       "startColor": "#2E3192",
//       "endColor": " #1BFFFF"
//     },
//     {
//       id: 2,
//       head: "Div 2",
//       body: "This is the body of Div 2.",
//       imageUrl: "https://example.com/div2.jpg",
//       "startColor": "#9C6CFF",
//       "endColor": "#FF6FCF"
//     },
//     {
//       id: 3,
//       head: "Div 1",
//       body: "This is the body of Div 1.",
//       imageUrl: "https://example.com/div1.jpg",
//       "startColor": "#D4145A",
//       "endColor": "#FBB03B"
//     },
//     {
//       id: 4,
//       head: "Div 2",
//       body: "This is the body of Div 2.",
//       imageUrl: "https://example.com/div2.jpg",
//       "startColor": "#662D8C",
//       "endColor": "#ED1E79"
//     },
//   ];
//   return (
//     <div className="flex grid min-h-screen w-full overflow-hidden ">
//       <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
        
//       <button
//         type="button"
//         onClick={toggleMenu}
//         className="lg:hidden block text-gray-800 hover:text-gray-900 focus:text-gray-900 focus:outline-none"
//       >
//         <svg
//           className="h-6 w-6"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           aria-hidden="true"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
//           />
//         </svg>
//       </button>
//       <Link className="flex items-center gap-2 font-semibold" href="#">
//               <Package2Icon className="h-6 w-6" />
//               <span className="">Acme Inc</span>
//             </Link>
//         <div className="flex flex-1 items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
//           <form className="ml-auto flex-1 sm:flex-initial">
//             <div className="relative">
//               {/* Logo */}
//             </div>
//           </form>
//           <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//               <Button className="rounded-full" size="icon" variant="ghost">
//                 <img
//                   alt="Avatar"
//                   className="rounded-full"
//                   height="32"
//                   src="/placeholder.svg"
//                   style={{
//                     aspectRatio: "32/32",
//                     objectFit: "cover",
//                   }}
//                   width="32"
//                 />
//                 <span className="sr-only" onClick={toggleMenu}>Toggle user menu</span>
//               </Button>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent align="end">
//               <DropdownMenuLabel>My Account</DropdownMenuLabel>
//               <DropdownMenuSeparator />
//               <DropdownMenuItem>Settings</DropdownMenuItem>
//               <DropdownMenuItem>Support</DropdownMenuItem>
//               <DropdownMenuSeparator />
//               <DropdownMenuItem>Logout</DropdownMenuItem>
//             </DropdownMenuContent>
//           </DropdownMenu>
//         </div>
//       </header>
//       <div className="flex">
//       {/* Sidebar Content */}
//       <div className={`lg:flex h-screen border-r bg-gray-100/40 dark:bg-gray-800/40 ${isOpen ? 'block' : 'hidden'}`}>
//         <div className="flex flex-col">
//           <div className="flex-1 bg-blue-500 bg-opacity-50 hover:bg-blue-600 dark:bg-blue-700">
//           <nav className="grid items-start px-4 text-sm font-medium">
//               <Link
//                 className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
//                 href="#"
//               >
//                 <HomeIcon className="h-4 w-4" />
//                 Home
//               </Link>
//               <Link
//                 className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
//                 href="#"
//               >
//                 <ShoppingCartIcon className="h-4 w-4" />
//                 Orders
//                 <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">12</Badge>
//               </Link>
//               <Link
//                 className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
//                 href="#"
//               >
//                 <PackageIcon className="h-4 w-4" />
//                 Products
//               </Link>
//               <Link
//                 className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
//                 href="#"
//               >
//                 <UsersIcon className="h-4 w-4" />
//                 Customers
//               </Link>
//               <Link
//                 className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
//                 href="#"
//               >
//                 <LineChartIcon className="h-4 w-4" />
//                 Analytics
//               </Link>
//             </nav>
//           </div>
//         </div>
//       </div>
//     <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
//         <div className="flex flex-wrap gap-4">
//         {cards.map((data) => (
//         <div key={data.id} style={{ background: `linear-gradient(135deg, ${data.startColor}, ${data.endColor})`, padding: '20px', margin: '10px', width: "500px",  borderRadius: '5px' }}>
//           <h1>{data.head}</h1>
//           <p>{data.body}</p>
//           <img src={data.imageUrl} alt={`Content ${data.id}`} style={{ maxWidth: '100%' }} />
//         </div>
//       ))}
//           </div>
//       </main>
//     </div>
//     </div>
//   )
// }


// function Package2Icon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
//       <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
//       <path d="M12 3v6" />
//     </svg>
//   )
// }


// function HomeIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
//       <polyline points="9 22 9 12 15 12 15 22" />
//     </svg>
//   )
// }


// function ShoppingCartIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <circle cx="8" cy="21" r="1" />
//       <circle cx="19" cy="21" r="1" />
//       <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
//     </svg>
//   )
// }


// function PackageIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="m7.5 4.27 9 5.15" />
//       <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
//       <path d="m3.3 7 8.7 5 8.7-5" />
//       <path d="M12 22V12" />
//     </svg>
//   )
// }


// function UsersIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
//       <circle cx="9" cy="7" r="4" />
//       <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
//       <path d="M16 3.13a4 4 0 0 1 0 7.75" />
//     </svg>
//   )
// }


// function LineChartIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M3 3v18h18" />
//       <path d="m19 9-5 5-4-4-3 3" />
//     </svg>
//   )
// }


// function SearchIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <circle cx="11" cy="11" r="8" />
//       <path d="m21 21-4.3-4.3" />
//     </svg>
//   )
// }


// function MoreHorizontalIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <circle cx="12" cy="12" r="1" />
//       <circle cx="19" cy="12" r="1" />
//       <circle cx="5" cy="12" r="1" />
//     </svg>
//   )
// }


// function Hamburger(props){
//   return(
//     <svg
//     className="h-6 w-6"
//     fill="none"
//     viewBox="0 0 24 24"
//     stroke="currentColor"
//     aria-hidden="true"
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth="2"
//       d="M4 6h16M4 12h16m-7 6h7"
//     />
//   </svg>
//   )
// }
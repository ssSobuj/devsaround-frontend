// "use client";

// import Link from "next/link";

// import { Button } from "@/components/ui/button";
// import {
//   NavigationMenu,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   navigationMenuTriggerStyle,
// } from "@/components/ui/navigation-menu";
// import Logo from "../common/Logo";

// const links = ["about-us", "services", "use-cases", "pricing", "blog"];

// export default function Footer() {
//   return (
//     <footer className="px-0  lg:px-4 2xl:px-[100px] container mt-[100px]">
//       <div className="flex flex-col  bg-foreground text-background rounded-t-[45px] px-[60px] pt-[55px] pb-[50px]">
//         <div className="flex flex-col gap-[66px]">
//           <div className="flex flex-col lg:flex-row items-center justify-between ">
//             <Link href="#" className="flex items-center" prefetch={false}>
//               <Logo mood="#ffffff" height={29} width={180} />
//             </Link>

//             <NavigationMenu>
//               <NavigationMenuList className="flex items-center flex-col lg:flex-row gap-1 md:gap-6">
//                 {links.map((link) => (
//                   <NavigationMenuItem key={link}>
//                     <NavigationMenuLink
//                       asChild
//                       className={navigationMenuTriggerStyle()}
//                     >
//                       <Link
//                         className="text-background bg-transparent hover:bg-transparent text-[16px] md:text-lg underline"
//                         href={`#${link}`}
//                       >
//                         {link
//                           .replace("-", " ")
//                           .replace(/\b\w/g, (l) => l.toUpperCase())}
//                       </Link>
//                     </NavigationMenuLink>
//                   </NavigationMenuItem>
//                 ))}
//               </NavigationMenuList>
//             </NavigationMenu>

//             <ul className="flex items-center gap-5">
//               <li>
//                 <Link href="#" className="text-background">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="30"
//                     height="30"
//                     viewBox="0 0 30 30"
//                     fill="none"
//                   >
//                     <circle cx="15" cy="15" r="15" fill="white" />
//                     <path
//                       d="M8.22154 22.0586H11.3056V12.0742H8.22154V22.0586Z"
//                       fill="black"
//                     />
//                     <path
//                       d="M7.94116 8.88672C7.94116 9.87109 8.73555 10.668 9.76359 10.668C10.7449 10.668 11.5393 9.87109 11.5393 8.88672C11.5393 7.90234 10.7449 7.05859 9.76359 7.05859C8.73555 7.05859 7.94116 7.90234 7.94116 8.88672Z"
//                       fill="black"
//                     />
//                     <path
//                       d="M19.8103 22.0586H22.9412V16.5742C22.9412 13.9023 22.3337 11.793 19.2028 11.793C17.7075 11.793 16.6795 12.6367 16.2589 13.4336H16.2122V12.0742H13.2683V22.0586H16.3524V17.1367C16.3524 15.8242 16.586 14.5586 18.2215 14.5586C19.8103 14.5586 19.8103 16.0586 19.8103 17.1836V22.0586Z"
//                       fill="black"
//                     />
//                   </svg>
//                 </Link>
//               </li>{" "}
//               <li>
//                 <Link href="#" className="text-background">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="30"
//                     height="30"
//                     viewBox="0 0 30 30"
//                     fill="none"
//                   >
//                     <path
//                       d="M30 15.0913C30 6.75456 23.2863 0 15 0C6.71371 0 0 6.75456 0 15.0913C0 22.6369 5.44355 28.9047 12.6411 30V19.4726H8.83064V15.0913H12.6411V11.8053C12.6411 8.03245 14.879 5.90264 18.2661 5.90264C19.9597 5.90264 21.6532 6.2069 21.6532 6.2069V9.91886H19.7782C17.9032 9.91886 17.2984 11.0751 17.2984 12.2921V15.0913H21.4718L20.8065 19.4726H17.2984V30C24.496 28.9047 30 22.6369 30 15.0913Z"
//                       fill="white"
//                     />
//                   </svg>
//                 </Link>
//               </li>{" "}
//               <li>
//                 <Link href="#" className="text-background">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="30"
//                     height="30"
//                     viewBox="0 0 30 30"
//                     fill="none"
//                   >
//                     <circle cx="15" cy="15" r="15" fill="white" />
//                     <path
//                       d="M21.9961 11.4915C22.6854 10.9745 23.3058 10.3541 23.7884 9.63028C23.168 9.90602 22.4442 10.1128 21.7204 10.1818C22.4786 9.73369 23.0301 9.04435 23.3058 8.18267C22.6165 8.59628 21.8238 8.90648 21.031 9.07881C20.3417 8.35501 19.4111 7.94141 18.3771 7.94141C16.378 7.94141 14.758 9.56135 14.758 11.5604C14.758 11.8362 14.7925 12.1119 14.8614 12.3876C11.8628 12.2153 9.1744 10.7677 7.38212 8.59628C7.07192 9.11328 6.89959 9.73369 6.89959 10.423C6.89959 11.6638 7.51999 12.7668 8.51953 13.4216C7.93359 13.3872 7.34766 13.2493 6.86512 12.9736V13.008C6.86512 14.7659 8.10593 16.2135 9.76034 16.5581C9.48461 16.6271 9.13994 16.696 8.82973 16.696C8.58847 16.696 8.38166 16.6615 8.1404 16.6271C8.58847 18.0747 9.93267 19.1087 11.5182 19.1432C10.2773 20.1082 8.72633 20.6942 7.03745 20.6942C6.72725 20.6942 6.45152 20.6597 6.17578 20.6252C7.76126 21.6592 9.65694 22.2452 11.725 22.2452C18.3771 22.2452 21.9961 16.7649 21.9961 11.974C21.9961 11.8017 21.9961 11.6638 21.9961 11.4915Z"
//                       fill="black"
//                     />
//                   </svg>
//                 </Link>
//               </li>
//             </ul>
//           </div>
//           <div className="grid grid-cols-1  lg:grid-cols-12 gap-6">
//             <div className="md:col-span-5 flex flex-col gap-[27px]">
//               <h4 className="text-foreground bg-primary w-fit font-medium rounded-[7px] px-[7px] leading-[100%] tracking-[0]">
//                 Contact us:
//               </h4>
//               <div className="flex flex-col gap-5 max-w-[332px]">
//                 <p>Email: info@positivus.com</p>
//                 <p>Phone: 555-567-8901</p>
//                 <p>
//                   Address: 1234 Main St Moonstone City, Stardust State 12345
//                 </p>
//               </div>
//             </div>

//             <div className="md:col-span-7 flex flex-col sm:flex-row justify-center items-center gap-5 bg-[#292A32] py-[40px] px-[20px] sm:py-[58px] sm:px-[40px] rounded-[14px]">
//               <Button
//                 variant="outline"
//                 className="border-background text-background hover:bg-transparent h-fit w-full sm:w-auto"
//               >
//                 Email
//               </Button>
//               <Button variant="primary" className="h-fit w-full sm:w-auto">
//                 Subscribe to news
//               </Button>
//             </div>
//           </div>
//         </div>
//         <div className="w-full border-t border-one border-background mt-[50px]"></div>
//         <div className="flex items-center gap-10 pt-[50px]">
//           <p>© 2023 Positivus. All Rights Reserved.</p>
//           <Link className="underline" href="/">
//             Privacy Policy
//           </Link>
//         </div>
//       </div>
//     </footer>
//   );
// }

"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Logo from "../common/Logo";

const links = ["about-us", "services", "use-cases", "pricing", "blog"];

export default function Footer() {
  return (
    <footer className="container mt-[100px] px-0 lg:px-4 2xl:px-[100px]">
      <div className="flex flex-col bg-foreground text-background rounded-t-[45px] px-4 py-8 md:px-[60px] md:pt-[55px] md:pb-[50px]">
        {/* Main Footer Content */}
        <div className="flex flex-col gap-10 md:gap-[66px]">
          {/* Logo, Nav, Socials Row */}
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            {/* Logo */}
            <Link
              href="#"
              className="flex justify-center lg:justify-start"
              prefetch={false}
            >
              <Logo mood="#ffffff" height={29} width={180} />
            </Link>

            {/* Navigation */}
            <div className="flex justify-center lg:justify-start">
              <NavigationMenu className="flex justify-center items-center">
                <NavigationMenuList className="flex flex-col gap-3 md:flex-row md:gap-6">
                  {links.map((link) => (
                    <NavigationMenuItem key={link}>
                      <NavigationMenuLink
                        asChild
                        className={navigationMenuTriggerStyle()}
                      >
                        <Link
                          className="text-background bg-transparent hover:bg-transparent text-base md:text-lg underline"
                          href={`#${link}`}
                        >
                          {link
                            .replace("-", " ")
                            .replace(/\b\w/g, (l) => l.toUpperCase())}
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Social Icons */}
            <ul className="flex justify-center gap-5">
              <li>
                <Link href="#" className="text-background">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                  >
                    <circle cx="15" cy="15" r="15" fill="white" />
                    <path
                      d="M8.22154 22.0586H11.3056V12.0742H8.22154V22.0586Z"
                      fill="black"
                    />
                    <path
                      d="M7.94116 8.88672C7.94116 9.87109 8.73555 10.668 9.76359 10.668C10.7449 10.668 11.5393 9.87109 11.5393 8.88672C11.5393 7.90234 10.7449 7.05859 9.76359 7.05859C8.73555 7.05859 7.94116 7.90234 7.94116 8.88672Z"
                      fill="black"
                    />
                    <path
                      d="M19.8103 22.0586H22.9412V16.5742C22.9412 13.9023 22.3337 11.793 19.2028 11.793C17.7075 11.793 16.6795 12.6367 16.2589 13.4336H16.2122V12.0742H13.2683V22.0586H16.3524V17.1367C16.3524 15.8242 16.586 14.5586 18.2215 14.5586C19.8103 14.5586 19.8103 16.0586 19.8103 17.1836V22.0586Z"
                      fill="black"
                    />
                  </svg>
                </Link>
              </li>{" "}
              <li>
                <Link href="#" className="text-background">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                  >
                    <path
                      d="M30 15.0913C30 6.75456 23.2863 0 15 0C6.71371 0 0 6.75456 0 15.0913C0 22.6369 5.44355 28.9047 12.6411 30V19.4726H8.83064V15.0913H12.6411V11.8053C12.6411 8.03245 14.879 5.90264 18.2661 5.90264C19.9597 5.90264 21.6532 6.2069 21.6532 6.2069V9.91886H19.7782C17.9032 9.91886 17.2984 11.0751 17.2984 12.2921V15.0913H21.4718L20.8065 19.4726H17.2984V30C24.496 28.9047 30 22.6369 30 15.0913Z"
                      fill="white"
                    />
                  </svg>
                </Link>
              </li>{" "}
              <li>
                <Link href="#" className="text-background">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                  >
                    <circle cx="15" cy="15" r="15" fill="white" />
                    <path
                      d="M21.9961 11.4915C22.6854 10.9745 23.3058 10.3541 23.7884 9.63028C23.168 9.90602 22.4442 10.1128 21.7204 10.1818C22.4786 9.73369 23.0301 9.04435 23.3058 8.18267C22.6165 8.59628 21.8238 8.90648 21.031 9.07881C20.3417 8.35501 19.4111 7.94141 18.3771 7.94141C16.378 7.94141 14.758 9.56135 14.758 11.5604C14.758 11.8362 14.7925 12.1119 14.8614 12.3876C11.8628 12.2153 9.1744 10.7677 7.38212 8.59628C7.07192 9.11328 6.89959 9.73369 6.89959 10.423C6.89959 11.6638 7.51999 12.7668 8.51953 13.4216C7.93359 13.3872 7.34766 13.2493 6.86512 12.9736V13.008C6.86512 14.7659 8.10593 16.2135 9.76034 16.5581C9.48461 16.6271 9.13994 16.696 8.82973 16.696C8.58847 16.696 8.38166 16.6615 8.14040 16.6271C8.58847 18.0747 9.93267 19.1087 11.5182 19.1432C10.2773 20.1082 8.72633 20.6942 7.03745 20.6942C6.72725 20.6942 6.45152 20.6597 6.17578 20.6252C7.76126 21.6592 9.65694 22.2452 11.725 22.2452C18.3771 22.2452 21.9961 16.7649 21.9961 11.974C21.9961 11.8017 21.9961 11.6638 21.9961 11.4915Z"
                      fill="black"
                    />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact and Subscribe Section */}
          <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-12 lg:gap-x-4 mt-8 md:mt-0">
            {/* Contact Info */}
            <div className="col-span-12 lg:col-span-5 flex flex-col gap-[27px] text-center lg:text-left">
              <h4 className="text-background bg-primary w-fit font-medium rounded-[7px] px-[7px] leading-[100%] tracking-[0] mx-auto lg:mx-0">
                Contact us:
              </h4>
              <div className="flex flex-col gap-5 max-w-[332px] mx-auto lg:mx-0">
                <p>Email: info@positivus.com</p>
                <p>Phone: 555-567-8901</p>
                <p>
                  Address: 1234 Main St Moonstone City, Stardust State 12345
                </p>
              </div>
            </div>

            {/* Subscribe Buttons */}
            <div className="col-span-12 lg:col-span-7 flex flex-col sm:flex-row justify-center items-center gap-5 bg-[#292A32] py-[40px] px-[20px] sm:py-[58px] sm:px-[40px] rounded-[14px] text-center">
              <Button
                variant="outline"
                className="border-background text-background hover:bg-transparent h-fit w-full sm:w-auto"
              >
                Email
              </Button>
              <Button variant="primary" className="h-fit w-full sm:w-auto">
                Subscribe to news
              </Button>
            </div>
          </div>
        </div>

        {/* Separator Line */}
        <div className="w-full border-t border-one border-background mt-[50px]"></div>

        {/* Copyright and Privacy Policy */}
        <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-3 pt-[50px] text-center">
          <p className="text-sm md:text-base">
            © 2023 Positivus. All Rights Reserved.
          </p>
          <Link className="underline text-sm md:text-base" href="/">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}

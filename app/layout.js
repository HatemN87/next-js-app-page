import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Home Page",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
   <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
       <nav 
       style={{
       margin:'0 10px',
       background:'teal',
       fontSize:'30px',
       display:'flex',
       justifyContent:'center',
       alignItems:'center'
       
       }}>
        <Link href={'/'}>Home</Link>
        <Link style={{margin:'0 20px'}} href={'/posts'}>Posts</Link>
        <Link style={{margin:'0 20px'}} href={'/articls'}>article</Link>
      
       </nav>
       {children}
        
       </body>
       </html>
  );
}

import "../styles/global.scss";
import "../styles/style.scss";
import axios from "axios";
import { LINK_IMAGE } from "@/contants";
import Link from "next/link";

export async function generateMetadata() {
  try {
    const res = await axios(process.env.NEXT_PUBLIC_API_URL + "/api/settings", {
      cache: "no-store", // Đảm bảo lấy dữ liệu mới mỗi lần tải trang
    });
    
    
    if (!res.ok) throw new Error("Failed to fetch metadata");
    const data = await res.json();

    return {
      title: data.site_name || "Default Title",
      description: data.site_des || "Default description",
      icons: {
        icon: data.favicon ? (LINK_IMAGE + data.favicon +'?v=123') : "",
      },
    };

  } catch (error) {
    console.error("Error fetching metadata:", error);
    return {
      title: "Error Page",
      description: "Failed to load metadata",
    };
  }
}

export default async function RootLayout({ children }) {
  const metadata = await generateMetadata();
  
  return (
    <html lang="en">
      <body>
        <Link href='/' className="icon-home">
          Home
        </Link>
        {children}
      </body>
    </html>
  );
}


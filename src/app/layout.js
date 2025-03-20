import axios from "axios";
import "../styles/global.scss";
import "../styles/style.scss";
import Link from "next/link";

export default async function RootLayout({ children }) {
  let settings = {
    site_name: "Default Site",
    site_des: "Default Description",
    favicon: "",
  };

  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/settings`);
    settings = res.data || settings;
  } catch (error) {
    console.error("Error fetching settings:", error.message);
  }

  return (
    <html lang="en">
      <head>
        <title>{settings.site_name}</title>
        <meta name="description" content={settings.site_des} />
        {settings.favicon && <link rel="icon" href={settings.favicon} />}
      </head>
      <body>
        <header className="p-4 bg-gray-800 text-white">
          <div className="text-center">
            <h1 className="text-2xl">{settings.site_name}</h1>
            <ul className="flex justify-content-center gap-3" style={{justifyContent:'center'}}>
              <li>
                <Link href="/" className="text-blue-400">Home</Link>
              </li>
              <li>
                <Link href="/blogs" className="text-blue-400">Blogs</Link>
              </li>
            </ul>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}

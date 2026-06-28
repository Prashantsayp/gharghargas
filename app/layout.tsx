import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "घर घर गैस - Ghar Ghar Gas | LPG EMI | New Connection | Government Initiative",
  description:
    "घर घर गैस - सरकारी पहल। LPG कनेक्शन और रिफिल अभी लें, बाद में भुगतान करें। घरेलू और व्यापारिक दोनों के लिए। No Cost EMI। Ghar Ghar Gas - Government Initiative for LPG connection and refill with EMI facility for domestic and commercial customers.",
  keywords: [
    "घर घर गैस",
    "Ghar Ghar Gas",
    "LPG EMI",
    "गैस कनेक्शन",
    "gas connection",
    "commercial LPG",
    "domestic LPG",
    "government scheme",
    "ujjwala yojana",
    "cooking gas",
    "rural development",
    "restaurant gas",
    "hotel LPG",
  ],
  openGraph: {
    title: "घर घर गैस - Ghar Ghar Gas | LPG Connection & EMI Facility",
    description:
      "Government initiative for LPG connection and refill with no-cost EMI. Serving both domestic and commercial customers. Apply now for instant approval.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header isScrolled={true} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
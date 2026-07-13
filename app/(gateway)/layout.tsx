import type { Metadata } from "next";
import { headers } from "next/headers";
import {
  metadataForHost,
  organizationJsonLd,
} from "../../lib/metadata";
import "../globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const incomingHeaders = await headers();
  const host = incomingHeaders.get("x-forwarded-host") ?? incomingHeaders.get("host");
  const forwardedProtocol = incomingHeaders.get("x-forwarded-proto");
  const protocol = forwardedProtocol?.split(",")[0]?.trim() ?? "https";

  return metadataForHost(host ?? "entrepoker.com", protocol);
}

export default function GatewayRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c");

  return (
    <html lang="en">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: structuredData }}
        />
      </body>
    </html>
  );
}

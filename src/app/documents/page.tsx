import { DocumentsPageClient } from "@/components/documents-page-client";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documents & Resources | Argynix",
  description: "Access and download official documents, product catalogs, and whitepapers from Argynix.",
};

export default function DocumentsPage() {
  return <DocumentsPageClient />;
}

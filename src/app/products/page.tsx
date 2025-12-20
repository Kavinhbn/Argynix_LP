import { ProductsPageClient } from "@/components/products-page-client";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products | Argynix",
  description: "Explore our range of industrial IoT hardware and software solutions.",
};

export default function ProductsPage() {
  return <ProductsPageClient />;
}

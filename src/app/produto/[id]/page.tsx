import { notFound } from "next/navigation";
import { getProductById, getAllProducts } from "@/data/products";
import { ProductView } from "@/components/ProductView";
import type { Metadata } from "next";

interface ProductPageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  const products = getAllProducts();
  return products.map((p) => ({
    id: p.id,
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const product = getProductById(params.id);
  if (!product) {
    return {
      title: "Produto Não Encontrado | TRIFFEN",
    };
  }

  return {
    title: `${product.name} | TRIFFEN Official`,
    description: product.description,
    openGraph: {
      title: `${product.name} | TRIFFEN Official`,
      description: product.description,
      images: [product.images[0]?.src || "/assets/CAPA_TRIFFEN.jpeg"],
    },
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductById(params.id);
  if (!product) {
    notFound();
  }

  const related = getAllProducts().filter((p) => p.id !== product.id);

  return <ProductView product={product} relatedProducts={related} />;
}

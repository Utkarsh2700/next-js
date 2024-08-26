import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import dynamic from "next/dynamic";
const DynamicSearchPage = dynamic(() => import("@/components/SearchPage"), {
  loading: () => <p>Loading...</p>,
});

export default function Home() {
  return (
    <>
      <Container>
        <Header />
        <main className="my-16">
          <DynamicSearchPage />
        </main>
      </Container>
      <Footer />
    </>
  );
}

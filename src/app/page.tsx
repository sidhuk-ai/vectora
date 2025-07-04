import LandingPage from "@/components/site/landing-page";
import Navbar from "@/components/site/navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Navbar />
      <LandingPage />
    </div>
  )
}
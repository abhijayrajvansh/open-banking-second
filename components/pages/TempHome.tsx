// app/page.tsx
import { Lock, Server, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-yellow-400 to-yellow-300 py-16">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            API Developer Portal
          </h1>
          <p className="text-lg mb-6 text-center">
            Unlock the power of financial data with our secure and scalable Open
            Banking API. Build innovative fintech solutions faster than ever
            before.
          </p>
          <div className="space-x-4">
            <button className="bg-gray-800 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition">
              <Link href={'/apis'}>
              Get Started
              </Link>
            </button>
            <button className="bg-white text-gray-800 px-6 py-2 rounded-md hover:bg-gray-100 transition">
              <Link href={'/products'}>
              Our Products
              </Link>
            </button>
          </div>
        </div>
      </section>

      <img src="/images/temp-banner.png" alt="banner" />

      {/* Features Grid */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
            Key Features
          </h2>
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col items-center space-y-4 text-center">
              <Lock className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-bold">Secure Authentication</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Industry-standard OAuth 2.0 and OpenID Connect protocols for
                robust security.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <Zap className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-bold">Real-time Data</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Access up-to-the-minute financial data for accounts,
                transactions, and more.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <Server className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-bold">Scalable Infrastructure</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Built on a robust, cloud-native architecture to handle millions
                of requests.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;

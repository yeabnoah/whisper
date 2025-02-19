"use client";

import { Button } from "@/components/ui/button";
import useSecretData from "@/store/secret.store";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Home() {
  const { isAiFetching } = useSecretData();
  const router = useRouter()
  return (
    <main className="bg-bgMain min-h-screen text-white">
      <div className="container mx-auto">

        <div className="flex flex-col pt-[15vh] sm:pt-[23vh] items-center justify-center min-h-[80vh] text-center gap-4 sm:gap-6 px-4">

          <h1 className="text-4xl font-inter sm:text-6xl md:text-7xl font-bold max-w-4xl leading-tight">
            Share your <span className="font-instrument italic">Secrets</span> {" "}
            <span className="block">
              in <span className="font-instrument italic">Seconds</span>.
            </span>
          </h1>

          <p className="text-gray-400 max-w-lg font-inter mb-4 sm:mb-8 text-sm sm:text-base">
            The #1 platform for anonymous sharing. Express yourself freely and connect with others through shared experiences.
          </p>

          <Button
            onClick={() => router.push("/dashboard")}
            className="px-6 sm:px-8 py-4 sm:py-6 font-instrument text-xl sm:text-2xl bg-white text-black hover:bg-white/90 transition-all duration-200 flex items-center gap-2"
          >
            {isAiFetching ? (
              <>
                <Loader2 className="animate-spin w-6 h-6" />
                <span>Loading...</span>
              </>
            ) : (
              "Get Started"
            )}
          </Button>

          {/* Companies Section */}
          <div className="mt-12 sm:mt-20">
            <p className="text-gray-400 mb-8 font-instrument italic text-lg sm:text-xl">Trusted by users worldwide</p>
          </div>
        </div>
      </div>
    </main>
  );
}

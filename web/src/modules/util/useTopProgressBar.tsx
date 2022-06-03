import { useRouter } from "next/router";
import { useEffect } from "react";
import NProgress from "nprogress";

NProgress.configure({ showSpinner: false });

export function useTopProgressBar() {
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => NProgress.start();
    const handleEnd = () => NProgress.done();

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeError", handleEnd);
    router.events.on("routeChangeComplete", handleEnd);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeError", handleEnd);
      router.events.off("routeChangeComplete", handleEnd);
    };
  }, [router]);
}

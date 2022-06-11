import Head from "next/head";

interface AppMetadataProps {
  title: string;
}

export function AppMetadata({ title }: AppMetadataProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="Social Media" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

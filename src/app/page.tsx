import Link from "next/link";

export default function Home() {
  return (
    <>
      <>
        <h1>Hello world</h1>

        <br /><br /><br />

        <Link href="/sign-in">Sing In </Link>
        <br />
        <Link href="/sign-up">Sing Up </Link>

      </>
    </>
  );
}

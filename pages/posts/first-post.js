import Link from 'next/link';

export default function FirstPost() {
  return (
    <>
    <h1>Hi!</h1>
    <h2>My name is Sungmin</h2>
    <h3>
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </h3>
    </>
  );
}
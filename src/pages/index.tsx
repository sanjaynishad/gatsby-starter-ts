import { AppHtmlHead } from '@/components/AppHtmlHead';
import Title from '@/components/Title';

export function Head() {
  return <AppHtmlHead title="Home"></AppHtmlHead>;
}

export default function Home() {
  return (
    <main>
      <Title>Hello TypeScript!</Title>
      <p>A TypeScript starter for Gatsby. Great for advanced users.</p>
      <p>
        Follow me on Twitter (
        <a href="https://twitter.com/jpedroschmitz">@jpedroschmitz</a>)
      </p>
    </main>
  );
}

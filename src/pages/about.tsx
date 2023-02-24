import { AppHtmlHead } from '@/components/AppHtmlHead';
import Title from '@/components/Title';

export function Head() {
  return <AppHtmlHead title="About"></AppHtmlHead>;
}

export default function Home() {
  return (
    <main>
      <Title>About</Title>
      <p>A TypeScript starter for Gatsby. Great for advanced users.</p>
    </main>
  );
}

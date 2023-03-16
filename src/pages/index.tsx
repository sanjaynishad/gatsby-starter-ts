import { AppHtmlHead } from '@/components/AppHtmlHead';
import { About } from '@/components/home/About';
import { Carousel } from '@/components/home/Carousel';
import { Contact } from '@/components/home/Contact';

export function Head() {
  return <AppHtmlHead title="Home"></AppHtmlHead>;
}

export default function Home() {
  return (
    <>
      <Carousel />
      <About />
      <Contact />
    </>
  );
}

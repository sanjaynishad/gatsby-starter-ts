import { useEffect } from 'react';

export function Carousel() {
  useEffect(() => {
    const $ = (window as any)?.$;
    if ($) {
      $(`.carousel .owl-carousel`).owlCarousel({
        autoplay: true,
        animateOut: `fadeOut`,
        animateIn: `fadeIn`,
        items: 1,
        smartSpeed: 300,
        dots: false,
        loop: true,
        nav: false,
      });
    }
  });

  return (
    <div className="carousel">
      <div className="container-fluid">
        <div className="owl-carousel" style={{ display: `block` }}>
          <div className="carousel-item">1</div>
          <div className="carousel-item">2</div>
          <div className="carousel-item">3</div>
        </div>
      </div>
    </div>
  );
}

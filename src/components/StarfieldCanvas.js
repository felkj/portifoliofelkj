import { useEffect, useRef } from 'react';

const StarfieldCanvas = () => {
  const canvasRef = useRef(null);
  const starArrayRef = useRef([]);

  const stars = {
    nearStar: { width: 3, speed: 0.2 },
    midStar: { width: 2, speed: 0.1 },
    farStar: { width: 1, speed: 0.025 },
  };

  function Star(x, y, width, speed, ctx) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.speed = speed;
    this.color = "#fff";

    this.draw = function () {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, width, width);
    };

    this.update = () => {
      if (this.x + this.width > window.innerWidth) {
        this.x = 0;
      }
      this.x += this.speed;
      this.draw();
    };
  }

  const init = (ctx) => {
    const newStars = [];

    const generateStars = (count, config) => {
      for (let i = 0; i < count; i++) {
        const x = Math.random() * (window.innerWidth - config.width);
        const y = Math.random() * (window.innerHeight - config.width);
        newStars.push(new Star(x, y, config.width, config.speed, ctx));
      }
    };

    generateStars(50, stars.nearStar);
    generateStars(100, stars.midStar);
    generateStars(350, stars.farStar);

    starArrayRef.current = newStars;
  };

  const animate = (ctx) => {
    const render = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      starArrayRef.current.forEach((star) => star.update());
      requestAnimationFrame(render);
    };
    render();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    init(ctx);
    animate(ctx);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init(ctx);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        display: 'block',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        pointerEvents: 'none',
      }}
    />
  );
};

export default StarfieldCanvas;

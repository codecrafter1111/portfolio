'use client';

import { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  targetX?: number;
  targetY?: number;
}

interface Gradient {
  x: number;
  y: number;
  color: string;
  vx: number;
  vy: number;
}

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const gradientsRef = useRef<Gradient[]>([]);
  // const connectionLineTimeoutRef = useRef<NodeJS.Timeout>();
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Check if dark mode is enabled
    const htmlElement = document.documentElement;
    const isDark = htmlElement.classList.contains('dark') || !htmlElement.classList.contains('light');
    setIsDarkMode(isDark);

    // Listen for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          const isDark = htmlElement.classList.contains('dark') || !htmlElement.classList.contains('light');
          setIsDarkMode(isDark);
        }
      });
    });

    observer.observe(htmlElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || prefersReducedMotion) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();

    // Initialize particles - fewer on mobile
    const particleCount = window.innerWidth < 768 ? 30 : 50;
    const newParticles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }
    particlesRef.current = newParticles;

    // Initialize gradients for mesh
    const newGradients: Gradient[] = [
      {
        x: canvas.width * 0.2,
        y: canvas.height * 0.3,
        color: isDarkMode ? 'rgba(0, 217, 255, 0.1)' : 'rgba(6, 182, 212, 0.08)',
        vx: 0.02,
        vy: 0.01,
      },
      {
        x: canvas.width * 0.8,
        y: canvas.height * 0.6,
        color: isDarkMode ? 'rgba(0, 153, 255, 0.1)' : 'rgba(2, 132, 199, 0.08)',
        vx: -0.02,
        vy: 0.015,
      },
      {
        x: canvas.width * 0.5,
        y: canvas.height * 0.8,
        color: isDarkMode ? 'rgba(255, 0, 255, 0.08)' : 'rgba(168, 85, 247, 0.06)',
        vx: 0.01,
        vy: -0.02,
      },
    ];
    gradientsRef.current = newGradients;

    let animationFrameId: number;
    let lineConnectionTime = 0;

    const animate = () => {
      // Clear with theme-appropriate background
      ctx.fillStyle = isDarkMode ? '#0a0e27' : '#ffffff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw gradient mesh background
      drawGradientMesh(ctx, canvas, gradientsRef.current, isDarkMode);

      // Update and draw particles
      const particles = particlesRef.current;
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off edges
        if (p.x - p.radius < 0 || p.x + p.radius > canvas.width) p.vx *= -1;
        if (p.y - p.radius < 0 || p.y + p.radius > canvas.height) p.vy *= -1;

        // Clamp position
        p.x = Math.max(p.radius, Math.min(canvas.width - p.radius, p.x));
        p.y = Math.max(p.radius, Math.min(canvas.height - p.radius, p.y));

        // Draw particle with theme-appropriate color
        ctx.fillStyle = isDarkMode ? `rgba(0, 217, 255, ${p.opacity})` : `rgba(6, 182, 212, ${p.opacity})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw occasional connecting lines (very subtle)
      lineConnectionTime++;
      if (lineConnectionTime > 100) {
        lineConnectionTime = 0;
        drawConnectionLines(ctx, particles, isDarkMode);
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      resizeCanvas();
    };

    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [prefersReducedMotion, isDarkMode]);

  const drawGradientMesh = (
    ctx: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement,
    gradients: Gradient[],
    isDark: boolean = true
  ) => {
    gradients.forEach((g) => {
      g.x += g.vx;
      g.y += g.vy;

      // Bounce
      if (g.x < 0 || g.x > canvas.width) g.vx *= -1;
      if (g.y < 0 || g.y > canvas.height) g.vy *= -1;

      // Clamp
      g.x = Math.max(0, Math.min(canvas.width, g.x));
      g.y = Math.max(0, Math.min(canvas.height, g.y));

      // Draw radial gradient
      const gradient = ctx.createRadialGradient(g.x, g.y, 0, g.x, g.y, 400);
      gradient.addColorStop(0, g.color);
      gradient.addColorStop(1, isDark ? 'rgba(10, 14, 39, 0)' : 'rgba(255, 255, 255, 0)');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    });
  };

  const drawConnectionLines = (
    ctx: CanvasRenderingContext2D,
    particles: Particle[],
    isDark: boolean = true
  ) => {
    const maxDistance = 150;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < maxDistance) {
          const opacity = (1 - distance / maxDistance) * 0.1;
          ctx.strokeStyle = isDark ? `rgba(0, 217, 255, ${opacity})` : `rgba(6, 182, 212, ${opacity})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
  };

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}

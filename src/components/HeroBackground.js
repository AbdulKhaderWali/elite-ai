import React, { useEffect, useRef } from 'react';
import { Shield, Lock, Wifi, Zap, Eye, Server } from 'lucide-react';

const CybersecurityHeroBackground = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const particlesRef = useRef([]);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Initialize particles
    const initParticles = () => {
      particlesRef.current = [];
      for (let i = 0; i < 50; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.2,
          life: Math.random() * 100
        });
      }
    };
    
    initParticles();
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particlesRef.current.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life += 0.5;
        
        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        
        // Pulsing effect
        const pulseOpacity = particle.opacity * (0.5 + 0.5 * Math.sin(particle.life * 0.02));
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 255, 157, ${pulseOpacity})`;
        ctx.fill();
        
        // Draw connections
        particlesRef.current.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 100) {
              const opacity = (100 - distance) / 100 * 0.1;
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.strokeStyle = `rgba(0, 255, 157, ${opacity})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        });
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);
  
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(0, 255, 157, 0.1)" strokeWidth="1"/>
            </pattern>
            <linearGradient id="gridFade" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(0, 255, 157, 0.1)" />
              <stop offset="50%" stopColor="rgba(0, 255, 157, 0.05)" />
              <stop offset="100%" stopColor="rgba(0, 255, 157, 0)" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <rect width="100%" height="100%" fill="url(#gridFade)" />
        </svg>
      </div>
      
      {/* Animated Canvas for Particles */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ mixBlendMode: 'screen' }}
      />
      
      {/* Floating Elements */}
      <div className="absolute inset-0">
        {/* Main Central Glow */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-emerald-500/20 via-emerald-500/10 to-transparent rounded-full blur-3xl animate-pulse" />
        
        {/* Floating Icons */}
        <div className="absolute top-20 left-20 animate-float" style={{ animationDelay: '0s' }}>
          <div className="p-4 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-lg border border-emerald-500/20 shadow-lg">
            <Shield className="w-6 h-6 text-emerald-400" />
          </div>
        </div>
        
        <div className="absolute top-32 right-32 animate-float" style={{ animationDelay: '1s' }}>
          <div className="p-3 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-lg border border-emerald-500/20 shadow-lg">
            <Lock className="w-5 h-5 text-emerald-400" />
          </div>
        </div>
        
        <div className="absolute bottom-32 left-32 animate-float" style={{ animationDelay: '2s' }}>
          <div className="p-3 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-lg border border-emerald-500/20 shadow-lg">
            <Wifi className="w-5 h-5 text-emerald-400" />
          </div>
        </div>
        
        <div className="absolute bottom-20 right-20 animate-float" style={{ animationDelay: '0.5s' }}>
          <div className="p-4 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-lg border border-emerald-500/20 shadow-lg">
            <Server className="w-6 h-6 text-emerald-400" />
          </div>
        </div>
        
        <div className="absolute top-1/2 right-16 animate-float" style={{ animationDelay: '1.5s' }}>
          <div className="p-3 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-lg border border-emerald-500/20 shadow-lg">
            <Eye className="w-5 h-5 text-emerald-400" />
          </div>
        </div>
        
        <div className="absolute top-1/2 left-16 animate-float" style={{ animationDelay: '2.5s' }}>
          <div className="p-3 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-lg border border-emerald-500/20 shadow-lg">
            <Zap className="w-5 h-5 text-emerald-400" />
          </div>
        </div>
        
        {/* Subtle Geometric Shapes */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-emerald-400/40 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-emerald-400/60 rounded-full animate-ping" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-emerald-400/50 rounded-full animate-ping" style={{ animationDelay: '3s' }} />
        
        {/* Subtle Scanning Lines */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent animate-scan-horizontal" />
          <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-emerald-500/30 to-transparent animate-scan-vertical" />
        </div>
      </div>
      
      {/* Overlay for content contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/20" />
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes scan-horizontal {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100vw); }
        }
        
        @keyframes scan-vertical {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-scan-horizontal {
          animation: scan-horizontal 8s linear infinite;
        }
        
        .animate-scan-vertical {
          animation: scan-vertical 10s linear infinite;
        }
        
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  );
};

export default CybersecurityHeroBackground;

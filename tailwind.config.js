/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0a0c10',
        gridDark: '#0e0f1a',
        neonMagenta: '#ff2bd6',
        neonCyan: '#00fff7',
        neonYellow: '#ffe600',
        crtGreen: '#32ff6a',
      },
      fontFamily: {
        retro: ['"Press Start 2P"', 'cursive'],
        monoRetro: ['"VT323"', 'monospace'],
      },
      boxShadow: {
        neon: '0 0 6px rgba(255, 43, 214, 0.75), 0 0 18px rgba(0, 255, 247, 0.6)',
        neonCyan: '0 0 10px rgba(0,255,247,0.6), 0 0 20px rgba(0,255,247,0.5), 0 0 40px rgba(0,255,247,0.4)',
        neonMagenta: '0 0 10px rgba(255,43,214,0.6), 0 0 20px rgba(255,43,214,0.5), 0 0 40px rgba(255,43,214,0.4)',
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': { opacity: '0.99' },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': { opacity: '0.4' },
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        glowPulse: {
          '0%, 100%': { filter: 'drop-shadow(0 0 6px rgba(0,255,247,0.6))' },
          '50%': { filter: 'drop-shadow(0 0 14px rgba(255,43,214,0.7))' },
        },
      },
      animation: {
        flicker: 'flicker 2.4s infinite both',
        floaty: 'floaty 6s ease-in-out infinite',
        glowPulse: 'glowPulse 2.8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}


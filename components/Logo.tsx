export default function Logo({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 220 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 15C10 15 15 10 20 15C25 20 20 25 15 25C10 25 5 20 10 15Z" fill="#00D4FF"/>
      <path d="M20 15C20 15 25 20 30 15C35 10 40 15 40 20C40 25 35 30 30 25C25 20 20 25 20 15Z" fill="#0A2540"/>
      <circle cx="35" cy="20" r="3" fill="#1a1a1a"/>
      <text x="50" y="32" fontFamily="Raleway, sans-serif" fontSize="24" fontWeight="700" fill="#fff">
        Saitech
      </text>
      <text x="135" y="32" fontFamily="Raleway, sans-serif" fontSize="24" fontWeight="300" fill="#fff">
        Studio
      </text>
    </svg>
  );
}

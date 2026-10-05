import React from 'react';
import logoImg from '../assets/images/logo_cvpl.png';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
}

export const CVPLLogo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = true,
}) => {
  const sizeMap = {
    sm: { img: 'h-8 w-auto', text: 'text-xs', sub: 'text-[9px]' },
    md: { img: 'h-10 sm:h-11 w-auto', text: 'text-sm font-bold', sub: 'text-[10px]' },
    lg: { img: 'h-14 sm:h-16 w-auto', text: 'text-base font-bold', sub: 'text-xs' },
    xl: { img: 'h-20 sm:h-24 w-auto', text: 'text-xl font-bold', sub: 'text-sm' },
  };

  const { img, sub } = sizeMap[size];

  return (
    <div className={`flex items-center gap-2.5 select-none shrink-0 ${className}`}>
      {/* Official CVPL Guinea Logo Image */}
      <img
        src={logoImg}
        alt="Cabinet Vétérinaire Privé de Lambandji - CVPL Guinée"
        className={`${img} object-contain shrink-0`}
        loading="eager"
      />

      {showSubtitle && (
        <div className="hidden sm:flex flex-col justify-center leading-tight whitespace-nowrap">
          <span className="font-display font-extrabold text-[#16325B] text-sm tracking-tight">
            Cabinet Vétérinaire
          </span>
          <span className={`font-semibold uppercase tracking-wider text-[#85C83C] ${sub}`}>
            Lambandji · Kinifi
          </span>
        </div>
      )}
    </div>
  );
};

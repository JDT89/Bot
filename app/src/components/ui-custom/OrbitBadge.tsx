import type { LucideIcon } from 'lucide-react';

interface OrbitBadgeProps {
  icon: LucideIcon;
  label: string;
  className?: string;
  style?: React.CSSProperties;
}

export function OrbitBadge({ icon: Icon, label, className = '', style }: OrbitBadgeProps) {
  return (
    <div
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm ${className}`}
      style={{
        background: 'rgba(184, 255, 44, 0.12)',
        color: '#B8FF2C',
        border: '1px solid rgba(184, 255, 44, 0.25)',
        ...style,
      }}
    >
      <Icon className="w-3.5 h-3.5" />
      <span>{label}</span>
    </div>
  );
}

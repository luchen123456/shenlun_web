import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { RadarData } from '../types';

const data: RadarData[] = [
  { subject: '观点论证', A: 85, fullMark: 100 },
  { subject: '逻辑结构', A: 90, fullMark: 100 },
  { subject: '语言表达', A: 75, fullMark: 100 },
  { subject: '卷面格式', A: 95, fullMark: 100 },
  { subject: '深度', A: 60, fullMark: 100 },
  { subject: '相关性', A: 80, fullMark: 100 },
];

const ScoreRadar: React.FC = () => {
  return (
    <div className="w-full h-[240px] relative flex items-center justify-center">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
          <PolarGrid stroke="#e5e7eb" />
          <PolarAngleAxis 
            dataKey="subject" 
            tick={{ fill: '#6b7280', fontSize: 11, fontWeight: 'bold' }} 
          />
          <Radar
            name="Score"
            dataKey="A"
            stroke="#0056D2"
            strokeWidth={2}
            fill="#0056D2"
            fillOpacity={0.2}
          />
          {/* Custom dots for aesthetics similar to design */}
          {data.map((entry, index) => {
             // Note: Recharts doesn't easily expose coordinates for custom SVGs in standard API without custom shape, 
             // but the dots on vertices are automatic with standard dot prop or can be omitted for cleaner look.
             // We will stick to the clean fill style.
             return null;
          })}
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ScoreRadar;
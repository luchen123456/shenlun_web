export type ViewState = 'dashboard' | 'report' | 'annotation';

export interface ExamRecord {
  id: string;
  title: string;
  category: string;
  date: string;
  time: string;
  score: number | null;
  status: 'completed' | 'processing';
  icon: 'description' | 'image';
  iconColorClass: string;
  iconBgClass: string;
}

export interface RadarData {
  subject: string;
  A: number;
  fullMark: number;
}

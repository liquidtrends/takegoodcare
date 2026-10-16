import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
 title: 'Take Good Care Consulting | Strategic support for lasting change',
 description: 'Relationship-based research, strategy, communications and storytelling with Daena Crosby, PhD. Supporting non-profit, Indigenous and community-led organizations across Canada.',
};
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {return <html lang="en"><body>{children}</body></html>}

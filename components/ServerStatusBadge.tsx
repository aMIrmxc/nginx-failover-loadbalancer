// app/ServerStatusBadge.jsx
"use client";

interface ServerStatusBadgeProps {
  serverName: string;
}

export default function ServerStatusBadge({ serverName } : ServerStatusBadgeProps ) {
  return (
    <div style={{
      position: 'fixed',
      top: '20px',
      right: '20px',
      backgroundColor: '#ff4757',
      color: 'white',
      padding: '15px 25px',
      borderRadius: '8px',
      boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
      zIndex: 9999,
      direction: 'rtl',
      fontFamily: 'monospace, sans-serif'
    }}>
      <h4 style={{ margin: 0 }}>⚙️ وضعیت لود بالانسر</h4>
      <p style={{ margin: '5px 0 0 0', fontWeight: 'bold' }}>
        درخواست در حال پردازش توسط: <span style={{ textDecoration: 'underline' }}>{serverName}</span>
      </p>
    </div>
  );
}
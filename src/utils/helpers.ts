export const getStatusColor = (status: string): string => {
  const colors: Record<string, string> = {
    open: '#FF9800',
    in_progress: '#FFC107',
    resolved: '#4CAF50',
    closed: '#9E9E9E',
  };
  return colors[status] || '#2196F3';
};

export const getPriorityColor = (priority: string): string => {
  const colors: Record<string, string> = {
    low: '#4CAF50',
    medium: '#FFC107',
    high: '#FF5722',
    critical: '#C70039',
  };
  return colors[priority] || '#2196F3';
};

export const getCategoryIcon = (category: string): string => {
  const icons: Record<string, string> = {
    Infrastructure: 'í¿—ï¸',
    Sanitation: 'í·¹',
    Water: 'í²§',
    Electricity: 'âš¡',
    Roads: 'í»£ï¸',
    'Public Safety': 'íº¨',
    Other: 'í³‹',
  };
  return icons[category] || 'í³‹';
};

export const formatDate = (date: string | Date): string => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

export const formatDateTime = (date: string | Date): string => {
  return new Date(date).toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

export const formatTimeAgo = (date: string | Date): string => {
  const now = new Date();
  const then = new Date(date);
  const diff = now.getTime() - then.getTime();
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);

  if (minutes < 1) return 'Just now';
  if (minutes < 60) return `${minutes}m ago`;
  if (hours < 24) return `${hours}h ago`;
  if (days < 30) return `${days}d ago`;
  return formatDate(date);
};

export const truncateText = (text: string, length: number): string => {
  return text.length > length ? `${text.substring(0, length)}...` : text;
};

export const formatComplaintStatus = (status: string): string => {
  return status
    .split('_')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

import React, { memo } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface Complaint {
  id: string;
  title: string;
  description: string;
  category: string;
  status: string;
  priority: string;
  createdAt: string;
}

interface ComplaintCardProps {
  complaint: Complaint;
  onPress?: () => void;
}

const ComplaintCard: React.FC<ComplaintCardProps> = memo(({ complaint, onPress }) => {
  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      open: '#FF9800',
      in_progress: '#FFC107',
      resolved: '#4CAF50',
      closed: '#9E9E9E',
    };
    return colors[status] || '#2196F3';
  };

  const getPriorityColor = (priority: string) => {
    const colors: Record<string, string> = {
      low: '#4CAF50',
      medium: '#FFC107',
      high: '#FF5722',
      critical: '#C70039',
    };
    return colors[priority] || '#2196F3';
  };

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {complaint.title}
          </Text>
          <Text style={styles.id}>#{complaint.id.substring(0, 8)}</Text>
        </View>
        <View
          style={[
            styles.statusBadge,
            { backgroundColor: getStatusColor(complaint.status) },
          ]}
        >
          <Text style={styles.statusText}>
            {complaint.status.replace('_', ' ').toUpperCase()}
          </Text>
        </View>
      </View>

      <Text style={styles.description} numberOfLines={2}>
        {complaint.description}
      </Text>

      <View style={styles.footer}>
        <View style={styles.categoryBadge}>
          <Text style={styles.category}>{complaint.category}</Text>
        </View>
        <View
          style={[
            styles.priorityBadge,
            { backgroundColor: getPriorityColor(complaint.priority) },
          ]}
        >
          <Text style={styles.priority}>
            {complaint.priority.charAt(0).toUpperCase()}
          </Text>
        </View>
        <Text style={styles.date}>
          {new Date(complaint.createdAt).toLocaleDateString()}
        </Text>
      </View>
    </TouchableOpacity>
  );
});

ComplaintCard.displayName = 'ComplaintCard';

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginHorizontal: 10,
    marginVertical: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  titleContainer: {
    flex: 1,
    marginRight: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#333',
  },
  id: {
    fontSize: 11,
    color: '#999',
    marginTop: 2,
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  statusText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#fff',
  },
  description: {
    fontSize: 13,
    color: '#666',
    lineHeight: 18,
    marginBottom: 10,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  categoryBadge: {
    backgroundColor: '#E3F2FD',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginRight: 8,
  },
  category: {
    fontSize: 11,
    color: '#2196F3',
    fontWeight: '600',
  },
  priorityBadge: {
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  priority: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#fff',
  },
  date: {
    fontSize: 11,
    color: '#999',
    marginLeft: 'auto',
  },
});

export default ComplaintCard;

import { getStatusColor, getPriorityColor, formatDate } from '../../src/utils/helpers';

describe('Helpers', () => {
  it('should return correct status color', () => {
    expect(getStatusColor('open')).toBe('#FF9800');
    expect(getStatusColor('resolved')).toBe('#4CAF50');
  });

  it('should format date correctly', () => {
    const date = new Date('2024-01-15');
    const formatted = formatDate(date);
    expect(formatted).toContain('2024');
  });
});

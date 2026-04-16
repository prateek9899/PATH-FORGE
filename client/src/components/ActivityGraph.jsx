/**
 * ActivityGraph – Renders a 30-day activity bar chart.
 * Shows daily topics completed with color intensity based on count.
 */
export default function ActivityGraph({ data }) {
  if (!data || data.length === 0) {
    return (
      <div className="glass-card p-6">
        <h3 className="text-lg font-semibold text-dark-200 mb-4">📅 Activity (Last 30 Days)</h3>
        <p className="text-dark-400 text-sm">No activity data yet. Start completing topics!</p>
      </div>
    );
  }

  const maxTopics = Math.max(...data.map((d) => d.topicsCompleted), 1);

  const getBarColor = (count) => {
    if (count === 0) return 'bg-dark-800';
    const intensity = count / maxTopics;
    if (intensity > 0.75) return 'bg-primary-500';
    if (intensity > 0.5) return 'bg-primary-600';
    if (intensity > 0.25) return 'bg-primary-700';
    return 'bg-primary-800';
  };

  return (
    <div className="glass-card p-6">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">📅 Activity (Last 30 Days)</h3>
      <div className="flex items-end gap-1 h-32">
        {data.map((day, i) => (
          <div
            key={day.date}
            className="group relative flex-1 flex flex-col items-center justify-end"
          >
            {/* Tooltip */}
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-dark-700 text-xs text-dark-200 px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 pointer-events-none">
              <div className="font-medium">{day.date}</div>
              <div>{day.topicsCompleted} topic{day.topicsCompleted !== 1 ? 's' : ''}</div>
            </div>
            {/* Bar */}
            <div
              className={`w-full rounded-t transition-all duration-300 ${getBarColor(day.topicsCompleted)} min-h-[4px]`}
              style={{
                height: day.topicsCompleted > 0
                  ? `${Math.max((day.topicsCompleted / maxTopics) * 100, 10)}%`
                  : '4px',
              }}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-2 text-xs text-dark-500">
        <span>{data[0]?.date}</span>
        <span>{data[data.length - 1]?.date}</span>
      </div>
    </div>
  );
}

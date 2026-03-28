/**
 * WeaknessPanel – Displays detected weak areas across all roadmaps.
 */
export default function WeaknessPanel({ weaknesses }) {
  if (!weaknesses || weaknesses.length === 0) {
    return (
      <div className="glass-card p-6">
        <h3 className="text-lg font-semibold text-dark-200 mb-3">⚠️ Weak Areas</h3>
        <p className="text-dark-400 text-sm">No weak areas detected. Keep up the great work!</p>
      </div>
    );
  }

  return (
    <div className="glass-card p-6">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">⚠️ Weak Areas</h3>
      <div className="space-y-3">
        {weaknesses.map((group, gi) => (
          <div key={gi}>
            <p className="text-xs font-medium text-primary-400 uppercase tracking-wider mb-2">
              {group.roadmapTitle}
            </p>
            {group.weakAreas.map((area, ai) => (
              <div
                key={ai}
                className="flex items-start gap-3 bg-red-500/5 border border-red-500/15 rounded-xl px-4 py-3 mb-2"
              >
                <span className="text-red-400 mt-0.5 text-sm">●</span>
                <div>
                  <p className="text-dark-200 text-sm font-medium">{area.topicTitle}</p>
                  <p className="text-dark-400 text-xs mt-0.5">{area.reason}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

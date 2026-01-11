"use client";

interface Activity {
  id: string;
  description: string;
  date: Date;
}

interface ActivityTimelineProps {
  activities: Activity[];
}

export function ActivityTimeline({ activities }: ActivityTimelineProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-bold mb-4">Activity Timeline</h2>
      <ul className="divide-y">
        {activities.map((activity) => (
          <li key={activity.id} className="py-3">
            <p>{activity.description}</p>
            <span className="text-sm text-gray-500">
              {activity.date.toLocaleDateString()}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
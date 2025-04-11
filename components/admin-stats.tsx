interface AdminStatsProps {
  projectCount: number
  articleCount: number
}

export default function AdminStats({ projectCount, articleCount }: AdminStatsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-gray-500 text-sm font-medium">Total Projects</h3>
        <p className="text-3xl font-bold">{projectCount}</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-gray-500 text-sm font-medium">Total Articles</h3>
        <p className="text-3xl font-bold">{articleCount}</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-gray-500 text-sm font-medium">Published Articles</h3>
        <p className="text-3xl font-bold">{articleCount}</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-gray-500 text-sm font-medium">Total Views</h3>
        <p className="text-3xl font-bold">1,234</p>
      </div>
    </div>
  )
}

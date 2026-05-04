import { GitHubCalendar } from 'react-github-calendar'

export default function GitHubContributions({
  username = 'MatNgl',
  className = '',
}: {
  username?: string
  className?: string
}) {
  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <div className="w-full [&_svg]:w-full [&_svg]:h-auto">
        <GitHubCalendar
          username={username}
          colorScheme="dark"
          blockSize={12}
          blockMargin={3}
          fontSize={14}
          hideColorLegend
          labels={{
            totalCount: '{{count}} contributions l\'année dernière',
          }}
          theme={{
            light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
            dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353']
          }}
        />
      </div>
    </div>
  )
}

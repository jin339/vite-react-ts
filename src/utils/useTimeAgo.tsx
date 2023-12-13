import { useEffect, useState } from 'react'

interface userProps {
  time: Date
}

const useTimeAgo = ({ time }: userProps): string => {
  const [timeAgo, setTimeAgo] = useState(turnTime(time))

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeAgo(turnTime(time))
    }, 1000)

    return clearInterval(intervalId)
  }, [time])

  return timeAgo
}

// 时间转换
function turnTime(params: Date): string {
  const currentTime = new Date()
  const oldTime = new Date(params)

  const timeDiff = currentTime.getTime() - oldTime.getTime()
  const seconds = Math.floor(timeDiff / 1000)

  if (seconds < 60) {
    return `${seconds}秒前`
  } else if (seconds < 3600) {
    const minutes = Math.floor(seconds / 60)
    return `${minutes}分钟前`
  } else if (seconds < 86400) {
    const hours = Math.floor(seconds / 3600)
    return `${hours}小时前`
  } else {
    const days = Math.floor(seconds / 86400)
    return `${days}天前`
  }
}

// 导出
export { useTimeAgo }

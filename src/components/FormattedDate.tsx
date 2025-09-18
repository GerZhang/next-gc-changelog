/**
 * 中文日期格式化器
 * 使用 Intl.DateTimeFormat 将日期格式化为中文显示
 */
const dateFormatter = new Intl.DateTimeFormat('zh-CN', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  timeZone: 'UTC',
})

/**
 * 格式化日期组件
 * @param date - 要格式化的日期，可以是字符串或 Date 对象
 * @param props - 其他传递给 time 元素的属性
 * @returns 格式化后的日期时间元素
 */
export function FormattedDate({
  date,
  ...props
}: React.ComponentPropsWithoutRef<'time'> & { date: string | Date }) {
  date = typeof date === 'string' ? new Date(date) : date

  return (
    <time dateTime={date.toISOString()} {...props}>
      {dateFormatter.format(date)}
    </time>
  )
}

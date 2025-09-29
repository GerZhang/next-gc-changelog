import { useId } from 'react'
import clsx from 'clsx'

import { StarField } from '@/components/StarField'

/**
 * 背景辉光组件
 * 使用径向渐变在页面左侧生成幽蓝的背景辉光效果
 */
function Glow({ centered = false }: { centered?: boolean }) {
  const id = useId()
  return (
    <div className={clsx(
      'absolute inset-0 -z-10 overflow-hidden bg-gray-950',
      centered
        ? 'w-full'
        : 'lg:right-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-lg'
    )}>
      <svg
        className={clsx(
          'absolute h-320 w-[180%] aria-hidden="true"',
          centered
            ? '-bottom-48 left-[-40%] lg:-bottom-48 lg:left-[-40%] lg:h-320 lg:w-[180%]'
            : '-bottom-48 left-[-40%] lg:top-[-40%] lg:-right-40 lg:bottom-auto lg:left-auto lg:h-[180%] lg:w-7xl'
        )}
        aria-hidden="true"
      >
        <defs>
          <radialGradient
            id={`${id}-desktop`}
            cx={centered ? "50%" : "100%"}
            cy={centered ? "100%" : "50%"}
          >
            <stop offset="0%" stopColor="rgba(56, 189, 248, 0.3)" />
            <stop offset="53.95%" stopColor="rgba(0, 71, 255, 0.09)" />
            <stop offset="100%" stopColor="rgba(10, 14, 23, 0)" />
          </radialGradient>
          <radialGradient
            id={`${id}-mobile`}
            cx={centered ? "50%" : "0%"}
            cy="100%"
          >
            <stop offset="0%" stopColor="rgba(56, 189, 248, 0.3)" />
            <stop offset="53.95%" stopColor="rgba(0, 71, 255, 0.09)" />
            <stop offset="100%" stopColor="rgba(10, 14, 23, 0)" />
          </radialGradient>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill={`url(#${id}-desktop)`}
          className="hidden lg:block"
        />
        <rect
          width="100%"
          height="100%"
          fill={`url(#${id}-mobile)`}
          className="lg:hidden"
        />
      </svg>
      <div className="absolute inset-x-0 right-0 bottom-0 h-px bg-white mix-blend-overlay lg:top-0 lg:left-auto lg:h-auto lg:w-px" />
    </div >
  )
}

/**
 * 首页左侧固定侧栏组件（可选居中）
 * 默认作为固定左侧导航区域使用；当传入 centered=true 时，侧栏整体在视口中居中显示
 * @param props.main - 主内容区域（例如品牌、标题、说明等）
 * @param props.footer - 底部区域（例如作者信息、链接等）
 * @param props.centered - 是否将侧栏整体居中显示（用于首页）
 */
export function FixedSidebar({
  main,
  footer,
  centered = false,
}: {
  main: React.ReactNode
  footer: React.ReactNode
  centered?: boolean
}) {
  return (
    <div
      className={clsx(
        'relative flex-none overflow-hidden px-6',
        centered
          ? 'min-h-screen flex items-center justify-center'
          : 'lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex lg:px-0',
      )}
    >
      <Glow centered={centered} />
      <div
        className={clsx(
          'relative flex w-full',
          centered
            ? 'justify-center'
            : 'lg:pointer-events-auto lg:mr-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-lg lg:overflow-x-hidden lg:overflow-y-auto lg:pl-[max(4rem,calc(50%-38rem))]',
        )}
      >
        <div className={clsx('mx-auto max-w-lg lg:flex  lg:flex-col', centered ? '' : 'lg:w-96 lg:max-w-none lg:mx-0 lg:before:flex-1 lg:before:pt-6')}>
          <div
            className={clsx(
              "pt-20 pb-16",
              centered
                ? "py-20"
                : "sm:pt-32 sm:pb-20 lg:py-20"
            )}
          >
            <div className="relative">
              <StarField className="top-14 -right-44" />
              {main}
            </div>
          </div>
          <div className={clsx('flex flex-1 items-center justify-center pb-4', centered ? '' : 'lg:justify-start lg:pb-6')}>
            {footer}
          </div>
        </div>
      </div>
    </div >
  )
}
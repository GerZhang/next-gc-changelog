'use client'

import Link from 'next/link'

import { IconLink } from '@/components/IconLink'
import { Logo } from '@/components/Logo'
import { SignUpForm } from '@/components/SignUpForm'
import { usePathname } from 'next/navigation'

function BookIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M7 3.41a1 1 0 0 0-.668-.943L2.275 1.039a.987.987 0 0 0-.877.166c-.25.192-.398.493-.398.812V12.2c0 .454.296.853.725.977l3.948 1.365A1 1 0 0 0 7 13.596V3.41ZM9 13.596a1 1 0 0 0 1.327.946l3.948-1.365c.429-.124.725-.523.725-.977V2.017c0-.32-.147-.62-.398-.812a.987.987 0 0 0-.877-.166L9.668 2.467A1 1 0 0 0 9 3.41v10.186Z" />
    </svg>
  )
}

function GitHubIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M8 .198a8 8 0 0 0-8 8 7.999 7.999 0 0 0 5.47 7.59c.4.076.547-.172.547-.384 0-.19-.007-.694-.01-1.36-2.226.482-2.695-1.074-2.695-1.074-.364-.923-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.224 1.873.87 2.33.666.072-.518.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.954 0-.873.31-1.586.823-2.146-.09-.202-.36-1.016.07-2.118 0 0 .67-.214 2.2.82a7.67 7.67 0 0 1 2-.27 7.67 7.67 0 0 1 2 .27c1.52-1.034 2.19-.82 2.19-.82.43 1.102.16 1.916.08 2.118.51.56.82 1.273.82 2.146 0 3.074-1.87 3.75-3.65 3.947.28.24.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.14.46.55.38A7.972 7.972 0 0 0 16 8.199a8 8 0 0 0-8-8Z" />
    </svg>
  )
}

function ChangeLogIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
      <path fill="currentColor" d="M19 3a3 3 0 0 1 1 5.83V13a6 6 0 0 1-6 6h-.585l1.292 1.293a1 1 0 0 1 .083 1.32l-.083.094a1 1 0 0 1-1.414 0l-2.959-2.959a1 1 0 0 1-.238-.32l-.038-.091l-.028-.094a.98.98 0 0 1 .187-.866l.076-.084l3-3a1 1 0 0 1 1.414 1.414L13.414 17H14a4 4 0 0 0 3.995-3.8L18 13V8.829A3 3 0 0 1 16 6l.005-.176A3 3 0 0 1 19 3m-8.293-.707l3 3a.98.98 0 0 1 .263.95l-.01.031l-.003.018l-.008.018l-.007.027l-.016.035l-.01.032l-.007.01l-.005.014a1 1 0 0 1-.232.316l-2.965 2.963a1 1 0 0 1-1.32.083l-.094-.083a1 1 0 0 1 0-1.414L10.584 7H10a4 4 0 0 0-3.995 3.8L6 11v4.171A3.001 3.001 0 1 1 2 18l.005-.176A3 3 0 0 1 4 15.17V11a6 6 0 0 1 6-6h.585L9.293 3.707a1 1 0 0 1-.083-1.32l.083-.094a1 1 0 0 1 1.414 0" />
    </svg>
  )
}

function FeedIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.5 3a.5.5 0 0 1 .5-.5h.5c5.523 0 10 4.477 10 10v.5a.5.5 0 0 1-.5.5h-.5a.5.5 0 0 1-.5-.5v-.5A8.5 8.5 0 0 0 3.5 4H3a.5.5 0 0 1-.5-.5V3Zm0 4.5A.5.5 0 0 1 3 7h.5A5.5 5.5 0 0 1 9 12.5v.5a.5.5 0 0 1-.5.5H8a.5.5 0 0 1-.5-.5v-.5a4 4 0 0 0-4-4H3a.5.5 0 0 1-.5-.5v-.5Zm0 5a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
      />
    </svg>
  )
}

function XIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M9.51762 6.77491L15.3459 0H13.9648L8.90409 5.88256L4.86212 0H0.200195L6.31244 8.89547L0.200195 16H1.58139L6.92562 9.78782L11.1942 16H15.8562L9.51728 6.77491H9.51762ZM7.62588 8.97384L7.00658 8.08805L2.07905 1.03974H4.20049L8.17706 6.72795L8.79636 7.61374L13.9654 15.0075H11.844L7.62588 8.97418V8.97384Z" />
    </svg>
  )
}

/**
 * 产品配置接口
 */
interface Product {
  id: string
  name: string
  displayName: string
  helpUrl?: string
  changelogUrl?: string
}

/**
 * 产品配置数据
 */
const PRODUCT_CONFIG: Record<string, Product> = {
  forguncy: {
    id: 'forguncy',
    name: 'forguncy',
    displayName: '活字格',
    helpUrl: 'https://www.grapecity.com.cn/solutions/huozige/help/docs/overview',
    changelogUrl: 'https://gcdn.grapecity.com.cn/showtopic-157560-1-1.html'
  },
  wyn: {
    id: 'wyn',
    name: 'wyn',
    displayName: 'Wyn 商业智能',
    helpUrl: 'https://www.grapecity.com.cn/solutions/wyn/help/docs/index',
    changelogUrl: 'https://gcdn.grapecity.com.cn/showtopic-236342-1-1.html'
  }
}

/**
 * 从路径中解析产品信息
 * @param pathname - 当前路径
 * @returns 产品配置信息
 */
function getProductFromPath(pathname: string): Product {
  // 如果是首页，返回默认产品
  if (pathname === '/') {
    return PRODUCT_CONFIG.forguncy
  }

  // 解析路径格式: /productId/versionId
  const pathParts = pathname.split('/').filter(Boolean)
  if (pathParts.length >= 1) {
    const productId = pathParts[0]
    const product = PRODUCT_CONFIG[productId]
    if (product) {
      return product
    }
  }

  // 默认返回活字格
  return PRODUCT_CONFIG.forguncy
}


export function Intro() {
  const pathname = usePathname()
  const currentProduct = getProductFromPath(pathname)
  return (
    <>
      <div>
        <Link href="/">
          <Logo className="inline-block h-8 w-auto" />
        </Link>
      </div>
      <h1 className="mt-14 font-display text-4xl/tight font-light text-white">
        葡萄城产品 Log 📝{' '}
        <span className="text-sky-300">版本迭代，尽在掌握​</span>
      </h1>
      <p className="mt-4 text-sm/6 text-gray-300">
        在这里，您可以查看 {' '}
        <span className="text-sky-300">葡萄城所有产品</span>
        {' '}
        每个版本的最新变化。我们去除了冗余的技术细节，聚焦在产品功能上，提供更加简洁且清晰的更新说明，帮助您轻松掌握最新功能与差异点，了解每一次变化带来的业务价值。
      </p>
      <SignUpForm />
      <div className="mt-8 flex flex-wrap justify-center gap-x-1 gap-y-3 sm:gap-x-2 lg:justify-start">
        <IconLink href={currentProduct.helpUrl || "#"} icon={BookIcon} className="flex-none">
          帮助手册
        </IconLink>
        <IconLink href={currentProduct.changelogUrl || "#"} icon={ChangeLogIcon} className="flex-none">
          产品变更细节
        </IconLink>
        <IconLink href="/feed.xml" icon={FeedIcon} className="flex-none">
          RSS
        </IconLink>
      </div>
    </>
  )
}

export function IntroFooter() {
  return (
    <p className="flex items-baseline gap-x-2 text-[0.8125rem]/6 text-gray-500">
      Brought to you by{' '}
      <IconLink href="#" icon={GitHubIcon} compact>
        Gerald Zhang
      </IconLink>
    </p>
  )
}

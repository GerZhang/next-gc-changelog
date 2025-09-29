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

function ExploreIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" {...props}>
      <path d="M4.038 4.038a5.25 5.25 0 0 0 0 7.424.75.75 0 0 1-1.06 1.061A6.75 6.75 0 1 1 14.5 7.75a.75.75 0 1 1-1.5 0 5.25 5.25 0 0 0-8.962-3.712Z" />
      <path d="M7.712 7.136a.75.75 0 0 1 .814.302l2.984 4.377a.75.75 0 0 1-.726 1.164l-.76-.109.289 1.075a.75.75 0 0 1-1.45.388l-.287-1.075-.602.474a.75.75 0 0 1-1.212-.645l.396-5.283a.75.75 0 0 1 .554-.668Z" />
      <path d="M5.805 9.695A2.75 2.75 0 1 1 10.5 7.75a.75.75 0 0 0 1.5 0 4.25 4.25 0 1 0-7.255 3.005.75.75 0 1 0 1.06-1.06Z" />
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

function academicIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" {...props}>
      <path d="M7.702 1.368a.75.75 0 0 1 .597 0c2.098.91 4.105 1.99 6.004 3.223a.75.75 0 0 1-.194 1.348A34.27 34.27 0 0 0 8.341 8.25a.75.75 0 0 1-.682 0c-.625-.32-1.262-.62-1.909-.901v-.542a36.878 36.878 0 0 1 2.568-1.33.75.75 0 0 0-.636-1.357 38.39 38.39 0 0 0-3.06 1.605.75.75 0 0 0-.372.648v.365c-.773-.294-1.56-.56-2.359-.8a.75.75 0 0 1-.194-1.347 40.901 40.901 0 0 1 6.005-3.223ZM4.25 8.348c-.53-.212-1.067-.411-1.611-.596a40.973 40.973 0 0 0-.418 2.97.75.75 0 0 0 .474.776c.175.068.35.138.524.21a5.544 5.544 0 0 1-.58.681.75.75 0 1 0 1.06 1.06c.35-.349.655-.726.915-1.124a29.282 29.282 0 0 0-1.395-.617A5.483 5.483 0 0 0 4.25 8.5v-.152Z" />
      <path d="M7.603 13.96c-.96-.6-1.958-1.147-2.989-1.635a6.981 6.981 0 0 0 1.12-3.341c.419.192.834.393 1.244.602a2.25 2.25 0 0 0 2.045 0 32.787 32.787 0 0 1 4.338-1.834c.175.978.315 1.969.419 2.97a.75.75 0 0 1-.474.776 29.385 29.385 0 0 0-4.909 2.461.75.75 0 0 1-.794 0Z" />
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
  exploreUrl?: string
  academicUrl?: string
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
    exploreUrl: 'https://gcdn.grapecity.com.cn/showtopic-157560-1-1.html',
    academicUrl: 'https://learn.grapecity.com.cn/courselist?select=OLC-Fgc&order=course_start_time&dir=desc&page=1&menu=Item-00005'
  },
  wyn: {
    id: 'wyn',
    name: 'wyn',
    displayName: 'Wyn 商业智能',
    helpUrl: 'https://www.grapecity.com.cn/solutions/wyn/help/docs/index',
    exploreUrl: 'https://gcdn.grapecity.com.cn/showtopic-236342-1-1.html',
    academicUrl: 'https://learn.grapecity.com.cn/courselist?select=OLC-Wyn&order=course_start_time&dir=desc&page=1&menu=Item-00005'
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
        葡萄城产品 {' '}
        <span className="text-sky-300">版本迭代，尽在掌握​</span>
      </h1>
      <p className="mt-4 text-sm/6 text-gray-300">
        在这里，您可以查看 {' '}
        <span className="text-sky-300">{currentProduct.displayName}</span>
        {' '}
        每个版本的最新变化。我们去除了冗余的技术细节，聚焦在产品功能上，提供更加简洁且清晰的更新说明，帮助您轻松掌握最新功能与差异点，了解每一次变化带来的业务价值。
      </p>
      <SignUpForm />
      <div className="mt-8 flex flex-wrap justify-center gap-x-1 gap-y-3 sm:gap-x-2">
        <IconLink href={currentProduct.helpUrl || "#"} icon={BookIcon} className="flex-none">
          帮助手册
        </IconLink>
        <IconLink href={currentProduct.exploreUrl || "#"} icon={ExploreIcon} className="flex-none">
          产品变更细节
        </IconLink>
        <IconLink href={currentProduct.academicUrl || "#"} icon={academicIcon} className="flex-none">
          葡萄城开发者学堂
        </IconLink>
      </div>
    </>
  )
}

export function IntroFooter() {
  return (
    <p className="flex items-baseline gap-x-2 text-[0.8125rem]/6 text-gray-500">
      Brought to you by{' '}
      <IconLink href="https://github.com/GerZhang" icon={GitHubIcon} compact>
        Gerald Zhang
      </IconLink>
    </p>
  )
}

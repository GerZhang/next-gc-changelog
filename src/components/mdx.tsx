'use client'

import { useEffect, useRef, useState } from 'react'
import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { FormattedDate } from '@/components/FormattedDate'
import { Button } from '@/components/Button'
import { FeatureIcon, FixIcon, OptimizeIcon, BusinessIcon } from '@/components/LableIcons'
import { ExternalLinkIcon } from '@/components/ExternalLinkIcon'


/**
 * MDX a 标签的自定义实现
 * @param props a 标签的属性
 * @returns 根据链接类型返回不同的组件
 */
export const a = (props: React.ComponentPropsWithoutRef<'a'>) => {
  const { href, className, ...rest } = props

  if (href && href.startsWith('http')) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={clsx('no-underline', className)}
        {...rest}
      >
        {props.children}
        <ExternalLinkIcon />
      </a>
    )
  }

  if (href) {
    return <Link href={href} className={clsx('no-underline', className)} {...rest} />
  }

  return <a className={clsx('no-underline', className)} {...props} />
}

type ImagePropsWithOptionalAlt = Omit<ImageProps, 'alt'> & { alt?: string }

export const img = function Img(props: ImagePropsWithOptionalAlt) {
  return (
    <div className="relative overflow-hidden rounded-xl bg-gray-50 dark:bg-gray-900">
      <Image
        alt=""
        sizes="(min-width: 1280px) 36rem, (min-width: 1024px) 45vw, (min-width: 640px) 32rem, 95vw"
        {...props}
      />
      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset dark:ring-white/10" />
    </div>
  )
}

function ContentWrapper({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
      <div className="lg:ml-96 lg:flex lg:w-full lg:justify-end lg:pl-32">
        <div
          className={clsx(
            'mx-auto max-w-lg lg:mx-0 lg:w-0 lg:max-w-xl lg:flex-auto',
            className,
          )}
          {...props}
        />
      </div>
    </div>
  )
}

function ArticleHeader({
  id,
  date,
  type,
  typeText,
}: {
  id: string
  date?: string | Date
  type?: 'feature' | 'fix' | 'optimize' | 'business'
  typeText?: string
}) {
  /**
   * 标签类型配置映射表
   * 包含每种类型的图标组件和样式配置
   */
  const tagConfigs = {
    feature: {
      icon: FeatureIcon,
      styles: {
        text: 'text-emerald-700 dark:text-emerald-300',
        bg: 'bg-emerald-100 dark:bg-emerald-500/10'
      },
      prefix: '新特性',
    },
    fix: {
      icon: FixIcon,
      styles: {
        text: 'text-pink-700 dark:text-pink-300',
        bg: 'bg-pink-100 dark:bg-pink-500/10'
      },
      prefix: '修复',
    },
    optimize: {
      icon: OptimizeIcon,
      styles: {
        text: 'text-violet-700 dark:text-violet-300',
        bg: 'bg-violet-100 dark:bg-violet-500/10'
      },
      prefix: '优化',
    },
    business: {
      icon: BusinessIcon,
      styles: {
        text: 'text-blue-700 dark:text-blue-300',
        bg: 'bg-blue-100 dark:bg-blue-500/10'
      },
      prefix: '商务',
    }
  } as const

  /**
   * 获取标签配置信息
   * @param tagType 标签类型
   * @returns 包含图标和样式的配置对象，如果类型不存在则返回 null
   */
  function getTagConfig(tagType: 'feature' | 'fix' | 'optimize' | 'business') {
    return tagConfigs[tagType] || null
  }

  // 获取当前类型的配置
  const tagConfig = type ? getTagConfig(type) : null
  const TagIcon = tagConfig?.icon || null
  const tagStyles = tagConfig?.styles || null

  const userText = typeText ?? ''
  const tagText = userText
    ? `${tagConfig?.prefix}-${userText}`
    : (tagConfig?.prefix || '')

  return (
    <header className="relative mb-10 xl:mb-0">
      <div className="pointer-events-none absolute top-0 left-[max(-0.5rem,calc(50%-18.625rem))] z-50 flex h-4 items-center justify-end gap-x-2 lg:right-[calc(max(2rem,50%-38rem)+40rem)] lg:left-0 lg:min-w-lg xl:h-8">
        <Link href={`#${id}`} className="inline-flex">
          {type && tagStyles ? (
            <span
              className={clsx(
                'hidden xl:pointer-events-auto xl:inline-flex xl:items-center xl:gap-x-1 xl:text-2xs/4 xl:font-medium',
                tagStyles.text,
                tagStyles.bg,
                'px-2 py-0.5 rounded',
              )}
            >
              {TagIcon ? <TagIcon className="h-3 w-3" aria-hidden="true" /> : null}
              <span>{tagText}</span>
            </span>
          ) : date ? (
            <FormattedDate
              date={date}
              className="hidden xl:pointer-events-auto xl:block xl:text-2xs/4 xl:font-medium xl:text-white/50"
            />
          ) : null}
        </Link>
        <div className="h-0.25 w-3.5 bg-gray-400 lg:-mr-3.5 xl:mr-0 xl:bg-gray-300" />
      </div>
      <ContentWrapper>
        <div className="flex">
          <Link href={`#${id}`} className="inline-flex">
            {type && tagStyles ? (
              <span
                className={clsx(
                  'inline-flex items-center gap-x-1 text-2xs/4 font-medium xl:hidden',
                  tagStyles.text,
                  tagStyles.bg,
                  'px-2 py-0.5 rounded',
                )}
              >
                {TagIcon ? <TagIcon className="h-3 w-3" aria-hidden="true" /> : null}
                <span>{tagText}</span>
              </span>
            ) : date ? (
              <FormattedDate
                date={date}
                className="text-2xs/4 font-medium text-gray-500 xl:hidden dark:text-white/50"
              />
            ) : null}
          </Link>
        </div>
      </ContentWrapper>
    </header>
  )
}

export const article = function Article({
  id,
  date,
  type,
  typeText,
  children,
}: {
  id: string
  date?: string | Date
  type?: 'feature' | 'fix' | 'optimize' | 'business'
  typeText?: string
  children: React.ReactNode
}) {
  let heightRef = useRef<React.ComponentRef<'div'>>(null)
  let [heightAdjustment, setHeightAdjustment] = useState(0)

  useEffect(() => {
    if (!heightRef.current) {
      return
    }

    let observer = new window.ResizeObserver(() => {
      if (!heightRef.current) {
        return
      }
      let { height } = heightRef.current.getBoundingClientRect()
      let nextMultipleOf8 = 8 * Math.ceil(height / 8)
      setHeightAdjustment(nextMultipleOf8 - height)
    })

    observer.observe(heightRef.current)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <article
      id={id}
      className="scroll-mt-16"
      style={{ paddingBottom: `${heightAdjustment}px` }}
    >
      <div ref={heightRef}>
        <ArticleHeader id={id} date={date} type={type} typeText={typeText} />
        <ContentWrapper className="typography" data-mdx-content>
          {children}
        </ContentWrapper>
      </div>
    </article>
  )
}

export const code = function Code({
  highlightedCode,
  ...props
}: React.ComponentPropsWithoutRef<'code'> & { highlightedCode?: string }) {
  if (highlightedCode) {
    return (
      <code {...props} dangerouslySetInnerHTML={{ __html: highlightedCode }} />
    )
  }

  return <code {...props} />
}

export { Button }

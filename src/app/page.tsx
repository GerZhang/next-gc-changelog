import { Intro, IntroFooter } from '@/components/Intro'
import { FixedSidebar } from '@/components/HeroSidebar'

/**
 * 新首页组件
 * 使用提取的 FixedSidebar 左侧布局，并在首页居中显示，不包含时间线
 */
export default function HomePage() {
  return (
    <FixedSidebar main={<Intro />} footer={<IntroFooter />} centered />
  )
}
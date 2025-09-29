'use client'

import { useEffect, useId, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'

import { Button } from '@/components/Button'
import { Select } from '@/components/Select'
import { Field } from '@headlessui/react'

/**
 * 产品配置接口
 */
interface Product {
  id: string
  name: string
  displayName: string
  versions: Version[]
}

/**
 * 版本配置接口
 */
interface Version {
  id: string
  name: string
  displayName: string
  releaseDate: string
  route: string
}

/**
 * 产品和版本配置数据
 */
const PRODUCTS: Product[] = [
  {
    id: 'forguncy',
    name: 'forguncy',
    displayName: '活字格',
    versions: [
      {
        id: 'v11.1',
        name: 'v11.1',
        displayName: 'V11 Update 1',
        releaseDate: '2024-12-25',
        route: '/forguncy/v11.1',
      },
      {
        id: 'v11.0',
        name: 'v11.0',
        displayName: 'V11.0',
        releaseDate: '2024-09-15',
        route: '/forguncy/v11.0',
      }
    ]
  },
  {
    id: 'wyn',
    name: 'wyn',
    displayName: 'Wyn 商业智能',
    versions: [
      {
        id: 'v9.0',
        name: 'v9.0',
        displayName: 'V9.0',
        releaseDate: '2024-09-15',
        route: '/wyn/v9.0',
      },
      {
        id: 'v8.1',
        name: 'v8.1',
        displayName: 'V8.1',
        releaseDate: '2024-08-15',
        route: '/wyn/v8.1',
      }
    ]
  }
]

/**
 * 从路径中解析产品和版本信息
 * @param pathname - 当前路径
 * @returns 解析出的产品和版本信息
 */
function parsePathname(pathname: string): { product: Product | null, version: Version | null } {
  // 如果是首页，返回默认产品但版本为空
  if (pathname === '/') {
    return { product: PRODUCTS[0], version: null }
  }

  // 解析路径格式: /productId/versionId
  const pathParts = pathname.split('/').filter(Boolean)
  if (pathParts.length !== 2) {
    return { product: PRODUCTS[0], version: null }
  }

  const [productId, versionId] = pathParts
  const product = PRODUCTS.find(p => p.id === productId)
  if (!product) {
    return { product: PRODUCTS[0], version: null }
  }

  const version = product.versions.find(v => v.id === versionId)
  if (!version) {
    return { product, version: null }
  }

  return { product, version }
}

/**
 * 邮件订阅表单组件
 * 包含产品选择、版本选择和邮件输入功能
 */
export function SignUpForm() {
  const emailId = useId()
  const productId = useId()
  const versionId = useId()
  const router = useRouter()
  const pathname = usePathname()

  const [selectedProduct, setSelectedProduct] = useState<Product>(PRODUCTS[0])
  const [selectedVersion, setSelectedVersion] = useState<Version | null>(null)
  const [email, setEmail] = useState('')

  /**
   * 根据当前路径初始化产品和版本选择
   */
  useEffect(() => {
    const { product, version } = parsePathname(pathname)
    if (product) {
      setSelectedProduct(product)
      setSelectedVersion(version) // 可能为 null
    }
  }, [pathname])

  /**
   * 处理产品选择变更
   * @param event - 选择事件
   */
  const handleProductChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const product = PRODUCTS.find(p => p.id === event.target.value)
    if (product) {
      setSelectedProduct(product)
      setSelectedVersion(null) // 重置版本选择
    }
  }

  /**
   * 处理版本选择变更
   * @param event - 选择事件
   */
  const handleVersionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const versionId = event.target.value
    if (!versionId) {
      setSelectedVersion(null)
      // 当选择"请选择版本"时，跳转到首页
      router.push('/')
      return
    }

    const version = selectedProduct.versions.find(v => v.id === versionId)
    if (version) {
      setSelectedVersion(version)
      router.push(version.route)
    }
  }

  /**
   * 处理表单提交
   * @param event - 表单事件
   */
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    // 这里可以添加邮件订阅逻辑
    console.log('订阅信息:', {
      product: selectedProduct,
      version: selectedVersion,
      email: email
    })

    // 如果当前不在选中的版本页面，则跳转
    if (selectedVersion && pathname !== selectedVersion.route) {
      router.push(selectedVersion.route)
    }
  }

  return (
    <div className="mt-8 space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field>
          <label htmlFor={productId} className="sr-only">
            选择产品
          </label>
          <Select
            id={productId}
            value={selectedProduct.id}
            onChange={handleProductChange}
          >
            {PRODUCTS.map((product) => (
              <option
                key={product.id}
                value={product.id}
                className="bg-gray-900 text-white"
              >
                {product.displayName}
              </option>
            ))}
          </Select>
        </Field>

        <Field>
          <label htmlFor={versionId} className="sr-only">
            选择版本
          </label>
          <Select
            id={versionId}
            value={selectedVersion?.id || ''}
            onChange={handleVersionChange}
          >
            <option value="" className="bg-gray-900 text-gray-400">
              请选择版本
            </option>
            {selectedProduct.versions.map((version) => (
              <option
                key={version.id}
                value={version.id}
                className="bg-gray-900 text-white"
              >
                {version.displayName}
              </option>
            ))}
          </Select>
        </Field>
      </div>

      {/* <form onSubmit={handleSubmit} className="relative isolate flex items-center pr-1">
        <label htmlFor={emailId} className="sr-only">
          电子邮件地址
        </label>
        <input
          required
          type="email"
          autoComplete="email"
          name="email"
          id={emailId}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="电子邮件地址"
          className="peer w-0 flex-auto bg-transparent px-4 py-2.5 text-base text-white placeholder:text-gray-500 focus:outline-hidden sm:text-[0.8125rem]/6"
        />
        <Button type="submit" arrow className='w-28'>
          订阅更新
        </Button>
        <div className="absolute inset-0 -z-10 rounded-lg transition peer-focus:ring-4 peer-focus:ring-sky-300/15" />
        <div className="absolute inset-0 -z-10 rounded-lg bg-white/2.5 ring-1 ring-white/15 transition peer-focus:ring-sky-300" />
      </form> */}
    </div >
  )
}

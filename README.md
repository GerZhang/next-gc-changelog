# GC-ChangeLog

GC-ChangeLog 是一个使用 [Tailwind CSS](https://tailwindcss.com) 和 [Next.js](https://nextjs.org) 构建的文档说明网站，面向商务侧提供葡萄城产品每个版本的变更说明。

## 快速开始

首先，通过 npm 安装依赖：

```bash
npm install
```

然后启动开发服务器：

```bash
npm run dev
```

最后，在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看网站。

## 工程配置说明

如果想维护该项目，需要了解以下内容：

### 项目结构

该项目构建为一个标准的 Next.js 网站，但使用了 `src` 文件夹，所以像 `app` 目录这样的内容位于 `./src/app` 而不是顶级目录。

### 标题和元数据

你可以在 `./src/app/layout.tsx` 中更新网站的元数据。

### 主页内容

网站的首屏区域（Hero Area）包括 logo、标题、描述和链接，这些都位于 `./src/components/Intro.tsx` 中。

### 添加更新日志条目

每个产品的更新条目都会存储在对应产品版本的目录下： `./src/app/[product]/[version]/page.mdx` 文件中。该路由遵循 Next 的静态路径策略。

每个更新日志条目应该用水平线（`---`）分隔，并应包含一个带有相关说明的 `<h2>`，指定为 [MDX 注释](https://github.com/bradlc/mdx-annotations)：

系统支持的 MDX 注释标签：

- `date`：指定更新日志条目的日期，格式为 `YYYY-MM-DDTHH:mm:ssZ`，该标签和 `type` 标签是重叠的，且优先级最高。因此推荐首个标题配置。
- `type`：指定更新日志条目的类型，其值为确定的字典： `feature`、`optimize`、`fix`，分别对应新增、优化、修复场景。
- `typeText`：指定更新日志条目的说明，例如 `AI`、`Web` 等，其内容可自定。

```md
---

![](@/images/your-screenshot.png)

## 首个标题 {{ date: '2023-04-06T00:00Z' }}

你的内容...

---
## 首个标题 {{ type: 'feature', typeText: 'AI' }}

你的内容...
```

## 了解更多

要了解更多关于此网站模板中使用的技术，请参阅以下资源：

- [Tailwind CSS](https://tailwindcss.com/docs) - Tailwind CSS 官方文档
- [Next.js](https://nextjs.org/docs) - Next.js 官方文档
- [Motion One](https://motion.dev/) - Motion One 官方文档
- [MDX](https://mdxjs.com/) - MDX 官方文档

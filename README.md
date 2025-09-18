# Next FGC Commit

Next FGC Commit 是一个使用 [Tailwind CSS](https://tailwindcss.com) 和 [Next.js](https://nextjs.org) 构建的文档说明网站，面向商务侧提供活字格每个版本的变更说明。

## 快速开始

首先，通过 npm 安装依赖：

```bash
npm install
```

接下来，在项目根目录创建一个 `.env.local` 文件，并设置 `NEXT_PUBLIC_SITE_URL` 环境变量为你网站的公共 URL：

```
NEXT_PUBLIC_SITE_URL=https://example.com
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

所有更新日志条目都存储在一个大的 `./src/app/page.mdx` 文件中。该策略受到项目通常维护纯文本 `CHANGELOG` 文件方式的启发。

每个更新日志条目应该用水平线（`---`）分隔，并应包含一个带有日期的 `<h2>`，指定为 [MDX 注释](https://github.com/bradlc/mdx-annotations)：

```md
---

![](@/images/your-screenshot.png)

## 我的新更新日志条目 {{ date: '2023-04-06T00:00Z' }}

你的内容...
```

### 邮件订阅

你可以在 `./src/components/SignUpForm.tsx` 中找到邮件订阅表单。

如果需要变更邮件订阅服务，请自行调整该文件。

### RSS 订阅

该网站使用 [路由处理器](https://nextjs.org/docs/app/building-your-application/routing/router-handlers) 在运行时基于渲染的主页自动生成 RSS 订阅。

你可以在 `./src/app/feed.xml/route.ts` 中编辑订阅的元数据（如标题和描述）。

确保环境变量 `NEXT_PUBLIC_SITE_URL` 已正确设置，因为 RSS 订阅需要它来为每个条目生成正确的链接。

## 了解更多

要了解更多关于此网站模板中使用的技术，请参阅以下资源：

- [Tailwind CSS](https://tailwindcss.com/docs) - Tailwind CSS 官方文档
- [Next.js](https://nextjs.org/docs) - Next.js 官方文档
- [Motion One](https://motion.dev/) - Motion One 官方文档
- [MDX](https://mdxjs.com/) - MDX 官方文档

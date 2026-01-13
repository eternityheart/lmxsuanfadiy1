# 如何发布到 GitHub 并生成公开链接

所有代码已准备就绪。请按照以下步骤操作，将网站发布到互联网。

## 第一步：在 GitHub 创建仓库
1.  登录 GitHub。
2.  点击右上角 "+" -> **New repository**。
3.  Repository name 输入: `algorithm-tutorial` (或者你喜欢的名字)。
4.  Visibility 选择 **Public**。
5.  **不要**勾选 "Initialize this repository with..." (保持为空仓库)。
6.  点击 **Create repository**。

## 第二步：推送到 GitHub
在当前 VSCode 终端中，运行以下命令（将 `<你的GitHub用户名>` 和 `<仓库名>` 替换为实际值）：

```bash
# 1. 关联远程仓库
git remote add origin https://github.com/<你的GitHub用户名>/<仓库名>.git

# 2. 推送代码
git push -u origin main
```

> **注意**：如果提示需要登录，请按提示完成 GitHub 授权。

## 第三步：配置 GitHub Pages
1.  代码推送成功后，刷新 GitHub 仓库页面。
2.  进入 **Settings** (设置) -> 左侧菜单 **Pages**。
3.  在 **Build and deployment** 下：
    *   Source 选择: **GitHub Actions**。
4.  这会自动触发已经在 `.github/workflows/deploy.yml` 中配置好的构建流程。

## 第四步：修改 Base 路径 (如果需要)
如果你的公开链接是 `https://username.github.io/repo-name/`，你可能需要修改 `vite.config.ts`：

打开 `vite.config.ts`，将 `base: '/',` 修改为 `base: '/repo-name/',` (替换为你的仓库名)。
然后提交并再次推送。

## 查看部署结果
等待几分钟（可以在 **Actions** 标签页查看进度）。
构建完成后，在 **Settings -> Pages** 页面上方会显示你的网站链接。

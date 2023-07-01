# 忽略错误
set -e

# 构建
yarn docs:build

# 进入待发布的目录
cd docs/.vitepress/dist

git init
git add -A
git commit -m 'deploy'

# 如果部署到 https://<USERNAME>.github.io
git push -f https://github.com/zwxyyds/vitepress-learn.git master

cd -
# 第一次关联两个仓库
if [ -z $1 ];then
parame="first commit"
else
parame=$1
fi

echo -e "\n== init =="
git init
git add .
git commit -m "${parame}"
echo -e "== init end ==\n"

git remote add github git@github.com:uphg/react-styled-components-demo.git
git remote add gitee git@gitee.com:uphg/react-styled-components-demo.git

echo "== push Github =="
git push github master:master
echo -e "== push Github end ==\n"

echo "== push Gitee =="
git push gitee master:master
echo -e "== push Gitee end ==\n"

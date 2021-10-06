function retry1 { git push origin master && echo "success" || (echo "fail" && retry1) }; retry1
function retry2 { git push azure master && echo "success" || (echo "fail" && retry2) }; retry2

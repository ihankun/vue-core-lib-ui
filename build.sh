cross-env BABEL_OUTPUT=commonjs babel components --out-dir lib/babel components --out-dir es/
# 拷贝css
cpx \"components/**/*.scss\" es"
cpx \"components/**/*.scss\" lib"
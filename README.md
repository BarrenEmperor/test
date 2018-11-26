复制整个E:\nodejs\whc\electron-serialport\app\node_modules\serialport的
serialport文件夹到新工程对应的位置


重编译指令
node-gyp rebuild --target=2.0.9 --arch=x64 --target_arch=x64 --dist-url=https://atom.io/download/electron


主要步骤
新建工程
安装环境包，如electron、serialport、node-gyp
复制serialport文件夹替换
执行重编译指令（已经编译好了，不需要再编译（2.0.9），如果electron版本有变换再编译至对应版本）
完成

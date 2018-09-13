/**
 * Created by Administrator on 2018/5/15.
 */
function ServerSerData() {


    //测试环境和生产环境配置
    if (global.env == 'dev') {
        this.basePath = "G:\\软件外包\\example\\front\\project"; //项目根文件目录
        this.port = 3030; //本地port

    } else {
        this.basePath = "/root/viewcoder/front/output/"; //远程项目根文件目录
        this.port = 80;
    }

    this.publicPath = this.basePath + "/public"; //公共目录文件
}

module.exports = ServerSerData;
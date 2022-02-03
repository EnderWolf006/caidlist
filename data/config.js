//#region 此部分仅 OCR 需要使用，无需 OCR 则请勿修改
const commonOCROptions = {
    tesseractOptions: {
        // Tesseract 安装路径
        binary: '"C:\\Program Files\\Tesseract-OCR\\tesseract.exe"',
        // 训练数据路径
        "tessdata-dir": __dirname + "/tesstrain/tessdata"
    },
    // 命令区域大小
    commandAreaRect: {
        1: [479, 950, 1650, 125], // <- phone
        3: [410, 950, 1650, 125] // phone ->
    },
    // OCR识别错误手动校正
    tesseractMistakes: {
        "'n\"'sUmmOn Creeper": "/summon creeper",
        "'n\"'sUmmOn raVager": "/summon ravager"
    }
};

const neteaseOCROptions = {
    tesseractOptions: {
        // Tesseract 安装路径
        binary: '"C:\\Program Files\\Tesseract-OCR\\tesseract.exe"',
        // 训练数据路径
        "tessdata-dir": __dirname + "/tesstrain/tessdata"
    },
    // 命令区域大小
    commandAreaRect: {
        1: [424, 922, 1660, 100], // <- phone
        3: [424, 922, 1660, 100] // phone ->
    },
    // OCR识别错误手动校正
    tesseractMistakes: {
        "/sUmmOn Creeper": "/summon creeper",
        "/sUmmOn raVager": "/summon ravager"
    }
};
//#endregion

exports.packageVersions = {
    // 正式版
    release: {
        // 安装包版本
        version: "1.18.2.03",
        // 安装包路径
        path: "H:\\BedrockVersions\\Latest\\1.18.2.03.apks",
        // 可用分支
        branches: ["vanilla", "education", "experiment"],
        config: commonOCROptions
    },
    // 测试版
    beta: {
        // 安装包版本
        version: "1.18.20.23",
        // 安装包路径
        path: "H:\\BedrockVersions\\Latest\\1.18.20.23.apks",
        // 可用分支
        branches: ["vanilla", "education", "experiment", "translator"],
        config: commonOCROptions
    },
    // 中国版测试版
    netease_dev: {
        // 安装包版本
        version: "1.17.2.0.0",
        // 安装包路径
        path: "H:\\BedrockVersions\\NeteaseDev\\dev_launcher_2.0.100.154200.apk",
        // 可用分支
        branches: ["vanilla", "experiment"],
        config: neteaseOCROptions
    }
};

# Apk Installer Plugin Sample

cordova-plugin-apkInstallerを使ったサンプルです。<br>
インストールしたいAPKのダウンロード先のURLを変更してから、<br>
プロジェクトを実行してください。<br>


This cordova project use this.<br>
 => [cordova-plugin-apkInstaller](https://github.com/cigalecigales/cordova-plugin-apkInstaller)

## How to start
### 1. clone project

```bash
$ git clone https://github.com/cigalecigales/ApkInstallerPluginSample2.git
$ cd ApkInstallerPluginSample2
```

### 2. change apk url
Please change apk url.

```js
// www/js/index.js

// Please set apk download path
var apkUrl = 'http://example.com/sample.apk';
```

### 3. build apk

```bash
$ cordova build
```

### 4. set apk file
set 3. apk file to 2. project.

### 5. run

```bash
$ cordova run android
```

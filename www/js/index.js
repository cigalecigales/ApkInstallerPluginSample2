/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('install');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {


        var element = document.getElementById(id);

        element.addEventListener('click', function() {

            alert('clicling button');

            var fileTransfer = new FileTransfer();

            // Get cordova file data directory (app sandbox directory)
            //  > file:///data/user/0/io.cordova.apk.installer.sample/files/
            var sandBoxDirectory = cordova.file.dataDirectory;
            alert(sandBoxDirectory);

            // Please set apk download path
            var apkUrl = 'https://apiinstaller.s3-ap-northeast-1.amazonaws.com/app-debug.apk';

            alert(apkUrl);

            // Get file name by apk url;
            var fileName = apkUrl.match(/[^/]+$/i)[0];
            alert(fileName);

            fileTransfer.download(
                apkUrl,
                sandBoxDirectory + fileName,
                function(entry) {
                    alert("download success: " + entry.toURL());
                    // Install app
                    apkInstaller.install(fileName, function(msg) {
                        alert('success');
                    }, function(error) {
                        alert('Install Error !!: ' + error);
                    });
                },
                function(error) {
                    alert('Download Error !!: ' + error);
                },
                false, {}
            );

        }, false);
    }
};

app.initialize();
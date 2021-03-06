"use strict";

var gulp = require("gulp");
var jasmineBrowser = require("gulp-jasmine-browser");
var gulpif = require("gulp-if");

function clientSideJasmine(config) {
    var specs = config.specs || [];
    var debug = config.debug === true;
    var src = config.src || [];
    var vendor = config.vendor || [];
    var files = [].concat(
        src,
        vendor,
        specs
    );

    return gulp.src(files)
        .pipe(jasmineBrowser.specRunner({
            console: !debug
        }))
        .pipe(gulpif(debug, jasmineBrowser.server()))
        .pipe(gulpif(!debug, jasmineBrowser.headless()));
}

module.exports = clientSideJasmine;

// ----------------------------------------------------------------------------
// Copyright (C) 2018 Bloomberg Finance L.P.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ----------------------------- END-OF-FILE ----------------------------------

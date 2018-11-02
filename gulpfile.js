const { src, dest, series, parallel } = require('gulp');
var gulp = require('gulp'),
    inlineCss = require('gulp-inline-css');

    function inlinecssBossdtc() {
        var path;
        return src('out/bossdtc/*.html')
        .pipe(inlineCss({
            applyStyleTags: true,
            applyLinkTags: true,
            removeStyleTags: true,
            removeLinkTags: true
        }))
        .pipe(dest('src/raw/bossdtc/inlined'));
    }

function inlinecssMvno() {
    var path;
    return src('out/mvno/*.html')
    .pipe(inlineCss({
        applyStyleTags: true,
        applyLinkTags: true,
        removeStyleTags: true,
        removeLinkTags: true
    }))
    .pipe(dest('src/raw/mvno/inlined'));
}

function inlinecssRetailersMvno() {
    var path;
    return src('out/retailersmvno/*.html')
    .pipe(inlineCss({
        applyStyleTags: true,
        applyLinkTags: true,
        removeStyleTags: true,
        removeLinkTags: true
    }))
    .pipe(dest('src/raw/retailersmvno/inlined'));
}

function inlinecssRetailers() {
    var path;
    return src('out/retailers/*.html')
    .pipe(inlineCss({
        applyStyleTags: true,
        applyLinkTags: true,
        removeStyleTags: true,
        removeLinkTags: true
    }))
    .pipe(dest('src/raw/retailers/inlined'));
}

exports.default = parallel(inlinecssBossdtc, inlinecssMvno, inlinecssRetailersMvno, inlinecssRetailers)

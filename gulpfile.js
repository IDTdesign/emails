const { src, dest, series, parallel } = require('gulp');
var gulp = require('gulp'),
    inlineCss = require('gulp-inline-css');
    replace = require('gulp-string-replace');
    htmlmin = require('gulp-htmlmin');

function inlinecssBossdtc(cb) {
    cb();
    return src('out/bossdtc/*.html')
    .pipe(inlineCss({
        applyStyleTags: true,
        applyLinkTags: true,
        removeStyleTags: true,
        removeLinkTags: true
    }))
    .pipe(replace('http://localhost:9778', 'https://idtdesign.github.io/emails'))
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest('src/raw/bossdtc/inlined'));
}

function inlinecssMvno(cb) {
    cb();
    return src('out/mvno/*.html')
    .pipe(inlineCss({
        applyStyleTags: true,
        applyLinkTags: true,
        removeStyleTags: true,
        removeLinkTags: true
    }))
    .pipe(replace('http://localhost:9778', 'https://idtdesign.github.io/emails'))
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest('src/raw/mvno/inlined'));
}

function inlinecssRetailersMvno(cb) {
    cb();
    return src('out/retailersmvno/*.html')
    .pipe(inlineCss({
        applyStyleTags: true,
        applyLinkTags: true,
        removeStyleTags: true,
        removeLinkTags: true
    }))
    .pipe(replace('http://localhost:9778', 'https://idtdesign.github.io/emails'))
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest('src/raw/retailersmvno/inlined'));
}

function inlinecssRetailers(cb) {
    cb();
    return src('out/retailers/*.html')
    .pipe(inlineCss({
        applyStyleTags: true,
        applyLinkTags: true,
        removeStyleTags: true,
        removeLinkTags: true
    }))
    .pipe(replace('http://localhost:9778', 'https://idtdesign.github.io/emails'))
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest('src/raw/retailers/inlined'));
}

exports.bossdtc = inlinecssBossdtc;
exports.mvno = inlinecssMvno;
exports.retailersmvno = inlinecssRetailersMvno;
exports.retailers = inlinecssRetailers;
exports.default = parallel(inlinecssBossdtc, inlinecssMvno, inlinecssRetailersMvno, inlinecssRetailers)

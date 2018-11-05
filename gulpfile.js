const { src, dest, series, parallel } = require('gulp');
var gulp = require('gulp'),
    inlineCss = require('gulp-inline-css');

function inlinecssBossdtc(cb) {
    return src('out/bossdtc/*.html')
    .pipe(inlineCss({
        applyStyleTags: true,
        applyLinkTags: true,
        removeStyleTags: true,
        removeLinkTags: true
    }))
    .pipe(dest('src/raw/bossdtc/inlined'));
    cb();
}

function inlinecssMvno(cb) {
    return src('out/mvno/*.html')
    .pipe(inlineCss({
        applyStyleTags: true,
        applyLinkTags: true,
        removeStyleTags: true,
        removeLinkTags: true
    }))
    .pipe(dest('src/raw/mvno/inlined'));
    cb();
}

function inlinecssRetailersMvno(cb) {
    return src('out/retailersmvno/*.html')
    .pipe(inlineCss({
        applyStyleTags: true,
        applyLinkTags: true,
        removeStyleTags: true,
        removeLinkTags: true
    }))
    .pipe(dest('src/raw/retailersmvno/inlined'));
    cb();
}

function inlinecssRetailers(cb) {
    return src('out/retailers/*.html')
    .pipe(inlineCss({
        applyStyleTags: true,
        applyLinkTags: true,
        removeStyleTags: true,
        removeLinkTags: true
    }))
    .pipe(dest('src/raw/retailers/inlined'));
    cb();
}

exports.bossdtc = inlinecssBossdtc;
exports.mvno = inlinecssMvno;
exports.retailersmvno = inlinecssRetailersMvno;
exports.retailers = inlinecssRetailers;
exports.default = parallel(inlinecssBossdtc, inlinecssMvno, inlinecssRetailersMvno, inlinecssRetailers)

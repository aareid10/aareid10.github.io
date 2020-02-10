'use strict'

const BrowserSync = require("browser-sync").create()
const Bundler     = require('parcel-bundler')
const path        = require('path')

var Parcel, BundleOption, SyncOption, SyncCb

switch (process.env.NODE_ENV) {
  case 'production':
    BundleOption = {
      outDir: './dist',
      cache: false,
      minify: true,
      sourceMaps: false,
      http: true
    }
    break;
  case 'development':
    BundleOption = {
      outDir: './dist',
      cache: false,
      minify: false,
      sourceMaps: true,
      watch: true
    }
    break;
  default:
    BundleOption = {
      outDir: './dist',
      publicUrl: '/',
      detailReport: true,
      cache: true,
      minify: true,
      sourceMaps: true,
      http: true
    }
}

SyncOption = {
  server: "./dist",
  serveStatic: [{
    route: '/assets',
    dir: './assets'
  }]
}
SyncCb     = () => {
  console.warn("Parcel + BrowserSync");
}

Parcel = new Bundler ('./index.html', BundleOption)
Parcel.on('buildEnd', BrowserSync.reload)
Parcel.on('bundled', () => { BrowserSync.init(SyncOption, SyncCb) })
Parcel.bundle()

#!/usr/bin/env node

const router = require('lieutenant');

const copyServiceWorker = require('./copyServiceWorker');
const createPage = require('./createPage');
const createPost = require('./createPost');
const compileCSS = require('./compileCSS');
const createBibliography = require('./createBibliography');

router({
  css: compileCSS,
  page: createPage,
  post: createPost,
  sw: copyServiceWorker,
  biblio: createBibliography,
});

#!/bin/bash -ev

pushd site-hugo/
hugo
popd
cp -r site-hugo/public/* .

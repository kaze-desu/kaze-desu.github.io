@echo off
REM Serve the site locally at http://localhost:4000
REM Requires the portable Ruby in E:\MUST\code\.tools\rubyinstaller-3.3.6-1-x64

set RUBY_HOME=E:\MUST\code\.tools\rubyinstaller-3.3.6-1-x64
set MSYSTEM=UCRT64
set PATH=%RUBY_HOME%\bin\ruby_builtin_dlls;%RUBY_HOME%\bin;%RUBY_HOME%\msys64\usr\bin;%RUBY_HOME%\msys64\ucrt64\bin;%PATH%

cd /d %~dp0
"%RUBY_HOME%\bin\ruby.exe" -e "require 'bundler/setup'; load Gem.bin_path('jekyll','jekyll')" -- serve --host 127.0.0.1 --port 4000 %*

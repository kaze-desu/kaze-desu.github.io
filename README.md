# academic

Personal academic site of **Boyun Wang**, built on the
[al-folio\*](https://github.com/alexanderhay2020/al-folio-) theme (a fork of
[al-folio](https://github.com/alshedivat/al-folio)), running on Jekyll 4.

Pages: `about` (bio + news + links), `cv`, `projects`, `publications`.

## What lives where

| Path | Content |
| --- | --- |
| `_config.yml` | Site name, email, social handles, scholar settings, nav order |
| `_data/coauthors.yml` | Homepages of co-authors, linked from the bibliography |
| `_data/venues.yml` | Venue links used by the `[NeurIPS]` / `[T-IFS]` badges |
| `_bibliography/papers.bib` | Publications (BibTeX; fields `abbr`, `arxiv`, `html`, `code`, `doi`, `abstract`) |
| | `_pages/about.md` | Homepage text + profile card |
| `_pages/cv.md` | CV page (HTML entries; mirrors `assets/pdf/CV.pdf`) |
| `_pages/projects.md` | Project grid; entries come from `_projects/` sorted by `order:` |
| `_news/` | One Markdown file per news item, `inline: true` for the homepage table |
| `_projects/` | One Markdown file per project; `img:` is the cover, `order:` the position |
| `assets/img/prof_pic.svg` | Profile picture placeholder — replace with your own photo (PNG/JPG works too) |
| `assets/pdf/CV.pdf` | CV download |

## Local development (this machine)

Ruby 3.3.6 portable lives outside the repo at
`E:\MUST\code\.tools\rubyinstaller-3.3.6-1-x64` (with an MSYS2 UCRT toolchain in
`msys64\`).

```bat
serve.cmd
```

then open <http://localhost:4000>. Use `localhost`, not `127.0.0.1`: Jekyll sets
`site.url` to `http://localhost:4000` during `serve`, so absolute asset links
mismatch the bare IP and fonts fail with a CORS error.

One-off build:

```bat
set RUBY_HOME=E:\MUST\code\.tools\rubyinstaller-3.3.6-1-x64
set PATH=%RUBY_HOME%\bin\ruby_builtin_dlls;%RUBY_HOME%\bin;%RUBY_HOME%\msys64\usr\bin;%RUBY_HOME%\msys64\ucrt64\bin;%PATH%
"%RUBY_HOME%\bin\ruby.exe" -e "require 'bundler/setup'; load Gem.bin_path('jekyll','jekyll')" -- build
```

`bundle exec` is not used: this Ruby's `bin` shims are not resolvable by
Bundler on Windows, so the launcher above is equivalent and reliable.

## Deploy to GitHub Pages

Live at <https://kaze-desu.github.io>. Branches in
`kaze-desu/kaze-desu.github.io`:

- `main` — built site only (Pages source: branch `main`, `/`, legacy build;
  `.nojekyll` present). One force-pushed commit per deploy, message
  `Deploy site from source@<sha>`.
- `source` — this Jekyll source.

Deploy after editing the source branch:

```bat
REM 1. build
serve.cmd            REM Ctrl+C after it says "Server address"; _site/ is written
REM 2. publish the built tree
rmdir /s /q ..\publish 2>nul
xcopy /e /i /y _site ..\publish >nul
type nul > ..\publish\.nojekyll
cd ..\publish
git init -b main
git add -A
git -c user.name="<you>" -c user.email="<you>@users.noreply.github.com" commit -m "Deploy site"
git remote add origin https://github.com/kaze-desu/kaze-desu.github.io.git
git push -f origin main
```

Commit and push the source change separately (`git push origin source`).
Do not use `bin/deploy`: it targets a `gh-pages` branch and deletes untracked files.

## Environment notes

- **Sass warnings.** The 2020 theme uses `@import`, `darken()` and `/` division.
  Dart Sass prints deprecation warnings; the build still succeeds.
- **`date` is pinned to 3.3.4** in the `Gemfile`: precompiled/built `date` gems
  ≥ 3.4 fail to load against the Ruby 3.3 ABI in this portable install.
- **`libwinpthread-1.dll`** under `ruby_builtin_dlls` was replaced with the MSYS2
  UCRT copy, because the bundled one lacks `clock_gettime64`, which extensions
  compiled with the UCRT toolchain import.

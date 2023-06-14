# Tasks

> Useful tasks for the project

## bootstrap

> Will create a python virtual env and install the required dependencies.

Creates a virtual environment, activates it, upgrades pip to the latest version
and installs mkdocs plus its required dependencies.

```bash
mask msg info "attempt to create the python virtual environment"
mask msg verbose "now running: 'python3 -m venv .venv'"
python3 -m venv .venv > /dev/null && \
  mask msg success "created python virtual environment"

mask msg info "attempt to activate python virtual environment"
mask msg verbose "activating virtual env to install plugins"
source .venv/bin/activate && mask msg success "python environment activated"

mask msg info "attempt to update pip"
mask msg verbose "upgrading pip to ensure latest version is present in the env"
python3 -m pip install --upgrade pip > /dev/null \
  && mask msg success "upgraded pip"

mask msg info "attempt to install mkdocs-material and site dependencies"
mask msg verbose "installing mkdocs-material first"
pip install mkdocs-material > /dev/null \
    && mask msg success "installed mkdocs-material"

mask msg verbose "now installing site dependencies"
pip install mkdocs-git-revision-date-localized-plugin \
    pillow \
    cairosvg \
    mkdocs-glightbox > /dev/null \
    && mask msg success "installed dependencies"
```

```powershell
mask msg info "attempt to create the python virtual environment"
mask msg verbose "now running: 'python -m venv .venv'"
python -m venv .venv > $null
mask msg success "created python virtual environment"

mask msg info "attempt to activate python virtual environment"
mask msg verbose "activating virtual env to install plugins"
.\.venv\Scripts\activate && mask msg info "python environment activated"

mask msg info "attempt to update pip"
mask msg verbose "upgrading pip to ensure latest version is present in the env"
python -m pip install --upgrade pip > $null
mask msg success "upgraded pip"

mask msg info "attempt to install mkdocs-material and site dependencies"
mask msg verbose "installing mkdocs-material first"
pip install mkdocs-material > $null
mask msg success "installed mkdocs-material"

mask msg verbose "now installing site dependencies"
pip install mkdocs-git-revision-date-localized-plugin `
    pillow `
    cairosvg `
    mkdocs-glightbox > $null
mask msg success "installed dependencies"
```

## serve

> Will activate the python virtual env, then serve the site.

**OPTIONS**

* dirty
  * flags: -d --dirty
  * desc: Serve site in dirty reload mode

```bash
clear && mask msg verbose "attempting to activate virtual environment"
source .venv/bin/activate
if [[ $dirty ]]; then
  mask msg verbose "Running in dirtyreload mode..."
  mkdocs serve --dirtyreload
else
  mask msg verbose "Running..."
  mkdocs serve
fi
```

```powershell
Clear-Host && mask msg verbose "attempting to activate virtual environment"
.\.venv\Scripts\activate
if ($env:dirty) {
  mask msg verbose "Running in dirtyreload mode..."
  mkdocs serve --dirtyreload
} else {
  mask msg verbose "Running..."
  mkdocs serve
}
```

## build

> Builds the site to the `./site/` directory.

```bash
mask msg verbose "attempt to activate python virtual environment"
source .venv/bin/activate && mask msg verbose "python environment activated"

if [[ $verbose ]]; then
  mkdocs build --clean --no-directory-urls --verbose \
    --config-file ./mkdocs.offline.yaml              \
    --site-dir ./site/
else 
  mkdocs build --clean --no-directory-urls \
    --config-file ./mkdocs.offline.yaml    \
    --site-dir ./site/
fi
```

```powershell
mask msg verbose "attempt to activate python virtual environment"
.\.venv\Scripts\activate && mask msg verbose "python environment activated"

if ($env:verbose) {
  mkdocs build --clean --no-directory-urls --verbose `
    --config-file .\mkdocs.offline.yaml              `
    --site-dir .\site\
} else {
  mkdocs build --clean --no-directory-urls `
    --config-file .\mkdocs.offline.yaml    `
    --site-dir .\site\
}
```

## clean

> Removes the `./.venv/` directory.

**OPTIONS**

* deep
  * flags: -d --deep
  * desc: Remove boh the ./site/ and ./.venv/ directories

```bash
mask msg verbose "attempt to delete ./.venv/ directory"
if [[ -d "./.venv/" ]]; then
  rm ./.venv/ --recursive --force \
    && mask msg success "deleted ./.venv/ directory"
else
  mask msg success "directory ./.venv/ already deleted"
fi

if [[ $deep ]]; then
  mask msg verbose "attempt to delete ./site/ directory"
  if [[ -d "./site/" ]]; then
    rm ./site/ --recursive --force \
      && mask msg success "deleted ./site/ directory"
  else
    mask msg success "directory ./site/ already deleted"
  fi
fi
```

```powershell
mask msg verbose "attempt to delete .\.venv\ directory"
if (Test-Path ".\.venv\") {
  Remove-Item .\.venv\ -Force -Recurse
  mask msg success "deleted .\.venv\ directory"
} else {
  mask msg success "directory .\.venv\ already deleted"
}

if ($env:deep) {
  mask msg verbose "attempt to delete .\site\ directory"
  if (Test-Path ".\site\") {
    Remove-Item .\.site\ -Force -Recurse
    mask msg success "deleted .\site\ directory"
  } else {
    mask msg success "directory .\site\ already deleted"
  }
}
```

## sort-glossary

> It will sort alphabetically the contents of `includes/glossary.md`.

```bash
mask msg verbose "Sorting file contents"
sort ./includes/glossary.md > ./includes/sorted.md

mask msg verbose "Writing to file"
mv --force ./includes/sorted.md ./includes/glossary.md
```

```powershell
mask msg verbose "Sorting file contents"
Get-Content -Path ./includes/glossary.md `
    | Sort-Object `
    | Out-File -FilePath ./includes/sorted.md -Encoding UTF-8

mask msg verbose "Writing to file"
Move-Item -Path ./includes/sorted.md -Destination ./includes/glossary.md -Force
```

## msg

> Some helper tasks to make my life simpler.

### info (msg)

> Helper task to print out a simple informative message.

Prints a formatted info string.

```bash
printf " \e[1;34m\e[0m  $msg\n";
```

```powershell
Write-Host "    " -ForegroundColor blue -NoNewline
Write-Host $env:msg
```

### success (msg)

> Helper task to print out a simple success message.

Prints a formatted info string.

```bash
printf " \e[1;32m\e[0m  $msg\n";
```

```powershell
Write-Host "   " -ForegroundColor green -NoNewline
Write-Host $env:msg
```

### verbose (msg)

> Helper task to print out a verbose message.

Prints a formatted info string.

```bash
[[ $verbose ]] && printf "   $msg\n";
```

```powershell
if ($env:verbose) { Write-Host "   $env:msg" }
```

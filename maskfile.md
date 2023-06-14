# Tasks

> Useful tasks for the project

## bootstrap

> Will create a python virtual env and install the required dependencies.

Creates a virtual environment, activates it, upgrades pip to the latest version
and installs the required dependencies.

```bash
[[ $verbose ]] && echo "Creating python environment"
python3 -m venv .venv

[[ $verbose ]] && echo "Activating python environment"
source .venv/bin/activate

[[ $verbose ]] && echo "Upgrading pip"
python3 -m pip install --upgrade pip

[[ $verbose ]] && echo "Installing required dependencies"
pip install -r ./requirements.txt
```

```powershell
if ($env:verbose) { Write-Output "Creating python environment" }
python -m venv .venv

if ($env:verbose) { Write-Output "Activating python environment" }
./.venv/Scripts/activate

if ($env:verbose) { Write-Output "Upgrading pip" }
python -m pip install --upgrade pip

if ($env:verbose) { Write-Output "Installing required dependencies" }
pip install -r ./requirements.txt
```

## serve

> Will activate the python virtual env, then serve the site.

**OPTIONS**

* dirty
  * flags: -d --dirty
  * desc: Serve site in dirty reload mode

```bash
[[ $verbose ]] && echo "Activating python environment"
source .venv/bin/activate
clear
if [[ $dirty ]]; then
  [[ $verbose ]] && echo "Running in dirtyreload mode..."
  mkdocs serve --dirtyreload
else
  [[ $verbose ]] && echo "Running..."
  mkdocs serve
fi
```

```powershell
if ($env:verbose) { Write-Output "Activating python environment" }
./venv/Scripts/activate
if ($env:dirty) {
  if ($env:verbose) { Write-Output "Running in dirtyreload mode..." }
  Invoke-Expression -Command "mkdocs serve --dirtyreload"
} else {
  if ($env:verbose) { Write-Output "Running..." }
  Invoke-Expression -Command "mkdocs serve"
}
```

## sort-glossary

> It will sort alphabetically the contents of `includes/glossary.md`.

```bash
[[ $verbose ]] && echo "Sorting file contents"
sort ./includes/glossary.md > ./includes/sorted.md

[[ $verbose ]] && echo "Writing to file"
mv --force ./includes/sorted.md ./includes/glossary.md
```

```powershell
if ($env:verbose) { Write-Output "Sorting file contents" }
Get-Content -Path ./includes/glossary.md `
    | Sort-Object `
    | Out-File -FilePath ./includes/sorted.md -Encoding UTF-8

if ($env:verbose) { Write-Output "Writing to file" }
Move-Item -Path ./includes/sorted.md -Destination ./includes/glossary.md -Force
```

![Tests Passing](https://github.com/NicolaWealth/humanize_time/actions/workflows/auto_test_main_badge.yml/badge.svg)
![Code Cov](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fgithub.com%2Fnicolawealth%2Fhumanize_time%2Fraw%2Fmain%2Fcodecov/badge.json&query=%24.message&label=Code%20Coverage&color=%24.color)

# Introduction
The `humanize_time` package provides functionality to convert a time given in milliseconds to an intuitive, human-readable string format.

# Installation
This package should be installed via npm. You must have npm installed first. The following can be run on the commandline to install the `humanize_time` package with npm:

`npm install @nicolawealth/humanize_time`

# Usage
The `humanize_time` package can be used to convert an exact time to a readable string format. This is useful for displaying time values in a user-friendly manner for: 
* a front-end user interface
* debugging and logging back-end code

# Interface
The package exports the function `humanizeTime(milliseconds)` which returns a readable string for the specified number of `milliseconds`:
1. Less than 1 second -> output: less than a second
2. Between 1 second and 1 minute -> output: x second(s)
3. Between 1 minute and 1 hour -> output: x minute(s)
4. More than 1 hour -> output: x hour(s) y minute(s)

# Testing
Tests can be found in `humanize_time.test.ts` located in `humanize_time/src` and should be run with sinon, mocha and nyc.

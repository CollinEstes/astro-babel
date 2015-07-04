# astro-babel
Astro module for transpiling code with [babel](https://babeljs.io)


### USAGE

```
$cd myJSProject
myJSProject$ astro babel
```

astro-babel defaults to the './src' directory and outputs the transpiled code to the './dist' directory.  The input and output directories can be changed with options, described below.


## Options

### --client

Quick change to default client directory, './public/js' with an output of './public/dist'.
```
$cd myJSProject
myJSProject$ astro babel --client
```

astro-babel with '--client' defaults to the './public/js' directory and outputs the transpiled code to the './public/dist' directory.

### --sourcemaps

Will include sourcmaps with output.

### --input

Allows for specifing input directory.

```
myJSProject$ astro babel --input=appDirectory
```

### --output

Allows for specifing output directory.

```
myJSProject$ astro babel --output=distDirectory
```


## Want options?

[Submit a PR or open an issue](https://github.com/CollinEstes/astro-jshint)
# hcat
> Pipe html into your browser from the command line.

Also see [scat](https://github.com/hughsk/scat), which pipes Javascript into
your browser, or [bcat](https://github.com/kessler/node-bcat) for a more log
piping oriented module.

## this is a fork

The original hcat lives [here](https://github.com/kessler/node-hcat). This fork
changes one thing: to have hcat use the `$BROWSER` environment variable instead
of the aggressively complicated XDG Desktop spec.

No fumbling with `.desktop` files and mimelists. Just `export BROWSER=foobar` in
your `.bashrc` or relevant RC file.

## usage
```
 --port         set a port for this hcat execution, defaults to 0 (random port)
--hostname     set the hostname for this hcat execution, defaults to localhost
--contentType  set the content type header for this hcat execution, defaults to text/html
```

## example
```
> npm install -g hcat
> echo '<hr>' | hcat
```

Many thanks to all the [contributors](contributors.md)

# Vimperator plugins

This is my collection of personal plugins for [Vimperator][vimperator]. Feel free to use.

## relnav

Adds `:relnext` and `relprev` which looks for a link with `rel="prev|next"` in the page and open
its link. It also rebinds `C-a` and `C-x` to those actions because they have the same aim
(navigating paginated contents). If no proper link is found, falls back to the built-in `C-a` and
`C-x` behavior.


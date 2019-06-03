"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" => Colors and Fonts
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" Syntax highlighting
syntax on
filetype plugin indent on
syntax enable 
" Enable 256 colors palette 
if $COLORTERM == 'gnome-terminal'
    set t_Co=256
endif

try
    colorscheme monokai
catch
endtry

" Set utf8 as standard encoding and en_US as the standard language
set encoding=utf8

" Use Unix as the standard file type
set ffs=unix,dos,mac
set number
""""""

""""""""
set shiftwidth=3
set tabstop=3
set smarttab
set expandtab
set autoindent

set wrap
set hlsearch
set showmatch
set history=5000
set autoindent
set nosmartindent

set viminfo+=<500


" set colorcolumn=80
:map <F7> :set colorcolumn=80<cr>
:map <F8> :set colorcolumn=0<cr>
:map <F9> :set cul!<cr>

" Filetype Specifics "
autocmd Filetype python setlocal tabstop=4 shiftwidth=4
autocmd Filetype c setlocal tabstop=4 shiftwidth=4
autocmd Filetype java setlocal tabstop=4 shiftwidth=4

" Commands "
command NoAutoComment setlocal formatoptions-=c formatoptions-=r formatoptions-=o
command AutoComment setlocal formatoptions+=c formatoptions+=r formatoptions+=o
command ToggleHighlight set hls!
AutoComment

" Make Vim jump to the last position when reopening a file
if has("autocmd")
   au BufReadPost * if line("'\"") > 1 && line("'\"") <= line("$") | exe "normal! g'\"" | endif
endif
let @h='5w,'
let @l='5w.'

" Insert Mode "
imap jk <ESC>

" Dup Function "
xnoremap jz yO<ESC>wf(i1<ESC>O*/<ESC>kpO<CR>/*<ESC>/*/n<ESC>jf)f)

"Auto Close brackets"
inoremap {J {<CR>}<Esc>ko
inoremap {jj {<space><space>}<Esc>hi
"inoremap {<Enter> {<CR>}<Esc>ko

" Traverse Lines Linearly if Wrapped"
nnoremap k gk
nnoremap j gj

" Add space without putting user in insert mode "
nnoremap <Space><Space> i<Space><Esc>

" Add line without insert or auto comment"
nnoremap <silent> <Space><CR> :NoAutoComment<CR>o<Esc>:AutoComment<CR>
noremap cp yap<S-}>p
" Toggle set paste and nopaste with \n "
set pastetoggle=<leader>z
" Awesome toggle vim/shell with ctrl+d "
map <c-d> :sh <cr>
" Save files with Leader + s "
nnoremap <leader>s :w<cr>
inoremap <leader>s <C-c>:w<cr>
" Quit files with Leader + q "
nnoremap <leader>q :q<cr>
inoremap <leader>q <C-c>:q<cr>
noremap <leader><space> :noh<cr>:call clearmatches()<cr>i<Esc>l
" Visual Mode"
" Mapping to comment the line "
vmap <silent> // :s/^/\/\//<CR>

:map <F2> :set filetype=c<cr>i/**<cr>This program does stuff. File template description goes right about here.<cr>So many descriptors. It truly never ends.<cr>Author - Sean Wallace<cr>Version - 1<cr>/<cr>#include <stdio.h><cr>#include <stdlib.h><cr>#include <unistd.h><cr>#include <math.h><cr><cr>/**<cr>This is the main method.<cr>/<cr>int main() {<cr><cr>return 0;<cr><bs>}<esc>kka<tab><Esc>i<tab>

:map <F6> :<cr>CC = gcc<cr>CFLAGS = -Wall -std=c99 -pedantic<cr>MAIN = a.out<cr>OBJS = part1.c part1_tests.c<cr>all : $(MAIN)<cr><cr>$(MAIN) : $(OBJS) <cr>$(CC) $(CFLAGS) -o $(MAIN) $(OBJS)<cr><cr>clean :<cr>rm *.o $(MAIN) corejk

:map <F3> :set paste!<cr>

" Spell check!
:map <F4> :set spell!<cr>

" Disable carcinogens (Bells, Whistles, Flashes)
set noerrorbells visualbell t_vb=
if has('autocmd')
  autocmd GUIEnter * set visualbell t_vb=
  endif

" Map uppercase typo variations of W, Q, and WQ properly
command! -bang -range=% -complete=file -nargs=* W <line1>,<line2>write<bang> <args>
command! -bang Q quit<bang>
command! Wq wq
command! WQ wq

nnoremap <Leader>c :w !pbcopy<CR><CR>
inoremap <Leader>c :w !pbcopy<CR><CR>

nnoremap <Leader>v  !pbpaste<CR><CR>
inoremap <Leader>v  !pbpaste<CR><CR>
set viminfo='20,<15000

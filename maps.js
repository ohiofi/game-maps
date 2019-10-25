/*

MAP SYMBOLS:
r : rock
c : cliff
g : tall grass
G : gravestone/tombstone
t : small tree
T : big tree
+ : dead tree
k : kitty
^ : roof shingles
= : brick
0 : door to level 0, the player always spawns at (1,1)
1 : door to level 1, the player always spawns at (1,1)
2 : door to level 2, the player always spawns at (1,1)
3 : door to level 3, etc...

*/
let maps = [
  [
    // begin world 0
    [
      // world 0 level 0, grass background tile

      "rrcccccccccccc+t+ ++T++  +++ ++T+ T+++ ++T+",
      "r   g   gT  ++   +Tg   ++T  + g  + gT +  gr+",
      "r     k    tvv rvv  g    +G   G  gGgg G+g t",
      "r t  t t k  t          + g   +   g       t",
      "r g t  gt  t+ gr r g    + G  gG   G  + g  +",
      " r   t T g  ++  t g    g   +    +  T  G   ^^^ ",
      "r  t    t  gt gr    g    g+gg G  +Gg  +g ^^^^^",
      "r t t^   +   gT  g       g    g+  g  +  g=0=0=",
      "r   ^^^     gt r      gTg  + gG + G   g t=====",
      "r T^^^^^   ^^^  g   g  ^^^    g      g  g==0==",
      "r t=0=0=  ^^^^^r g   g^^^^^ g  ^^^     gr t",
      "r t=====  =====    rrr=====rg ^^^^^    g   + g",
      "r  =1===  ==1==r r rrr==0==g  =====g   t g  t",
      "r  g     g      cccc2ccccc g  ==0==      g   T    gr",
      "gcccccccccccccc      g     g  tg t Tgt     gt",
      "t   g  T g       g       g  +t  gt+ g Tg  tg t +t g Tg",
      " t g    g    T g       gr g   g++g  t g tgtg  tg t",
      "t      g   g        g  g  t+g t gt gtgt  gt   g   T",
      " Tg   g Tg    g   g   g tg  +tg t gT    gT   g Tg tg",
      " r g    g    g   g      g   gt  g +t gt  gtT g+ Tg t",
      "T g    g      g   Tg   gg   Tg    g  t+   g   g   gT",
      " t   g   g   gg      g  g   g    g  T   g   T   g t",
      " gt g    g  T    g     g   g   tg T  gT g T   g  t",
      "g  tcccc ccc ccccc   gTrrg  t g  t g +++T  g   gT+",
      " g  TrrTT    T +T cccc   +++ +++t +++   +++++T++"
    ],

    [
      // world 0 level 1, cave background tile
      
      "==================================",
      "=     =         =     =   =   =0=",
      "=         =     =         =     =",
      "=     =   =     =     =   =     =",
      "=== ========== ==== === ===== ====",
      "=     = =1=     =     = =1=     =",
      "=     =   =           =   =     =",
      "=     =   =     =     =   =     =",
      "== ===== ====================== =",
      "=     =         =         =     =",
      "=     =   =     =     =   =     =",
      "=     =   =           =   =     =",
      "==== === ============== === =====",
      "=     =   =           = =2=     =",
      "=     =   =     =     =   =     =",
      "=         =     =     =   =     =",
      "== =========== ==== =========== ==",
      "=     =         =     =         =",
      "=         =     =         =     =",
      "=     =   =     =     =   =     =",
      "==================================",
    ],
    [
      // world 0 level 2, sand background tile

      " ====================================r============",
      "=                        r            r           =",
      "========= r===========r =========== r=  ==========",
      "=                                                 =",
      "=== ======r===== =================== ==r =========",
      "=        r  r    r r    r             r   r    r",
      "=          r     r  r    r   r r r r  r   r    r",
      "=         r     r r    r             r   r    r",
      "==+  +== r  r  r     r    r r r r r rr   r  r   r",
      "=+  +==   r  r r   r                  r   r  r   r",
      "==+  +==   r r  r   r rr   r r rr   r  r   r  r   r",
      "==+  +==  r   r  r   r   r  r r  r  r   r   r  =   r",
      "==+  +==   r =  r   r rr   r r rr   r  r   r  ===   r",
      "==+  +==  r ===  r   r   r  r r  r  r   r  r =====   r",
      "=+  +==    =====  r  r   r r     r    r  r  =======   r",
      "==+  +==  =======  r r  r r   r   r   r  r             r",
      "=+  +==    r r  r r  r   r   r r   r   r  r    r  r   r",
      "==+  +==r r r  r   r  r r   r   r   r   r  r    r  r r",
      "=+  +====  r r  r  r   r   r   r r   r   r  r    r    r",
      "+    +====r   r r   r r   r   r   r   r   r  r    r  r",
      "= =========r r   rr  r   r   r  =  r   r   r  r  r   r",
      "+   +=====r   r    r  r     r  ===  r    r   r  r   r",
      "==+  +===  r r r  r    r   r  =====  r  r   r  r   r",
      "=+  +===  r  r  r  r   r  r  =======   r r r  r     r",
      "==+  +==   r  r  r  r  r r  ====3====rr  r  r    r   r",
      "=+  +===  r  r  r  r  rr  r  r      r      r    r   r",
      "==+  +== r    r  rr  r  r  r  r    r    r r    r   r",
      "=+  +===  r  r  r  r  r  r  r     rr r r   r  r   r",
      "==+  +== r    r  r  r r  r   rr rr  r   r r    r   r",
      "=+  +===  r  r  r  r   r  rr   r   r r r   r  r     r",
      "==+  +== r    r  rr   r   r rr  r  r   r  r    r   =",
      "=+  +===  r  r  r  =   r   r  r  r  r      r  r   ===",
      "==+  +== r  r  r  ===   r   r  r   r   rr r  r   =====",
      "=+  +==   r   r  =====   r   r  r r   r  r  r   =======",
      "==+  +== r   r  =======   r   r r  r   r  r  r   r",
      "=+  +==   r r   r    r   r  r r   r   r  r  r   r",
      "==+  +== r   r   r    r    r     r   r  r  r   r",
      "==        r   r   r    rrrr rrrrr  rr  r  r   r",
      "===          r     r       r     rr   r  r   r",
      "==== ========= ========= === ======r  r= =============",
      "===                                  r             ===",
      "=1================================r=  r====== ======2=",
      "=                                                    =",
      " ==================================r===r=============",
    ],
    [
      // world 0 level 3, cave background tile
      
      "=====================================================================================================",
      "=     =   =     =   =   =             =     =     =     =         =   =       =     =       =       =",
      "= === = = = === = === = = = ========= = === = === = = = = ======= = = === === ===== = ======= ===== =",
      "= =   = = = =   =     =   = =       = =   =   = =   = =   =       = =     =       = = =       =     =",
      "= = === = === ============= = ===== = === ===== ===== ===== ================= = = = = = ======= =====",
      "= =   = =   = =     =         =     = =   =   =       =   =     =     =     = = = = = = =       =   =",
      "= === = === = ===== = =============== === = = ========= = ===== === === === = = = = = = = ======= = =",
      "=   = =   =       =   =     = =    k  =   = =     =     =   =   =       =   = = = = =   =   =   = = =",
      "=== = === === === ========= = = ======= === === = = ======= = === = ===== === = = = = ===== = = = = =",
      "= = = = =   = =   =   =         =       =   = = = =  0  =   =     =     = =   = =   =   =   = = = = =",
      "= = = = ===== = === = = ========= ========= = = = ===== = ===== ===== === = === ======= = === === = =",
      "=   =   =   = = =   = = =         =       = =   = =     =     = =   = =   = = =       = =   =     = =",
      "=      == = = = = === = = = ======= ===== === === = === ======= = = = = === = ===== = = === ======= =",
      "=  = =  = =   =   =   = = = =     = =   =   = = = = = = =       = =   = = = =   =   = =   =     =   =",
      "======= = ========= === = === = = = === === = = = = = = = ======= ===== = = === = === = = ===== = ===",
      "=     = = =   k   = =         = =   =     = = = = =   =   =   = = =   = = = = =   =   = =     = = = =",
      "= === = = = === = = = = ======= ===== ===== = = = ========= = = = = = = = = = === = ========= = = = =",
      "=   =   = = =   = = = =       =   = = = 1 = =   = =   =     = =   = =     = = =   = =         =   = =",
      "=== ===== = = === = = ===== = === = = = = = ===== = = = ===== ======= ===== = = === = ============= =",
      "=   =     = = =   =   =     = =   =     = = =       = =     =   =   = =     = = =   =         =     =",
      "= = = = === = === ===== ===== = === ======= = ================= = = = = ===== = = =========== = === =",
      "= =   =     =   =   =   =     =   = =       =     =       =   = = = =   =   = = = =   =   =   = =   =",
      "= ============= === = =========== = ======= = ===== ===== = = = = ========= = === = = = = = ===== ===",
      "=     =       =   = =    2  = =   =   = =     =   =   =   = = = =     =   = =   = = = = =       = = =",
      "===== = ===== = = ======= = = = ===== = = = === = === = === = = === = = = = === = === ========= = = =",
      "=     = =     = =         =   =     =     =     =     =     = =   = = = =   = = = =   =   = =   = = =",
      "= ======= ===== ============= ===== ============= =========== === = = = ===== = = = === = = = === = =",
      "= =     =   =   =   =       = =   = =   =     =   =     =     =   = = = =     = = = = = =   = =   = =",
      "= = === === ===== = = ======= = = = === === = ===== === = ===== ===== = = ===== = = = = ===== = = = =",
      "= =   =   =     = = =         = = =     =   =     =   = = =   = =4  = = =       =   =       = = =   =",
      "= = ===== ===== = = ============= ======= ======= ===== = = = = === = = ===== = ===== ===== = = =====",
      "= =   =       = = = =     =     = = =   = =     =     =   = =   =   = =     = =     =     = =   =   =",
      "= === ========= === = === = === = = = = = = === = === = === ===== === ===== ===== = = ===== = === = =",
      "=   = =   =     =     =   = =   = =   =   = =   =   = =   = =   =   = =   =   =   = = =   = =   = = =",
      "=== = = = = ===== = ===== = ===== = ======= = = === = === = = = === = = = === ===== === = = === = = =",
      "=   =   =   =     = = =   =   =   =       = = = = = =   =     =     = = =               =       = = =",
      "= ======= ========= = = ===== = ======= = = = = = = === = = ===== === === ========= ======= ======= =",
      "= =     = =   =     = =     = =         = = = =   = =   = = =     =     = =     = =   = =   =       =",
      "= = === = = = = = === ===== = =========== = = ===== ===== = ======= = = = = === = === = = === =======",
      "= =   = = = =   = =   =     =           =   = =   =       =   =   = = =       =   =   =   =         =",
      "= === = = = = === = = = ======= ======= = === === =========== === = = ============= ========= ===== =",
      "=     = = = =   = = =         = =       =   =   =   =       =   =   =   =     = =   =   =       =   =",
      "======= = = ===== = =========== = ======= ===== === === ======= ======= = === = = = === = ======= ===",
      "=       = =   =   =     =     = = =     = =     = =   =   =   =   =     =   =     =       =     =   =",
      "= = ===== = === = ======= = = = = = === === = === === === = = === = = ===== =========== === === === =",
      "= = =   = =   = = =   =   = = = =   =   =   =     =   = = = =   =   =     =   =     =   =   =       =",
      "====================================================================================================="
    ],
    [
      // world 0 level 4
      "rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",
      "r         k                                                     rr",
      "rrrrrrrrrrrrrrrrrrrrrrr1rrrrrrr2rrrrrr4rrrrrr3rrrrrrrrrr   rrrrrrr",
      "rr                                  k                           rr",
      "rrrrrrrrrrrrrrrrrrrrrrrr    rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",
      "rr                                   k                          rr",
      "rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr     rr",
      "rrrr  rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr rrrrrrrrrrrrrrrrrrrr rr",
      "rrrrrrrrrr1rrrrrrrr rrrrrrr1rrrrrrrrrrrrrrr1rrrrrrrrrrrrrrrrrrr rr",
      "rr                     k                                        rr",
      "rrrrrrrrrrrrrrrrrrr1rrrrrrrrr2rrrrrrrrrrr1rrrrrrrrrrrrrrrrrrr   rr",
      "rr      k                                                       rr",
      "rrrrrrrrr5rrrrrrrrrrrrrr3rrrrrrrrrrrrr2rrrrrrrrrrrrrr1rrrrrr4rrrrr"
    ],
    [
      "rrrrrrrccrrrrrrrgggggggggtggggggrrrrrrrrrrrrrrrrrrr============T",
      "T                                      rrrrrrrrrr           k  r",
      "T rrrrrrrrrrrcccrrrrrrrrrrrrrrrrrrrr               rrrrrrrrrrrrr",
      "T                                            k                  ",
      "G   rrrrrrrrrrrrrrrrrrrrrrrrr1rrrrrrrrrrrrrrr^^^rrrrrrrrrrrrrrrr",
      "=                                   ggggggg        gggggggg  k  ",
      "=====rrrrrrrrr=  ==============================  ===========  ==",
      "0                                                               ",
      "t   ==========   ccccccccccccccccccccccccccggggggggggT          ",
      "T   k t gg       g t   k   t     k     T        k    ggTTT      ",
      "T     t            t      t          t                          ",
      "T                                          k                    ",
      "G   rrrrrrrrrrrrrrrrrrrrrrrrr1rrrrrrrrrrrrrrr^^^rrrrrrrrrrrrrrrr",
      "=                                   ggggggg        gggggggg  k  ",
      "=====rrrrrrrrr=  ==============================  ===========  ==",
      "0                                                               ",
      "t   ==========   ccccccccccccccccccccccccccggggggggggT          ",
      "T                                                               ",
      "rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr"
    ],
    [
      // world 0 level 6
    ],
    [
      // world 0 level 7
    ],
    [
      // world 0 level 8
    ],
    [
      // world 0 level 9
    ]
  ], // end world 0
  [
    // begin world 1
    [
      // world 1 level 0
    ],
    [
      // world 1 level 1
    ],
    [
      // world 1 level 2
    ],
    [
      // world 1 level 3
    ],
    [
      // world 1 level 4
    ],
    [
      // world 1 level 5
    ],
    [
      // world 1 level 6
    ],
    [
      // world 1 level 7
    ],
    [
      // world 1 level 8
    ],
    [
      // world 1 level 9
    ]
  ] // end world 1
];

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
      // world 0 level 5
      "rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",
      "r                            kTTTT                               TTTG          kr",
      "r                             TTTT                               TTT            r",
      "rTTTTTTTTTTTTTTTT     TTTT    TTTT     TTTTTTTTTTTTTTTTTTTT      TTTk           r",
      "r           kTTTT     TTTT    TTTT     TTTTTTTTTTTTTTTTTTTT      TTTTTTTTTTTT   r",
      "r            TTTT     TTTT    TTTT     TTT k    TTTT             TTTTTTTTTTTT   r",
      "r    TTTTTTTTTTTT     TTTT    TTTT     TTT      TTTT               TTTT   TTT   r",
      "r                     TTTT    TTTT     TTT      TTTT               TTTT   TTT   r",
      "r                     TTTT    TTTT     TTT                         TTTT   TTT   r",
      "rrTTTTTTTTTTTTTTTTTTTTTTTT    TTTT     TTT              TTTT       TTTT   TTT   r",
      "rrTTTTTTTTTTTTTTTTTTTTTTT     TTTT     TTT              TTTT       TTTT   TTT   r",
      "r                             TTTT     TTTG            kTTTT       TTTT   TTT   r",
      "r                   TT        TTTT     TTTTTTTTTTTTTTTTTTTTT       TTTT   TTT   r",
      "rTTTTTTTTTTTTT      TT                 TTTTTTTTTTTTTTTTTTTTT       TTTT   TTT   r",
      "rG        kTTT      TT                                    TT       TTTT   TTT   r",
      "r          TTT      TT                                    TT       TTTT   TTT   r",
      "r          TTT      TT k                TTTT              TT       TTTT         r",
      "rk         TTT      TTTTTTTTTTTTTTTTTTTTTTTT              TT       TTTT         r",
      "rTTT       TTT                                            TT       TTTT         r",
      "rTTT       TTT          k               +          k      TT       TTTT         r",
      "rTTT       TTT                                            TT       TTTT   TTTTTTr",
      "rTTT       TTTTTTT                                        TT       TTTT   TT   Gr",
      "rTTT       TTTTTTT      TTTT      TTTTTTTTTTTTTTTTTTTTTTTTTT       TTTT   TT    r",
      "rTTT                    TTTT                                       TTTT   TT    r",
      "rTTT                    TTTT                                       TTTT   TT    r",
      "rTTTTTTTTTTTTTTTTT      TTTT                                       TTTT   TT    r",
      "r              TTT      TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT      TTTT   TT    r",
      "r              TTT      TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT       TT    TT    r",
      "r                                                                               r",
      "rTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT                                              r",
      "r    k    TTT^^^^^^TT   TTTTTTTTTT            TTTT    TTTTTTTTTTTTTTTTTTTTTTTTTTr",
      "r k  G  k TTT======TT                         TTTT    TTTTTTTTTTTTTTTTTTTTTTTTTTr",
      "r         TTT==0===TT                         TTTT                       TTTk  Gr",
      "r   TTTTTTTTT      TTTTTTTTTTTTTTT            TTTT                       TTT    r",
      "r   TTTTTTTTT      TTTTTTTTTTTTTTT            TTTTTTTTTTTTTTTTTTTTTT     TTT    r",
      "r                                             TTTTTTTTTTTTTTTTTTTTTT     TTT    r",
      "r                                                                               r",
      "rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",
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

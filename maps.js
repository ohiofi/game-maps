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
4 : door to level 4, etc...
5 : door to level 5, etc...
6 : door to level 6, etc...

*/
let maps = [
  [
    // begin world 0
    [
      // world 0 level 0, grass background tile

      "rrcccccccccccc+t+ ++T++  +++ ++T+ T+++ ++T+",
      "r       gT  ++   +Tg   ++T  +    + gT +  gr+",
      "r     k    tvv rvv       +G   G  gGgg G+g t",
      "r t  t t k  t          +     +           t",
      "r   t  gt  t+ gr r      + G  gG   G  +    +",
      " r   t T    ++  t          +    +  T  G   ^^^ ",
      "r  t    t  gt gr         g+gg G  +Gg  +g ^^^^^",
      "r t t^   +   gT               g+     +  g=0=0=",
      "r   ^^^     gt r      gTg  + gG + G     t=====",
      "r T^^^^^   ^^^         ^^^              g==5==",
      "r t=0=0=  ^^^^^r     g^^^^^    ^^^     gr   t",
      "r t=====  =====    rrr=====rg ^^^^^        + g",
      "r  =1===  ==2==r r rrr==3==g  =====g   t    t",
      "r        g      cccc2ccc      ==4==          T    gr",
      "gcccccccccccccc      g     g  tg t Tgt     gt",
      "t   g  T         g          +t  gt+   Tg  tg t +t   Tg",
      " t           T         gr     g++g  t   tgtg  tg t",
      "t                         t+g t gt gtgt  gt       T",
      " Tg     Tg              tg  +tg t gT    gT     Tg tg",
      " r                          gt    +t gt  gtT g+ Tg t",
      "T                 Tg   gg   Tg       t+           gT",
      " t           gg                     T       T     t",
      " gt         T                  tg T  gT   T      t",
      "g  tcccc ccc ccccc   gTrrg  t    t   +++T      gT+",
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
      // world 0 level 4, by https://github.com/hgcassiopeia
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
      // world 0 level 5, by https://github.com/gersongams
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
      "rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr"
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

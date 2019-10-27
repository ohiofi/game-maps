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
      "r T^^^^^   ^^^         ^^^              g==6==",
      "r t=0=0=  ^^^^^r     g^^^^^    ^^^     gr   t",
      "r t=====  =====    rrr=====rg ^^^^^        + g",
      "r  =1===  ==2==r r rrr==4==g  =====g   t    t",
      "r        g      cccc3ccc      ==5==          T    gr",
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
      // world 0 level 6, by https://github.com/Grigory57
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
      // world 0 level 7
      "ccccccccccccccccccccccccccccccT6Tcccccccccc5cccccccccccccccccccccc",
      "c  Tgggggggggggggggg       TTT   TTT             ggggggggggggggg c",
      "c                            T   T                               c",
      "cr              ^                   k            ^               c",
      "c        ^bbbbbbbb                               bbbbbbbbb^      c",
      "cr              b                     k           b              c",
      "c               b                                 b              c",
      "c               b                                 b              c",
      "cTt             bbbb                           bbbb              c",
      "crr                 b                          b                 c",
      "cr                  b                          b                 c",
      "cr      k           b                          b                 c",
      "ct                  b                          b                 c",
      "ctt                 b                          b   T             c",
      "cttt      k         b                          b                tTc",
      "crr                                                           rrrc",
      "ccccccc1ccccccccc                   k            ccccccccc4ccccccc",
      "                c                                c               c",
      "                c                           k    c               c",
      "                c                                c               c",
      "                2                                3               c",
      "                c                                c               c",
      "                c            k                   c               c",
      "                cgggggggg              ggggggggggc               c",
      "                cTt         T     T  T         tTc               c",
      "rrrrrrrrrrcccccccccccccccccccTT8TTcccccccccccccccccccccccrrrrrrrrrr"
    ],
    [
      // world 0 level 8 sand background tile, by https://github com/ejilee
      "=====================================^^^^^^^========^^^=======gg   ",
      "=    gtT T gT tT ttTttT r Tgrrrrr ttT=======Tgtggggt===gTkTrTrtt   ",
      "=   grT gtTg TTttTT rTttTgtgrwwwrg tg=00==0=gggggggg=0=ggrt+tTtrtg ",
      "=g  tTTT T rtgttT tTrtgTt g rwwwr kgg=00====ggg^gg      gttrt+T g  ",
      "= p  tgrTgrTgtrTtT t Trg t  krpr  g g====tgggg^^^rrrrrrrrrtgTTTT t ",
      "= p g  t gt kt  t  t gt   k   p k  k    g  ggg===rT    ++rgtTr Tg t",
      "= p                           p          g g g=0=r  G G  rgTtT+rtt ",
      "=gppppppppppppppppppppppppppppppppppp     ^^^^=0=r   k   rTrTT T T ",
      "= g  g    g p                 p k   pp   g=======r G G G rtTT+t+T  ",
      "=gg g  ggg  p   ^^^^^^      k p   k  ppg +t======r       rgtTTtTTgt",
      "=Tgg g g   gp  ^^^^^^^^   k   p       ppgr=1===2=rrr   rrrTTrT+T+  ",
      "=gggg g g g p  ========     k p        pppppppppkg t p t trtTTTtTT ",
      "=^^gggkgg   p  =000=33=       p              p       p    Tt+T T   ",
      "^^^^gggggg gp  =000=33=    gg p gg          kp       p     TTtT+T+g",
      "====ggg g g p  =====33=   trr p rrt          ppppppppp  g rTr gTTg+",
      "====gg^ggg  p        p   Twww p wwwT     r   p           gttTTtTt +",
      "=00=g^^^g g pppppppppp  twww     wwwt   k    p        g rggTT T+ + ",
      "=00=^^^^^g  p          gwww  g g  www        p      ^^^^^+t tT+T+ +",
      "====^^^^^^g p           www   k   www        pg g  ^^^^^^^+TTg tT  ",
      "==========  p         ggwwwg k k gwwwg   g   p     =======rTT+tTTt ",
      "==========  p   g T gggt+wwwg   gwww+tgg gT gppg g =======tgTgTT T ",
      "=====444==g p    gggtgT+++www   www+++Tgtggg  pp  g==555==tTgTtT+rt",
      "=====444==g p  g gtrTr+++++rr999rr+++++trrtgg gppgg==555==TgTtT+gT ",
      "rr    p     p       rrcccccccc ccccccccTTTgg    ppppppppgtT+tTT t+T",
      "r T k ppppppp      r  rccccccc  cccccccrTg          g gggtTgTT T   ",
      "r           p        r  rcccccc  cccccTtgg   ^^       gktTgTtT+  gr",
      "rrrr      r p             cccccc    cctgg   ^^^^     g gggTtT+TTr T",
      "rwwwrr      p      k       ccc6cccc  cg  g ^^^^^^      g rgtTT+t+r ",
      "rwwwwwr     pp     p    k   ggggcccc c g  ^^^^^^^^    g ggggtTTtTtt",
      "rwwwwwwr     pp    p    p    T Ggcc  cg  ^^^^^^^^^^    gg gTTrTtT+ ",
      "rwwwwwwr      pp   p    p     k  cc cc  ^^^^^77^^^^^ g g g rtTTTtTT",
      "rww gwwwr  g   pppppppppppppp    c  cc  ^^^^7777^^^^ gggg gTt+T Tr ",
      "rw k  wwr gt     p    p    g  g gc ccg g^^^^7777^^^^g g ggtgTTtT+T+",
      "rw Tgg wwrgg g g p g  p  g   g t c ccgg g  +g  g+      g gTtT+rt++ ",
      "rww   wwwr Tgtgg kg g p   gggTggcc cckg  g    k    g ggrtTTgTt+TrTr",
      "rrwwwwwwwrtgtgg g g   kg tgTtrrccc     g  g      g  g gTt+T tTTtT+T",
      "rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrcccccrg gggg  grrg gg gg ggttT+Tt+t++",
      "ccccccccccccccccccccccccccccccccccrrrrrgrggrrr rgg grtgTTr rTT+ttrT",
      "ccccccccccccccccccccccccccccccccccccrrrrrrrrccccrtrtgT+t+tTt+r+Tr+T"
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

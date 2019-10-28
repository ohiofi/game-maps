/*

MAP SYMBOLS:
= : brick
c : cliff
g : tall grass
G : gravestone/tombstone
k : kitty
p : path/cobblestone
r : rock
^ : roof shingles
t : small tree
T : big tree
+ : dead tree
w : water
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

      "rrcccccccccccc+t+ ++T++  +++ ++T+ T+++ ++T+ ^^^==========================",
      "r       gT  ++   +Tg   ++T  +    + gT +  gr+^^^ggggggggg             T",
      "r     k    tvv rvv       +G   G  gGgg G+g   ===          tTtT   TtTTtTt",
      "r t  t t k  t          +     +              =7=   tT   ttT tTt   tTTtTT",
      "r   t  gt  t+ gr r      + G  gG   G  +       ppp  TtT    TtTt   TTtTtTTtTT",
      " r   t T    ++  t          +    +  T  G   ^^^ gp ttT   ttTTtT  TtTTtTT",
      "r  t    t  gt gr         g+gg G  +Gg  +g ^^^^^ p TtTt    ^^^   tTtTTtTT",
      "r t t^   +   gT               g+     +  g=0=0= p  t tT   ^^^    tTt",
      "r   ^^^     gt r      gTg  + gG + G     t===== p tTT     ===    TTtTt",
      "r  ^^^^^   ^^^         ^^^              t==6== p  TtT    =8=   TtTt",
      "r  =0=0=  ^^^^^r     g^^^^^    ^^^     gr  ppppp   tTTt  pp T   TtTT",
      "r T=====  =====    rrr=====rg ^^^^^        +gg pg  Tt  ppp tTTT   tTtTt",
      "r T=1===  ==2==r   rrr==4==g  =====g   t    t  p  TTtTtp  TTtTTtT   tTT",
      "r   pppppppppppppccc3cccpppp  ==5==          T pp grT  pTtTtTTt    TT",
      "gccccccccccccccgpppppppppggp  tgpt Tgt     gt   p  TTTtp  TtTTtTt   TtTT",
      "t   g  T         gg gg     p+tpppt+   Tg  tg tggpppppppp tTtT+T TtTTtT",
      " t           T         gr  pppp++g  t   tgtg   g gtgtgtTtTTtTTtTtTtT",
      "t                         t+g t gt gtgt  gt  +   TTTtTtT+T TtTTtTtTTtTtTTtT",
      " Tg     Tg              tg  +tg t gT    gT     Tg T+T TtTtgTtTtTtTtT+T T",
      " r                          gt    +t gt  gtT g+ Tg tTTtTtTTtTtT+T TtTTtT",
      "T                 Tg   gg   Tg       t+           gT+T TtTTtTtTtTtTTtTtT",
      " t           gg                     T       T     tT tTTtT tTTtTtTtTTtT",
      " gt         T                  tg T  gT   T      TTtTtTTtTtTTtTtTtTTtT",
      "g  tcccc ccc ccccc   gTrrg  t    t   +++T      gT+TTtTtTTtTtTTtTtTTtTTtT",
      " g  TrrTT    T +T cccc   +++ +++t +++   +++++T++tTtT+T TT+T TtTTtTTT tTTT"
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
      "=================================="
    ],
    [
      // world 0 level 2, sand background tile

      " ====================================r=============",
      "=                        r+           r            =",
      " ======== r===========r =========== r=   ==========",
      "=                                                 +=",
      " == ======r===== =================== ==r  =========",
      "=        r  +    r r    r             r   r    r",
      "=          r     r  +    r   r r rrr r  +   r    r",
      "=         r     r r    r               r   r    r",
      "==+  +== r  +  r     r    r r r r r r  +   r  +   r",
      "=+  +==   r  + r   r             r   r  r   r  r   r",
      "==+  +==   r r  +   r rr   r r r  +   r  +   r  r   r",
      "==+  +==  r   r  +   r   r  r r r  +  r   r   r  =   r",
      "==+  +==   r =  r   r rr   r r r r    r  +   r  ===   r",
      "==+  +==  r ===  r   r   r  + r   r   r   r  + =====   r",
      "=+  +==    =====  r  +   r r       r   r   r  =======   r",
      "==+  +==  =======  r r  + r   r     r   r  r +           r",
      "=+  +==    r r  + r  +   r   r r r   r   r  +    r  +   r",
      "==+  +==r r r  +   r  r r   r   r r   r   r  r    r  + r",
      "=+  +====  r r  r  +   r   r   r   r   r   r  +    r    r",
      "+    +====r   r r   r r   r   r  =  r   r   r  +    r  +",
      "= =========r r   rr  +   r   r  ===  r   r   r  r  r   r",
      "+   +=====r   r    r  +     r  =====  r   r    r  r   r",
      "==+  +===  r r r  +    r   r  =======  r  +   r  +   r",
      "=+  +===  r  +  r  +   r  +  =========   r r r  +     r",
      "==+  +==   r  r  r  +  r r  =====3=====rr  +  r    r   r",
      "=+  +===  r  +  r  +  rr  +  r      + r      r    r   r",
      "==+  +== r    r  +r  +  r  +  r      +    r r    r   r",
      "=+  +===  r  +  r  +  r  +  r       rr r r   r  +   r",
      "==+  +== r    r  +  r r  r   rr r  +  r   r r    r   r",
      "=+  +===  r  +  r  +   r  +r   r rr  + r r   r  +     r",
      "==+  +== r    r  +r   r   r rr  +    r   r  +    r   =",
      "=+  +===  r  +  r  =   r   r  +  r r  +      r  +   ===",
      "==+  +== r  +  r  ===   r   r  +  r  +   rr r  +   =====",
      "=+  +==   r   r  =====   r   r  r   r   r  +  r   =======",
      "==+  +== r   r  =======   r   r  +   r   r  +  r   r",
      "=+  +==   r r   r    r + r  + r     r   r  +  r   r",
      "==+  +== r   r   r    +    r     rrr   r  +  r   r",
      "==        r   r   r    rrrr rrrrr    rr  +  r   r",
      "===          r     r       r        r   r  +   r",
      "==== ========= ========= === ======r  +=  =============",
      "===                                  r              ===",
      "=1================================r=  r======  ======2=",
      "=                                                     =",
      " ==================================r===r=============="
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
      "r         TTT==6===TT                         TTTT                       TTTk  Gr",
      "r   TTTTTTTTT      TTTTTTTTTTTTTTT            TTTT                       TTT    r",
      "r   TTTTTTTTT      TTTTTTTTTTTTTTT            TTTTTTTTTTTTTTTTTTTTTT     TTT    r",
      "r                                             TTTTTTTTTTTTTTTTTTTTTT     TTT    r",
      "r                                                                               r",
      "rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr"
    ],
    [
      // world 0 level 6, by https://github.com/Grigory57
      "rrrrrrrccrrrrrrrTTTTTTTTtTTTTTTrrrrrrrrrrrrrrrrrrr============T",
      "T                                      rrrrrrrrrr           k  r",
      "T   rrrrrrrrrcccrrrrrrrrrrrrrrrrrrrr               rrrrrrrrrrrrr",
      "T                                           k^^^                T",
      "G   rrrrrrrrrrrrrrrrrrrrrrrrr1rrrrrrrrrrrrrrr^^^rrrrrrrrrrrrr  r",
      "=                                   ggggggg  ===   gggggggg  k  T",
      "=====rrrrrrrrr=============================  =5=  ==============",
      "0                                                               T",
      "t   ==========   ccccccccccccccccccccccccccggggggggggT         T",
      "T   k t gg       g t   k   t     k     T        k    ggTTT      T",
      "T     t            t      t          t                         T",
      "T                                          k ^^^                T",
      "G   rrrrrrrrrrrrrrrrrrrrrrrrr1rrrrrrrrrrrrr  ^^^rrrrrrrrrrrrrrrr",
      "=                                   ggggggg  ===   gggggggg  k  T",
      "=====rrrrrrrrr=  =============================7=  ==========  ==",
      "0                                                               T",
      "t   ==========ccccccccccccccccccccccccccggggggggggT            T",
      "T                                                               T",
      "rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr"
    ],
        [
      // world 0 level 7, by https://github.com/GudeTamma
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
      // world 0 level 8
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
      "TTtTT+T TtT+T tTtTtT tT+TtT+TtT+TtT+T   tTTt^^^   ^^^ccctT+TtT+TtTt T+TtT+TtT tT",
      "t     T+TtT+TtTtTTtT+T tT+TtTT       TtT    ^^^   ^^^   T          tT tTTtT tT+TtT+TtT+TtT tT+TT tT tTTtT+TtT tTtT+TtT tT",
      "t     tTT   tT+TtTTtT+TtTTtTT               ===^^^===     ^^^^^^^^     TtT+TtTT tTtTtT tT+TtT+TtT+TtT+T tT+TtT+TtT+TtT+T tT+TtT+TtTtT",
      "Tt     Ttt T  TtT+TtT+TTtTtT                =0=^^^=0=     ==0===0=            TtT+T tT+TtT+TtTT tT tTTtT tT+TtT+TtT+TtT tTTtT tTTtT+TtT tTtT+TtT tT",
      "TT     T  TtTtTTtT+T tT+TtT                 =========     ====8===              TTtTT tT tTTtT tT+TtT+TtT+TtT tT+TT tT tTTtT+TtT tTtT+TtT tT",
      "T     TtT  TT tT+TtT+TtT+Tt              ^^^=0=0=0=0=^^^      ppppppppppppppppppppppppppppppppppppppppppppppppp tT+T tT+TtT+TtT+TtT+T tT+TtT+TtTtT",
      "t      TT TTtTTtT+TTt   Tt   ^^^^^^^^    ^^^=========^^^      p         TtT     tTt  TtT  T tT tTTtT tT+TtT   g    T+TtT tTTtT tTTtT+TtT tTtT+TtT tT",
      "T      TtT tT   TtTtTTtT+T   =0===0==    =0==0==7==0==0=      p               tTtTTtT+TtTTTtT tTTtT tTT T tt     g  T TTtT tT+TT tT tTTtT+TtT tTtT+TtT tT",
      "TT     tTTtTTt T  TTtT+T=    ===6====    =======7=======      p             TTtT+TtT+TtTT tTtTtT tTtTtT tTT TtT    gg    g      tT+TtT+T tT+TtT+TtTtT",
      "t     TtT  TTtT+TtTtT+T=        p       =      kp    k  =     p          T+TtTtTTtT+T tTT               +  tTTtt gg    gG G GgG+GTG G  TtT tTTtT tTTtT+TtT tTtT+TtT tT",
      "t=   =TTtTrt   TtTTt  T=        p        = k    p      =      p       TTtT tTTtT+T tT+T   ^        t+      +  TTt  gg +   g    g   gg   ttTTtT tTTtT+TtT tTtT+TtT tT",
      "T=   =tT   TtT+Tt   T+T=        p       T ===== p ===== T     p    T+TtT+TtTT tTtttT+Tt  ^^^        Tt   +      +      G gG  G  G  G  G  g  TtT+TtT+T tT+TtT+TtTtT",
      "t=   =T tT+TtTtT TtT+TT=  T     p               p             p TtTT tT+TtT+T tT tTTtTt ^^^^^        tT      +T  +  g+       gg  + g   + gg tT+TtT tTtT+TtT tT",
      "T=    =================         ppppppppppppppppppppppppppppppp+TtT+TtTT tTTtT tT+TtT+T =====         TtT  +      T+G G G+G G G G G Gg   +  TtT tTtT+TtT tT",
      "T=                                                        TtT+TtTT tTtTtT+TtT+TtT+TtT+T =0=0=          TTtT   +   g    +   +    g   + gg   TT tT+TtT+TtTtT",
      "T=                                   t  tTTtTT tTtT  T+TtTTtT+TtTTtT+TTtT+TtT+TtTTtTTtT =====          tTtTtt  g +   G  G  G  G  G+G   +  tT+TtT+TtT+T tT+TtT+TtT+TtT+T tT+TtT+TtTtT",
      "tT==================================T tTtT+TtT+TTtTtTTtT+T tT+TtT+T tT tTTtT tT+TtTTtTT =0=0=          TtTTtT+T    g  gg   +  g  7   g   tT tTTtT+TtT tTtT+TtT tT",
      "tTTtTT tT  TtT  tTT  +TtT   +TtT  tTT tTtTtT tT+TtT+TtT+TtT+TtttT+TtT+TtT+T+T T+TtT+TTt =====          tTtTtTTtTT  +g G G G G G+G Gg    TTtT+TtTtTtT",
      "TTtT+TTtT+TtT tTtTtT tT+TtT+TtT+TtT+T   tTTt   ccctT+TtT+TtTTtT+TtTTtT+TtTTtT+TtT+TtTTtT==①==         T+TtTTtTtTTtt  +   gg  +   g    TTtT+TTtT+TtT tT",
      "TtT+TtTTtT+TtTTtT+TtT+TtTT tTtTtTTtTT tTtTTtT+TtTTtT+TtT+TtT+TtTT tTtTtT tT+TtT+TtT+TtTT            TtT+TtTtTTtT+T tT    G  G  G    tTTtT+TtT tT+TtT+T+T T+TtTTtT+TtTTtT+TtTtTtT",
      "tTtT+TtTTtT+TtT+TtTT tTtTtTTtTT tTtTTtT+TtTTtT+TtTTtT+TtT+TtTT tTtTtT tT+TtT+TtT+TtT+T tTT        TtT+TtTTtT+TtTT tTTtT++        TtTtT+TtTTtT+TtTtTtT",
      "TtT+TtTTtT+TtTTtT+TtT+TtTT tTtTtTTtTT tTtTTtT+TtTTtT+TtTTtT+TtT+TtTT tTtTtT tT+TtT+TtT+TtT+T tT+TtT+TtT+TtT+T+T T+TtTTtT+T tT tTTtT tT+TtT+T+T T+TtTTtT+TtTTtT+TtTtTtT",
      "tTtT+T TTtT+T TTtT+T TtT+TT tTtTtTTtTT tTtTTtT+T TTtT+T TTtT+tT+TT tTtTtT tT+T TtT+TtT+TTTtTtT+T+T TTT+T TtT+TTtT+T TTTT+T T tT+T TTT+T TtT+TTtT+T TTtT+T TtTtT",
      "tT tTTtT+T TT tTtTtTTtTT tTtTTtT+T TTtT+T TTtT+T TtT+TT tTtTtT tT+T TtT+TtT+TTT tT+T TtT+TtT+TTT+T TtT+TTtT+T TTtT+T T tT+T TTT+T TtT+TTtT+T TTtT+T TtTtT",
      "T tT+T TTtTTtTtTTtT+T TtT+TT tTtTtTTtTTttttTtTTtT+T TTtT+T TTtT+T TtT+TT tTtTtT tT+T TtT+T+T TTT tT+T TtT+T+T TTT+T TtT+TTtT+T TTtT+T T tT+T TTT+T TtT+TTtT+T TTtT+T TtTtT",
      "TtT tTT tTTtTtTTtTTtT+T TtT+TT tTtTTTtT+T TTtT+T TTtT+T TtT+TT tTtTtT tT+T TtT+T+T TTT tT+T TtT+T+T TTT+T TtT+TTtT+T TTtT+T T tT+T TTT+T TtT+TTtT+T TTtT+T TtTtT",
      "TtTtTtTtTT tTTtTtTTtTTtTtT+T TT tTtTtTtTTtT+T TTtT+T TTtT+T TtT+TT tTtTtT tT+T TtT+T+T TTT tT+T TtT+T+T TTT+T TtT+TTtT+T TTtT+T T tT+T TTT+T TtT+TTtT+T TTtT+T TtTtT",
      "TtTtTtTtTTtTtTtTtTTtTtTTtTtTtTtTT tTtTtTTtTT tTtTTtT+T TTtT+T TTtT+T TtT+TT tTtTtT tT+T TtT+T+T TTT tT+T TtT+T+T TTT+T TtT+TTtT+T TTtT+T T tT+T TTT+T TtT+TTtT+T TTtT+T TtTtT"
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

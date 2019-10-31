/*

MAP SYMBOLS:
♀ : player spawn point
= : brick
c : cliff
g : tall grass
G : gravestone/tombstone
h : hen/chicken
k : kitty
p : path/cobblestone
r : rock
^ : roof shingles
t : small tree
T : big tree
+ : dead tree
w : water
0 : door to current world level 0
1 : door to current world level 1
2 : door to current world level 2
3 : door to current world level 3
4 : door to current world level 4
5 : door to current world level 5
6 : door to current world level 6
7 : door to current world level 7
8 : door to current world level 8
9 : door to current world level 9
① : warp to world 1-0

*/
let maps = [
  [
    // begin world 0
    [
      // world 0 level 0, grass background tile

      "rrcccccccccccc+t+ ++T++  +++ ++T+ T+++ ++T+ ^^^==============9===①=======",
      "r♀      gT  ++   +Tg   ++T  +    + gT +  gr+^^^ggggggggg     p   p   T",
      "r     k   h    r         +G   G  gGgg G+g   ===  ppppppppppppppppptTTtTt",
      "r t  t t k  t      h           g            =7=  p        TttT   tTTtTT",
      "r   t  gt  t+ g  r      + G  gG   G  + ppppppppppp tT    TtTt   TTtTtTTtTT",
      " r   t T    ++  t          +    +  T  G   ^^^ gp ttT   ttTTtT  TtTTtTT",
      "r  t    t  gt g          g+gg G  +Gg  +g ^^^^^ p TtTt    ^^^   tTtTTtTT",
      "r t t^   +   gT               g+     +  g=0=0= p  t tT   ^^^    tTt",
      "r   ^^^     gt r      gTg  + gG + G     t===== p tTT     ===    TTtTt",
      "r  ^^^^^   ^^^         ^^^              t==6== p  TtT    =8=   TtTt",
      "r  =0=0=  ^^^^^r     g^^^^^    ^^^     gr  ppppp   tTTt  pp T   TtTT",
      "r T=====  =====    rr =====rg ^^^^^        +gg pg  Tt  ppp tTTT   tTtTtwwwww",
      "r T=1===  ==2==r  rccc==4==T  =====g   t    t  p  TTtTtp  TTtTTtT   twww",
      "r   ppppppppppppprcc3ccrp     ==5==          T pp grT  pTtTtTTt    www",
      "gccccccccccccccgpp ggg  pgg   tgpt Tgt  ppppt   p  TTTtp  TtTTtTwwwwTtTT",
      "t   g  T         ppppppppppp+tppppppppppp tpptggpppppppp tTtT+wwwtTTtT",
      " t           T    gg   gr  pppp++g  t   tg gpppppgtgtgtTtTTtwwwTtTtT",
      "t         k               t+g t gt gtgt  gT  +   T   TtT+TwwwTTtTtTTtTtTTtT",
      " Tg     Tg     h        tg  +tg t gT    gT     Tg T+T TtwwwTtTtTtTtT+T T",
      " r          h               gt    +t gt  gtT g+ Tg tTTwwwTTtTtT+T TtTTtT",
      "T              k  Tg   gg   Tg       t+           gTwwwTtTTtTtTtTtTTtTtT",
      " t   ♀       gg                     T       T     twwtTTtT tTTtTtTtTTtT",
      " gt         T                  tg T  gT   T      TwwTtTTtTtTTtTtTtTTtT",
      "g  tcccc ccc ccccc   gTrrg  t    t   +++T      gTwwTtTtTTtTtTTtTtTTtTTtT",
      " g  TrrTT    T +T cccc   +++ +++t +++   +++++T++wwtT+T TT+T TtTTtTTT tTTT"
    ],

    [
      // world 0 level 1, cave background tile

      "=================================",
      "=         =                     =",
      "=     =   =     ===========     =",
      "=     =         =         =     =",
      "=== ========== ==== === ===== ===",
      "=     = ===     =     = =4=     =",
      "=     = =3=           =r  =     =",
      "=     =   =     =     =   =     =",
      "== ===== ============== ======= =",
      "=     =         =         =     =",
      "=     =   =     =     =   =     =",
      "=     =   =           =   =     =",
      "==== === ============== === =====",
      "=     =   =           = =2=     =",
      "=     =   =     =     =   =     =",
      "=         =     =     =   =     =",
      "== =========== ==== =========== =",
      "=     =         =     =         =",
      "=         =     =         =     =",
      "=     =   =     =     =   =     =",
      "=============================♀===",
      "                            =0=  "
    ],
    [
      // world 0 level 2, sand background tile

      " =4============+=====================r=============",
      "=                        r+           r            =",
      " ======== r===========r =========== r=   ==========",
      "=                                                 +=",
      " == ======r===== ===========+======= ==r  ==== ====",
      "=        r  +    r r    +             r   r    r",
      "=          r     r  +    r   r r rrr r  +   r   r",
      "=         r     r r    r               r   r     r",
      "==+  +== r  +  r     r    r r r r r r  +   r  +   r",
      "=+  +==   r  + r   r             r   r  r   r  r   r",
      "==+  +==   r r  +   r rr   r r r  +   r  +   r  r   r",
      "==+  +==  r   r  +   r   r  r r r  +  r   r   r  =   r",
      "==+  +==   r =  r   r rr   r r r r    r  +   r  ===   r",
      "==+  +==  r ===  r   r   r  + r   r   r   r  + =====   r",
      "=+  +==    =====  r  +   r r       r   r   r  ===1===   r",
      "==+  +==  ===3===  r r  + r   r     r   r  r +           r",
      "=+  +==    r  r + r  +   r   r r r   r   r  +    r  +   r",
      "==+  +==r r  r +   r  r r   r   r r   r   r  r    r  + r",
      "=+  +====  r r  r  +   r   r   r   r   r   r  +    r    r",
      "+    +====r   r r   r r   r   r  =  r   r   r  +    r  +",
      "= =========r r   rr  +   r   r  ===  r   r   r  r  r   r",
      "+   +=====r   r    r  +     r  =====  r   r    r  r   r",
      "==+  +===  r r r  +    r   r  =======  r  +   r  +   r",
      "=+  +===  r  +  r  +   r  +  =========   r r r  +     r",
      "==+  +==   r  r  r  +  r r  =====5=====rr  +  r    r   r",
      "=+  +===  r  +  r  +  rr  +  r      + r      r    r   r",
      "==+  +== r    r  +r  +  r  +  r      +    r r    r   r",
      "=+  +===  r  +  r  +  r  +  r       rr r r   r  +   r",
      "==+  +== r    r  +  r r  r   rr r  +  r   r r    r   r",
      "=+  +===  r  +  r  +   r  +r   r rr  + r r   r   +    r",
      "==+  +== r    r  +r   r   r rr  +    r   r  +     r  =",
      "=+  +===  r  +  r  =   r   r  +  r r  +      r   +  ===",
      "==+  +== r  +  r  ===   r   r  +  r  +   rr r   +  =====",
      "=+  +==   r   r  =====   r   r  r   r   r  +   r  =======",
      "==+  +== r   r  =======   r   r  +   r   r  +   r      r",
      "=+  +==   r r   r    r + r  + r     r   r  +     r      r",
      "==+  +== r   r   r    +    r     rrr   r  +     r      r",
      "==        r   r   r    rrrr rrrrr    rr  +     r      r",
      "===          r     r       r        r   r     +      r",
      "==== ========= ========= === ======r  +=  ========== ==",
      "===                                  r             =  ==",
      " == ==============================r=  r======  =====+ =",
      "  =                                                   +",
      "   ========================== =======r===r============",
      "    =========================♀=======================",
      "     ========================0======================",
      "      =======================0=====================",
      "       ======================0====================",
      "        =====================0==================="
    ],
    [
      // world 0 level 3, cave background tile

      "=====================================================================================================",
      "=     =   =     =   =   =             =     =     =     =         =   =       =     =       =       =",
      "= === = = = === = === = = = ========= = === = === = = = = ======= = = === === ===== = ======= ===== =",
      "= =   = = = =   =     =   = =       = =   =   = =   = =   =       = =     =       = = =       =     =",
      "= = === = === ============= = ===== = === == == ===== ===== ================= = = = = = ======= =====",
      "= =   = =   = =     =         =     = =   =   =       =   =     =     =     = = = = = = =       =   =",
      "= === = === = ===== = =============== === = = ========= = ===== === === === = = = = = = = ======= = =",
      "=   = =   =       =   =     = =    k  =   = =     =     =   =   =       =   = = = = =   =   =   = = =",
      "=== = === === === ========= = = ======= === === = = ======= = === = ===== === = = = = ===== = = = = =",
      "= = = = =   = =   =   =         =       =   = = = =  0  =   =     =     = =   = =   =   =   = = = = =",
      "= = = = ===== = === = = ========= ========= = = = ===== = ===== ===== === = === ======= = === === = =",
      "=   =   =   = = =   = = =         =       = =   = =     =     = =   = =   = = =       = =   =     = =",
      "=      == = = = = === = = = ======= ===== === === = === = ===== = = = = === = ===== = = === ======= =",
      "=  = =  = =   =   =   = = = =     = =   =   = = = = = = =       = =   = = = =   =   = =   =     =   =",
      "======= = ========= === = === = = = === === = = = = = = = ======= ===== = = === = === = = ===== = ===",
      "=     = = =   k   = =         = =   =     = = = = =   =   =   =6= =   = = = = =   =   = =     = = = =",
      "= === = = = === = = = = ======= ===== ===== = = = === ===== = = = = = = = = = === = ========= = = = =",
      "=   =   = = =   = = = =       =   = = = 1 = =   = =   =     = =   = =     = = =   = =         =   = =",
      "=== ===== = = === = = ===== = === = = = = = ===== = = = ===== ======= ===== = = === = ============= =",
      "=   =     = = =   =   =     = =   =     = = =       = =     =   =   = =     = = =   =         =     =",
      "= = = = === = === ===== ===== = === ======= = ================= = = = = ===== = = =========== = === =",
      "= =   =     =   =   =   =     =   = =       =    5=       =   = = = =   =   = = = =   =   =   = =   =",
      "= ============= === = =========== = ======= = ===== ===== = = = = ========= = === = = = = = ===== ===",
      "=     =       =   = =    2  = =   =   = =         =   =   = = = =     =   = =   = = = = =       = = =",
      "===== = ===== = = ======= = = = ===== = = = === = === = === = = === = = = = === = === ========= = = =",
      "=     = =     = =         =   =     =     =     =     =     = =   = = = =   = = = =   =   = =   = = =",
      "= ======= ===== ============= ===== === ========= =========== === = = = ===== = = = === = = = === = =",
      "= =     =   =   =   =       = =   = =   =     =   =     =     =   = = = =     = = = = = =   = =   = =",
      "= = === === ===== = = ======= = = = === === = ===== === = ===== ===== = = ===== = = = = ===== = = = =",
      "= =   =   =     = = =         = = =     =   =     =   = = =   = =   = = =       =   =       = = =   =",
      "= = ===== ===== = = ============= ======= ======= ===== = = = = === = = ===== = ===== ===== = = =====",
      "= =   =       = = = =     =       =4=   = =     =     =   = =   =   = =     = =     =     = =   =   =",
      "= === ========= === = === = === = = = = = = === = === = === ===== === ===== ===== = = ===== = === = =",
      "=   = =   =     =     =   = =   = =   =   = =   =   = =   = =   =   = =   =   =   = = =   = =   = = =",
      "=== = = = = ===== = =====   ===== = ======= = = === = === = = = === = = = === ===== === = = === = = =",
      "=   =   =   =     = = =   =   =   =       = = = = = =   =     =     = = =               =       = = =",
      "= ======= ========= = = ===== = ======= = = = = = = === = = ===== === === ========= ======= ======= =",
      "= =     = =   =       =     = =         = = = =   = =   = = =     =     = =     = =   = =   =       =",
      "= = === = = = = = === ===== = =========== = = ===== ===== = ======= = = = = === = === = = === =======",
      "= =   = = = =     =   =     =           =   = =   =       =   =   = = =       =   =   =   =         =",
      "= === = = = = === = = = ======= ======= = === === =========== === = = ============= ========= ===== =",
      "=     = = =     = = =         = =       =   =   =   =       =   =   =   =     = =   =   =       =   =",
      "======= = = ===== = =========== = ======= ===== === === ======= ======= = === = = = === = ======= ===",
      "=         =   =   =     =     = = =     = =     = =   =   =   =   =     =   =     =       =     =   =",
      "= = ===== = === = ======= = = = = = === === = === === === = = === = = ===== =========== === === === =",
      "= = =   = =   = = =   =   = = = =   =   =   =     =   = = = =   =   =     =   =     =   =   =       =",
      "====================================================================================================="
    ],
    [
      // world 0 level 4, by https://github.com/hgcassiopeia
      "rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",
      "r         k                                                     rr",
      "rrrrrrrrrrrrrrrrrrrrrrr1rrrrrrr2rrrrrr0rrrrrr3rrrrrrrrrr   rrrrrrr",
      "rr                                  k                           rr",
      "rrrrrrrrrrrrrrrrrrrrrrrr    rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",
      "rr                                   k                          rr",
      "rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr     rr",
      "rrrr  rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr rrrrrrrrrrrrrrrrrrrr rr",
      "rrrrrrrrrr1rrrrrrrr rrrrrrr1rrrrrrrrrrrrrrr1rrrrrrrrrrrrrrrrrrr rr",
      "rr                     k                                        rr",
      "rrrrrrrrrrrrrrrrrrr1rrrrrrrrr2rrrrrrrrrrr1rrrrrrrrrrrrrrrrrrr   rr",
      "rr      k                                                       rr",
      "rrrrrrrrr6rrrrrrrrrrrrrr3rrrrrrrrrrrrr2rrrrrrrrrrrrrr1rrrrrr5rrrrr"
    ],
    [
      // world 0 level 5, by https://github.com/gersongams
      "rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",
      "r                            kTTTT                               TTT G         kr",
      "r                             TTTT                               TTT            r",
      "rTTTTTTTTTTTTTTTT     TTTT    TTTT     TTTTTTTTTTTTTTTTTTTT      TTTk           r",
      "r           kTTTT     TTTT    TTTT     TTTTTTTTTTTTTTTTTTTT      TTTTTTTTTTTT   r",
      "r            TTTT     TTTT    TTTT     TTT k    TTTT             TTTTTTTTTTTT   r",
      "r    TTTTTTTTTTTT     TTTT    TTTT     TTT      TTTT               TTTT   TTT   r",
      "r                     TTTT    TTTT     TTT      TTTT               TTTT   TTT   r",
      "r                     TTTT    TTTT     TTT                         TTTT   TTT   r",
      "rrTTTTTTTTTTTTTTTTTTTTTTTT    TTTT     TTT              TTTT       TTTT   TTT   r",
      "rrTTTTTTTTTTTTTTTTTTTTTTT     TTTT     TTT G            TTTT       TTTT   TTT   r",
      "r                             TTTT     TTT             kTTTT       TTTT   TTT   r",
      "r                   TT        TTTT     TTTTTTTTTTTTTTTTTTTTT       TTTT   TTT   r",
      "rTTTTTTTTTTTTT      TT                 TTTTTTTTTTTTTTTTTTTTT       TTTT   TTT   r",
      "r         kTTT      TT                                    TT       TTTT   TTT   r",
      "r G        TTT      TT                                    TT       TTTT   TTT   r",
      "r          TTT      TT k                TTTT              TT       TTTT         r",
      "rk         TTT      TTTTTTTTTTTTTTTTTTTTTTTT              TT       TTTT         r",
      "rTTT       TTT                                            TT       TTTT         r",
      "rTTT       TTT          k               +          k      TT       TTTT         r",
      "rTTT       TTT                                            TT       TTTT   TTTTTTr",
      "rTTT       TTTTTTT                                        TT       TTTT   TT    r",
      "rTTT       TTTTTTT      TTTT      TTTTTTTTTTTTTTTTTTTTTTTTTT       TTTT   TT  G r",
      "rTTT                    TTTT                                       TTTT   TT    r",
      "rTTT                    TTTT                                       TTTT   TT    r",
      "rTTTTTTTTTTTTTTTTT      TTTT                                       TTTT   TT    r",
      "r              TTT      TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT      TTTT   TT    r",
      "r              TTT      TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT       TT    TT    r",
      "r                                                                               r",
      "rTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT                                              r",
      "r    k    TTT^^^^^^TT   TTTTTTTTTT            TTTT    TTTTTTTTTTTTTTTTTTTTTTTTTTr",
      "r k  G  k TTT======TT                         TTTT    TTTTTTTTTTTTTTTTTTTTTTTTTTr",
      "r         TTT==6===TT                         TTTT                       TTTk   r",
      "r   TTTTTTTTT      TTTTTTTTTTTTTTT            TTTT                       TTT  G r",
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
      "cccccccccccccccccccccccccT6Tcccccccc5cccccccccccccccc",
      "c  Tgggggggggggggggg  TTT   TTT      gggggggggggggggc",
      "c                       T   T                       c",
      "cr              ^           k        ^              c",
      "c        ^========                  ========^       c",
      "cr              =             k      =              c",
      "c               =                    =              c",
      "c               =                    =              c",
      "cTt             =====            =====              c",
      "crr                 =            =                  c",
      "cr                  =            =                  c",
      "cr      k           =            =                  c",
      "ct                  =            =                  c",
      "ctt                 =            =    T             c",
      "cttt      k         =            =                tTc",
      "crr                                              rrrc",
      "ccccccc1ccccccccc           k        ccccccccc4cccccc",
      "                c                    c              c",
      "                c                    c              c",
      "                c                    c              c",
      "                2                    3              c",
      "                c                    c              c",
      "                c        k           c              c",
      "                cggggg         ggggggc              c",
      "                cTt    T     T  T  tTc              c",
      "rrrrrrrrrrccccccccccccccTT8TTcccccccccccccccccrrrrrrr"
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
      "=00=^^^^^g  p          gwwwg r r gwww        p      ^^^^^+t tT+T+ +",
      "====^^^^^^g p           www   k   www        pg g  ^^^^^^^+TTg tT  ",
      "==========  p         ggwwwg k k gwwwg   g   p     =======rTT+tTTt ",
      "==========  p   g T gggt+www w w www+tgg gT gppg g =======tgTgTT T ",
      "=====444==g p    gggtgT+++wwwwwwwww+++Tgtggg  pp  g==555==tTgTtT+rt",
      "=====444==g p  g gtrTr+++++rrcccrr+++++trrtgg gppgg==555==TgTtT+gT ",
      "rr    p     p       rrcccccccc9ccccccccTTTgg    ppppppppgtT+tTT t+T",
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
      "T=   =tT   TtT+Tt   T+T=        p       T ===== p ===== T     p    T+TtT+TtTT tTtttT+    ^^^        Tt   +      +      G gG  G  G  G  G  g  TtT+TtT+T tT+TtT+TtTtT",
      "t=   =T tT+TtTtT TtT+TT=  T     p               p             p TtTT tT+TtT+T tT tTT    ^^^^^        tT      +T  +  g+       gg  + g   + gg tT+TtT tTtT+TtT tT",
      "T=    =================         ppppppppppppppppppppppppppppppp+TtT+TtTT tTTtT tT+T     =====         TtT  +      T+G G G+G G G G G Gg   +  TtT tTtT+TtT tT",
      "T=                                                        TtT+TtTT tTtTtT+TtT+TtT+      =0=0=          TTtT   +   g    +   +    g   + gg   TT tT+TtT+TtTtT",
      "T=                                   t  tTTtTT tTtT  T+TtTTtT+TtTTtT+TTtT+TtT+TtTT      =====          tTtTtt  g +   G  G  G  G  G+G   +  tT+TtT+TtT+T tT+TtT+TtT+TtT+T tT+TtT+TtTtT",
      "tT==================================T tTtT+TtT+TTtTtTTtT+T tT+TtT+T tT tTTtT tT+TtTT    =0=0=          TtTTtT+T    g  gg   +  g  7   g   tT tTTtT+TtT tTtT+TtT tT",
      "tTTtTT tT  TtT  tTT  +TtT   +TtT  tTT tTtTtT tT+TtT+TtT+TtT+TtttT+TtT+TtT+T+T T+TtT+TT  =====          tTtTtTTtTT  +g G G G G G+G Gg    TTtT+TtTtTtT",
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
      // world 1 level 0, by https://github.com/emo8355
      "TtTttTtTtTTtttTTtTTttTtTtTTttTTTT",
      "t          T k T k T k T k T k tT",
      "T     t      T   T   T   T     TT",
      "T     T                        4 ",
      "t     tTtTtTtttTttttTttTtttTTttTT",
      "T     T",
      "T     T",
      "T     T",
      "T     TTtTtttTTTtTttTtTTtTttTTTTtTttTtTTtTtttTTTtTttTtTTtTttTTT",
      "t                k                                            T",
      "T     +++++++++++                    TtT                      T",
      "T                +                   TkT                      T",
      "t                 +                  ttT                      T",
      "T                  +++++++++++++++++++++++++++++++++++++++++++T",
      "T                                                             T",
      "TTtTttTtTTtTttTTTtttttTtTTtTtttTTTtTttTtTTtTttTTTTttT TtTTtTttT",
      "T                                                             T",
      "TttTTTtTttT       tTt        ttTtTt     t        tt          kT",
      "T  1 T     T      ttT       TtT        TTT      tTtT        kT",
      "T    T     T      TtT       tTT        TtT      tTtT         kT",
      "T                 TtT       TTT        TtT1     tTtTk k k k k T",
      "tTTTttttTtTtTTttTTTtT   k   TTtTTtTtTTttTTTtTTtTTtTtTTtTTTTttTT",
      "TTtTTtTtTTtTTTTtTTtTTtTtTTttTTTtTTtTTtTtTTtTTTTtTTtTTtTtTTtTTTT"
    ],
    [
      // world 1 level 1, by https://github.com/not-arzuaga

      "rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",
      "r                rrrrrrrrr        rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",
      "r                rrrrrrrrrr      rrrrrrrrrrrrrrwwwwwwwwwwwwwwwwwrrrrrr",
      "r  rrrrrrrrrrrr  rrrrrrrrrrr    rrrrrrrrrrrrrrrwwwwwwwwwwwwwwwwwrr",
      "r  rrk      rrr  rrrrrrrrrrrr  rrrrrrrrrrrrrrrrww             wwrr",
      "r  rrrrrrr  rrr  rrrrrrrrrrrr  rrrrrrrrrrrrrrrrww             wwrr",
      "r           rrr                                               wwrr",
      "rrrrrrrrrrrrrrr  rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrww             wwrr",
      "rrrrrrrrrrrrrrr  rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrww             wwrr",
      "rrr              rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrwwwwwwwwwwwwwwwwwrr",
      "rrr  rrrrrrrrrr  rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrwwwwwwwwwwwwwwwwwrrrrrr",
      "rrr  rrrrrrrrrr  rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",
      "rrr  rrrrrrrrrr        rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",
      "rrr  rrrrrrrrrrrrrrrr  rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",
      "rrr  rrrrrrrrrrrrrrrr  rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",
      "rrr  rrrrrrrrrrrrrrrr      rrrrrrrrrrr      rrrrrrrrrrrrrrrrrrrrrrrrrr",
      "rrr  rrrrrrrrrrrrrrrrrrrr                               rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",
      "rrr     G G G G G  rrrrrr  rrrrrrrrrr        rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr                      r",
      "rrr             G  rrrrrr  rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr                      r",
      "rrr     G G G G G  rrrrrr                                          pppppppppppppppppppppppppppppppp2",
      "rrrrrrrrrrrrrrrrrrrrrrrrrrrrrr  rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr                      r",
      "rrrrrrrrrrrrrrrrrrrrrrrrrrrrrr         rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr                      r",
      "rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",
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
  ], // end world 1
  [
    // begin world 2
    [
      // world 2 level 1
    ],
    [
      // world 2 level 2
    ],
    [
      // world 2 level 3
    ],
    [
      // world 2 level 4
    ],
    [
      // world 2 level 5
    ],
    [
      // world 2 level 6
    ],
    [
      // world 2 level 7
    ],
    [
      // world 2 level 8
    ],
    [
      // world 2 level 9
    ]
  ], // end world 2
  [
    // begin world 3
    [
      // world 3 level 1
    ],
    [
      // world 3 level 2
    ],
    [
      // world 3 level 3
    ],
    [
      // world 3 level 4
    ],
    [
      // world 3 level 5
    ],
    [
      // world 3 level 6
    ],
    [
      // world 3 level 7
    ],
    [
      // world 3 level 8
    ],
    [
      // world 3 level 9
    ]
  ] // end world 3
];
